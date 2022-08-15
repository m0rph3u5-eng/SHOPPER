<?php
print '
<!DOCTYPE html
  PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
  <meta content="en-us" http-equiv="Content-Language" />
  <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
  <title>Login | SHOPPER</title>
 
  <meta content="en-us" http-equiv="Content-Language" />
  <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
  <link href="../../css/navbar.css" rel="stylesheet" type="text/css" media="screen" />
  <link href="../../css/sidebars.css" rel="stylesheet" type="text/css" media="screen" />

  <link href="../../css/list-groups.css" rel="stylesheet" type="text/css" media="screen" />
  <link href="../../css/bootstrap.min.css" rel="stylesheet" type="text/css" media="screen" />
  <link href="../../css/grid.css" rel="stylesheet" type="text/css" media="screen" />
  <link href="../../css/profile.css" rel="stylesheet" type="text/css" media="screen" />

 
  <link rel="icon" type="image/x-icon" href="../../images/icons8.png">
</head>

<body class="scrollbar scrollbar-black bordered-black square thin border border-light rounded-lg overflow-auto">
      <nav class="navbar navbar-expand-lg navbar-light shadow-sm p-4 mb-2 bg-white rounded" style="background-color: #ffffff;">
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
                <a class="nav-link" aria-current="page" href="#">Login</a>
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
            <a href="profile.php" class="nav-link link-dark">

              Profile
            </a>
          </li>
        </ul>
      </aside>

    <main>
      <div class="list1">
      <div id="form">
        <form action="../action_page.php" method="post" id="login_info">


          <div class="container">
            <label for="uname">
              <p>Username</p>
            </label>
            <input type="text" placeholder="Enter Username" name="uname" required />

            <label for="psw">
              <p>Password</p>
            </label>
            <input type="password" placeholder="Enter Password" name="psw" required />

            <button type="submit" id="btn">
              <div>Login</div>
            </button>

            <button type="button" onclick="location.href=`../index.php`" class="cancelbtn">Cancel</button>
            <label>
              <input type="checkbox" checked="checked" name="remember" /> Remember
              me
            </label>
            <span class="psw"><a href="#">Forgot Password?</a></span>
          </div>
        </form>
   
      </div>
    </div>
  </div>
</main>
</body>

</html>

';
?>