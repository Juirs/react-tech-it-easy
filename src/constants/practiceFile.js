import {inventory} from './inventory.js';

export default function showOutcomeInConsole() {
    // Opdracht 1a
    const tvTypes = inventory.map(tv => tv.type);
    console.log('TV types:', tvTypes);

    // Opdracht 1b
    const soldOutTvs = inventory.filter(tv => tv.originalStock - tv.sold === 0);
    console.log('Sold out TVs:', soldOutTvs);

    // Opdracht 1c
    const findByType = inventory.find(tv => tv.type === 'NH3216SMART');
    console.log('Tv of type NH3216SMART', findByType);

    //Opdracht 1d
    const sportSuitableTvNamesWithBrand = inventory.map(tv => ({
        name: `${tv.brand} ${tv.name}`,
        suitable: tv.refreshRate > 99
    }));
    console.log('Sport Suitable Tvs:', sportSuitableTvNamesWithBrand);

    //Opdracht 1e
    const sixtyFiveInchOrBiggerTvs = inventory.filter(tv => tv.availableSizes.some(size => size >= 65))
    console.log('65 inch tvs or higher:', sixtyFiveInchOrBiggerTvs);

    //Opdracht 1f
    const ambilightTvs = inventory.filter(tv => tv.options.some(option => option.name === 'ambiLight' && option.applicable));
    console.log('Ambilight Tvs:', ambilightTvs);
}