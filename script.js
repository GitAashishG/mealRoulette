

// create a js function to get a random meal
function getMeanPlanForWholeDay() {
    // get a random number between 0 and the number of meals

    // Create a js array with list of meals
var brkfstList = ['Egg Bites', 'Pancakes'
, 'Scrambled Eggs', 'Fried Egg Sandwiches', 'French Toast'
, 'Baked Pancakes', 'Cereal' , 'Bread Pudding'
, 'Omelletes' , 'Shakes'
, 'Hash' , 'Waffles' , 'Quiche' ]

var lunchList = ['Quesadillas'
, 'PBJs' , 'Pasties', 'Lasagna', 'Reubens', 'Burgers'
, 'Pot Pies', 'Mini Meatloaf and Broccoli Mash', 'Taco Bowls'
, 'Cabbage Roll Bowls', 'Blackened Fish Taco Bowls', 'Power Skillet'
, 'Enchiladas', 'Grilled Cheese and Tomato Soup']

var dinnerList = ['IP Chicken Parmesan', 'Fish Stew'
, 'White Chicken Chili', 'Ethiopian Cabbage'
, 'Vegan Black Bean Soup', 'Ginger Stir Fry'
, 'Chili', 'Potato Curry', 'Fish Sticks and Sweet Potato Fries', "Shepherd's Pie"
, 'Spaghetti', 'Meatloaf and Potatoes'
, 'Tuna Noodle Casserole', 'Pad Thai'
, 'Chicken Alfredo', 'One-Sheet Potato, Onion, and Flank Steak'
, 'One-Sheet Potato and Herbed Chicken', 'Burgers and Sweet Potato Fries'
, 'Carmelized Onion and Mushroom Pasta p. 74'
, 'Tuscan Cream Chicken', 'Chicken, Broccoli, and Mushroom Stir-Fry', 'Hubby Lovin Chicken']
    
    brkfast = getBreakfast(brkfstList);
    lunch = getLunch(lunchList);
    dinner = getDinner(dinnerList);

    var brkfstdev = document.getElementById("breakfast");
    brkfstdev.innerHTML = "Breakfast: " + brkfast + "<a href='https://www.google.com/search?q=" + brkfast + "+recipe' > See Recipe </a>";


    var lunchdev = document.getElementById("lunch");
    lunchdev.innerHTML = "Lunch: " + lunch + "<a href='https://www.google.com/search?q=" + lunch + "+recipe' > See Recipe </a>";

    var dinnerdev = document.getElementById("dinner");
    dinnerdev.innerHTML = "Dinner: " + dinner + "<a href='https://www.google.com/search?q=" + dinner + "+recipe' > See Recipe </a>";


    }


function getBreakfast (brkfstList) {
    var randomMeal = Math.floor(Math.random() * brkfstList.length);
    return brkfstList[randomMeal];
}

function getLunch (lunchList) {
    var randomMeal = Math.floor(Math.random() * lunchList.length);
    return lunchList[randomMeal];
}

function getDinner (dinnerList) {
    var randomMeal = Math.floor(Math.random() * dinnerList.length);
    return dinnerList[randomMeal];
}
