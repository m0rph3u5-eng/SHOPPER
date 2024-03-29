<?php
print '
<!DOCTYPE html>
<!-- saved from url=(0061)https://preview.colorlib.com/theme/bootstrap/contact-form-16/ -->
<html lang="en">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link href="./contactus_files/css" rel="stylesheet">
    <link rel="stylesheet"
        href="./contactus_files/A.fonts,,_icomoon,,_style.css+css,,_bootstrap.min.css+css,,_style.css,Mcc.N4fnqeXTkX.css.pagespeed.cf.4q8_lNxMgd.css">


    <title>Contact Us | SHOPPER</title>
    <link href="..\..\css\navbar.css" rel="stylesheet" type="text/css" media="screen" />
    <link href="..\..\css\sidebars.css" rel="stylesheet" type="text/css" media="screen" />

    <link href="..\..\css\list-groups.css" rel="stylesheet" type="text/css" media="screen" />
    <link href="..\..\css\bootstrap.min.css" rel="stylesheet" type="text/css" media="screen" />
    <link href="..\..\css\grid.css" rel="stylesheet" type="text/css" media="screen" />

    
    <link rel="icon" type="image/x-icon" href="../../images/icons8.png">
</head>

<body class="scrollbar scrollbar-black bordered-black square thin border border-light rounded-lg overflow-auto">
            <nav class="navbar navbar-expand-lg navbar-light shadow-sm p-4 mb-2 bg-white rounded" style="background-color: #ffffff;">
                <div class="container-fluid">
                    <a class="navbar-brand" href="../../index.php">SHOPPER</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <ul class="navbar-nav me-auto mb-2 mb-md-0">
                            <li class="nav-item list-group-item-action">
                                <a class="nav-link active" aria-current="page" href="..\profile\register.php">Register</a>
                            </li>
                            <li class="nav-item list-group-item-action">
                                <a class="nav-link active" aria-current="page" href="..\profile\login.php">Login</a>
                            </li>
                   
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
                        <a href="../../index.php" class="nav-link link-dark" aria-current="page">

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
                        <a href="pages\wardrobe\wardrobe.php" class="nav-link link-dark">
            
                          Wardrobe
                        </a>
                      </li>
                      <li class="nav-item list-group-item-action">
                        <a href="pages\profession\profession.php" class="nav-link link-dark">
            
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
                        <a href="..\list_maker.php" class="nav-link link-dark">

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
                        <a href="..\profile\profile.php" class="nav-link link-dark">

                            Profile
                        </a>
                    </li>
                </ul>

            </aside>

            <main>
        <div class="list1 container" style=" background-color: white; padding: 10px; padding-left: 20px; padding-right: 20px; padding-bottom: 20px;">
            <div >
                <div >
                    <div >
                        <div>
                            <div>
                                <h3 class="heading mb-4">Contact Us</h3>                  
                            </div>
                            <div>
                                <form class="mb-5" method="post" id="contactForm" name="contactForm"
                                    novalidate="novalidate">
                                    <div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" name="name" id="name"
                                                placeholder="Your name">
                                        </div>
                                    </div>
                                    <div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" name="email" id="email"
                                                placeholder="Email">
                                        </div>
                                    </div>
                                    <div>
                                        <div class=" form-group">
                                            <input type="text" class="form-control" name="subject" id="subject"
                                                placeholder="Subject">
                                        </div>
                                    </div>
                                    <div>
                                        <div class=" form-group">
                                            <textarea class="form-control" name="message" id="message" cols="30"
                                                rows="7" placeholder="Write your message"></textarea>
                                        </div>
                                    </div>
                                    <div>
                                        <div >
                                            <input type="submit" value="Send Message"
                                                class="btn btn-outline-dark btn"
                                                style="width: 100%;">
                                            <span class="submitting"></span>
                                        </div>
                                    </div>
                                </form>
                                <div id="form-message-warning mt-4"></div>
                                <div id="form-message-success">
                                    Your message was sent, thank you!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
 
</main>

</body>

</html>
';
?>