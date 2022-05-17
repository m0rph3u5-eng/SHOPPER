console.log("fetch json");

fetch("w_list.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log(err);
  });

function appendData(data) {
  for (i = 0; i < data.length; i++) {
    //console.log(data[i].type);
    //console.log(data[i].title);
    // console.log(data[i].user);
    // console.log(data[i].description);
    // console.log(data[i].cost);

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
    myLink.className =
      "list-group-item list-group-item-action d-flex gap-3 py-3";
    myCost.className = "opacity-50 text-nowrap";
    myLink.href = "#";
   // myLink.addEventListener("click", call);

    myLink.ariaCurrent = true;
    myHeader.innerHTML = data[i].title;
    myUser.innerHTML = data[i].user;
    myDesc.innerHTML = data[i].description;
    myCost.innerHTML = data[i].cost;

   

    myHeader.appendChild(myUser);
    myDivPrime.appendChild(myHeader);
    myDivPrime.appendChild(myUser);
    myDivPrime.appendChild(myDesc);
    myDiv.appendChild(myDivPrime);
    myDiv.appendChild(myCost);
    myLink.appendChild(myDiv);

    document.getElementById("des_col").appendChild(myLink);
  }
}


function comment21() {
    fetch("w_comments.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (datac) {
        appendData(datac);
      })
      .catch(function (err) {
        console.log(err);
      });

    function appendData(datac) {

      //div newnew
      //var newdiv3 = document.getElementById('newc');


      for (i = 0; i < datac.length; i++) {

        if (datac[i].user == "@Nancy") {
          console.log(datac[i].comment);
          console.log(datac[i].time);
          // const myNewItem = document.createElement("p");
          // myNewItem.className = "mb-0 opacity-75"
          // myNewItem.innerHTML = data[i].item;
          // document.getElementById("newc").appendChild(myNewItem);

        } else {

        }

      }
    }
  } 
