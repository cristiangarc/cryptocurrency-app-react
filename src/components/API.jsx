import { useEffect, useState } from "react";
import { v1 } from "uuid";

import { getUpdatedPrices } from "./api";

const displayTokenAndPrice = (tokenObjects) => {
    const tokenNames = Object.keys(tokenObjects);
    tokenNames.forEach((token) => {
        if (articleCount >= maxArticles || displayedTokensStr.includes(token)) {
            return null;
        }
        const newArticle = createTokenArticle(
            token,
            tokenObjects[token]["USD"],
            "USD"
        );
        articleCount++;
        displayedTokensStr += token;
        // append to both wallet sections
        const coinsSection = document.querySelector(".coins .primary");
        coinsSection.append(newArticle);
        hasDisplayedPrice = true;
    });
};

const API = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        getUpdatedPrices()
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                setData(result);
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <div>
            {data &&
                Object.keys(data).map((coin) => <li key={v1()}>{coin}</li>)}
        </div>
    );
};

export default API;
