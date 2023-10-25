let user = {
    firstname: ' giorgi',
    lastname: ' saakadze',
    age: 32,
    isloggedin: true  
};

let massive = [10, 50, 6, 7, 8, 11, 6, 3, 9]

if (user.isloggedin) {
    let printthething = user.firstname + user.lastname + " is" + " logged in "
    console.log(printthething);
} else {
    let printthething = user.firstname + user.lastname + " is not" + " logged in "
    console.log(printthething);
}
//N1

for (let key in massive) {
    let result = key + key;
    console.log(result);
    //2?
}

let array = [1, 2, 3, 4, 5]
let reversedArray = []

for (let i = array.length - 1, j = 0; i >= 0; i--, j++) {
  reversedArray[j] = array[i]
}

console.log(reversedArray)
//5

let usernumber = 19;
let agecheck = () => {
    if (usernumber > 18) {
        console.log("overage");
    } else {
        console.log("underage");
    }
}

agecheck()
