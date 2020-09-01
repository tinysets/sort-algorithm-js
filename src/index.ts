import { bubbleSort, checkSort, shellSort, is_min_heap, min_heap, max_heap, is_max_heap, heapSort, QSort, mergeSort, insertSort, mergeSortNoRecursion } from "./sort-algorithm";

function getArr(ranCount: number) {
    let arr = [];
    for (let i = 0; i < ranCount; i++) {
        arr.push(Math.floor(Math.random() * 1000000));
    }
    return arr;
}

function testSort(sortFun: (arr: number[], length: number) => void) {
    let startTime = Date.now();
    let sortTestCount = 100;
    for (let j = 0; j < sortTestCount; j++) {
        let ranCount = 1000
        let arr = [];
        for (let i = 0; i < ranCount; i++) {
            arr.push(Math.floor(Math.random() * 1000000));
        }
        sortFun(arr, ranCount);
        checkSort(arr, ranCount);
    }
    let endTime = Date.now();
    console.log('sort test time is ', endTime - startTime);
}


function testBuildHeap() {
    for (let i = 0; i < 100; i++) {
        let arrLegth = 100;
        let arr = getArr(arrLegth);
        min_heap(arr, arrLegth);
        is_min_heap(arr, arrLegth);

        max_heap(arr, arrLegth);
        is_max_heap(arr, arrLegth);
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
    testSort(mergeSortNoRecursion);

    return 0;
}, 1000);