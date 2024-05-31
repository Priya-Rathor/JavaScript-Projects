var str=document.querySelector("h5")
var add=document.querySelector("#add")
var btn=document.querySelector("button")
var flag=0
add.addEventListener("click",function(){
   if(flag==0)
   { str.innerHTML="Friends"
    str.style.color="lightgreen"
    flag=1
    btn.textContent="Remove"
    btn.style.color="black"

    btn.style.backgroundColor="lightgrey"
}else{
str.innerHTML="Stranger"
str.style.color="red"
btn.style.backgroundColor="lightgreen"
btn.textContent="Add Friend"
btn.style.color="white"
flag=0
}
    
})

