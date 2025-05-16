import './App.css';
import {calculateTotalSold} from './helpers/calculateTotalSold.js';
import {calculateTotalStock} from "./helpers/calculateTotalStock.js";
import {calculateStockLeft} from "./helpers/calculateStockLeft.js";
import {generateTvName} from "./helpers/generateTvName.js";
import {bestSellingTv, inventory} from './constants/inventory.js';
import {generateTvPrice} from "./helpers/generateTvPrice.js";
import {generateScreenSizes} from "./helpers/generateScreenSizes.js";
import checkIcon from './assets/check.png';
import minusIcon from './assets/minus.png';
import showOutcomeInConsole from "./constants/practiceFile.js";
import generateItemImage from "./helpers/generateItemImage.js";

function getIcon(applicable) {
    return applicable ? checkIcon : minusIcon;
}

function printButtonText(event) {
    if(event.target.textContent === 'Meest verkocht eerst') {
        inventory.sort((a, b) => b.sold - a.sold);
    }
    if(event.target.textContent === 'Goedkoopste eerst') {
        inventory.sort((a, b) => a.price - b.price);
    }
    if(event.target.textContent === 'Meest geschikt voor sport eerst') {
        inventory.sort((a, b) => b.refreshRate - a.refreshRate);
    }
    if(event.target.textContent === 'Grootste schermgroottes eerst') {
        inventory.sort((a, b) => b.availableSizes.at(-1) - a.availableSizes.at(-1));
    }

    console.log('Sorted inventory:', inventory);
}

function App() {
    showOutcomeInConsole();
    console.log('Total TVs sold:', calculateTotalSold());

    return (
        <>
            <h1>Tech it easy dashboard</h1>

            <h2>Verkoopoverzicht</h2>
            <div className="sales-overview-cards">
                <div className="sales-overview-card sold-card">
                    <h3 className="card-item">Aantal verkochte producten</h3>
                    <p className="card-item item-amount">{calculateTotalSold()}</p>
                </div>
                <div className="sales-overview-card stock-card">
                    <h3 className="card-item">Aantal ingekochte producten</h3>
                    <p className="card-item item-amount">{calculateTotalStock()}</p>
                </div>
                <div className="sales-overview-card to-sell-card">
                    <h3 className="card-item">Aantal te verkopen producten</h3>
                    <p className="card-item item-amount">{calculateStockLeft()}</p>
                </div>
            </div>

            <h2>Best verkochte tv</h2>
            <div className="all-tvs-card best-selling-tv-card">
                <div className="all-tvs-card-image">
                    <img src={generateItemImage(bestSellingTv)} alt={generateTvName(bestSellingTv)}/>
                </div>

                <div className="all-tvs-card-info">
                    <h3 className="item-name">{generateTvName(bestSellingTv)}</h3>
                    <p className="item-amount">{generateTvPrice(bestSellingTv)}</p>
                    <h3 className="item-sizes">{generateScreenSizes(bestSellingTv)}</h3>
                    <p className="item-specs">
                        {bestSellingTv.options.map(option => (
                            <span key={option.name} className="option">
                            <img
                                src={getIcon(option.applicable)}
                                alt={option.name}
                                className="icon"
                            />
                                {option.name}
                            </span>
                        ))}
                    </p>
                </div>
            </div>

            <h2>Alle tvs</h2>
            <div className="sort-container">
                <button className="sort-button" onClick={(e) => printButtonText(e)}>Meest verkocht eerst</button>
                <button className="sort-button" onClick={(e) => printButtonText(e)}>Goedkoopste eerst</button>
                <button className="sort-button" onClick={(e) => printButtonText(e)}>Meest geschikt voor sport eerst</button>
                <button className="sort-button" onClick={(e) => printButtonText(e)}>Grootste schermgroottes eerst</button>
            </div>

            <div className="all-tvs-container">
                {inventory.map(tv => (
                    <div key={tv.type} className="all-tvs-card">
                        <div className="all-tvs-card-image">
                            <img src={generateItemImage(tv)} alt={generateTvName(tv)}/>
                        </div>

                        <div className="all-tvs-card-info">
                            <h3 className="item-name">{generateTvName(tv)}</h3>
                            <p className="item-amount">{generateTvPrice(tv)}</p>
                            <h3 className="item-sizes">{generateScreenSizes(tv)}</h3>
                            <p className="item-specs">
                                {tv.options.map(option => (
                                    <span key={option.name} className="option">
                                    <img
                                        src={getIcon(option.applicable)}
                                        alt={option.name}
                                        className="icon"
                                    />
                                        {option.name}
                                    </span>
                                ))}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default App;
