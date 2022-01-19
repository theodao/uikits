import React from "react";
import styled from "styled-components";
import Button from "../../../components/Button/Button";
import { useWalletModal } from "../../WalletModal";
import { Login } from "../../WalletModal/types";

interface Props {
  account?: string;
  login: Login;
  logout: () => void;
  chainId: number;
  userEthBalance: number | string;
  accountData: {
    luaUnlockAble: string;
    totalLuaLock: string;
  };
  unlockLua: () => null;
  isUnlock: boolean;
}

const Web3StatusError = styled(Button)`
  width: 100%;
  align-items: center;
  padding: 8px 16px;
  border-radius: 16px;
  height: auto;
  cursor: pointer;
  user-select: none;
  :focus {
    outline: none;
  }
  background-color: #ff6871;
  color: #ffffff;
  font-weight: 600;
  :hover,
  :focus {
    background-color: #ff3541;
  }
`;

const AccountElement = styled.div`
  display: flex;
  font-size: 14px;
  flex-direction: row;
  align-items: center;
  background-color: #fbbb44;
  border-radius: 16px;
  white-space: nowrap;
  width: 100%;
  height: 100%;
`;

const BalanceText = styled.div`
  background-color: #fbbb44;
  padding: 0px 15px;
  cursor: unset;
  border-radius: 16px;
  color: #353535;
  font-weight: 600;
  display: block;
  font-size: 14px;
`;

const AccountButton = styled(Button)`
  cursor: pointer;
  z-index: 999;
  color: #353535;
  background-color: #eff4f5;
  display: none;
  :hover {
    background-color: #ffffff;
    opacity: 1 !important;
  }

  :active {
    opacity: 0.65;
  }

  @media (min-width: 400px) {
    display: block;
  }
`;
interface CurrenyMapType {
  [key: number]: string;
}

const CurrenyMap: CurrenyMapType = {
  88: "TOMO",
  89: "TOMO",
  1: "ETH",
  56: "BNB",
};

const UserBlock: React.FC<Props> = ({
  account,
  login,
  logout,
  chainId,
  userEthBalance,
  accountData,
  unlockLua,
  isUnlock,
}) => {
  const { onPresentConnectModal, onPresentAccountModal, onPresentWrongNetworkModal } = useWalletModal(
    login,
    logout,
    account,
    accountData,
    chainId,
    unlockLua,
    isUnlock
  );
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;
  return (
    <div>
      {account ? (
        <AccountElement>
          <BalanceText>
            {userEthBalance} {CurrenyMap[chainId]}
          </BalanceText>
          <AccountButton
            scale="sm"
            onClick={() => {
              onPresentAccountModal();
            }}
          >
            {accountEllipsis}
          </AccountButton>
        </AccountElement>
      ) : (
        <Button
          scale="sm"
          onClick={() => {
            onPresentConnectModal();
          }}
        >
          Connect
        </Button>
      )}
    </div>
  );
};

export default UserBlock;
