import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "./common/InputField";
import { Web3AuthNoModal } from "@web3auth/no-modal";
import { AuthAdapter } from "@web3auth/auth-adapter";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";
import {
  WEB3AUTH_NETWORK,
  CHAIN_NAMESPACES,
  WALLET_ADAPTERS,
} from "@web3auth/base";
import { useDispatch } from "react-redux";
import { setWeb3Auth } from "../store/web3AuthSlice";

const chainConfig = {
  chainNamespace: CHAIN_NAMESPACES.EIP155,
  chainId: "0x1",
  rpcTarget: "https://rpc.ankr.com/eth",
  displayName: "Ethereum Mainnet",
  blockExplorerUrl: "https://etherscan.io/",
  ticker: "ETH",
  tickerName: "Ethereum",
  logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
};

const clientId =
  "BHgArYmWwSeq21czpcarYh0EVq2WWOzflX-NTK-tY1-1pauPzHKRRLgpABkmYiIV_og9jAvoIxQ8L3Smrwe04Lw";

const GradientImage = ({ src, alt, position }) => (
  <img src={src} alt={alt} className={`absolute ${position} h-1/2 z-0`} />
);

const AuthButton = ({ children, onClick, className }) => (
  <button
    type="button"
    onClick={onClick}
    className={`flex justify-center items-center gap-2 rounded p-2 w-1/2 ${className}`}
  >
    {children}
  </button>
);

const StoreButton = ({ icon, line1, line2 }) => (
  <button className="flex items-center bg-black rounded text-white p-2 space-x-2">
    <img src={icon} alt={`${line2} Icon`} className="h-6 w-6" />
    <span className="grid text-left">
      <span className="text-[10px]">{line1}</span>
      <span className="font-bold text-base">{line2}</span>
    </span>
  </button>
);

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [web3authInitial, setWeb3AuthInitial] = useState(null);
  const [provider, setProvider] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  // const [walletServicesPlugin, setWalletServicesPlugin] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    if (!web3authInitial) {
      console.log("web3auth not initialized yet");
      return;
    }
    const web3authProvider = await web3authInitial.connectTo(
      WALLET_ADAPTERS.AUTH,
      {
        loginProvider: "email_passwordless",
        extraLoginOptions: {
          login_hint: formData.email.trim(),
        },
      }
    );
    setProvider(web3authProvider);
    if (web3authInitial.connected) {
      navigate("/dashboard");
      setLoggedIn(true);
    }
  };

  useEffect(() => {
    const initWeb3Auth = async () => {
      try {
        const privateKeyProvider = new EthereumPrivateKeyProvider({
          config: { chainConfig },
        });

        const web3authNoModalOptions = {
          clientId,
          web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_DEVNET,
          privateKeyProvider,
          uiConfig: {
            appName: "W3A",
            appUrl: "https://web3auth.io",
            logoLight: "https://web3auth.io/images/web3authlog.png",
            logoDark: "https://web3auth.io/images/web3authlogodark.png",
            defaultLanguage: "en",
            mode: "dark",
            theme: {
              primary: "#768729",
            },
            useLogoLoader: true,
          },
          useCoreKitKey: true,
        };
        const web3auth = new Web3AuthNoModal(web3authNoModalOptions);

        const authAdapter = new AuthAdapter({
          adapterSettings: {
            //uxMode: UX_MODE.REDIRECT,
            buildEnv: "testing",
            loginConfig: {
              email_passwordless: {
                verifier: "w3a-email-passwordless-demo",
                typeOfLogin: "email_passwordless",
                clientId,
              },
            },
            mfaSettings: {
              deviceShareFactor: {
                enable: true,
                priority: 1,
                mandatory: true,
              },
              backUpShareFactor: {
                enable: true,
                priority: 2,
                mandatory: false,
              },
              socialBackupFactor: {
                enable: true,
                priority: 3,
                mandatory: false,
              },
              passwordFactor: {
                enable: true,
                priority: 4,
                mandatory: true,
              },
              passkeysFactor: {
                enable: true,
                priority: 5,
                mandatory: false,
              },
              authenticatorFactor: {
                enable: true,
                priority: 6,
                mandatory: false,
              },
            },
          },
          loginSettings: {
            mfaLevel: "optional",
          },
          privateKeyProvider,
        });
        web3auth.configureAdapter(authAdapter);
        setWeb3AuthInitial(web3auth);
        await web3auth.init();
        dispatch(setWeb3Auth(web3auth));
        if (web3auth.connected) {
          const web3authProvider = web3auth.provider;
          setProvider(web3authProvider);
          setLoggedIn(true);
          navigate("/dashboard");
          console.log("Already connected");
        }

        console.log("Web3Auth initialized successfully");
      } catch (error) {
        console.error("Error initializing Web3Auth:", error);
      }
    };

    initWeb3Auth();
  }, []);

  const loginWithEmail = async () => {
    if (!web3authInitial) {
      console.log("web3auth not initialized yet");
      return;
    }
    const web3authProvider = await web3authInitial.connectTo(
      WALLET_ADAPTERS.AUTH,
      {
        loginProvider: "email_passwordless",
        extraLoginOptions: {
          login_hint: formData.email.trim(),
        },
      }
    );
    setProvider(web3authProvider);
    if (web3authInitial.connected) {
      navigate("/dashboard");
      setLoggedIn(true);
    }
  };

  return (
    <div className="flex h-screen relative">
      <GradientImage
        src="/images/right-grad.png"
        alt="Left Gradient"
        position="left-0 bottom-0"
      />
      <GradientImage
        src="/images/left-grad.png"
        alt="Right Gradient"
        position="right-0 bottom-0"
      />

      <div className="flex-1 flex">
        <img
          src="/images/login-bg.png"
          alt="Daikin"
          className="h-full w-11/12 mb-3"
        />
      </div>

      <div className="flex-1 py-10 flex flex-col justify-center bg-white shadow-md font-montserrat">
        <div className="min-w-2xl mx-auto mt-6">
          <header className="mb-5 flex justify-between items-center">
            <img src="/images/logo.png" alt="Daikin Logo" className="h-8" />
            <div className="flex justify-center items-center bg-[#00B3FF] w-16 h-13 rounded-full p-1 fixed right-0">
              <img src="/images/Bot.png" alt="AI Icon" className="w-10 h-8" />
            </div>
          </header>

          <h2 className="text-2xl font-semibold mb-5">Create account</h2>

          <form className="grid gap-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4">
              <InputField
                label="Email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="flex items-center justify-between mt-6 gap-8 w-[601.93px]">
              <AuthButton
                className="bg-[#00A0E4] text-white"
                onClick={loginWithEmail}
              >
                Create account
              </AuthButton>
              <AuthButton className="bg-[#2D3748] text-white">
                <img
                  src="/images/google-icon.png"
                  alt="Google Icon"
                  className="w-5 h-5"
                />
                Sign-in with Google
              </AuthButton>
            </div>
          </form>

          <div className="flex gap-4 mt-12">
            <StoreButton
              icon="/images/icons/play-store.png"
              line1="GET IT ON"
              line2="Google Play"
            />
            <StoreButton
              icon="/images/icons/apple.png"
              line1="Download on the"
              line2="App Store"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
