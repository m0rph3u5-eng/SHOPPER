let user;
let order;
let mail;

//fetch for first column data from json file
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
    //create elements
    const myHeader = document.createElement("h6");
    const myUser = document.createElement("p");
    const myDesc = document.createElement("p");
    const myDiv = document.createElement("div");
    const myDivPrime = document.createElement("div");
    const myLink = document.createElement("a");
    const myCost = document.createElement("small");

    //apply styling to the elements
    myHeader.className = "mb-0";
    myUser.className = "mb-0 opacity-75";
    myDesc.className = "mb-0 opacity-75";
    myDiv.className = "d-flex gap-2 w-100 justify-content-between";
    myLink.className =
      "list-group-item list-group-item-action d-flex gap-3 py-3";
    myCost.className = "opacity-50 text-nowrap";
    myLink.ariaCurrent = true;

    //apply values to the created elements
    myLink.href = "#";
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

    //show list when list type is selected
    myLink.onclick = function setTitle() {
      order = [myHeader.innerHTML];

      user = [myUser.innerHTML];

      //fetch for second column data from json file
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
        document.getElementById("heading").innerHTML = myHeader.innerHTML;
        document.getElementById("handle").innerHTML = myUser.innerHTML;
        document.getElementById("price0").innerHTML = myCost.innerHTML;

        mail = [data[i].whatsapp];
        console.log(data[i].whatsapp);
        var newdiv2 = document.getElementById("newnew");
        newdiv2.innerHTML = "";
        newdiv2.className = "d-flex gap-2 w-100 justify-content-between";
        const myOl = document.createElement("ol");
        myOl.className = "list-group list-group-numbered d-flex p-2";

        for (i = 0; i < data.length; i++) {
          if (data[i].list === myHeader.innerHTML) {
            // const myNewItem = document.createElement("p");
            // myNewItem.className = "mb-0 opacity-75";
            //  myNewItem.innerHTML = data[i].item;
            // document.getElementById("newnew").appendChild(myNewItem);

            const myNewItem = document.createElement("li");
            myNewItem.className = "list-group-item";
            myNewItem.innerHTML = data[i].item;
            myOl.appendChild(myNewItem);
          } else {
          }
        }
        document.getElementById("newnew").appendChild(myOl);
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
          newdivcom.innerHTML = "";
          for (i = 0; i < datac.length; i++) {
            if (datac[i].list == myHeader.innerHTML) {
              //   console.log(datac[i].comment);
              //   console.log(datac[i].time);
              const myNewItem = document.createElement("p");
              const myNewA = document.createElement("a");
              const myNewComDiv = document.createElement("div");
              const myNewNestComDiv = document.createElement("div");
              const myNewSmall = document.createElement("small");
              myNewA.className =
                "list-group-item list-group-item-action d-flex gap-3 py-3";
              myNewComDiv.className =
                "d-flex gap-2 w-100 justify-content-between";
              myNewSmall.className = "opacity-50 text-nowrap";
              myNewItem.className = "mb-0 opacity-75";
              myNewItem.innerHTML =
                "<b>" + datac[i].name + "</b>" + " " + datac[i].comment;
              myNewSmall.innerHTML = datac[i].time;

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
  }
}

function setDefaultTitle() {
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
    order = [data[0].title];

    user = [data[0].user];

    document.getElementById("heading").innerHTML = data[0].list;
    document.getElementById("handle").innerHTML = data[0].user;
    document.getElementById("price0").innerHTML = data[0].cost;

    const myOl = document.createElement("ol");
    myOl.className = "list-group list-group-numbered d-flex p-2";
    let myNewItem;

    for (i = 0; i < data.length; i++) {
      if (data[i].list == data[0].list) {
        myNewItem = document.createElement("li");
        myNewItem.className = "list-group-item";
        myNewItem.innerHTML = data[i].item;
        myOl.appendChild(myNewItem);
      }
    }

    document.getElementById("newnew").appendChild(myOl);
  }
  function comment22() {
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
      newdivcom.innerHTML = "";
      for (i = 0; i < datac.length; i++) {
        if (datac[i].list == datac[0].list) {
          //   console.log(datac[i].comment);
          //   console.log(datac[i].time);
          const myNewItem = document.createElement("p");
          const myNewA = document.createElement("a");
          const myNewComDiv = document.createElement("div");
          const myNewNestComDiv = document.createElement("div");
          const myNewSmall = document.createElement("small");
          myNewA.className =
            "list-group-item list-group-item-action d-flex gap-3 py-3";
          myNewComDiv.className = "d-flex gap-2 w-100 justify-content-between";
          myNewSmall.className = "opacity-50 text-nowrap";
          myNewItem.className = "mb-0 opacity-75";
          myNewItem.innerHTML =
            "<b>" + datac[i].name + "</b>" + " " + datac[i].comment;
          myNewSmall.innerHTML = datac[i].time;

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
  comment22();
}
setDefaultTitle();

function orderf() {
  if (
    confirm("Do you want to place an order to " + user + " for " + order + "?")
  ) {
    window.open(mail);
  }
}

function deliverf() {
  if (
    confirm("Do you want to make a delivery to " + user + " in " + order + "?")
  ) {
    window.open(mail);
  }
}
