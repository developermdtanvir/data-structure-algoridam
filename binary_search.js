
function binarySearch(array, target) {
    let start = 0;

    let end = array.length - 1;

    while (start <= end) {
        let med = Math.floor((start + end) / 2);

        if (array[med] === target) {
            console.log(`Target Element by Binary_search ${array[med]}`)

            return med
        }

        if (array[med] < target) {
            start = med + 1;
        }

        if (array[med] > target) {
            end = med - 1;
        }
    }

    return -1;
}

const haveNumber = binarySearch([1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59], 37)

if (haveNumber === -1) {
    console.log('Number not found this array')
}