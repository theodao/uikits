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

const UserBlock: React.FC<Props> = ({ account, login, logout, chainId, queryChainId }) => {
  const { onPresentConnectModal, onPresentAccountModal, onPresentWrongNetworkModal } = useWalletModal(
    login,
    logout,
    account
  );
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;
  return (
    <div>
      {account ? (
        chainId === queryChainId ? (
          <Button
            scale="sm"
            variant="tertiary"
            onClick={() => {
              onPresentAccountModal();
            }}
          >
            {accountEllipsis}
          </Button>
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

export default React.memo(
  UserBlock,
  (prevProps, nextProps) =>
    prevProps.account === nextProps.account &&
    prevProps.queryChainId === nextProps.queryChainId &&
    prevProps.chainId === nextProps.chainId
);
