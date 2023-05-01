// Elements var.
const trendingBtn = document.getElementById("btn-trending");
const trendingThumb = document.getElementById("trending-thumbnail");
const trendingRecipes = document.getElementById("trending-recipes");
const trendingHeader = document.getElementById("trending-header");
const trendingRecipeDiv = document.getElementById("trending-recipe-div");
const popularRecipeDiv = document.getElementById("popular-recipe-div");
const popularBtn = document.getElementById("btn-popular");


// Trending Recipes Array

const trendingArray = [
    {
        foodImg: './images/burger.png',
        foodName: 'Homemade Beef Burger',
        foodIng: [
            '½ tbsp olive oil burger',
            '1 onion, peeled and finely chopped',
            '1 x 500g pack British Beef Steak Mince 15% fat',
            '1 tsp mixed dried herbs',
            '1 egg, beaten',
            '4 slices mature Cheddar (optional)',
            '4 white rolls',
            'A few round lettuce leaves, torn',
            '1 beef tomato, sliced',
            'Ketchup, to serve (optional)'
        ]
    },
    {
        foodImg: './images/turkey.png',
        foodName: 'Thanksgiving Turkey',
        foodIng: [
            '1 12-20 pound turkey*',
            '1 onion , peeled and quartered',
            '1 lemon , quartered',
            '1 apple (your favorite kind), quartered',
            '.75 ounce container fresh rosemary*',
            '.75 ounce container fresh thyme*',
            '.75 ounce container fresh sage*',

        ]
    },
    {
        foodImg: './images/pizza.png',
        foodName: 'Homemade Pizza',
        foodIng: [
            '1 12-20 pound pizza',
            '1 onion , peeled and quartered',
            '1 lemon , quartered',
            '1 apple (your favorite kind), quartered',
            '.75 ounce container fresh rosemary*',
            '.75 ounce container fresh thyme*',
            '.75 ounce container fresh sage*',

        ]
    },
    {
        foodImg: './images/classicpasta.png',
        foodName: 'Quick Veggie Pasta',
        foodIng: [
            '1/2 lb. linguine',
            '4 oz. mushrooms',
            '1 cup grape tomatoes',
            '1 Tbsp cooking oil',
            '4 oz. fresh spinach',
            '1 Tbsp butter*',
            '1/4 tsp garlic powder',

        ]
    }
];


// Trending Recipe Elements


const createTrendingUl = document.createElement("ul");
trendingRecipeDiv.appendChild(createTrendingUl);
createTrendingUl.setAttribute("class", "recipe-ul");
createTrendingUl.setAttribute("id", "trending-recipes");

const createTrendingThumHeader = document.createElement("li");
createTrendingUl.appendChild(createTrendingThumHeader);

const createTrendingThumbnail = document.createElement("img")
createTrendingThumbnail.setAttribute("class", "recipe-thumbnail");
createTrendingThumbnail.setAttribute("id", "trending-thumbnail");
createTrendingThumHeader.appendChild(createTrendingThumbnail);

const createTrendingHeader = document.createElement("h4")
createTrendingHeader.setAttribute("id", "trending-header");
createTrendingThumHeader.appendChild(createTrendingHeader);



// Main Trending Recipe Thumbnail
createTrendingThumbnail.setAttribute("src", trendingArray[0].foodImg);
createTrendingHeader.textContent = trendingArray[0].foodName;



// Show a Recipe button function
trendingBtn.addEventListener("click", changeTrendingFood);

// This function will create a new ul > li , get info from the array.

function changeTrendingFood() {

    // Random Object from an Array.
    const randomTrendingIndex = Math.floor(Math.random() * trendingArray.length);
    const randomTrending = trendingArray[randomTrendingIndex];


    createTrendingThumbnail.setAttribute("src", randomTrending.foodImg);
    createTrendingHeader.textContent = randomTrending.foodName;

    // Remove existing li elements
    createTrendingUl.querySelectorAll('li:not(:first-child').forEach(li => li.remove());

    // Create li elements for each ingredient

    randomTrending.foodIng.forEach(ingredient => {

        const createLi = document.createElement("li");
        createTrendingUl.appendChild(createLi);
        createLi.innerHTML = ingredient;


    });


}


// Popular Recipes Array
const popularArray = [
    {
        foodImg: './images/greeksalad.png',
        foodName: 'Greek Salad',
        foodIng: [
            '1 English cucumber, cut lengthwise, seeded, and sliced ¼-inch thick',
            '1 green bell pepper, chopped into 1-inch pieces',
            '2 cups halved cherry tomatoes',
            '5 ounces feta cheese, cut into ½ inch cubes*',
            '⅓ cup thinly sliced red onion',
            '⅓ cup pitted Kalamata olives',
            '⅓ cup fresh mint leaves',

        ]
    },
    {
        foodImg: './images/tilapia.png',
        foodName: 'Pan-Seared Tilapia Salad',
        foodIng: [
            '2 cups loosely packed salad greens',
            '8 ounces cherry tomatoes',
            '½ English cucumber',
            '1 tablespoon fresh chives',
            '10 basil leaves',
            '1 teaspoon olive oil',
            '2 teaspoons lemon juice',

        ]
    },
    {
        foodImg: './images/fishandsalad.png',
        foodName: 'White Fish Salad',
        foodIng: [
            '3 large sweet potatoes, peeled',
            '3 tbsp (45 ml) olive oil',
            '4 fillets tilapia (or other skinless white fish)',
            '2 tbsp (30 ml) lemon juice',
            '2 tbsp (30 ml) mirin',
            '1/2 tsp (2.5 ml) sambal oelek',
            '3 Lebanese cucumbers, and cut into half-slices',

        ]
    },
    {
        foodImg: './images/sushi.png',
        foodName: 'Homemade Sushi',
        foodIng: [
            '6 sheets sushi seaweed',
            '1 batch prepared sushi rice',
            '1/2 lb sashimi-grade raw salmon',
            '4 oz cream cheese',
            '1 avocado ',
            'soy sauce ',


        ]
    }


]


// Popular Recipe Elements

const createPopularUl = document.createElement("ul");
popularRecipeDiv.appendChild(createPopularUl);
createPopularUl.setAttribute("class", "recipe-ul");
createPopularUl.setAttribute("id", "popular-recipes");

const createPopularThumHeader = document.createElement("li");
createPopularUl.appendChild(createPopularThumHeader);

const createPopularThumbnail = document.createElement("img");
createPopularThumbnail.setAttribute("class", "recipe-thumbnail");
createPopularThumbnail.setAttribute("id", "popular-thumbnail");
createPopularThumHeader.appendChild(createPopularThumbnail);

const createPopularHeader = document.createElement("h4");
createPopularHeader.setAttribute("id", "popular-header");
createPopularThumHeader.appendChild(createPopularHeader);


// Main Popular Recipe Thumbnail
createPopularThumbnail.setAttribute("src", popularArray[0].foodImg);
createPopularHeader.textContent = popularArray[0].foodName


// Button Function

popularBtn.addEventListener("click", changePopularFood);


function changePopularFood() {

    const randomPopularIndex = Math.floor(Math.random() * popularArray.length);
    const randomPopular = popularArray[randomPopularIndex];

    createPopularThumbnail.setAttribute("src", randomPopular.foodImg);
    createPopularHeader.textContent = randomPopular.foodName;

    // Remove Existing li

    createPopularUl.querySelectorAll('li:not(:first-child)').forEach(li => li.remove());

    // Create Li
    randomPopular.foodIng.forEach(ingredient => {
        const createLi = document.createElement("li");
        createPopularUl.appendChild(createLi);
        createLi.innerHTML = ingredient;
    }
    )

}