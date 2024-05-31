var arr = [
    {
        dp:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3U0jUoJRywFAe5I4T-36fJeA6yYYgnqkC0g&usqp=CAU",
        story:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4IHGwhIz85s7xTup3WcBHvjKY9oMbi3-l3A&usqp=CAU",
    },
    {
        dp:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzwdZeo-lHsCdGfl1tt58Pae9vl-Pz4BdXRA&usqp=CAU",
        story:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO2CH2CUa2abaWPROUNkrx_rBT02yknzT0Dg&usqp=CAU",
    },
    {
        dp:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3DrW74M3V_QEy22WIFeKn89x8KHo5rUxyzw&usqp=CAU",
        story:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHhIaMSMxk9ddQym50DpmhCC7NBCq6wDFFxQ&usqp=CAU",
    },
    {
        dp:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRGNj10nfQbmNmgNf9Vp_VBZtEjwO7ySBrQQ&usqp=CAU",
        story:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdmWZh9VzNCYXGqvjQtF2d4lwOQor2FzKOKlmTJETkCF7qlC1lDHY9H6VmHvPYKnySZUg&usqp=CAU",
    },
    {
        dp:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3U0jUoJRywFAe5I4T-36fJeA6yYYgnqkC0g&usqp=CAU",
        story:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4IHGwhIz85s7xTup3WcBHvjKY9oMbi3-l3A&usqp=CAU",
    },
];
var storiyan = document.querySelector("#storiyan")
var clutter = "";

arr.forEach(function(elem,idx){
    clutter += `<div class ="story">
    <img id="${idx}" src="${elem.dp}" alt="pic">
    </div>`;
});

storiyan.innerHTML = clutter;

storiyan.addEventListener("click",function(dets) {
    document.querySelector("#fullscreen").style.display = "block"
    document.querySelector("#fullscreen").style.backgroundImage = `url(${arr[dets.target.id].story})`
    setTimeout(function(){
        document.querySelector("#fullscreen").style.display = "none"
    },3000)
});



