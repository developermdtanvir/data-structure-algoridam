const array = [5, 2, 4, 8, 9, 7, 14, 24, 21, 27];

function selectSort(array) {
    for (let i = 0; i < array.length; i++) {
        let min = i;

        for (let j = 0; j < array.length; j++) {

            if (array[j] > array[min]) {
                min = j;
            }

        }

        const temp = array[i]
        array[i] = array[min]
        array[min] = temp

    }
    return array;
}

const sort = selectSort(array);

console.log(sort);
