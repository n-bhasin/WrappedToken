import React from "react";

function WetgSwap({ handleEthereumSwap }) {
  return (
    <>
      <h1>Swap Wrapped ETG</h1>
      <form onSubmit={handleEthereumSwap}>
        <input type="text" name="wetg" value="WETG" />
        <input type="text" name="eth" value="ETH" />

        <input type="submit" value="submit" />
      </form>
    </>
  );
}

export default WetgSwap;
