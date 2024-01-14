const API_KEY = import.meta.env.VITE_API_KEY2;

const coins = [
    "BTC",
    "ETH",
    "USDT",
    "BNB",
    "XRP",
    "SOL",
    "USDC",
    "ADA",
    "DOGE",
    "TRX",
];

const coinsStr = coins.join(",");

const url1 = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${coinsStr}&tsyms=USD`;
const url2 = "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD";

export const getUpdatedPrices = () => {
    return fetch(url1, {
        headers: {
            authorization: API_KEY,
        },
    }).then(response => response.json())
};

export const getTopTenCoins = () => {
    return fetch(url2, {
        headers: {
            authorization: API_KEY,
        },
    }).then(response => response.json())
}