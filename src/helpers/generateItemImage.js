import uitverkocht from '../assets/uitverkocht.png';

export default function generateItemImage(tv) {
    if(tv.originalStock - tv.sold !== 0)
    {
        return tv.sourceImg;
    }
    return uitverkocht;
}