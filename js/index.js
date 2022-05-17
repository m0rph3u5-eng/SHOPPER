function new_entry() {
  var x = document.getElementById("new_entry");
  var xl = document.getElementById("new_entry_list");
  var xla = document.getElementById("new_entry_list_a");
  var xa = document.getElementById("new_entry_a");
  var xpl = document.getElementById("plus");
  var ml = document.getElementById("main_list");
  var price = document.getElementById("price0");
  var comm = document.getElementById("oldc");
  if (x.style.display == "none") {

    x.style.display = "block";
    xl.style.display = "block";
    ml.style.display = "none";
    price.style.display = "none";
    comm.style.display = "none";
    xa.className = "list-group-item list-group-item-action d-flex gap-3 py-3";
    xla.className = "list-group-item list-group-item-action d-flex gap-3 py-3";
    document.getElementById('plus').innerHTML = "<h4>-</h4>";
  } else {

    x.style.display = "none";
    xl.style.display = "none";
    xa.className = "list-group-item list-group-item-action gap-3 py-3";
    xla.className = "list-group-item list-group-item-action gap-3 py-3";
    ml.style.display = "block";
    price.style.display = "block";
    comm.style.display = "block";
    document.getElementById('plus').innerHTML = "<h4>+</h4>";
  }
}

var list2 = [];
                function saveLi() {

                  var title1 = document.getElementById('title').value;
                  var desc1 = document.getElementById('t_desc').value;
                  var newdiv1 = document.getElementById('new_list1');

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
                  myLink.addEventListener('click', call);

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
                  myDiv.appendChild(myCost)
                  myLink.appendChild(myDiv);

                  document.getElementById("new_list1").appendChild(myLink);
                  new_entry();

                  console.log(list2);
                  document.getElementById('heading').innerHTML = title1;
                  document.getElementById('handle').innerHTML = "@Simon";
                  //div newnew
                  var newdiv2 = document.getElementById('newnew');

                  for (i = 0; i < list2.length; i++) {
                    const myNewItem = document.createElement("p");
                    myNewItem.className = "mb-0 opacity-75"
                    myNewItem.innerHTML = list2[i];
                    document.getElementById("newnew").appendChild(myNewItem);

                  }
                  document.getElementById('item0').innerHTML = "";
                  document.getElementById('item1').innerHTML = "";
                  document.getElementById('item2').innerHTML = "";
                  document.getElementById('item3').innerHTML = "";
                  document.getElementById('item4').innerHTML = "";
                  document.getElementById('item5').innerHTML = "";
                  document.getElementById('item6').innerHTML = "";
                  document.getElementById('item7').innerHTML = "";
                  document.getElementById('item8').innerHTML = "";
                  document.getElementById('item9').innerHTML = "";
                }