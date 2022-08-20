<?php
print '
<!DOCTYPE html
  PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
  <title>Profile | SHOPPER</title>
  <meta content="en-us" http-equiv="Content-Language" />
  <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
  <link href="../../css/navbar.css" rel="stylesheet" type="text/css" media="screen" />
  <link href="../../css/sidebars.css" rel="stylesheet" type="text/css" media="screen" />

  <link href="../../css/list-groups.css" rel="stylesheet" type="text/css" media="screen" />
  <link href="../../css/bootstrap.min.css" rel="stylesheet" type="text/css" media="screen" />
  <link href="../../css/grid.css" rel="stylesheet" type="text/css" media="screen" />

  <script src="../../js/profile.js"></script>
  <link rel="icon" type="image/x-icon" href="../../images/icons8.png">
</head>

<body class="scrollbar scrollbar-black bordered-black square thin border border-light rounded-lg overflow-auto">
  <nav class="navbar navbar-expand-lg navbar-light shadow-sm p-4 mb-2 bg-white rounded"
    style="background-color: #ffffff;">
    <div class="container-fluid">
      <a class="navbar-brand" href="../../../index.php">SHOPPER</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item list-group-item-action">
            <a class="nav-link active" aria-current="page" href="register.php">Register</a>
          </li>
          <li class="nav-item list-group-item-action">
            <a class="nav-link active" aria-current="page" href="login.php">Login</a>
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link" href="#">Order</a>
          </li> -->
          <!--     <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>-->
        </ul>

      </div>
    </div>
  </nav>

  <aside>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item list-group-item-action">
        <a href="../../index.php" class="nav-link link-dark" aria-current="page">

          Daily Shopping
        </a>
      </li>
      <li class="nav-item list-group-item-action">
        <a href="../weekly/weekly_shopping.php" class="nav-link link-dark" aria-current="page">

          Weekly Shopping
        </a>
      </li>
      <li class="nav-item list-group-item-action">
        <a href="..\monthly\monthly_shopping.php" class="nav-link link-dark">

          Monthly Shopping
        </a>
      </li>
      <hr>
      <li class="nav-item list-group-item-action">
        <a href="..\occassion\occassion.php" class="nav-link link-dark">

          Occassion
        </a>
      </li>
      <li class="nav-item list-group-item-action">
        <a href="..\wardrobe\wardrobe.php" class="nav-link link-dark">

          Wardrobe
        </a>
      </li>
      <li class="nav-item list-group-item-action">
        <a href="..\profession\profession.php" class="nav-link link-dark">

          Profession/Hobbies
        </a>
      </li>
      <hr>
      <li class="nav-item list-group-item-action">
        <a href="..\recipe\recipes.php" class="nav-link link-dark">

          Recipes
        </a>
      </li>
      <hr>
      <!-- <li>
            <a href="../list_maker.php" class="nav-link link-dark">

              Make a List
            </a>
          </li> -->
      <li class="nav-item list-group-item-action">
        <a href="..\delivery\deliverymaker.php" class="nav-link link-dark">

          Make a Delivery
        </a>
      </li>
      <hr>
      <li class="nav-item list-group-item-action">
            
      <a href="..\people\people.php" class="nav-link link-dark">
      People
    </a>
  </li>
      <li class="nav-item list-group-item-action">
        <a href="..\services\services.php" class="nav-link link-dark">

          Services
        </a>
      </li>
      <hr>
      <li class="nav-item list-group-item-action">
        <a href="#" class="nav-link active">

          Profile
        </a>
      </li>
    </ul>

  </aside>
  <main>
    <div class="list1" style="background-color: white; padding: 20px;">

      <div>
        <h2>@simon</h2>
        <p>Email Address: simon@host.com</p>
        <p>Location: Kilimani</p>

        <p>Who lives in your house?</p>
        <input type="checkbox" id="age0to2check" name="age0to2" value="age0to2" onclick="age0to2()">
        <label for="age0to2">Ages 0 to 2 </label>
        <select name="listType" id="age0to2list" class="form-control me-2" style="display: none;">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      
        <br>
        <input type="checkbox" id="age3to12check" name="age3to12" value="age3to12" onclick="age3to12()">
        <label for="age0to2">Ages 3 to 12 </label>
        <select name="age3to12list" id="age3to12list" class="form-control me-2" style="display: none;">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <script>
         
        </script>
        <br>
        <input type="checkbox" id="age13to18check" name="age13to18" value="age13to18" onclick="age13to18()">
        <label for="age13to18">Ages 13 to 18 </label>
        <select name="age13to18list" id="age13to18list" class="form-control me-2" style="display: none;">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
  
        <br>
        <input type="checkbox" id="age19to35check" name="age19to35" value="age19to35" onclick="age19to35()">
        <label for="age19to35">Ages 19 to 35 </label>
        <select name="age13to18list" id="age19to35list" class="form-control me-2" style="display: none;">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
   
        <br>
        <input type="checkbox" id="age36to64check" name="age36to64" value="age36to64" onclick="age36to64()">
        <label for="age36to64">Ages 36 to 64 </label>
        <select name="age36to64list" id="age36to64list" class="form-control me-2" style="display: none;">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
       
        <br>
        <input type="checkbox" id="age65check" name="age65" value="age65" onclick="age65()">
        <label for="age65">Ages 65+ </label>
        <select name="age65list" id="age65list" class="form-control me-2" style="display: none;">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <script>
    
        </script>
        <br>
      </div>
    </div>
    <div class="list2" style="background-color: white; padding: 20px;"">
      <h2>Account Balance</h2>
      <h1 style="font-size: 50px;">Ksh.10,000.</h1>

    </div>
    <div class="comments" style="background-color: white; padding: 20px;">
      <div>
        <p><a href="#" class="link-dark">History</a></p>
        <p><a href="../contact/contactus.php" class="link-dark">Contact Us</a></p>
      </div>
    </div>
    </div>
    </div>
  </main>
</body>

</html>

';
?>