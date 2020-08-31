"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checkSort(arr, length) {
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
exports.checkSort = checkSort;
function swap(arr, a, b) {
    let tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
    return;
}
function bubbleSort(arr, length) {
    for (let i = 0; i < length; i++) {
        for (let j = length - 1; j > i; j--) {
            if (arr[j - 1] > arr[j]) {
                swap(arr, j - 1, j);
            }
        }
    }
}
exports.bubbleSort = bubbleSort;
//# sourceMappingURL=sort-algorithm.js.map