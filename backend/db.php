<?php
include("db_connection.php");

if(isset($_POST["signing_up"])){
    $user = $_POST["user"];
    $sql = "SELECT * FROM `users` WHERE `user_name`='$user'";
    $result = $conn->query($sql);
    $results = $result -> fetch_array(MYSQLI_ASSOC);
    if(!empty($results)){
        echo "Error: username already exists";
        exit();
    }
    $email = $_POST["email"];
    $sql = "SELECT * FROM `users` WHERE `email`='$email'";
    $result = $conn->query($sql);
    $results = $result -> fetch_array(MYSQLI_ASSOC);
    if(!empty($results)){
        echo "Error: Email is already registered";
        exit();
    }
    
    $pword = $_POST["password"];
    $password = password_hash($pword, PASSWORD_DEFAULT);
    if($_POST["remember"] == "true") {
		setcookie ("member_login",$user,time()+ (10 * 365 * 24 * 60 * 60));
	} else {
		if(isset($_COOKIE["member_login"])) {
			setcookie ("member_login","",time() - 3600);
		}
	}
	$sql = "INSERT INTO `users` (`email`, `user_name`, `password`, `stats`, `decks`, `settings`) VALUES('$email', '$user', '$password', '', '', '')";
	$conn->query($sql);
	fwrite($handle, $conn -> error);
	echo($user);
    
}

if(isset($_POST["signing_in"])){
    $user = $_POST["user"];
    $pword = $_POST["password"];
    $sql = "SELECT * FROM `users` WHERE `user_name`='$user' OR `email`='$user'";
    $result = $conn->query($sql);
    $results = $result -> fetch_array(MYSQLI_ASSOC);
    if(empty($results)){
        echo 'Error: User Invalid';
    }else{
        $hash = $results["password"];
        if(password_verify ($pword , $hash)){
            if($_POST["remember"] == true) {
        		setcookie ("member_login",$user,time()+ (10 * 365 * 24 * 60 * 60));
        	} else {
    			setcookie ("member_login","",time() - 3600);
        	}
            echo json_encode($results);
        }else{
            echo 'Error: Password Invalid';
        }
    }
}

if(isset($_POST["signing_out"])){
    setcookie ("member_login","",time() - 3600);
}

if(isset($_POST["updating_decks"])){
    $user = $_POST["user"];
    $decks = $_POST["decks"];
    if($user !== ""){
        $sql = "UPDATE `users` SET `decks`='$decks' WHERE `user_name`='$user'";
        $conn->query($sql);
    	fwrite($handle, $conn -> error);
    }

}

?>