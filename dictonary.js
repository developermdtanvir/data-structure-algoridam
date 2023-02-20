/* 
    What is Hash Table and what is hash map
*/

class Dictonary {
    constructor() {
        this.dictonary = {}
    }

    add(key, value) {
        this.dictonary[key] = value;
    }

    get(key) {
        return this.dictonary[key];
    }

}

const phoneBook = new Dictonary();

phoneBook.add('Tanvir', '01782446325');

console.log(phoneBook.get('Tanvir'))
