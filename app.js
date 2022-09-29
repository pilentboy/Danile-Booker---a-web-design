const searchBTN=document.querySelector(".searchbtn")
const searchIput=document.querySelector(".searchInput")
const body=document.querySelector(".body")
const hamburger=document.querySelector(".hamburger")
const links=document.querySelector(".links")
const hamberguer_icon=document.querySelector(".hamberguer-icon")

// show nav links 
hamburger.addEventListener("click",()=>{
    links.classList.toggle("linksActive")
    hamberguer_icon.classList.toggle("fa-bars")
    hamberguer_icon.classList.toggle("fa-close")

    hideSearchInput()
})

function changeHamberguerIcon(){
    hamberguer_icon.classList.add("fa-bars")
    hamberguer_icon.classList.remove("fa-close")
}

function hideSearchInput(){
    searchIput.classList.remove("searchActive")

}
function hideNavlINKS(){
    links.classList.remove("linksActive")

}
// when user click on search Icon this function starts working!
searchBTN.addEventListener("click",()=>{
    if(body.clientWidth <= "1134"){
        searchIput.classList.toggle("searchActive")
    }

    if(searchIput.value.length >=1){
        searchInWebsite()
    }
    hideNavlINKS()
    changeHamberguerIcon()
})


//search in website function 
function searchInWebsite(){
    // it's not working yet!
    console.log("searching")
    searchIput.value="";
}