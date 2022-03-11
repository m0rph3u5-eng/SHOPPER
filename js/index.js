fetch("data.json")
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

  var div = document.createElement("div");

  div.innerHTML = data[0].location;
  item0.appendChild(div);

  var div = document.createElement("div");
  div.innerHTML = data[0].type;
  type0.appendChild(div);

  var div = document.createElement("div");
  div.innerHTML = data[1].location;
  item1.appendChild(div);

  var div = document.createElement("div");
  div.innerHTML = data[1].type;
  type1.appendChild(div);

  var div = document.createElement("div");
  div.innerHTML = data[2].location;
  item2.appendChild(div);

  var div = document.createElement("div");
  div.innerHTML = data[2].type;
  type2.appendChild(div);
}


function opt_1(data) {

      var data1 = document.getElementById("result");
      var div0 = document.createElement("div");
      var div1 = document.createElement("div");
      var div2 = document.createElement("div");
      var div3 = document.createElement("div");
      var div4 = document.createElement("div");
      var div5 = document.createElement("div");
      var div6 = document.createElement("div");
      div0.innerHTML = data[0].item + " " + data[0].cost;
      div1.innerHTML = data[1].item + " " + data[1].cost;
      div2.innerHTML = data[2].item + " " + data[2].cost;
      div3.innerHTML = data[3].item + " " + data[3].cost;
      div4.innerHTML = data[4].item + " " + data[4].cost;
      div5.innerHTML = data[5].item + " " + data[5].cost;
      div6.innerHTML = data[6].item + " " + data[6].cost;
      data1.appendChild(div0);
      data1.appendChild(div1);
      data1.appendChild(div2);
      data1.appendChild(div3);
      data1.appendChild(div4);
      data1.appendChild(div5);
      data1.appendChild(div6);
     
    
}

function opt_2(data) {
  
  var data1 = document.getElementById("result");
  var div0 = document.createElement("div");
  var div1 = document.createElement("div");
  var div2 = document.createElement("div");
  var div3 = document.createElement("div");
  var div4 = document.createElement("div");
  var div5 = document.createElement("div");
  var div6 = document.createElement("div");
  div0.innerHTML = data[7].item + " " + data[7].cost;
  div1.innerHTML = data[8].item + " " + data[8].cost;
  div2.innerHTML = data[9].item + " " + data[9].cost;
  div3.innerHTML = data[10].item + " " + data[10].cost;
  div4.innerHTML = data[11].item + " " + data[11].cost;
  div5.innerHTML = data[12].item + " " + data[12].cost;
  div6.innerHTML = data[13].item + " " + data[13].cost;
  data1.appendChild(div0);
  data1.appendChild(div1);
  data1.appendChild(div2);
  data1.appendChild(div3);
  data1.appendChild(div4);
  data1.appendChild(div5);
  data1.appendChild(div6);
 

}


function opt_3(data) {

  var data1 = document.getElementById("result");
  var div0 = document.createElement("div");
  var div1 = document.createElement("div");
  var div2 = document.createElement("div");
  var div3 = document.createElement("div");
  var div4 = document.createElement("div");
  var div5 = document.createElement("div");
  var div6 = document.createElement("div");
  div0.innerHTML = data[14].item + " " + data[14].cost;
  div1.innerHTML = data[15].item + " " + data[15].cost;
  div2.innerHTML = data[16].item + " " + data[16].cost;
  div3.innerHTML = data[17].item + " " + data[17].cost;
  div4.innerHTML = data[18].item + " " + data[18].cost;
  div5.innerHTML = data[19].item + " " + data[19].cost;
  div6.innerHTML = data[20].item + " " + data[20].cost;
  data1.appendChild(div0);
  data1.appendChild(div1);
  data1.appendChild(div2);
  data1.appendChild(div3);
  data1.appendChild(div4);
  data1.appendChild(div5);
  data1.appendChild(div6);
 

}
