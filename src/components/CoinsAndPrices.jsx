import { useEffect, useState } from "react";
import { v1 } from "uuid";

import { getUpdatedPrices } from "./api";

import "./CoinsAndPrices.css";

const MAX_ARTICLES = 10;

const CoinsAndPrices = () => {
    const [data, setData] = useState(null);

    const updateCoinPrices = () => {
        getUpdatedPrices()
            .then((data) => setData(data))
            .catch((error) => console.error(error));
    };

    useEffect(() => {
        getUpdatedPrices()
            .then((result) => {
                setData(result);
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <div>
            <main class="coins">
                <section class="primary">
                    {data &&
                        Object.keys(data).map((coin) => (
                            <li key={v1()}>
                                <p>{coin}</p>
                                <p>{data[coin]["USD"]} USD</p>
                            </li>
                        ))}
                </section>
            </main>
            <form className="update-coins">
                <input
                    type="button"
                    id="update-coins"
                    className="update-coins"
                    value="Update Coin Prices"
                    onClick={updateCoinPrices}
                />
            </form>
        </div>
    );
};

export default CoinsAndPrices;
