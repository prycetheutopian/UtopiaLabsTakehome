import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import ConnectWallet from "../components/connectWallet";
import { useEtherBalance, useEthers } from "@usedapp/core";
import SendTransaction from "../components/SendTransaction";

const Container = styled.div`
  top: 50%;
  left: 50%;
`;
const Home: NextPage = () => {
  const { account } = useEthers();
  console.log(account);
  return account == null ? (
    <Container>
      {" "}
      <Title>Eth Sender</Title>
      <ConnectWallet></ConnectWallet>{" "}
    </Container>
  ) : (
    <Container>
      <SendTransaction></SendTransaction>
    </Container>
  );
};

export default Home;

const Title = styled.h1`
  position: absolute;
  width: 221px;
  height: 33px;
  left: 609px;
  top: 276px;

  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  /* identical to box height */

  text-align: center;

  color: #01754b;
`;
