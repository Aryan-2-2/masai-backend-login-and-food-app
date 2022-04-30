
//https://www.themealdb.com/api/json/v1/1/random.php

let getData = async ()=>{

    try{
    
        let url = "https://www.themealdb.com/api/json/v1/1/random.php"
        let res = await fetch(url);
         let data = await res.json();
         console.log('data:', data.meals)


         return data.meals
     
    
    }
    catch(err){
    console.log('err:', err)
    
    }
    
    }
 
    let append = (data ,container)=>{
        
        data.map(({strMeal,strArea,strCategory,strInstructions,strMealThumb,strYoutube})=>{
        
        let name = document.createElement("p")
        let state = document.createElement("p")
        let cat = document.createElement("p")
        let int = document.createElement("p")
        let image = document.createElement("img")
        let iframe = document.createElement("iframe")


        name.textContent =  strMeal
        state.textContent =  strArea
        cat.textContent =  strCategory
        int.textContent =  strInstructions
        image.src =  strMealThumb

 var link ="https://www.youtube.com/embed/" 

iframe.src = link+strYoutube
iframe.width = "100%"
iframe.height = "100%"
iframe.allow = "fullscreen"




let box1 = document.createElement("div")
let box2 = document.createElement("div")
let box3 = document.createElement("div")



box1.append(name,state,cat)
box2.append(int)
box3.append(image,iframe)

 container.append(box1,box2,box3)
        
        })
        
        }
    
        export  {getData,append}
