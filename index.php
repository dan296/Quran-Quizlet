<!DOCTYPE html>
<html lang="en" >
<?php include("includes/head.php")?>
<body>
  <?php include("./assets/logos-01.svg") ?>
  <h3 style="text-align: center; font-size: 14px; font-weight: 100">Add Surahs You Know to Your Deck</h3><div id="search"><i class="fa fa-search"></i><input type="text" placeholder="Ex: Mankind" onkeyup="filterSearch()"></div>
  <?php include("includes/surahs.php") ?>
<i id="help" title="help" class="fa fa-question-circle guide" aria-hidden="true"></i>
<div id='veil'></div>
<?php include("includes/welcome.php") ?>
<?php include("includes/guide.php") ?>
<?php include("includes/settings.php") ?>
<?php include("includes/decks.php") ?>
<?php include("includes/footer.php") ?>
<?php include("includes/flashcard.php") ?>
<script src="scripts/main.js"></script>
<script>
<?php
include("backend/db_connection.php");
if(isset($_COOKIE["member_login"]) && $_COOKIE["member_login"] !== ""){
  $user = $_COOKIE["member_login"];
  $sql = "SELECT * FROM `users` WHERE `user_name`='$user' OR `email`='$user'";
  $result = $conn->query($sql);
  $results = $result -> fetch_array(MYSQLI_ASSOC);
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