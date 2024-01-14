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
            <main className="coins">
                <section className="primary">
                    {data &&
                        Object.keys(data).map((coin) => (
                            <article key={v1()}>
                                <h2>{coin}</h2>
                                <h3>{data[coin]["USD"]} USD</h3>
                            </article>
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
