import {calculateTotalStock} from "./calculateTotalStock.js";
import {calculateTotalSold} from "./calculateTotalSold.js";

export function calculateStockLeft() {
    return calculateTotalStock() - calculateTotalSold();
}