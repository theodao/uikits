import React from "react";
import Text from "../../components/Text/Text";
import { Modal } from "../Modal";


interface Props {
  onDismiss?: () => void;
}

const WrongNetworkModal: React.FC<Props> = ({ onDismiss = () => null }) => (
  <Modal title="Wrong Network" onDismiss={onDismiss}>
    <Text
      fontSize="16px"
      style={{ whiteSpace: "nowrap", overflow: "hidden", marginBottom: "8px" }}
    >
      Please connect to the appropriate Ethereum network.
    </Text>
  </Modal>
);

export default WrongNetworkModal;
