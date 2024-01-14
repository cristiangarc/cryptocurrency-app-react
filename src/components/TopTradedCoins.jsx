import { useState } from "react";
import { v1 } from "uuid";

import { getTopTenCoins } from "./api";

const TopTradedCoins = () => {
    const [topCoins, setCoins] = useState(null);
    const [displayButton, setDisplayButton] = useState(true);
    const [hideSection, setHideSection] = useState(false);
    let column = 5;

    const calculateColumnClass = () => {
        column = (column + 1) % 6;
        switch (column) {
            case 0:
                return "first-column";
            case 1:
                return "second-column";
            case 2:
                return "third-column";
            case 3:
                return "fourth-column";
            case 4:
                return "fifth-column";
            case 5:
                return "sixth-column";
        }
    };

    const updateTopTradedCoins = () => {
        getTopTenCoins()
            .then((data) => {
                setCoins(data.Data);
                setDisplayButton(false);
            })
            .catch((error) => console.error(error));
    };

    const flipHiddenSection = () => {
        setHideSection(!hideSection);
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
                <section className={`top-traded ${hideSection && "hidden"}`}>
                    {topCoins &&
                        Object.keys(topCoins).map((coin) => (
                            <ul key={v1()}>
                                <li className={calculateColumnClass()}>
                                    {topCoins[coin]["CoinInfo"]["Name"]}
                                </li>
                            </ul>
                        ))}
                </section>
                <article className="move-left" onClick={flipHiddenSection}>
                    {"<"}
                </article>
                <article className="move-right" onClick={flipHiddenSection}>
                    {">"}
                </article>
            </div>
        </div>
    );
};

export default TopTradedCoins;
