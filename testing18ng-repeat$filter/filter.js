var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Number array: ", numberArray);

function above5filter(value){

        return value > 5;

}
var filteredNumberArray = numberArray.filter(above5filter);
console.log("Filtered Number Array :", filteredNumberArray);

var shoppingList1 = [
    "Milk","Donotos","Cookies","Chocolet","Peanut Butter","Pepto Bismol",
    "Pepto Bismol (Chocolet Flaver)","Pepto Bismol (Cookie Flavor)"
];
console.log("ShopingList1", shoppingList1);

// var searchValue = "Bismol";

// function containsFilter(value){
//     return value.indexOf(searchValue) !== -1;
// }

// var searchShoppingList = shoppingList1.filter(containsFilter);

// console.log("Search Shopping List :", searchShoppingList);