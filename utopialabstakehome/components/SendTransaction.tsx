import styled from "styled-components";
import { formatEther, parseEther } from "@ethersproject/units";
import { useEtherBalance, useEthers, useSendTransaction } from "@usedapp/core";
import { useEffect, useState } from "react";
import head from "next/head";

const SendTransaction: React.FC = () => {
  //implement logic to display address of logged in wallet
  //implement logic to display eth balance of logged in wallet
  //implement logic to take in an input of a wallet address and state to hold it
  //implement logic to take in an input of a amount to send and state to hold it
  //implement logic for the button to send a transaction with the current values of the wallet
  //address state and the amount state
  const handleClick = () => {};

  return (
    <>
      {" "}
      <div></div>{" "}
    </>
  );
};

export default SendTransaction;
