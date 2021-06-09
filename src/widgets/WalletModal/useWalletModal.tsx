import React from "react";
import { useModal } from "../Modal";
import ConnectModal from "./ConnectModal";
import AccountModal from "./AccountModal";
import WrongNetworkModal from "./WrongNetworkModal"
import { Login } from "./types";

interface ReturnType {
  onPresentConnectModal: () => void;
  onPresentAccountModal: () => void;
  onPresentWrongNetworkModal: () => void;
}

const useWalletModal = (login: Login, logout: () => void, account?: string): ReturnType => {
  const [onPresentConnectModal] = useModal(<ConnectModal login={login} />);
  const [onPresentAccountModal] = useModal(<AccountModal account={account || ""} logout={logout} />);
  const [onPresentWrongNetworkModal] = useModal(<WrongNetworkModal />)
  return { onPresentConnectModal, onPresentAccountModal, onPresentWrongNetworkModal };
};

export default useWalletModal;
