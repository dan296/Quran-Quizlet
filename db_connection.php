<?php
 $filename = 'mysqli_error.log';
 $handle = fopen($filename, 'a');
 $dbhost = "localhost";
 $dbuser = "dkhafqqi_dan";
 $dbpass = "Boatengjr5$";
 $db = "dkhafqqi_quran_quizlet";
 $conn = mysqli_connect($dbhost, $dbuser, $dbpass,$db);
 if(!$conn){
     die("connection failed:" . mysqli_connect_error());
 }
 /*if ($result = $conn -> query("SELECT * FROM users")) {
   echo json_encode($result);
  echo "Returned rows are: " . $result -> num_rows;
  // Free result set
  //$result -> free_result();
}

$sql = "INSERT INTO `usersb` (`email`, `user_name`, `password`, `userObj`) VALUES('$email', '$user', '$password', '')";
	$conn->query($sql);
    fwrite($handle, $conn -> error);*/
    //print_r($_COOKIE);
    
 ?>
 