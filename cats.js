document.body.innerHTML= `

<div class="search-bar">
    <input class="search-tag" placeholder ="Enter a tag"/>
    <a onclick="filter()" class="waves-effect waves-light btn">Filter</a>
</div>
<section class ="cat-list">
</section>`;

async function getAllCats(){

    const data = await fetch(
        "https://cataas.com/api/cats",
        {method: "GET"}
    ); 
    const cataas = await data.json();

    const catContainer = document.querySelector(".cat-list");

    cataas.forEach((cat) => {

        catContainer.innerHTML += `
        <div class = "cat-container">
            <img id="catPop" class= "cat-pic" src="https://cataas.com/cat/${cat.id}">
            <div id="myModal" class="modal">

                <!-- The Close Button -->
                <span class="close">&times;</span>

                <!-- Modal Content (The Image) -->
                <img class="modal-content" id="catPop">

            </div>
                    <p class ="id">${cat.id}</p><br>
                    <p id="cTags" class="tags">${cat.tags}</p>
                
        </div>    
         
                

        `;
        
    });
    console.log(cataas);
}
getAllCats();


// code for image popup has taken from w3schools website:

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal 
var img = document.getElementById("catPop");
var modalImg = document.getElementById("catPop");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}





async function filter(){
    const data = await fetch("https://cataas.com/api/cats",
      
        {method: "GET" }
        ); 
    
    const cataas = await data.json();

    
        document.getElementById("cTags").innerHTML = `${cat.tags}.value`;

        document.getElementById
    

    
    
   

}
filter();