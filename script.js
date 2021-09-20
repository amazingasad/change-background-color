let inputField = document.getElementById("input-field");
let button = document.getElementById("button");
function changeBackground(){
    let colors = ["green", "red", "orangered", "yellow", "coral", "#354248", "blue", "teal", "tomato", "#3a567a"];
    let randomIndex = Math.random() * 9;
    randomIndex = Math.round(randomIndex);
    document.body.style.backgroundColor = colors[randomIndex];
}
button.addEventListener("click", function(){
    if(document.getElementById("input-field").value == ""){
        changeBackground();
    }
    else{
        document.body.style.backgroundColor = inputField.value;
    }
})
