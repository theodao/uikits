import React from "react";
import { useModal } from "../Modal";
import ConnectModal from "./ConnectModal";
import AccountModal from "./AccountModal";
import WrongNetworkModal from "./WrongNetworkModal";
import { Login } from "./types";

interface ReturnType {
  onPresentConnectModal: () => void;
  onPresentAccountModal: () => void;
  onPresentWrongNetworkModal: () => void;
}

const useWalletModal = (
  login: Login,
  logout: () => void,
  account?: string,
  accountData?: { totalLuaLock: string; luaUnlockAble: string },
  chainId?: number,
  unlockLua?: () => null,
  isUnlock?: boolean,
): ReturnType => {
  const [onPresentConnectModal] = useModal(<ConnectModal login={login} />);
  const [onPresentAccountModal] = useModal(
    <AccountModal
      account={account || ""}
      logout={logout}
      accountData={accountData}
      chainId={chainId}
      unlockLua={unlockLua}
      isUnlock={isUnlock}
    />
  );
  const [onPresentWrongNetworkModal] = useModal(<WrongNetworkModal />);
  return { onPresentConnectModal, onPresentAccountModal, onPresentWrongNetworkModal };
};

export default useWalletModal;
