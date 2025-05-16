export function generateTvPrice(tv) {
    if(tv.originalStock - tv.sold !== 0)
    {
        return `€${tv.price},-`
    }
    return `Uitverkocht`
}