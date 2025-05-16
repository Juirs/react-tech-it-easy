import './App.css';
import {calculateTotalSold} from './helpers/calculateTotalSold.js';
import {calculateTotalStock} from "./helpers/calculateTotalStock.js";
import {calculateStockLeft} from "./helpers/calculateStockLeft.js";
import {generateTvName} from "./helpers/generateTvName.js";
import {bestSellingTv} from './constants/inventory.js';
import {generateTvPrice} from "./helpers/generateTvPrice.js";
import {generateScreenSizes} from "./helpers/generateScreenSizes.js";
import checkIcon from './assets/check.png';
import minusIcon from './assets/minus.png';

function getIcon(applicable) {
    return applicable ? checkIcon : minusIcon;
}

function printButtonText(event) {
    console.log(event.target.textContent);
}

function App() {
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
            <div className="best-selling-tv-card">
                <div className="best-selling-tv-card-image">
                    <img src={bestSellingTv.sourceImg} alt={generateTvName(bestSellingTv)}/>
                </div>

                <div className="best-selling-tv-card-info">
                    <h3 className="item-name">{generateTvName(bestSellingTv)}</h3>
                    <p className="item-amount">{generateTvPrice(bestSellingTv.price)}</p>
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
            <div className="all-tvs-container">
                <button className="all-tvs-button" onClick={(e) => printButtonText(e)}>Meest verkocht eerst</button>
                <button className="all-tvs-button" onClick={(e) => printButtonText(e)}>Goedkoopste eerst</button>
                <button className="all-tvs-button" onClick={(e) => printButtonText(e)}>Meest geschikt voor sport eerst</button>
            </div>
        </>
    );
}

export default App;
