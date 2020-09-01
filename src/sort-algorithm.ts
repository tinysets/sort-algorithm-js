
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


export function bubbleSort2(arr: number[], length: number) {
    let shouldContinue = 1;
    for (let i = 0; i < length && shouldContinue; i++) {
        shouldContinue = 0;
        for (let j = length - 1; j > i; j--) {
            if (arr[j - 1] > arr[j]) {
                swap(arr, j - 1, j);
                shouldContinue = 1;
            }
        }
    }
}


export function insertSort(arr: number[], length: number) {
    // 类似于摆扑克牌
    for (let i = 1; i < length; i++) {
        let curr = arr[i];
        let j = i - 1;
        for (; j >= 0; j--) {
            if (curr < arr[j]) {
                arr[j + 1] = arr[j];
            } else {
                break;
            }
        }
        arr[j + 1] = curr;
    }
}



export function shellSort(arr: number[], length: number) {
    let inc = length;

    while (1) {
        inc = Math.floor(inc / 2);
        if (inc >= 1) {
            for (let i = inc; i < length; i += inc) {
                let curr = arr[i];
                let j = i - inc;
                for (; j >= 0; j -= inc) {
                    if (curr < arr[j]) {
                        arr[j + inc] = arr[j];
                    } else {
                        break;
                    }
                }
                arr[j + inc] = curr;
            }
        } else {
            break;
        }
    }
}

export function heapSort(arr: number[], length: number) {
    // 动态插入或者删除元素的时候 使数组维持有序所付出的调整代价小
    // 对于一个完全二叉树而言，根节点索引为0。 
    // 若父节点索引为i 则 左子为2i+1 右子为2i+2
    // 若子节点索引为j 则 父节点为 floor((j-1)/2)
    // 若一个数组的完全二叉树长度为length 则最后一个非叶子节点为 floor(length/2-1)

    // 构造大(小)定堆，从最后一个非叶节点(i)开始，
    // 将节点i的值赋为value(i)、value(2i+1)、value(2i+1)中最大(小)的值，将i--，重复这个步骤,当i小于0时结束。
    // 构建时 自底上向构建
    // 调整时 自顶向下调整
    max_heap(arr, length);
    for (let i = length - 1; i > 0; i--) {
        swap(arr, 0, i);
        length--;
        max_heapify(arr, length, 0);
    }
}

export function is_min_heap(arr: number[], length: number) {
    if (length >= 2) {
        let maxIndex = Math.floor(length / 2 - 1); // 最后一个非叶子节点
        for (let i = 0; i <= maxIndex; i++) {
            if (arr[i] > arr[2 * i + 1]) {
                console.error("不是小顶堆");
                return false;
            }
            if ((2 * i + 2) <= length - 1) {
                if (arr[i] > arr[2 * i + 2]) {
                    console.error("不是小顶堆");
                    return false;
                }
            }
        }
    }
    return true;
}


export function is_max_heap(arr: number[], length: number) {
    if (length >= 2) {
        let maxIndex = Math.floor(length / 2 - 1); // 最后一个非叶子节点
        for (let i = 0; i <= maxIndex; i++) {
            if (arr[i] < arr[2 * i + 1]) {
                console.error("不是大顶堆");
                return false;
            }
            if ((2 * i + 2) <= length - 1) {
                if (arr[i] < arr[2 * i + 2]) {
                    console.error("不是大顶堆");
                    return false;
                }
            }
        }
    }
    return true;
}


export function min_heap(arr: number[], length: number) {
    if (length >= 2) {
        let i = Math.floor(length / 2 - 1); // 最后一个非叶子节点
        for (i = i; i >= 0; i--) {
            min_heapify(arr, length, i);
        }
    }
}

function min_heapify(arr: number[], length: number, i: number) {
    while (1) {
        let left = 2 * i + 1;
        let right = 2 * i + 2;
        if (left <= length - 1) { // 存在左子
            let minIndex = i;
            if (arr[left] < arr[minIndex]) {
                minIndex = left;
            }
            if (right <= length - 1) {// 存在右子
                if (arr[right] < arr[minIndex]) {
                    minIndex = right;
                }
            }
            if (minIndex != i) {
                swap(arr, minIndex, i);
                i = minIndex; // min_heapify(arr, length, minIndex);
            } else {
                break;
            }
        } else {
            break;
        }
    }

}

export function max_heap(arr: number[], length: number) {
    if (length >= 2) {
        let i = Math.floor(length / 2 - 1);// 最后一个非叶子节点
        for (i = i; i >= 0; i--) {
            max_heapify(arr, length, i);
        }
    }
}

function max_heapify(arr: number[], length: number, i: number) {
    while (1) {
        let left = 2 * i + 1;
        let right = 2 * i + 2;
        if (left <= length - 1) {
            let maxIndex = i;
            if (arr[left] > arr[maxIndex]) {
                maxIndex = left;
            }
            if (right <= length - 1) {
                if (arr[right] > arr[maxIndex]) {
                    maxIndex = right;
                }
            }
            if (maxIndex != i) {
                swap(arr, maxIndex, i);// max_heapify(arr, length, maxIndex);
                i = maxIndex;
            } else {
                break;
            }
        } else {
            break;
        }
    }
}


export function QSort(arr: number[], length: number) {
    _QSort(arr, 0, length - 1);
}

function _QSort(arr: number[], start: number, end: number) {
    if (start < end) {
        let pivotKey = arr[start];
        let low = start;
        let high = end;
        while (low != high) {
            while (low != high) {// 从后向前
                if (arr[high] < pivotKey) {
                    arr[low] = arr[high];
                    break;
                } else {
                    high--;
                }
            }
            while (low != high) {// 从前向后
                if (arr[low] > pivotKey) {
                    arr[high] = arr[low];
                    break;
                } else {
                    low++;
                }
            }
        }
        arr[low] = pivotKey;
        _QSort(arr, start, low - 1);
        _QSort(arr, high + 1, end);
    }
}


export function mergeSort(arr: number[], length: number) {
    let other = new Array(length);
    _mergeSort(arr, 0, length - 1, other);
}

function _mergeSort(arr: number[], start: number, end: number, other: number[]) {
    if (start < end) {
        let half = Math.floor((end - start) / 2);
        let leftStart = start;
        let leftEnd = start + half;
        let rightStart = start + half + 1;
        let rightEnd = end;
        _mergeSort(arr, leftStart, leftEnd, other);
        _mergeSort(arr, rightStart, rightEnd, other);

        merge(arr, other, leftStart, leftEnd, rightStart, rightEnd);

        for (let j = start; j <= end; j++) {
            arr[j] = other[j];
        }
    } else {
        other[start] = arr[start];
    }
}

function merge(src: number[], tar: number[], leftStart: number, leftEnd: number, rightStart: number, rightEnd: number,) {
    let i = leftStart;
    while (leftStart <= leftEnd && rightStart <= rightEnd) {
        if (src[leftStart] <= src[rightStart]) {
            tar[i] = src[leftStart];
            leftStart++;
            i++;
        } else {
            tar[i] = src[rightStart];
            rightStart++;
            i++;
        }
    }
    while (leftStart <= leftEnd) {
        tar[i] = src[leftStart];
        leftStart++;
        i++;
    }
    while (rightStart <= rightEnd) {
        tar[i] = src[rightStart];
        rightStart++;
        i++;
    }
}

export function mergeSortNoRecursion(arr: number[], length: number) {
    let tmpArr = new Array(length);

    let end = length - 1;

    let src_tar_flag = 0;
    let blockSize = 1;
    while (1) {

        if (blockSize >= length) {
            if (src_tar_flag % 2 == 1) {
                for (let i = 0; i < length; i++) {
                    arr[i] = tmpArr[i];
                }
            }
            break;
        }

        let blockIndex = 0;
        while (1) {

            let leftStart = blockIndex * blockSize;
            let leftEnd = blockIndex * blockSize + blockSize - 1;

            if (leftStart > end) {
                break;
            }

            if (leftEnd > end) {
                leftEnd = end;
            }

            let rightStart = blockIndex * blockSize + blockSize;
            let rightEnd = blockIndex * blockSize + blockSize + blockSize - 1;

            if (rightEnd > end) {
                rightEnd = end;
            }

            let src = arr;
            let tar = tmpArr;
            if (src_tar_flag % 2 == 1) {
                src = tmpArr;
                tar = arr;
            }
            merge(src, tar, leftStart, leftEnd, rightStart, rightEnd);

            blockIndex += 2;
        }
        blockSize *= 2;
        src_tar_flag++;
    }

}