var restart = document.querySelector("#One");

var tableValues = document.querySelectorAll("td");

// var tableKey = {0:tableValues[0]}

//Makes all the content of the table blank or resets the game.
restart.addEventListener("click",function(){
  for(var i =0; i < 9;i++){
    tableValues[i].textContent = "";
  }
});


//In an event, this refers to the element that received the event.

function change(){
  if (this.textContent === ""){
    this.textContent = "X";
  }
  else if(this.textContent === "X"){
    this.textContent = "O";
  }
  else{
    this.textContent = "";
  }
}

for (var i =0;i<tableValues.length;i++){
  tableValues[i].addEventListener("click",change);
}

var check = document.querySelector("#two");


//checks for all the winning cases.
check.addEventListener("click",function(){
  if((tableValues[0].textContent && tableValues[1].textContent && tableValues[2].textContent) === "X"){
    alert("X is the winner!");
  }
  else if((tableValues[3].textContent && tableValues[4].textContent && tableValues[5].textContent) === "X"){
    alert("X is the winner!");
  }
  else if((tableValues[6].textContent && tableValues[7].textContent && tableValues[8].textContent) === "X"){
    alert("X is the winner!");
  }
  else if((tableValues[0].textContent && tableValues[3].textContent && tableValues[6].textContent) === "X"){
    alert("X is the winner!");
  }
  else if((tableValues[1].textContent && tableValues[4].textContent && tableValues[7].textContent) === "X"){
    alert("X is the winner!");
  }
  else if((tableValues[2].textContent && tableValues[5].textContent && tableValues[8].textContent) === "X"){
    alert("X is the winner!");
  }
  else if((tableValues[0].textContent && tableValues[4].textContent && tableValues[8].textContent) === "X"){
    alert("X is the winner!");
  }
  else if((tableValues[2].textContent && tableValues[4].textContent && tableValues[6].textContent) === "X"){
    alert("X is the winner!");
  }

  else if((tableValues[0].textContent && tableValues[1].textContent && tableValues[2].textContent) === "O"){
    alert("O is the winner!");
  }
  else if((tableValues[3].textContent && tableValues[4].textContent && tableValues[5].textContent) === "O"){
    alert("O is the winner!");
  }
  else if((tableValues[6].textContent && tableValues[7].textContent && tableValues[8].textContent) === "O"){
    alert("O is the winner!");
  }
  else if((tableValues[0].textContent && tableValues[3].textContent && tableValues[6].textContent) === "O"){
    alert("O is the winner!");
  }
  else if((tableValues[1].textContent && tableValues[4].textContent && tableValues[7].textContent) === "O"){
    alert("O is the winner!");
  }
  else if((tableValues[2].textContent && tableValues[5].textContent && tableValues[8].textContent) === "O"){
    alert("O is the winner!");
  }
  else if((tableValues[0].textContent && tableValues[4].textContent && tableValues[8].textContent) === "O"){
    alert("O is the winner!");
  }
  else if((tableValues[2].textContent && tableValues[4].textContent && tableValues[6].textContent) === "O"){
    alert("O is the winner!");
  }

})
