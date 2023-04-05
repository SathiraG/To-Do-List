let input = document.getElementById("input")
const enterBtn = document.getElementById("enterBtn")
let list= document.getElementById("list")
let listArray = []

const listArrayPast = JSON.parse( localStorage.getItem("list") )
render()

if (listArrayPast){
    listArray = listArrayPast
    render()
}


enterBtn.addEventListener("click", function(){
    listArray.push(input.value)
    console.log(listArray)
    input.value = ""
    localStorage.setItem("list", JSON.stringify(listArray))
    render()
})

function deleteItem(number){
    listArray.splice(number, 1)
    console.log(listArray)
    console.log(number)
    render()
    localStorage.setItem("list", JSON.stringify(listArray))
}

function render(){
    let tempList = ""
    for(let i = 0; i < listArray.length; i++){
        tempList += `
            <li id="${i}">${listArray[i]} <img src="delete.png" id="${i}" style="width: 15px; height: auto; " 
            onclick="deleteItem(${i})" onmouseover="deleteF(this)" onmouseout="deleteFF(this)"> </li>
            <hr>
        `
        
    }
    list.innerHTML = tempList
}

function deleteF(img){
    img.src = "delete1.png"
}
function deleteFF(img){
    img.src = "delete.png"
}


/*
.deleteImg{
    background: url("delete.png") no-repeat;
}
.deleteImg:hover{
    background: url("delete1.png") no-repeat;
}

*/
