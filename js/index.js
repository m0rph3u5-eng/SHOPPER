﻿function new_entry() {
  var x = document.getElementById("new_entry");
  var xl = document.getElementById("new_entry_list");
  var xla = document.getElementById("new_entry_list_a");
 // var xlb = document.getElementById("new_entry_list_b");
  var xa = document.getElementById("new_entry_a");
 // var xpl = document.getElementById("plus");
  var ml = document.getElementById("main_list");
  var price = document.getElementById("price0");
  var comm = document.getElementById("newc");
  var newnew = document.getElementById("newnew");

  if (x.style.display == "none") {
    x.style.display = "block";
    xl.style.display = "block";
    ml.style.display = "none";
    price.style.display = "none";
    comm.style.display = "none";
    xa.className = "list-group-item list-group-item-action d-flex gap-3 py-3";
    xla.className = "list-group-item list-group-item-action d-flex gap-3 py-3";
   // xlb.style.display = "block";
    document.getElementById("plus").innerHTML = "<h4>-</h4>";
    newnew.style.display = "none";
  } else {
    x.style.display = "none";
    xl.style.display = "none";
    xa.className = "list-group-item list-group-item-action gap-3 py-3";
    xla.className = "list-group-item list-group-item-action gap-3 py-3";
//xlb.style.display = "none";
    ml.style.display = "block";
    price.style.display = "block";
    comm.style.display = "block";
    newnew.style.display = "block";
    document.getElementById("plus").innerHTML = "<h4>+</h4>";
  }
}

var list2 = [];
function saveLi() {
  var title1 = document.getElementById("title").value;
  var desc1 = document.getElementById("t_desc").value;
  var newdiv1 = document.getElementById("new_list1");

  console.log(title1);
  console.log(desc1);

  //alert("Your list has been saved!");

  //document.getElementById('new_list1').innerHTML = title1;
  const myHeader = document.createElement("h6");
  const myUser = document.createElement("p");
  const myDesc = document.createElement("p");
  const myDiv = document.createElement("div");
  const myDivPrime = document.createElement("div");
  const myLink = document.createElement("a");
  const myCost = document.createElement("small");

  myHeader.className = "mb-0";
  myUser.className = "mb-0 opacity-75";
  myDesc.className = "mb-0 opacity-75";
  myDiv.className = "d-flex gap-2 w-100 justify-content-between";
  myLink.className = "list-group-item list-group-item-action d-flex gap-3 py-3";
  myCost.className = "opacity-50 text-nowrap";
  myLink.href = "#";
  //myLink.addEventListener("click", call);

  myLink.ariaCurrent = true;

  myHeader.innerHTML = title1;
  myUser.innerHTML = "@Simon";
  myDesc.innerHTML = desc1;
  myCost.innerHTML = 1250;

  myHeader.appendChild(myUser);
  myDivPrime.appendChild(myHeader);
  myDivPrime.appendChild(myUser);
  myDivPrime.appendChild(myDesc);
  myDiv.appendChild(myDivPrime);
  myDiv.appendChild(myCost);
  myLink.appendChild(myDiv);

  document.getElementById("new_list1").appendChild(myLink);
  new_entry();

  console.log(list2);
  document.getElementById("heading").innerHTML = title1;
  document.getElementById("handle").innerHTML = "@Simon";
  //div newnew
  var newdiv2 = document.getElementById("newnew");

  for (i = 0; i < list2.length; i++) {
    const myNewItem = document.createElement("p");
    myNewItem.className = "mb-0 opacity-75";
    myNewItem.innerHTML = list2[i];
    document.getElementById("newnew").appendChild(myNewItem);
  }
  document.getElementById("item0").innerHTML = "";
  document.getElementById("item1").innerHTML = "";
  document.getElementById("item2").innerHTML = "";
  document.getElementById("item3").innerHTML = "";
  document.getElementById("item4").innerHTML = "";
  document.getElementById("item5").innerHTML = "";
  document.getElementById("item6").innerHTML = "";
  document.getElementById("item7").innerHTML = "";
  document.getElementById("item8").innerHTML = "";
  document.getElementById("item9").innerHTML = "";
}

function addLi() {

  var t_list = [];
  var title_main = [];
  var description = [];
  var list_item = [];
  var recipe = [];
  var main = [];

  var title1 = [];
  var txtVal = document.getElementById("txtVal").value,
    listNode = document.getElementById("list1"),
    liNode = document.createElement("li"),
    txtNode = document.createTextNode(txtVal),
    title = document.getElementById("title").value;
  description = document.getElementById("t_desc").value;
  liNode.appendChild(txtNode);
  listNode.appendChild(liNode);
  list2.push(txtVal);
  //console.log(list2);
  document.getElementById("newHeader").innerHTML = title;

  title_main = title;
  //list_item.push(txtVal);
}

function clearLi() {
  t_list = [];
  title_main = [];
  description = [];
  list_item = [];
  recipe = [];
  document.getElementById("list1").innerHTML = "";
  console.log("List cleared");
}

function addcom() {
  comments1 = document.getElementById('comments2').value;
  console.log(comments1);

  const usecom = document.createElement("p");
  const usetim = document.createElement("p");
  const divcom = document.createElement("div");
  const acom = document.createElement("a");
  usecom.className = "mb-0 opacity-75";
  usetim.className = "opacity-50 text-nowrap";
  divcom.className = "d-flex gap-2 w-100 justify-content-between";
  acom.className = "list-group-item list-group-item-action d-flex gap-3 py-3";
  acom.ariaCurrent = true;
  divcom.id = "newc1";
  usecom.innerHTML = "<b>@Simon </b> " +"<br>"+ comments1;
  usetim.innerHTML = "Now";

  document.getElementById("addc").appendChild(acom);
  acom.appendChild(divcom);
  divcom.appendChild(usecom);
  divcom.appendChild(usetim);

  // localStorage.setItem("list", JSON.stringify(order[0]));
  // localStorage.setItem("comments", JSON.stringify(comments1));
  // //var storedComments = JSON.parse(localStorage.getItem("comments"+"list"));
  // console.log("BREAK");
  // localStorage.comments1 = JSON.stringify(comments1);
  // var storedComments = JSON.parse(localStorage.comments1);
  // console.log(storedComments);


}

function showcomments() {
                    
  if (document.getElementById("comments").style.display == "block") {
    document.getElementById("comments").style.display = "none";
    document.getElementById("directions").style.display = "block";
    document.getElementById('top_comm').innerHTML = "Comments";
  } else {
    document.getElementById("comments").style.display = "block";
    document.getElementById("directions").style.display = "none";
    document.getElementById('top_comm').innerHTML = "Directions";
  }
  

 
}

function changeFunc() {
  var selectBox = document.getElementById("listType");
  var selectedValue = selectBox.options[selectBox.selectedIndex].value;
  var x = document.getElementById("directions");
  //alert(selectedValue);
  if (selectedValue === "recipe") {

    x.style.display = "block";
  } else {
    recipe = {};
    x.style.display = "none";
  }
  t_list = [];
  t_list = selectedValue;

}

function saveLi1() {
  recipe = [];
  recipe = document.getElementById('t_directions').value;


  //direct = recipe;
  alert("Your list has been saved!");
  main.push(t_list, title_main, description, list_item, recipe);
  //main = title_main.concat(description,list_item,recipe,t_list);

  console.log(main);


}

function addLi1() {
  const list2 = [];
  const title1 = [];
  var txtVal = document.getElementById('txtVal').value,
    listNode = document.getElementById('list1'),
    liNode = document.createElement("li"),
    txtNode = document.createTextNode(txtVal),
    title = document.getElementById('title').value;
  description = document.getElementById('t_desc').value;
  liNode.appendChild(txtNode);
  listNode.appendChild(liNode);
  list2.push(txtVal);
  //console.log(list2);
  document.getElementById('newHeader').innerHTML = title;

  title_main = title;
  list_item.push(txtVal);

}

function clearLi1() {
  t_list = [];
  title_main = [];
  description = [];
  list_item = [];
  recipe = [];
  document.getElementById("list1").innerHTML = "";
  console.log("List cleared");
}