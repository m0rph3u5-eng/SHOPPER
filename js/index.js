fetch('data.json')
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
    var type0 = document.getElementById("type0");
    var type1 = document.getElementById("type1");
    var type2 = document.getElementById("type2");
    var item0 = document.getElementById("item0");
    var item1 = document.getElementById("item1");
    var item2 = document.getElementById("item2");
    
    for (var i = 0; i < 1; i++) {
      var div = document.createElement("div");
      
      div.innerHTML = data[0].location ;
      item0.appendChild(div);

    }
    for (var i = 0; i < 1; i++) {
        var div = document.createElement("div");
    div.innerHTML = data[0].type ;
    type0.appendChild(div);
    }
    for (var i = 0; i < 1; i++) {
      var div = document.createElement("div");
  div.innerHTML = data[1].location ;
  item1.appendChild(div);
  }
  for (var i = 0; i < 1; i++) {
    var div = document.createElement("div");
div.innerHTML = data[1].type ;
type1.appendChild(div);
}
for (var i = 0; i < 1; i++) {
  var div = document.createElement("div");
div.innerHTML = data[2].location ;
item2.appendChild(div);
}
for (var i = 0; i < 1; i++) {
  var div = document.createElement("div");
div.innerHTML = data[2].type ;
type2.appendChild(div);
}

}
fetch('data.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    check(data);
  })
  .catch(function (err) {
    console.log(err);
  });
function check(data) {
  if(document.getElementById("opt_1").checked){
  
  for (var i = 0; i < 5; i++) {
  var data1 = document.getElementById("result");
  var div1 = document.createElement("div");
  div1.innerHTML =data[2].item+ " "+data[2].cost;
  data1.appendChild(div1);
  break;
  }}
  else{
    var data2 = document.getElementById("result");
  var div2 = document.createElement("div");
    div2.innerHTML = "";
  data2.appendChild(div2);
  }
  }
