export function generateScreenSizes(tv) {
    return tv.availableSizes
        .map(size => `${size} inches (${Math.round(size * 2.54)}cm)`)
        .join(' | ');
}