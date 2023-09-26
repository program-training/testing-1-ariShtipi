export function sumArray(arr: number[]): number {
    let total = 0;
    for (const num of arr) {
        total += num;
    }
    return total;
}
