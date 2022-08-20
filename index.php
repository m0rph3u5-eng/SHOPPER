<?php



print '<!DOCTYPE html
PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
<title>Daily Shopping | SHOPPER</title>
<meta content="en-us" http-equiv="Content-Language" />
<meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
<link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" media="screen" />
<link href="css/navbar.css" rel="stylesheet" type="text/css" media="screen" />
<link href="css/sidebars.css" rel="stylesheet" type="text/css" media="screen" />
<link href="css/list-groups.css" rel="stylesheet" type="text/css" media="screen" />
<link href="css/grid.css" rel="stylesheet" type="text/css" media="screen" />

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<link rel="icon" type="image/x-icon" href="images/icons8.png">
<style>

</style>
</head>

<body class="scrollbar scrollbar-black bordered-black square thin border border-light rounded-lg overflow-auto" >
    <nav class="navbar navbar-expand-lg navbar-light shadow-sm p-4 mb-2 bg-white rounded">
      <div class="container-fluid ">
        <a class="navbar-brand " href="#">SHOPPER</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      
      </button>
  
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item list-group-item-action">
              <a class="nav-link active" aria-current="page" href="pages\profile\register.php">Register</a>
            </li>
            <li class="nav-item list-group-item-action">
              <a class="nav-link active" aria-current="page" href="pages\profile\login.php">Login</a>
            </li>
            <li class="nav-item list-group-item-action">
              <a class="nav-link active" href="#" onclick="orderf()">Order</a>
            </li>
            <li class="nav-item centre">
              <a class="nav-link active centre" aria-current="page" href="#" id="plus_"
                ><b></b></a>
            </li>         
          </ul>
          <a class="nav-link active centre" aria-current="page" href="#" id="plus" onclick="new_entry()"
            style="margin-left:25%; margin-right:25%;" >
            <h4>+</h4>
          </a>
          <form class="d-flex">
            <input class="form-control me-1" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-dark" type="submit" style="width:fit-content;">Search</button>
          </form>
        </div>
      </div>
    </nav>
 
    <aside> 
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="list-group-item-action">
          <a href="#" class="nav-link active" aria-current="page">

            Daily Shopping
          </a>
        </li>
        <li class="list-group-item-action">
          <a href="pages\weekly\weekly_shopping.php" class="nav-link link-dark" aria-current="page">

            Weekly Shopping
          </a>
        </li>
        <li class="list-group-item-action">
          <a href="pages\monthly\monthly_shopping.php" class="nav-link link-dark">

            Monthly Shopping
          </a>
        </li>
        <hr style="color:black ;">
        <li class="list-group-item-action">
          <a href="pages\occassion\occassion.php" class="nav-link link-dark">

            Occassion
          </a>
        </li>
        <li class="list-group-item-action">
          <a href="pages\wardrobe\wardrobe.php" class="nav-link link-dark">

            Wardrobe
          </a>
        </li>
        <li class="list-group-item-action">
          <a href="pages\profession\profession.php" class="nav-link link-dark">

            Profession/Hobbies
          </a>
        </li>
        <hr style="color:black ;">
        <li class="list-group-item-action">
          <a href="pages\recipe\recipes.php" class="nav-link link-dark">

            Recipes
          </a>
        </li>
        <hr style="color:black ;">
        <!-- <li>
          <a href="pages/list_maker.php" class="nav-link link-dark">

            Make a List
          </a>
        </li> -->
        <li class="list-group-item-action">
          <a href="pages\delivery\deliverymaker.php" class="nav-link link-dark">

            Make a Delivery
          </a>
        </li>
        <hr style="color:black ;">
        <li class="list-group-item-action">
        <a href="pages\people\people.php" class="nav-link link-dark">

          People
        </a>
      </li>
        <li class="list-group-item-action">
          <a href="pages\services\services.php" class="nav-link link-dark">

            Services
          </a>
        </li>
        <hr style="color:black ;">
        <li class="list-group-item-action">
          <a href="pages\profile\profile.php" class="nav-link link-dark " >

            Profile
          </a>
        </li>
      </ul>
    </aside>
   
<main>
  <div class="list1">
    <div class="list-group scrollbar scrollbar-black bordered-black square thin border border-light rounded-lg overflow-auto" id="des_col" >

      <a href="#" class="list-group-item list-group-item-action" id="new_entry_a" aria-current="true"
        style="display: none;">
        <div class="d-flex justify-content-between" style="display: none;">
          <div id="new_entry" style="display: none;">
            <label style="margin-top: 5px;">Title</label>
            <input type="text" id="title" class="form-control me-2" placeholder="List Title">
            <label style="margin-top: 5px;">Description</label>
            <textarea rows="6" cols="40" id="t_desc" class="form-control me-2" name="description"></textarea>
            <button class="btn btn-outline-dark btn-sm" style="width: fit-content;" type="submit"
              onclick="saveLi()">Save
              List</button>
   
          </div>

        </div>
      </a>
      <div id="new_list1"></div>
 
    </div>
  </div>


  <div class="list2" >
    <div class="list-group scrollbar scrollbar-black bordered-black square thin border border-light rounded-lg overflow-auto" id="it_col" >
      <a href="#" class="list-group-item list-group-item-action  " aria-current="true" style="display: none;"
        id="new_entry_list_a">

        <div class="d-flex justify-content-between" style="display: none;">
          <div id="new_entry_list" style="display: none;">
            <h6 id="newHeader" class="mb-0">New List</h6>
            <ul id="ul" class="mb-0 opacity-75">
              <li id="list1" class="mb-0 opacity-75" style="list-style: none;"></li>

            </ul>
            <input type="text" id="txtVal" class="form-control me-2" placeholder="Add List Item"
              style="margin-top: 5px; margin-bottom: 5px;">

            <button class="btn btn-outline-dark btn-sm" style="width: fit-content;float: left;" type="submit"
              onclick="addLi()">Add</button>
         
            <button class="btn btn-outline-dark btn-sm" style="width: fit-content;float: right;" type="submit"
              onclick="clearLi()">Clear
              List</button>
          </div>

        </div>
      </a>
      <a href="#" class="list-group-item list-group-item-action d-flex gap-0 py-3 w-100" aria-current="true" id="new_entry_list_b">

        <div class="d-flex gap-0 w-100 justify-content-between">
          <div id="main_list" style="height: 100%;">
            <h6 id="heading" class="mb-0"></h6>
            <p id="handle" class="mb-0 opacity-75"></p>
          </div>
          <small id="price0" class="opacity-50 text-nowrap"></small>
        </div>
      </a>
      <div  id="newnew"> </div>
    </div>
    
  </div>

    <div class="list-group scrollbar scrollbar-black bordered-black square thin border border-light rounded-lg overflow-auto comments" >

      <a href="#" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current=" true">
        <div class="d-flex gap-2 w-100 justify-content-between">
          <div>
          <form action="action.php" method="post">
            <label style="margin-top: 5px;"><h6>Comments</h6></label>
            <textarea rows="3" cols="40" id="comments2" class="form-control me-2" name="comments"></textarea>
            <button class="btn btn-outline-dark btn-sm" style="width: fit-content;" type="submit"
              onclick="addcom()">Post</button>
              </form>
          </div>
       
          <small class="opacity-50 text-nowrap">Now</small>
        </div>
      </a>
      <div id="addc" class=" gap-2 w-100 justify-content-between"></div>
      <div id="newc" class=" gap-2 w-100 justify-content-between"></div>

      <div id="oldc">

      </div>
    </div>

 
</main>
<script src="js/fetch_json.js"></script>

<script src="js/index.js"></script>

</body>

</html>

';
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "shopper";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

  if ($conn->query($sql) === TRUE) {
    echo "Table MyGuests created successfully";
  } else {
    echo "Error creating table: " . $conn->error;
  }

$conn->close();

 ?>