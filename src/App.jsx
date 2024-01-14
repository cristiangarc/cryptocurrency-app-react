import { getUpdatedPrices } from "./components/api";

import CoinsAndPrices from "./components/CoinsAndPrices.jsx";
import TopTradedCoins from "./components/TopTradedCoins.jsx";

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
            <CoinsAndPrices />
            <TopTradedCoins />
            {/* <article className="move-left"><h3><<h3></article>
        <article className="move-right"><h3>><h3></article> */}
        </div>
    );
};

export default App;
