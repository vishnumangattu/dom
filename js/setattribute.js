// create new attribute
// document.getElementById("main").setAttribute("class","new")

// get attribute names
// const cls= document.getElementById("main").getAttribute("class")
// console.log(cls)

// remove attribute
// document.getElementById("main").removeAttribute("class")

// document.getElementById("main").style.backgroundColor="green"

// let tag=document.createElement("h1")
// tag.textContent="hello team"
// document.getElementById("main").appendChild(tag)

function clickMe()
{
    let tag=document.createElement("h1")
    tag.textContent="hello team"
    document.getElementById("main").appendChild(tag)
}


