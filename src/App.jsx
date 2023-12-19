import CoinPrices from "./components/CoinPrices";

const App = () => {
    return (
        <div>
            <body>
                <header>
                    <h1>Cryptocurrency App</h1>
                    <section class="navigation">
                        <div>
                            <a href="./index.html">Home</a>
                        </div>
                        <div>
                            <a href="./news.html">News</a>
                        </div>
                    </section>
                </header>
                <CoinPrices />
                <main class="coins">
                    <section class="primary"></section>
                    <section class="secondary"></section>
                </main>
                <form class="update-coins">
                    <input
                        type="submit"
                        name="update-coins"
                        id="update-coins"
                        value="Update Coin Prices"
                    />
                </form>
                <article class="top-traded">
                    <h2>Top Traded Cryptocurrencies (24H Volume)</h2>
                </article>
                <form class="top-traded">
                    <input
                        type="submit"
                        name="top-traded"
                        class="top-traded"
                        value="Display Top Coins"
                    />
                </form>
                <div class="top-traded">
                    <section class="top-traded">
                        <div class="first-column">
                            <ul></ul>
                        </div>
                        <div class="second-column">
                            <ul></ul>
                        </div>
                        <div class="third-column">
                            <ul></ul>
                        </div>
                        <div class="fourth-column hidden">
                            <ul></ul>
                        </div>
                        <div class="fifth-column hidden">
                            <ul></ul>
                        </div>
                        <div class="sixth-column hidden">
                            <ul></ul>
                        </div>
                    </section>
                </div>
                {/* <article class="move-left"><h3><<h3></article>
        <article class="move-right"><h3>><h3></article> */}
            </body>
        </div>
    );
};

export default App;
