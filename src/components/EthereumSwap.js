import React from "react";

function EthereumSwap({ handleEthereumSwap }) {
  return (
    <>
      <h1>Swap Ethereum </h1>
      <form onSubmit={handleEthereumSwap}>
        <input type="text" name="eth" />
        <input type="text" name="wetg" readOnly={true} />

        <input type="submit" value="submit" />
      </form>
    </>
  );
}

export default EthereumSwap;
