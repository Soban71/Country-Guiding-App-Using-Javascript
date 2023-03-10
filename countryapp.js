let btn=document.getElementById("btn");
let result=document.getElementById("result");

btn.addEventListener("click",()=>
{    

    // console.log(Country);
    let searchbar=document.getElementById("searchbar").value.trim();
        
    let url='https://restcountries.com/v3.1/name/'+searchbar+'?fullText=true';
    console.log(url);

fetch(url).then((response)=>response.json()).then((data)=>
{
 /*   console.log(data[0]);
console.log(data[0].flags.svg);

console.log(data[0].capital[0]);
console.log(Object.values(data[0].languages).toString().split(",").join(","));
console.log(data[0].population);
*/
    
result.innerHTML=`
<img src="${data[0].flags.svg}" class="flag"> 

<h2>${data[0].name.common}</h2>
<h4> <b>Capital</b>: ${data[0].capital[0]}</h4>
<h4><b>Languages</b>: ${Object.values(data[0].languages).toString().split(",").join(",")}</h4>
<h4><b>Currency</b>:  ${Object.keys(data[0].currencies)[0]}</h4>
<h4><b>Population</b>: ${data[0].population}</h4>
`;
})
.catch(()=>
{

    if(searchbar.length==0)
    {
        result.innerHTML='<h3>Please insert country name</h3>'
        searchbar.values="";
    }
    else{
        result.innerHTML='<h3>Invalid name please enter correct name</h3>'
        searchbar.values="";
    }
});



});