import CoinPrices from "./components/CoinPrices";

const App = () => {
    return (
        <div>
            <header>
                <h1>Cryptocurrency App</h1>
                <section className="navigation">
                    <div>
                        <a href="./index.html">Home</a>
                    </div>
                    <div>
                        <a href="./news.html">News</a>
                    </div>
                </section>
            </header>
            <CoinPrices />
            <main className="coins">
                <section className="primary"></section>
                <section className="secondary"></section>
            </main>
            <form className="update-coins">
                <input
                    type="submit"
                    name="update-coins"
                    id="update-coins"
                    value="Update Coin Prices"
                />
            </form>
            <article className="top-traded">
                <h2>Top Traded Cryptocurrencies (24H Volume)</h2>
            </article>
            <form className="top-traded">
                <input
                    type="submit"
                    name="top-traded"
                    className="top-traded"
                    value="Display Top Coins"
                />
            </form>
            <div className="top-traded">
                <section className="top-traded">
                    <div className="first-column">
                        <ul></ul>
                    </div>
                    <div className="second-column">
                        <ul></ul>
                    </div>
                    <div className="third-column">
                        <ul></ul>
                    </div>
                    <div className="fourth-column hidden">
                        <ul></ul>
                    </div>
                    <div className="fifth-column hidden">
                        <ul></ul>
                    </div>
                    <div className="sixth-column hidden">
                        <ul></ul>
                    </div>
                </section>
            </div>
            {/* <article className="move-left"><h3><<h3></article>
        <article className="move-right"><h3>><h3></article> */}
        </div>
    );
};

export default App;
