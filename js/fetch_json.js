let user;
let order;
let mail;
let recipeCheck = document.title;
let allUsers = [];
let selectedUser =[];
let allCommenters = [];
let thisCommenter = [];

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'dec7baaf3bmshe3059dc1b7a5e44p1a15e5jsncf5ea3786ea1',
		'X-RapidAPI-Host': 'themealdb.p.rapidapi.com'
	}
};

fetch('https://themealdb.p.rapidapi.com/filter.php?i=chicken_breast', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

  //console.log();

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
    order = [data[0].list];

    user = [data[0].user];
    let myAvi1 = document.createElement("img");
    myAvi1.className = "img-fluid";
    myAvi1.style = "width:50px; height:50px; float:left; margin-right:10px; border: 0px solid red; border-radius: 50%;";
    myAvi1.src = "images/avatars/0.jpg";

    document.getElementById("heading").innerHTML = data[0].list;
    document.getElementById("heading").appendChild(myAvi1);
    document.getElementById("handle").innerHTML = data[0].user;
    document.getElementById("price0").innerHTML = data[0].cost;

    selectedUser = data[0].user;
    const myOl = document.createElement("ol");
    myOl.className =
      "list-group list-group-numbered w-100 d-flex p-0 mt-0 scrollbar scrollbar-black bordered-black square thin border border-light rounded-lg overflow-auto";

    for (i = 0; i < data.length; i++) {
      if (data[i].list == data[0].list) {
        const myNewItem = document.createElement("li");
        const myItImg = document.createElement("img");
        myNewItem.className =
          "list-group-item list-group-item-action mb-0 opacity-100";
        myItImg.src = "images/items/" + [i] + ".jpg";
        myItImg.className = "img-fluid";
        myItImg.style = "width:40px; float:left;padding-right:5px;";
        myNewItem.innerHTML = data[i].item;

        //change bachground colour when item is clicked
        myNewItem.onclick = function colorChange() {
          myNewItem.className =
            "list-group-item active border border-secondary";
        };
        myNewItem.appendChild(myItImg);
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
      var newdivcom = document.getElementById("newc");
      newdivcom.innerHTML = "";
      for (i = 0; i < datac.length; i++) {
        if (datac[i].list == datac[0].list) {
          const myNewItem = document.createElement("p");
          const myNewA = document.createElement("a");
          const myNewComDiv = document.createElement("div");
          const myNewNestComDiv = document.createElement("div");
          const myNewSmall = document.createElement("small");

          let myAvi1 = document.createElement("img");
          myAvi1.className = "img-fluid";
          myAvi1.style =
            "width:50px; height:50px; float:left; margin-right:10px; border: 0px solid red; border-radius: 50%;";
         

          myNewA.className =
            "list-group-item list-group-item-action d-flex gap-3 py-3";
          myNewComDiv.className = "d-flex gap-2 w-100 justify-content-between";
          myNewSmall.className = "opacity-50 text-nowrap";
          myNewItem.className = "mb-0 opacity-75";
          myNewItem.innerHTML =
            "<b>" + datac[i].name + "</b>" + "<br>" + datac[i].comment;
          myNewSmall.innerHTML = datac[i].time;
         
          allCommenters.push(datac[i].name);
          thisCommenter=datac[i].name;
          if (datac[i].name == "@Elmo") {
            console.log (" This "+ datac[i].name);
            myAvi1.src = "images/avatars/13.jpg";
          }else{
            myAvi1.src = "images/avatars/"+ allCommenters.indexOf(thisCommenter) + ".jpg";
          }
          myNewNestComDiv.appendChild(myNewItem);
          myNewComDiv.appendChild(myAvi1);
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

  function recipe1() {
    fetch("w_recipe.json")
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
      var newdivrec = document.getElementById("newr");
      newdivrec.innerHTML = "";
      let rnum = 1;
      for (i = 0; i < datac.length; i++) {
        if (datac[i].list == datac[0].list) {
   
          const myNewItem1 = document.createElement("p");
          const myNewNestComDiv1 = document.createElement("div");
          ("list-group-item list-group-item-action d-flex gap-3 py-3");
       
          ("d-flex gap-2 w-100 justify-content-between");
         
          myNewItem1.className = "mb-0 opacity-75";
          myNewItem1.innerHTML =
            "<b>Step " + rnum++ + "</b>" + "<br>" + datac[i].recipe;

          myNewNestComDiv1.appendChild(myNewItem1);
          document.getElementById("newr").appendChild(myNewNestComDiv1);
        } else {
        }
      }
    }
  }
  if (recipeCheck == "Recipes | SHOPPER") {
    recipe1();
  }
}
setDefaultTitle();

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
    const myImg = document.createElement("img");
    const myAvi = document.createElement("img");


    //apply styling to the elements
    myImg.className = "img-fluid";
    myAvi.className = "img-fluid";
    myAvi.style =
      "width:40px; height:40px; float:left; margin-right:10px; border-radius: 50%;";
    myHeader.className = "mb-0";
    myUser.className = "mb-0 opacity-75";
    myDesc.className = "mb-0 opacity-75";
    myDiv.className = "d-flex gap-2 w-100 justify-content-between";
    myLink.className =
      "list-group-item list-group-item-action d-flex gap-3 py-3 ";
    myCost.className = "opacity-50 text-nowrap";
    myLink.ariaCurrent = true;

    //apply values to the created elements

    allUsers.push(data[i].user);
    selectedUser = data[i].user;
    myAvi.src = "images/avatars/"+allUsers.indexOf(selectedUser)+".jpg";
    myImg.src = "images/" + [i] + ".jpg";
    myLink.href = "#";
    myHeader.innerHTML = data[i].title;
    myUser.innerHTML = data[i].user;
    myDesc.innerHTML = data[i].description;
    myCost.innerHTML = data[i].cost;

    myHeader.appendChild(myUser);
    myDivPrime.appendChild(myHeader);
    myDivPrime.appendChild(myAvi);
    myDivPrime.appendChild(myUser);
    myDivPrime.appendChild(myDesc);
    myDiv.appendChild(myDivPrime);
    myDiv.appendChild(myCost);
    myLink.appendChild(myDiv);

    document.getElementById("des_col").appendChild(myImg);
    document.getElementById("des_col").appendChild(myLink);

    //show list items when list type is selected
    myLink.onclick = function setTitle() {
      //save  values in variables
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

        selectedUser = myUser.innerHTML;
        console.log(selectedUser);

        //change image source
        //var imgSelect = data[i].id;
        let img2 = document.getElementById("img1");

        img2.src = "images/" + allUsers.indexOf(selectedUser)+ ".jpg";
        const myAvi = document.createElement("img");
        myAvi.className = "img-fluid";
        myAvi.style = "width:50px; float:left; padding-right:10px; border: 0px solid red; border-radius: 100px;";
        myAvi.src = "images/avatars/" + allUsers.indexOf(selectedUser)+ ".jpg";
        // mail = [data[i].whatsapp];
        // console.log(data[i].whatsapp);
        var newdiv2 = document.getElementById("newnew");
        newdiv2.innerHTML = "";
        newdiv2.className =
          "d-flex gap-2 w-100 justify-content-between w-100 overflow-auto flex-column mb-auto";
        //newdiv2.appendChild(myAvi);
        document.getElementById("heading").appendChild(myAvi);
        const myOl = document.createElement("ol");
        myOl.className =
          "list-group list-group-numbered w-100 d-flex p-0 scrollbar scrollbar-black bordered-black square thin border border-light rounded-lg overflow-auto flex-column mb-auto";
        // myOl.style.width ="inherit"
        // myOl.style.height ="inherit"
        for (i = 0; i < data.length; i++) {
          if (data[i].list === myHeader.innerHTML) {
            // const myNewItem = document.createElement("p");
            // myNewItem.className = "mb-0 opacity-75";
            //  myNewItem.innerHTML = data[i].item;
            // document.getElementById("newnew").appendChild(myNewItem);
            const myItImg = document.createElement("img");
            //myNewItem.className = "list-group-item list-group-item-action mb-0 opacity-75";
            myItImg.src = "images/items/" + [i] + ".jpg";
            myItImg.className = "img-fluid";
            myItImg.style = "width:40px; float:left;padding-right:5px;";
            const myNewItem = document.createElement("li");
            myNewItem.className =
              "list-group-item list-group-item-action mb-0 opacity-100";
            myNewItem.innerHTML = data[i].item;

            //change bachground colour when item is clicked
            myNewItem.onclick = function colorChange() {
              myNewItem.className =
                "list-group-item active border border-secondary";
            };
            myNewItem.appendChild(myItImg);
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

              let myAvi1 = document.createElement("img");
              myAvi1.className = "img-fluid";
              myAvi1.style =
                "width:50px; height:50px; float:left; margin-right:10px; border: 0px solid red; border-radius: 50%;";
             // myAvi1.src = "images/avatars/1" + [i] + ".jpg";
             if (datac[i].name == "@Elmo") {
              console.log (" This "+ datac[i].name);
              myAvi1.src = "images/avatars/13.jpg";
            }else{
              myAvi1.src = "images/avatars/" + 1+allCommenters.indexOf(thisCommenter) + ".jpg";
            }
             myNewA.className =
                "list-group-item list-group-item-action d-flex gap-3 py-3";
              myNewComDiv.className =
                "d-flex gap-2 w-100 justify-content-between";
              myNewSmall.className = "opacity-50 text-nowrap";
              myNewItem.className = "mb-0 opacity-75";
              myNewItem.innerHTML =
                "<b>" + datac[i].name + "</b>" + "<br>" + datac[i].comment;
              myNewSmall.innerHTML = datac[i].time;

              allCommenters.push(datac[i].name);
              thisCommenter=datac[i].name;
              let random = [];
              if (allCommenters.indexOf(thisCommenter)>20) {
                random=Math.floor(Math.random() * 21);
                myAvi1.src = "images/avatars/" + random + ".jpg";
              } else {
                myAvi1.src = "images/avatars/" + allCommenters.indexOf(thisCommenter) + ".jpg";
              }
             

              myNewNestComDiv.appendChild(myNewItem);
              myNewComDiv.appendChild(myAvi1);
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
      function recipe() {
        fetch("w_recipe.json")
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
          var newdivrec = document.getElementById("newr");
          newdivrec.innerHTML = "";
          let rnum = 1;
          for (i = 0; i < datac.length; i++) {
            if (datac[i].list == myHeader.innerHTML) {
              //   console.log(datac[i].comment);
              //   console.log(datac[i].time);
              const myNewItem1 = document.createElement("p");
              const myNewA1 = document.createElement("a");
              const myNewComDiv1 = document.createElement("div");
              const myNewNestComDiv1 = document.createElement("div");
              // const myNewSmall1 = document.createElement("small");
              myNewA1.className =
                "list-group-item list-group-item-action d-flex gap-3 py-3";
              myNewComDiv1.className =
                "d-flex gap-2 w-100 justify-content-between";
              //myNewSmall1.className = "opacity-50 text-nowrap";
              myNewItem1.className = "mb-0 opacity-75";

              myNewItem1.innerHTML =
                "<b>Step " + rnum++ + "</b>" + "<br>" + datac[i].recipe;

              // myNewNestComDiv1.appendChild(myNewItem1);

              myNewComDiv1.appendChild(myNewItem1);
              // myNewComDiv1.appendChild(myNewSmall1);
              myNewA1.appendChild(myNewComDiv1);

              document.getElementById("newr").appendChild(myNewA1);
            } else {
            }
          }
        }
      }
      if (recipeCheck == "Recipes | SHOPPER") {
        recipe();
      }
    };
  }
}

function orderf() {
  let person = prompt(
    "You have selected " +
      order +
      "." +
      " Please enter a Whatsapp contact to send the list",
    "254 704 186334"
  );

  if (person != null) {
    let wNumber =
      "https://wa.me/" +
      person +
      "?text=Hello%20I'm%20interested%20in%20" +
      order +
      "%20from%20https://shopper.ke/";

    //remove spaces from string (url)
    wNumber = wNumber.replace(/\s/g, "");
    // console.log("https://wa.me/"+person+"?text=I'm%20interested%20in%20your%20car%20for%20sale"+ order);
    window.open(wNumber);
    //console.log(wNumber);
  }
}
function ordersms() {
  let person = prompt(
    "You have selected " +
      order +
      "." +
      " Please enter a phone number to send the list",
    "254 704 186334"
  );

  if (person != null) {
    let wNumber =
      "sms:" +
      person +
      "?text=Hello%20I'm%20interested%20in%20" +
      order +
      "%20from%20https://shopper.ke/";

    //remove spaces from string (url)
    wNumber = wNumber.replace(/\s/g, "");
    // console.log("https://wa.me/"+person+"?text=I'm%20interested%20in%20your%20car%20for%20sale"+ order);
    window.open(wNumber);
    //console.log(wNumber);
  }
}
function deliverf() {
  if (confirm("Do you want to make a delivery of " + order + "?")) {
    window.open(
      "https://wa.me/254704186334?text=I'm%20interested%20in%20making%20a%20delivery."
    );
  }
}

console.log("All Users;");
console.log(allUsers);
console.log("Currently selected user;");
console.log(selectedUser);
console.log(allCommenters);