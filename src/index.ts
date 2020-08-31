import { bubbleSort, checkSort } from "./sort-algorithm";

setTimeout(() => {


    if (1) { // test delete
        let startTime = Date.now();
        let sortTestCount = 100;
        for (let j = 0; j < sortTestCount; j++) {
            let ranCount = 1000
            let arr = [];
            for (let i = 0; i < ranCount; i++) {
                arr.push(Math.floor(Math.random() * 1000000));
            }
            bubbleSort(arr, ranCount);
            checkSort(arr, ranCount);
        }
        let endTime = Date.now();
        console.log('rbtree delete test time is ', endTime - startTime);
    }

}, 1000);