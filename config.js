const { ether, BN } = require("@openzeppelin/test-helpers");

let config = {};

config.timer = {
  startTime: 1600141440,
  hardCapTimer: 172800,
  softCap: ether("500"),
};

config.redeemer = {
  redeemBP: 400,
  redeemInterval: 3600,
  bonusRangeStart: [
    ether("0"),
    ether("500"),
    ether("1000"),
    ether("2000")
  ],
  bonusRangeBP: [1000, 500, 250, 0],
};

config.presale = {
  maxBuyPerAddress: ether("50"),
  uniswapEthBP: 6000,
  lidEthBP: 500,
  referralBP: 250,
  hardcap: ether("3500"),
  token: "0x3B78dc5736a49BD297Dd2E4d62daA83D35A22749",
  uniswapRouter: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
  lidFund: "0xb63c4F8eCBd1ab926Ed9Cb90c936dffC0eb02cE2",
  access: "0xfD8e59814D601219bddd53879ADa1Ff75fD316e2",
  marketingFund: "0xf0ABD01fF334920105dB243356D6b4292bf144F8",
  projectFund: "0x3B97fBAc3F60D256255892EDECa4D0F5046cFcb7",
  teamFund: "0xf046A07FD7c74378D78176cA9c8515133098c0Ff",
  tokenPoolsBP: {
    marketing: 500,
    team: 2000,
    lidFee: 100,
    project: 3050,
    liquidity: 1350,
    presale: 3000
  }
};

config.timelock = {
  releaseInterval: 2592000,
  releaseBP: 10000
}

module.exports = config;
