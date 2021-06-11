import React from "react";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import LinkExternal from "../../components/Link/LinkExternal";
import Flex from "../../components/Box/Flex";
import { Modal } from "../Modal";
import CopyToClipboard from "./CopyToClipboard";
import { connectorLocalStorageKey } from "./config";

interface Props {
  account: string;
  logout: () => void;
  onDismiss?: () => void;
  isUnlock?: boolean;
  accountData?: {
    luaUnlockAble: string;
    totalLuaLock: string;
  };
  chainId?: number;
  unlockLua?: () => Promise<null>;
}

const Title = styled.div`
  width: 100%;
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const CommingSoon = styled.div`
  width: initial;
  font-size: 17px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textSubtle};
`;

const AccountModal: React.FC<Props> = ({
  account,
  logout,
  onDismiss = () => null,
  accountData = {},
  chainId,
  unlockLua = () => {},
  isUnlock,
}) => {
  const isMainNet = chainId === 1;
  const { totalLuaLock, luaUnlockAble } = accountData;
  console.log(unlockLua, "unlock function ?");
  return (
    <Modal title="Your wallet" onDismiss={onDismiss}>
      <Text
        fontSize="20px"
        bold
        style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" }}
      >
        {account}
      </Text>
      <Flex mb="8px">
        <LinkExternal small href={`https://etherscan.io/address/${account}`} mr="16px">
          View on EtherScan
        </LinkExternal>
        <CopyToClipboard toCopy={account}>Copy Address</CopyToClipboard>
      </Flex>
      <Flex mb="8px" alignItems="center" width="100%">
        <Title>
          Can unlock: {luaUnlockAble}/{totalLuaLock} LUA
        </Title>
        <Button
          scale="sm"
          variant="secondary"
          disabled={!isMainNet || isUnlock}
          onClick={async () => {
            await unlockLua();
          }}
        >
          Unlock
        </Button>
      </Flex>
      <Flex justifyContent="start" mb="32px">
        {!isMainNet && <CommingSoon>Please switch to the Ethereum mainnet to unlock</CommingSoon>}
      </Flex>
      <Flex justifyContent="center">
        <Button scale="sm" variant="primary" onClick={() => {}}>
          Logout
        </Button>
      </Flex>
    </Modal>
  );
};

export default AccountModal;
