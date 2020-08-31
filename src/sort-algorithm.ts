
export function checkSort(arr: number[], length: number) { // 从小到大的顺序
    let tmp = arr[0];
    for (let i = 1; i < length; i++) {
        if (tmp > arr[i]) {
            console.error("没有正确排序");
            return false;
        }
        tmp = arr[i];
    }
    return true;
}


function swap(arr: number[], a: number, b: number) {
    let tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
    return;
}


export function bubbleSort(arr: number[], length: number) {
    for (let i = 0; i < length; i++) {
        for (let j = length - 1; j > i; j--) {
            if (arr[j - 1] > arr[j]) {
                swap(arr, j - 1, j);
            }
        }
    }
}