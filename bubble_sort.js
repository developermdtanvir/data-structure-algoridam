const array = [5, 2, 4, 8, 9, 7, 14, 24, 21, 27];

function bubbleSort() {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                const tamp = array[j];

                array[j] = array[j + 1];

                array[j + 1] = tamp;
            }
        }

    }
    return array
}

const sortated = bubbleSort(array);
console.log(sortated)