const searchBtn=document.getElementById("search-btn").addEventListener("click",function(){

    const mealInput=document.getElementById("meal-input").value;
    getMeal(mealInput);



})

function getMeal(mealInput){

    // fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    // .then(response =>response.json())
    // .then(data=>{

    //     console.log(data);
    //     const foodNameDiv=document.getElementById("food-name");
       
    //    data.categories.forEach(element => {
    //                //console.log(element.strCategory);
    //         const foodDiv=document.createElement("div");
    //         foodDiv.className="food"
    //       if(mealInput==element.strCategory){
    //         const foodInfo= `
                
    //             <h3 class="food-header">${element.strCategory}</h3>
    //             <button onclick="displayMealDetail('${element.strCategory}')">Detail</button>
    //         `
    //         foodDiv.innerHTML=foodInfo;
    //         foodNameDiv.appendChild(foodDiv);
    //       }
    //    });
       
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealInput}`
    fetch(url)
    .then(response =>response.json())
    .then(data=>{

        console.log(data);
        const foodNameDiv=document.getElementById("food-name");
       
       data.meals.forEach(element => {
                   //console.log(element.strCategory);
            const foodDiv=document.createElement("div");
            foodDiv.className="food"
          //if(mealInput==element.strCategory){
            const foodInfo= `
                
                <h3 class="food-header">${element.strMeal}</h3>
                <img src="${element.strMealThumb}">
                <button onclick="displayMealDetail('${element.strCategory}')">Detail</button>
            `
            foodDiv.innerHTML=foodInfo;
            foodNameDiv.appendChild(foodDiv);
          //}
       });
       
       
       
        // for (let index = 0; index < data.categories.length; index++) {
        //     const element = data.categories[index];
        //     console.log(element.strCategory);
        //     const foodDiv=document.createElement("div");
        //     foodDiv.className="food"
        //     const foodInfo= `
                
        //         <h3 class="food-header">${element.strCategory}</h3>
            
        //     `
        //     foodDiv.innerHTML=foodInfo;
        //     foodNameDiv.appendChild(foodDiv);
            
        // }
        //console.log(data.categories[0].strCategory);
        

    })



}

const displayMealDetail=meal=>{

    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>renderMealInfo(data.meals[0]));


}

const renderMealInfo=meal=>{
    console.log(meal);
    const mealDiv=document.getElementById("meal-detail");
    mealDiv.innerHTML=`

        <img src="${meal.strMealThumb}">
        <h1>${meal.strMeal}</h1>
        <h5>Ingredients</h5>
        <ul>
        <li>${meal.strIngredient1}</li>
        <li>${meal.strIngredient2}</li>
        <li>${meal.strIngredient3}</li>
        <li>${meal.strIngredient4}</li>
        <li>${meal.strIngredient5}</li>
        <li>${meal.strIngredient6}</li>
        <li>${meal.strIngredient7}</li>
        <li>${meal.strIngredient8}</li>
        <li>${meal.strIngredient9}</li>
        <li>${meal.strIngredient10}</li>
        
        </ul>

    
    `


}