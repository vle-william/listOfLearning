/**
 * 选择排序是一种简单的直观的排序算法，无论什么数据进去时间复杂度都是O(n2)，
 * 1.算法步骤：首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置
 * 2.再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾
 * 3.重复第二步，直到所有元素均排序完毕
 * **/

function selectionSort(arr) {
    var len = arr.length;
    var minIndex, temp;
    for (var i = 0; i < len - 1; i++) {
        minIndex = i;
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {     // 寻找最小的数
                minIndex = j;                 // 将最小数的索引保存
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}

// let arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 19]
let arr = [44, 38]

console.log(selectionSort(arr))
