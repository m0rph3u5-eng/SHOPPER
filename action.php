Hi. You said

<?php 

echo htmlspecialchars($_POST['comments']); 
$comment = $_POST['comments'];
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

$sql = "INSERT INTO comments (List, Name, Comment)
VALUES ( 'Bargain', '@Simon', '$comment')";


if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
  } else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
  }
  
  mysqli_close($conn);
?>.

