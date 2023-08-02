<!DOCTYPE html>
<html lang="en" >
<?php include("includes/head.php")?>
<body>
<?php include("includes/header.php") ?>
<?php include("includes/list.php") ?>
<i id="help" title="help" class="fa fa-question-circle guide" aria-hidden="true"></i>
<?php include("includes/welcome.php") ?>
<?php include("includes/guide.php") ?>
<?php include("includes/settings.php") ?>
<?php include("includes/decks.php") ?>
<?php include("includes/footer.php") ?>
<?php include("includes/flashcard.php") ?>
<script src="scripts/main.js?v=<?php echo rand()?>"></script>
<script>
<?php
function removeFirstAndLastChar($inputString, $charToRemove) {
    $firstIndex = strpos($inputString, $charToRemove);
    $lastIndex = strrpos($inputString, $charToRemove);

    if ($firstIndex !== false && $lastIndex !== false && $firstIndex !== $lastIndex) {
        return substr_replace($inputString, '', $lastIndex, 1);
    }

    return $inputString;
}

include("backend/db_connection.php");

if(isset($_COOKIE["member_login"]) && $_COOKIE["member_login"] !== ""){
  $user = $_COOKIE["member_login"];
  $sql = "SELECT * FROM `users` WHERE `user_name`='$user' OR `email`='$user'";
  $result = $conn->query($sql);
  $results = $result -> fetch_array(MYSQLI_ASSOC);
  //$results["decks"] = removeFirstAndLastChar($results["decks"], '"');
  $results["decks"] = str_replace('\\"', "'", $results["decks"]);
  ?>
  cookieSet = true;
  $('#rem-check input').click();
  thisuser = '<?php echo $_COOKIE["member_login"]; ?>';
  $('#signin input[type=text]').prop('value',thisuser);
  let this_data = '<?php echo json_encode($results); ?>';
  let this_user_data = JSON.parse(this_data);
  $('#setting-email').html(this_user_data.email);
  $('#setting-email').attr('title', this_user_data.email);
  $('#setting-user').html(this_user_data.user_name);
  $('#signin-out-btn').html("Sign out");
  $('.setting-profile').show();
  $('#loadingpage').hide();
<? } ?>  

</script>
</body>
</html>