import { useState } from "react";
import { v1 } from "uuid";

import { getTopTenCoins } from "./api";

const TopTradedCoins = () => {
    const [topCoins, setCoins] = useState(null);
    const [displayButton, setDisplayButton] = useState(true);

    const updateTopTradedCoins = () => {
        getTopTenCoins()
            .then((data) => {
                setCoins(data.Data);
                setDisplayButton(false);
            })
            .catch((error) => console.error(error));
    };

    return (
        <div>
            <article className="top-traded">
                <h2>Trending Coins</h2>
            </article>
            <label htmlFor="top-traded" className="top-traded">
                {displayButton && (
                    <input
                        type="button"
                        id="top-traded"
                        className="top-traded"
                        value="Display Top Coins"
                        onClick={updateTopTradedCoins}
                    />
                )}
            </label>
            <div className="top-traded">
                <section className="top-traded">
                    {topCoins &&
                        Object.keys(topCoins).map((coin) => (
                            <li key={v1()}>
                                {topCoins[coin]["CoinInfo"]["Name"]}
                            </li>
                        ))}
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
        </div>
    );
};

export default TopTradedCoins;
