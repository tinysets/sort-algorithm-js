"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sort_algorithm_1 = require("./sort-algorithm");
function getArr(ranCount) {
    let arr = [];
    for (let i = 0; i < ranCount; i++) {
        arr.push(Math.floor(Math.random() * 1000000));
    }
    return arr;
}
function testSort(sortFun) {
    let startTime = Date.now();
    let sortTestCount = 100;
    for (let j = 0; j < sortTestCount; j++) {
        let ranCount = 1000;
        let arr = [];
        for (let i = 0; i < ranCount; i++) {
            arr.push(Math.floor(Math.random() * 1000000));
        }
        sortFun(arr, ranCount);
        sort_algorithm_1.checkSort(arr, ranCount);
    }
    let endTime = Date.now();
    console.log('sort test time is ', endTime - startTime);
}
function testBuildHeap() {
    for (let i = 0; i < 100; i++) {
        let arrLegth = 100;
        let arr = getArr(arrLegth);
        sort_algorithm_1.min_heap(arr, arrLegth);
        sort_algorithm_1.is_min_heap(arr, arrLegth);
        sort_algorithm_1.max_heap(arr, arrLegth);
        sort_algorithm_1.is_max_heap(arr, arrLegth);
    }
}
setTimeout(() => {
    // testBuildHeap();
    // testSort(bubbleSort);
    // testSort(shellSort);
    // testSort(heapSort);
    // testSort(QSort);
    // testSort(mergeSort);
    // testSort(insertSort);
    testSort(sort_algorithm_1.mergeSortNoRecursion);
    return 0;
}, 1000);
//# sourceMappingURL=index.js.map