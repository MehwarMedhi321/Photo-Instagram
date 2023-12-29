let arr = [

    {dp:"hero4.png", story:"images/newGifCode.gif"},
    {dp:" tesheat4.jpg", story:"images/redpegion.webp"},
    {dp:"f6.jpg", story:"images/2 story.gif"},
    {dp:"f6.png",story:"images/3gif.gif"},
    {dp:"playstore.jpg", story:"images/ankit.jpg"},
    {dp:"hero4.png", story:"images/2 story.gif"},
    
]


let storiyan = document.querySelector("#storiyan")

let newOne = ""

arr.forEach(function(elem,indx){
    newOne += `<div class="story">
    <img id="${indx}" src="${elem.dp}" alt="">
</div>   `

});

storiyan.innerHTML = newOne

storiyan.addEventListener("click",function(detal){

document.querySelector("#fullscreen").style.display = "block"

document.querySelector("#fullscreen").style.backgroundImage = url(`${arr[detal.target.id].story}`)

setTimeout(function(){
    document.querySelector("#fullscreen").style.display = "none"
},3000)



});