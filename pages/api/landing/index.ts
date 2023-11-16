import { apiCore } from "../apiCore";

const api = new apiCore();

export const getBitToUSD = async () => {
  try {
    const result = await api.get(
      `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd`,
      ""
    );
    return result;
  } catch (error) {}
};

export const getEthToBit = async () => {
  try {
    const result = await api.get(
      "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=btc,usd",
      ""
    );
    return result;
  } catch (error) {}
};
