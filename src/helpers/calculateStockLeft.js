import {calculateTotalStock} from "./calculateTotalStock.js";
import {calculateTotalSold} from "./calculateTotalSold.js";

export function calculateStockLeft() {
    let totalStock = calculateTotalStock();
    let totalSold = calculateTotalSold();

    return totalStock - totalSold;
}