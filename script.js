
// function hideAndShow(){
//     
//     sideBar =document.getElementById("Side-bar-links")
//     sideBar.style.position = "relative"
//     sideBar.style.marginTop = "41px";
//         // Check if the element has the 'highlight' class
//         sideBar.classList.toggle("hide-sidebar")
//       
// }

let bar_button = document.getElementById("bar-button")

bar_button.addEventListener('click',()=>{
    side_bar = document.getElementById("Side-bar-links")
    side_bar.classList.toggle("bar1")
    console.log("HII")
})