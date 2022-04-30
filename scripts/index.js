import navbar from "../components/navbar.js";

document.querySelector("#navbar").innerHTML=navbar()

//search & debouncing

let forcreate = (para)=>{
return document.createElement(para)
}



let id;

let show = async ()=>{

try{
    let input = document.querySelector("#input").value;

  
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`
    
    
    let res = await fetch(url)
    let data = await res.json()
    
    let exactData = data.meals
    console.log('exactData:', exactData)
   
    if(input===""){
        return false
    }
    
     else{
        return  exactData
     }
     
   
    
    
}
catch(err){
    console.log('err:', err)

}
}





let append = (data)=>{



let container = document.querySelector("#container")
container.textContent = null;

data.map(({strMeal})=>{


    let p = forcreate("p")
    
    p.textContent = strMeal;
    
container.append(p)

})

}


let main = async()=>{

let data = await show();

if(data === undefined){
    return false;
}
append(data)

}

let debouncing = (func,delay)=>{

    if(id){

        clearTimeout(id)
        
    }

    id = setTimeout(()=>{
        
       main()

    },1000)
}


document.querySelector("#input").addEventListener("input",debouncing)


let data = JSON.parse(localStorage.getItem("data"))

let dataone = ()=>{
    let  username = document.createElement("p")
    let  email = document.createElement("p")
    let  des = document.createElement("p")
    let  mobile = document.createElement("p")

    username.textContent = `User Name : ${data.username}`
    email.textContent = `Email Id : ${data.email}`
    mobile.textContent = `Mobile No : ${data.mobile}`
    des.textContent = `User Description : ${data.description}`

    document.querySelector("#party").append(username,email,mobile,des)
}
dataone()