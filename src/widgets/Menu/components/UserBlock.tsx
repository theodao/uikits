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
  queryChainId: number;
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
  flex-direction: row;
  align-items: center;
  background-color: #fbbb44;
  border-radius: 16px;
  white-space: nowrap;
  width: 100%;
`;

const BalanceText = styled.div`
  background-color: #fbbb44;
  padding: 0px 15px;
  cursor: unset;
  border-radius: 16px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
`;

const AccountButton = styled(Button)`
  cursor: pointer;
  z-index: 999;
  color: ${({ theme }) => theme.colors.text};
  :hover {
    background-color: ${({ theme }) => theme.colors.backgroundAlt};
    opacity: 1 !important;
  }

  :active {
    opacity: 0.65;
  }
`;
interface CurrenyMapType {
  [key: number]: string;
}

const CurrenyMap: CurrenyMapType = {
  88: "TOMO",
  1: "ETH",
};

const UserBlock: React.FC<Props> = ({
  account,
  login,
  logout,
  chainId,
  queryChainId,
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
    isUnlock,
  );
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;
  return (
    <div>
      {account ? (
        chainId === queryChainId ? (
          <AccountElement>
            {1 && (
              <BalanceText>
                {userEthBalance} {CurrenyMap[chainId]}
              </BalanceText>
            )}
            <AccountButton
              scale="sm"
              variant="tertiary"
              onClick={() => {
                onPresentAccountModal();
              }}
            >
              {accountEllipsis}
            </AccountButton>
          </AccountElement>
        ) : (
          <Web3StatusError
            onClick={() => {
              onPresentWrongNetworkModal();
            }}
          >
            Wrong Network
          </Web3StatusError>
        )
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
