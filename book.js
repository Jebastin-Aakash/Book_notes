//selecting popup_box,popup_overlay,button
var popup_overlay=document.querySelector(".popup_overlay")
var popup_box=document.querySelector(".popup_box")
var Addbutton=document.getElementById("add_popup_button")
Addbutton.addEventListener("click",function(){
    popup_overlay.style.display="block"
    popup_box.style.display="block"
})
//select cancel button
var cancel=document.getElementById("cancel_book")
cancel.addEventListener("click",function(){
    event.preventDefault()
    popup_overlay.style.display="none"
    popup_box.style.display="none"
})
// select container,add_book,book_title,des.author
var container=document.querySelector(".container")
var addbook=document.getElementById("add_book")
var book_title=document.getElementById("book_title_input")
var book_author=document.getElementById("book_author_input")
var book_discrip=document.getElementById("book_discription_input")
addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book_container")
    div.innerHTML=`<h2>${book_title.value}</h2>
    <h5>${book_author.value}</h5>
    <p>${book_discrip.value}</p>
    <button onclick="deletebook(event)">delete</button>`

    container.append(div)
    popup_overlay.style.display="none"
    popup_box.style.display="none"
})
function deletebook(event){
    event.target.parentElement.remove()
}