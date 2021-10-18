import styled from "styled-components";
import { useEtherBalance, useEthers } from "@usedapp/core";

const connectWallet: React.FC = () => {
  const { activateBrowserWallet } = useEthers();
  return (
    <>
      <Button onClick={() => activateBrowserWallet()}>connect</Button>
    </>
  );
};
export default connectWallet;

const Button = styled.button`
  position: absolute;
  width: 312.36px;
  height: 40px;
  left: 553.89px;
  top: 400px;

  background: #017553;
  border-radius: 5px;
`;
