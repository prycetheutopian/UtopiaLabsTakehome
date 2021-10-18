import styled from "styled-components";
import { formatEther, parseEther } from "@ethersproject/units";
import { useEtherBalance, useEthers, useSendTransaction } from "@usedapp/core";
import { useEffect, useState } from "react";
import head from "next/head";

const SendTransaction: React.FC = () => {
  const { account } = useEthers();
  const { sendTransaction, state } = useSendTransaction();
  const [recipient, setReciepient] = useState("");
  const [amount, setAmount] = useState("");
  const balance = useEtherBalance(account);

  const handleClick = () => {
    sendTransaction({ to: recipient, value: parseEther(amount) });
  };

  return (
    <>
      {" "}
      <div>
        <Container>
          <Title>Eth Sender</Title>
          <text>{account}</text>
          {/* <text>{formatEther(balance)}</text> */}
          <Header>Eth Address</Header>
          <input
            type="text"
            placeholder={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={{ alignSelf: "center" }}
          />
          <Header>Eth Amount</Header>
          <input
            type="text"
            placeholder={recipient}
            onChange={(e) => setReciepient(e.target.value)}
          />
          <button onClick={handleClick}></button>
        </Container>
      </div>{" "}
    </>
  );
};

export default SendTransaction;

const Title = styled.h1`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  /* identical to box height */

  text-align: center;

  color: #01754b;
`;

const Header = styled.h2`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
`;

const Container = styled.div`
  align-items: center 
  * {
    display: block;
  }
  ${Title} {
    align-items: center
    display: block;
  }
`;
