
import navbar from "../components/navbar.js";
document.querySelector("#navbar").innerHTML = navbar();


let url = "https://www.themealdb.com/api/json/v1/1/random.php"
let container = document.querySelector("#container")

import {getData,append} from "./fetch.js"





getData(url).then((res)=>{
    append(res,container);
})
