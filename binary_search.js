let exampleArray = [1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59];

const binarySearch = (array, target) => {
    let startIndex = 0;
    let endIndex = array.length - 1;

    while (startIndex <= endIndex) {
        let middleIndex = Math.floor((startIndex + endIndex) / 2);

        if (target === array[middleIndex]) {
            return console.log("Target was found at index " + middleIndex);
        }

        if (target > array[middleIndex]) {
            console.log("Searching the right side of Array")

            startIndex = middleIndex + 1;
        }

        if (target < array[middleIndex]) {
            console.log("Searching the left side of array")

            endIndex = middleIndex - 1;
        }

        else {
            console.log("Not Found this loop iteration. Looping another iteration.")
        }
    }

    console.log("Target value not found in array");
}