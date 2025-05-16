import { inventory } from '../constants/inventory.js';

export function calculateTotalStock() {
    let totalStock = 0;
    for (const tv of inventory) {
        totalStock += tv.originalStock;
    }
    return totalStock;
}