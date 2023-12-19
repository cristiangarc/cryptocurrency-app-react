const var1 = import.meta.env.VITE_VAR1;

const CoinPrices = () => {
    return (
        <div>
            <h2>Coin Prices</h2>
            <p>Variable 1: {var1}</p>
        </div>
    );
};

export default CoinPrices;
