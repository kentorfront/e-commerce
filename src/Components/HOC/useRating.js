export default function useRating({ ratings }){
    let sum = ratings.reduce((a, b) => a + b)
    return sum / ratings.length
}