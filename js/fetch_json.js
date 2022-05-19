let user;
let order;

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

    myLink.ariaCurrent = true;
    myHeader.innerHTML = data[i].title;
    myUser.innerHTML = data[i].user;
    myDesc.innerHTML = data[i].description;
    myCost.innerHTML = data[i].cost;

    myLink.onclick = function setTitle() {
      order = [myHeader.innerHTML];

      var mail = [];
      user = [myUser.innerHTML];
      mail.push("mailto:nancy@example.com?subject=shoppinglist&body=bargain");

      fetch("w_list_items.json")
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
        if (myHeader.innerHTML == data[0].list) {
          //console.log("Match");
        } else {
          //console.log("No Match");
        }
        document.getElementById("heading").innerHTML = myHeader.innerHTML;
        document.getElementById("handle").innerHTML = myUser.innerHTML;
        document.getElementById("price0").innerHTML = myCost.innerHTML;
        //div newnew
        var newdiv2 = document.getElementById("newnew");
        newdiv2.innerHTML = "";
        for (i = 0; i < data.length; i++) {
          //= data.find(data => data.list === myHeader.innerHTML);

          if (data[i].list === myHeader.innerHTML) {
            //console.log(data[i].item);
            const myNewItem = document.createElement("p");
            myNewItem.className = "mb-0 opacity-75";
            myNewItem.innerHTML = data[i].item;
            document.getElementById("newnew").appendChild(myNewItem);
          } else {
          }
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
          var newdivcom = document.getElementById("newc");
          newdivcom.innerHTML="";
          for (i = 0; i < datac.length; i++) {
            if (datac[i].list == myHeader.innerHTML) {
            //   console.log(datac[i].comment);
            //   console.log(datac[i].time);
              const myNewItem = document.createElement("p");
              const myNewA = document.createElement("a");
              const myNewComDiv = document.createElement("div");
              const myNewNestComDiv = document.createElement("div");
              const myNewSmall = document.createElement("small");
              myNewA.className = "list-group-item list-group-item-action d-flex gap-3 py-3";
              myNewComDiv.className = "d-flex gap-2 w-100 justify-content-between";
              myNewSmall.className ="opacity-50 text-nowrap";
              myNewItem.className = "mb-0 opacity-75";
              myNewItem.innerHTML = "<b>"+ datac[i].name+ "</b>" + " " +datac[i].comment;
              myNewSmall.innerHTML =datac[i].time;
             
              myNewNestComDiv.appendChild(myNewItem);
              
              myNewComDiv.appendChild(myNewNestComDiv);
              myNewComDiv.appendChild(myNewSmall);
              myNewA.appendChild(myNewComDiv);

              document.getElementById("newc").appendChild(myNewA);
            } else {
            }
          }
        }
      }
      comment21();
    };

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
function orderf() {
  if (
    confirm("Do you want to place an order to " + user + " for " + order + "?")
  ) {
    window.open();
  } else {
  }
}
