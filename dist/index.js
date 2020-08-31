"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sort_algorithm_1 = require("./sort-algorithm");
setTimeout(() => {
    if (1) { // test delete
        let startTime = Date.now();
        let sortTestCount = 100;
        for (let j = 0; j < sortTestCount; j++) {
            let ranCount = 1000;
            let arr = [];
            for (let i = 0; i < ranCount; i++) {
                arr.push(Math.floor(Math.random() * 1000000));
            }
            sort_algorithm_1.bubbleSort(arr, ranCount);
            sort_algorithm_1.checkSort(arr, ranCount);
        }
        let endTime = Date.now();
        console.log('rbtree delete test time is ', endTime - startTime);
    }
}, 1000);
//# sourceMappingURL=index.js.map