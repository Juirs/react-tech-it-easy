import {inventory} from '../constants/inventory.js';

export function calculateTotalSold() {
    let totalSold = 0;
    for (const tv of inventory) {
        totalSold += tv.sold;
    }
    return totalSold;
}