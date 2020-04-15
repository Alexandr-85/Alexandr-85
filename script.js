const buttonAdd = document.querySelector("#btn-add");
const buttonDelete = document.querySelector("#btn-delete");
const input = document.querySelector("#input");
const search = document.querySelector("#search");
const itemsList = document.querySelector("#items-list");
const count1 = document.querySelector(".count1");
const count2 = document.querySelector(".count2");
const btn_All = document.querySelector("#btn-All");
const btn_Active = document.querySelector("#btn-Active");
const btn_Done = document.querySelector("#btn-Done");




buttonAdd.addEventListener("click", addTODO);
search.addEventListener("keyup", searchTODO);
input.addEventListener("keyup", event => {
  if (event.keyCode === 13) {
    buttonAdd.click();
  }
});

btn_All.addEventListener("click", ()=>{

  allActive();
});



btn_Done.addEventListener("click", ()=>{

  showDone();

});




btn_Active.addEventListener("click", ()=>{

 showActive();
});


function showDone( ) {
	
     allActive( );
activListt = document.querySelectorAll("#items-list>li>span:not(.checked)");
console.log(activListt);
  for(let i=0; i<activListt.length; i++) {
    arr=activListt[i].parentNode.classList.add("hide");
	console.log(arr);
  }
  
}

function allActive( ) {
    for(let i=0; i<itemsList.children.length; i++) {
      itemsList.children[i].classList.remove("hide");
	
    }
	 
}

function showActive( ) {
     allActive(); 
activList = document.querySelectorAll("#items-list>li>.checked");
console.log(activList);
  for(let i=0; i<activList.length; i++) {
    activList[i].parentNode.classList.add("hide");
	
  }
}



function addTODO() {
  if (input.value === "") {
    alert("Please enter a TODO!");
    return;
  }
  const newItem = document.createElement("li");
  const text = document.createElement("span");
  text.appendChild(document.createTextNode(input.value));

  text.addEventListener("click", crossTODO);
  

  newItem.className = "item";
 
  newItem.appendChild(text);
  
  const div = document.createElement("div");

  itemsList.appendChild(newItem);
  input.value = "";
  
  createDeleteButton(div);
  createImportantButton(div);
  infoScore();
 

 
  
  div.className = "click-buttons";
  newItem.appendChild(div);
  

} 
  

function importantTODO( ) {
  
event.target.closest('.item').classList.toggle("important");
}






function deleteTODO( ) {
  
  event.target.closest('.item').remove();
  infoScore();
}


function crossTODO( ) {
  event.target.classList.toggle("checked");
  infoScore();

}



function infoScore() { 

if(itemsList.querySelectorAll('.item').length > 0){ 
count1.innerText = itemsList.querySelectorAll('.item').length 
}else{ 
count1.innerText = 0; 
} 

if(itemsList.querySelectorAll('.checked').length > 0){ 
count2.innerText = itemsList.querySelectorAll('.checked').length;
count1.innerText = count1.innerText - count2.innerText;
}else{ 
count2.innerText = 0; 
} 

}






function searchTODO() {
  const searchValue = search.value.toLowerCase();

  itemsList.querySelectorAll("li").forEach(item => {
    const text = item.innerText.toLowerCase();

    if (text.includes(searchValue)) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}



function createDeleteButton(item) {
  const deleteButton = document.createElement("button");

  deleteButton.className = "delete";
  deleteButton.innerHTML ='<i class="fa fa-trash-o" aria-hidden="true"></i>';
  
  deleteButton.addEventListener("click", deleteTODO);

  item.appendChild(deleteButton);
 
}


function createImportantButton(item) {
  const importantButton = document.createElement("button");

  importantButton.className = "importantButton";
  importantButton.innerHTML ='!';
  
  importantButton.addEventListener("click", importantTODO);

  item.appendChild(importantButton);
}








