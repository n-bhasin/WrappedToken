import React from "react";
import EthereumSwap from "./EthereumSwap";
import WetgSwap from "./WetgSwap";

function Home({ web3, contracts, accounts }) {
  const [etherem, setEtherem] = React.useState(0);
  const [wrappedToken, setWrappedToken] = React.useState(0);

  const handleEthereumSwap = async (e) => {
    e.preventDefault();
    const ethInWei = web3.utils.toWei(etherem, "ether");

    console.log("12", contracts);
    const tx = await contracts.methods
      .mint()
      .send({ from: accounts[0], value: ethInWei })
      .on("receipt", function () {
        console.log("success");
      });

    console.log(tx);
  };

  const handleWETGSwap = async (e) => {
    e.preventDefault();
    const ethInWei = web3.utils.toWei(wrappedToken, "ether");

    console.log("12", contracts);
    const tx = await contracts.methods
      .withdraw(ethInWei)
      .send({ from: accounts[0] })
      .on("receipt", function () {
        console.log("success");
      });

    console.log(tx);
  };

  return (
    <>
      <h1>Swap Ethereum </h1>
      <form onSubmit={handleEthereumSwap}>
        <input
          type="text"
          name="eth"
          placeholder="ETH"
          onChange={(amount) => setEtherem(amount.target.value)}
        />
        <input
          type="text"
          name="wetg"
          readOnly={true}
          value={etherem + " WETG"}
        />

        <input type="submit" value="submit" />
      </form>
      <hr />
      <h1>Swap Wrapped ETG</h1>
      <form onSubmit={handleWETGSwap}>
        <input
          type="text"
          name="wetg"
          placeholder="WETG"
          onChange={(amount) => setWrappedToken(amount.target.value)}
        />
        <input
          type="text"
          name="eth"
          value="ETH"
          readOnly={true}
          value={wrappedToken + " ETH"}
        />

        <input type="submit" value="submit" />
      </form>
    </>
  );
}

export default Home;
