//-------------------------- QUICK SORT NUMBERS ------------------------------

let arr = [23, 2, 4, 34, 7, 19, 22, 1, 5, 6783, 87, 8934, 7];

const quickSort = (arr, start, end) =>{
    if(start < end) {
        let pivot = partition(arr, start, end);
        quickSort(arr, start, pivot-1);
        quickSort(arr, pivot +1, end)
    }
}

const partition = (arr, start, end) => {
    let pivot = end;
    let i = start - 1;
    let j = start;
    while (j < pivot) {
        if (arr[j] > arr[pivot]){
            j++;
        } else {
            i++;
            swap(arr, j, i);
            j++
        }
    }
    swap(arr, i+1, pivot);
    return i +1
}

const swap = (arr, firstIndex, secondIndex) => {
    let temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
}

quickSort(arr, 0, arr.length - 1);
console.log(arr);

//-------------------------- QUICK SORT LETTERS ------------------------------

let arr = ["e", "h", "i", "s", "b", "m", "l", "u", "t", "r", "v", "c", "j"];

const quickSort = (arr, start, end) =>{
    if(start < end) {
        let pivot = partition(arr, start, end);
        quickSort(arr, start, pivot-1);
        quickSort(arr, pivot +1, end)
    }
}

const partition = (arr, start, end) => {
    let pivot = end;
    let i = start - 1;
    let j = start;
    while (j < pivot) {
        if (arr[j] > arr[pivot]){
            j++;
        } else {
            i++;
            swap(arr, j, i);
            j++
        }
    }
    swap(arr, i+1, pivot);
    return i +1
}

const swap = (arr, firstIndex, secondIndex) => {
    let temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
}

quickSort(arr, 0, arr.length - 1);
console.log(arr);