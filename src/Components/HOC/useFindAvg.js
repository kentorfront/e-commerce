export default function useFindAvg(ratingArray) {
    if (ratingArray.length === 0) return 0;

    const initialValue = 0;
    const sumWithInitial = ratingArray.reduce(
        (accumulator, currentValue) => accumulator + Number(currentValue.star),
        initialValue
    );
    const average = sumWithInitial / ratingArray.length;
    return average;
}
