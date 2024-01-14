import { Routes, Route, Link } from "react-router-dom";

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
                        <Link to={"/"}>Home</Link>
                    </div>
                    <div>
                        <Link to={"/news"}>News</Link>
                    </div>
                </section>
            </header>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <CoinsAndPrices />
                            <TopTradedCoins />
                        </>
                    }
                />
                <Route path="/news" element={<div>News</div>} />
            </Routes>
            {/* <article className="move-left"><h3><<h3></article>
        <article className="move-right"><h3>><h3></article> */}
        </div>
    );
};

export default App;
