<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
  <title>Quran Quizlet</title>
  <link href="https://use.fontawesome.com/releases/v5.9.0/css/all.css" rel="stylesheet">
<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css'><link rel="stylesheet" href="./style.css">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<link rel="icon" href="quran.png">
<link rel="apple-touch-icon" sizes="100x100" href="quran.png" />
<!-- Animate.css -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css">
  
  <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/bootstrap-toggle/2.2.2/js/bootstrap-toggle.min.js'></script>
  <script src="https://code.jquery.com/ui/1.13.0/jquery-ui.js"></script>
  <script src="endata.js"></script>
  <script src="versesindiv.js"></script>
   <script>
  $( function() {
    $( document ).tooltip({
        position: {
        my: "center bottom-15",
        at: "center top",
        using: function( position, feedback ) {
          $( this ).css( position );
          $( "<div>" )
            .addClass( "arrow" )
            .addClass( feedback.vertical )
            .addClass( feedback.horizontal )
            .appendTo( this );
        }
        },
        tooltipClass: "your_class-Name",
        show: { duration: 100 }
    });
  } );
  var thisuser = '';
  var cookieSet = false;
  <?php
  include("db_connection.php");
if(isset($_COOKIE["member_login"]) && $_COOKIE["member_login"] !== ""){
        $user = $_COOKIE["member_login"];
        $sql = "SELECT `stats` FROM `users` WHERE `user_name`='$user'";
        $result = $conn->query($sql);
        $results = $result -> fetch_array(MYSQLI_ASSOC);
        ?>
        cookieSet = true;
        $('#rem-check').click();
        thisuser = '<?php echo $_COOKIE["member_login"]; ?>';
        $('#signin-out-btn').html("Sign out");
        //$('#user').html(thisuser);
        $('#signin input[type=text]').prop('value',thisuser);
        //userObj = '<?php //echo $results["userObj"]; ?>';
        /*if(userObj == ''){
            userObj = [];
        }else{
            userObj = JSON.parse(userObj.replace(/singqt/g, "'"));
        }
        
        setUpSheets();
        $('#sign-in-cont').hide();
        $(".container, #addSubject, #deleteSubject, #sign-out, #excel, #settings, #git").show();
        $('#course-cont').css('opacity', 1);*/
        <?
    }
 ?>  
  </script>
</head>
<body>
  <h1 style="text-align: center; margin-top: 0; padding-top: 20px; font-size: 20px;">Create a Deck</h1><h3 style="text-align: center; font-size: 14px;">Add Surahs You Know to Your Deck</h3><div id="search"><i class="fa fa-search"></i><input type="text" placeholder="Ex: Mankind" onkeyup="filterSearch()"></div>
  <!-- SURAHS-->
  <div class="my-new-list"><div id="0" class="surahcont"><div class="surah-label">1</div><div class="cross crossrotate"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Al-Faatiha</div></div><div id="1" class="surahcont"><div class="surah-label">2</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Al-Baqara</div></div><div id="2" class="surahcont"><div class="surah-label">3</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Aal-i-Imraan</div></div><div id="3" class="surahcont"><div class="surah-label">4</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">An-Nisaa</div></div><div id="4" class="surahcont"><div class="surah-label">5</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Al-Maaida</div></div><div id="5" class="surahcont"><div class="surah-label">6</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Al-An'aam</div></div><div id="6" class="surahcont"><div class="surah-label">7</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Al-A'raaf</div></div><div id="7" class="surahcont"><div class="surah-label">8</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Al-Anfaal</div></div><div id="8" class="surahcont"><div class="surah-label">9</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">At-Tawba</div></div><div id="9" class="surahcont"><div class="surah-label">10</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Yunus</div></div><div id="10" class="surahcont"><div class="surah-label">11</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Hud</div></div><div id="11" class="surahcont"><div class="surah-label">12</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Yusuf</div></div><div id="12" class="surahcont"><div class="surah-label">13</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Ar-Ra'd</div></div><div id="13" class="surahcont"><div class="surah-label">14</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Ibrahim</div></div><div id="14" class="surahcont"><div class="surah-label">15</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Al-Hijr</div></div><div id="15" class="surahcont"><div class="surah-label">16</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">An-Nahl</div></div><div id="16" class="surahcont"><div class="surah-label">17</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Al-Israa</div></div><div id="17" class="surahcont"><div class="surah-label">18</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Al-Kahf</div></div><div id="18" class="surahcont"><div class="surah-label">19</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Maryam</div></div><div id="19" class="surahcont"><div class="surah-label">20</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Taa-Haa</div></div><div id="20" class="surahcont"><div class="surah-label">21</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Al-Anbiyaa</div></div><div id="21" class="surahcont"><div class="surah-label">22</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Al-Hajj</div></div><div id="22" class="surahcont"><div class="surah-label">23</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Al-Muminoon</div></div><div id="23" class="surahcont"><div class="surah-label">24</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">An-Noor</div></div><div id="24" class="surahcont"><div class="surah-label">25</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Al-Furqaan</div></div><div id="25" class="surahcont"><div class="surah-label">26</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Ash-Shu'araa</div></div><div id="26" class="surahcont"><div class="surah-label">27</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">An-Naml</div></div><div id="27" class="surahcont"><div class="surah-label">28</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Al-Qasas</div></div><div id="28" class="surahcont"><div class="surah-label">29</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Al-Ankaboot</div></div><div id="29" class="surahcont"><div class="surah-label">30</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Ar-Room</div></div><div id="30" class="surahcont"><div class="surah-label">31</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Luqman</div></div><div id="31" class="surahcont"><div class="surah-label">32</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">As-Sajda</div></div><div id="32" class="surahcont"><div class="surah-label">33</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Al-Ahzaab</div></div><div id="33" class="surahcont"><div class="surah-label">34</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Saba</div></div><div id="34" class="surahcont"><div class="surah-label">35</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Faatir</div></div><div id="35" class="surahcont"><div class="surah-label">36</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Yaseen</div></div><div id="36" class="surahcont"><div class="surah-label">37</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">As-Saaffaat</div></div><div id="37" class="surahcont"><div class="surah-label">38</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Saad</div></div><div id="38" class="surahcont"><div class="surah-label">39</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Az-Zumar</div></div><div id="39" class="surahcont"><div class="surah-label">40</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Ghafir</div></div><div id="40" class="surahcont"><div class="surah-label">41</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Fussilat</div></div><div id="41" class="surahcont"><div class="surah-label">42</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Ash-Shura</div></div><div id="42" class="surahcont"><div class="surah-label">43</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Az-Zukhruf</div></div><div id="43" class="surahcont"><div class="surah-label">44</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Ad-Dukhaan</div></div><div id="44" class="surahcont"><div class="surah-label">45</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Al-Jaathiya</div></div><div id="45" class="surahcont"><div class="surah-label">46</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Al-Ahqaf</div></div><div id="46" class="surahcont"><div class="surah-label">47</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Muhammad</div></div><div id="47" class="surahcont"><div class="surah-label">48</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Al-Fath</div></div><div id="48" class="surahcont"><div class="surah-label">49</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Al-Hujuraat</div></div><div id="49" class="surahcont"><div class="surah-label">50</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Qaaf</div></div><div id="50" class="surahcont"><div class="surah-label">51</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Adh-Dhaariyat</div></div><div id="51" class="surahcont"><div class="surah-label">52</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">At-Tur</div></div><div id="52" class="surahcont"><div class="surah-label">53</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">An-Najm</div></div><div id="53" class="surahcont"><div class="surah-label">54</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Al-Qamar</div></div><div id="54" class="surahcont"><div class="surah-label">55</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Ar-Rahmaan</div></div><div id="55" class="surahcont"><div class="surah-label">56</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Al-Waaqia</div></div><div id="56" class="surahcont"><div class="surah-label">57</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Al-Hadid</div></div><div id="57" class="surahcont"><div class="surah-label">58</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Al-Mujaadila</div></div><div id="58" class="surahcont"><div class="surah-label">59</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Al-Hashr</div></div><div id="59" class="surahcont"><div class="surah-label">60</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Al-Mumtahana</div></div><div id="60" class="surahcont"><div class="surah-label">61</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">As-Saff</div></div><div id="61" class="surahcont"><div class="surah-label">62</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Al-Jumu'a</div></div><div id="62" class="surahcont"><div class="surah-label">63</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Al-Munaafiqoon</div></div><div id="63" class="surahcont"><div class="surah-label">64</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">At-Taghaabun</div></div><div id="64" class="surahcont"><div class="surah-label">65</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">At-Talaaq</div></div><div id="65" class="surahcont"><div class="surah-label">66</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">At-Tahrim</div></div><div id="66" class="surahcont"><div class="surah-label">67</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Al-Mulk</div></div><div id="67" class="surahcont"><div class="surah-label">68</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Al-Qalam</div></div><div id="68" class="surahcont"><div class="surah-label">69</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Al-Haaqqa</div></div><div id="69" class="surahcont"><div class="surah-label">70</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Al-Ma'aarij</div></div><div id="70" class="surahcont"><div class="surah-label">71</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Nooh</div></div><div id="71" class="surahcont"><div class="surah-label">72</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Al-Jinn</div></div><div id="72" class="surahcont"><div class="surah-label">73</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Al-Muzzammil</div></div><div id="73" class="surahcont"><div class="surah-label">74</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Al-Muddaththir</div></div><div id="74" class="surahcont"><div class="surah-label">75</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Al-Qiyaama</div></div><div id="75" class="surahcont"><div class="surah-label">76</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Al-Insaan</div></div><div id="76" class="surahcont"><div class="surah-label">77</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Al-Mursalaat</div></div><div id="77" class="surahcont"><div class="surah-label">78</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">An-Naba</div></div><div id="78" class="surahcont"><div class="surah-label">79</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">An-Naazi'aat</div></div><div id="79" class="surahcont"><div class="surah-label">80</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Abasa</div></div><div id="80" class="surahcont"><div class="surah-label">81</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">At-Takwir</div></div><div id="81" class="surahcont"><div class="surah-label">82</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Al-Infitaar</div></div><div id="82" class="surahcont"><div class="surah-label">83</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Al-Mutaffifin</div></div><div id="83" class="surahcont"><div class="surah-label">84</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Al-Inshiqaaq</div></div><div id="84" class="surahcont"><div class="surah-label">85</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Al-Burooj</div></div><div id="85" class="surahcont"><div class="surah-label">86</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">At-Taariq</div></div><div id="86" class="surahcont"><div class="surah-label">87</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Al-A'laa</div></div><div id="87" class="surahcont"><div class="surah-label">88</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Al-Ghaashiya</div></div><div id="88" class="surahcont"><div class="surah-label">89</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Al-Fajr</div></div><div id="89" class="surahcont"><div class="surah-label">90</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Al-Balad</div></div><div id="90" class="surahcont"><div class="surah-label">91</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Ash-Shams</div></div><div id="91" class="surahcont"><div class="surah-label">92</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Al-Lail</div></div><div id="92" class="surahcont"><div class="surah-label">93</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Ad-Dhuhaa</div></div><div id="93" class="surahcont"><div class="surah-label">94</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Ash-Sharh</div></div><div id="94" class="surahcont"><div class="surah-label">95</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">At-Tin</div></div><div id="95" class="surahcont"><div class="surah-label">96</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Al-Alaq</div></div><div id="96" class="surahcont"><div class="surah-label">97</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Al-Qadr</div></div><div id="97" class="surahcont"><div class="surah-label">98</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Al-Bayyina</div></div><div id="98" class="surahcont"><div class="surah-label">99</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Az-Zalzala</div></div><div id="99" class="surahcont"><div class="surah-label">100</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Al-Aadiyaat</div></div><div id="100" class="surahcont"><div class="surah-label">101</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Al-Qaari'a</div></div><div id="101" class="surahcont"><div class="surah-label">102</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">At-Takaathur</div></div><div id="102" class="surahcont"><div class="surah-label">103</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Al-Asr</div></div><div id="103" class="surahcont"><div class="surah-label">104</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Al-Humaza</div></div><div id="104" class="surahcont"><div class="surah-label">105</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Al-Fil</div></div><div id="105" class="surahcont"><div class="surah-label">106</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Quraish</div></div><div id="106" class="surahcont"><div class="surah-label">107</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Al-Maa'un</div></div><div id="107" class="surahcont"><div class="surah-label">108</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Al-Kawthar</div></div><div id="108" class="surahcont"><div class="surah-label">109</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Al-Kaafiroon</div></div><div id="109" class="surahcont"><div class="surah-label">110</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">An-Nasr</div></div><div id="110" class="surahcont"><div class="surah-label">111</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Al-Masad</div></div><div id="111" class="surahcont"><div class="surah-label">112</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Al-Ikhlaas</div></div><div id="112" class="surahcont"><div class="surah-label">113</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">Al-Falaq</div></div><div id="113" class="surahcont"><div class="surah-label">114</div><div class="cross"><div class="innercross"><div class="horiz-cross"></div><div class="vert-cross"></div></div></div><div class="surahname">An-Naas</div></div></div>
  <!-- END SURAHS-->
<!-- partial:index.partial.html -->
<div id='veil'></div>
<div id="settings">
    <section>
        <div class='setting-title'>Display Settings</div>
        <div class='setting-wrap'>
            <div class='setting-label'>Night Mode:</div>
            <div class='setting-input'><label class="switch"><input type="checkbox" class="toggleInput-checkbox" id="switchMode" value="1"><span class="slider round"></span></label></div>
        </div>
        <div class='setting-wrap'>
            <div class='setting-label'>Text Size:</div>
            <div class='setting-input'><label class="switch"><input type="checkbox" class="toggleInput-checkbox" id="textSize" value="0"><span class="slider round"></span></label></div>
        </div>
    </section>

    <section>
        <div class='setting-title'>Filter</div>
        <div class='setting-wrap'>
            <div class='setting-label'>Juz Range:</div>
            <div class='setting-input' data-diff="29">
              <input type="number" class="num-input num-input-min" id="juzMin" value="1" min="1" max="30">
              <input type="number" class="num-input num-input-max" id="juzMax" value="30" min="1" max="30">
            </div>
        </div>
        <div class='setting-wrap'>
            <div class='setting-label'>Surah Range:</div>
            <div class='setting-input' data-diff="113">
              <input type="number" class="num-input num-input-min" id="surahMin" value="1" min="1" max="114">
              <input type="number" class="num-input num-input-max" id="surahMax" value="114" min="1" max="114">
            </div>
        </div>
    </section>
    
    <section>
        <div class='setting-title'>Flash Card Settings</div>
        <div class='setting-wrap'>
            <div class='setting-label'>Vocabulary:</div>
            <div class='setting-input'><label class="switch"><input type="checkbox" class="toggleInput-checkbox" id="vocabOn" value="0"><span class="slider round"></span></label></div>
        </div>
        <div class='setting-wrap'>
            <div class='setting-label'>Verses:</div>
            <div class='setting-input'><label class="switch"><input type="checkbox" class="toggleInput-checkbox" id="versesOn" value="1" checked><span class="slider round"></span></label></div>
        </div>
        <div class='setting-wrap'>
            <div class='setting-label'>Verse Range:</div>
            <div class='setting-input' data-diff="0">
              <input type="number" class="num-input num-input-min" id="verseMin" value="1" min="1" max="286">
              <input type="number" class="num-input num-input-max" id="verseMax" value="1" min="1" max="286">
            </div>
        </div>
    </section>

    <section>
        <div class='setting-title'>Profile</div>
        <div class='setting-wrap setting-profile'>
            <div class='setting-label'>Email:</div>
            <div class='setting-info' id="setting-email"></div>
        </div>
        <div class='setting-wrap setting-profile'>
            <div class='setting-label'>User:</div>
            <div class='setting-info' id="setting-user"></div>
        </div>
        <div class='setting-wrap setting-profile'>
            <div class='setting-label'>Password:</div>
            <button class='setting-info-btn'><i class="fa fa-edit"></i> Edit</button>
        </div>
        <div class='setting-wrap'>
            <button id="signin-out-btn">Sign in / Sign up</button>
        </div>
    </section>

    
    <div id="version">
      <a href="https://github.com/dan296" target="_blank"><i class="fab fa-github"></i> <span>v1.0.0</span></a>
    </div>
</div>
<div id='loadingpage'>
  <h1 style="padding-top: 10px;">Quran Quizlet</h1>
  <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="250px" height="250px" preserveAspectRatio="xMidYMid meet" id='demo'>
<g transform="translate(-5.000000,250.000000) scale(0.0300000,-0.0300000)" fill="transparent">
<path class='lpath' stroke="white" stroke-width="10px" fill="#000000" d="M4243 7566 c-42 -74 -42 -75 -29 -115 9 -25 18 -125 26 -278 10 -233 25 -489 55 -943 8 -124 18 -314 22 -422 l6 -198 -40 0 c-55 0 -104 22 -141 65 -62 70 -67 88 -66 225 2 103 7 147 33 248 36 145 54 270 45 306 -10 41 -49 34 -96 -16 -100 -109 -164 -252 -208 -468 -51 -251 -107 -386 -171 -417 -58 -28 -149 29 -196 121 -61 120 -66 146 -71 367 l-4 207 39 12 c61 20 204 97 255 138 25 20 74 61 108 90 59 50 63 52 120 52 56 0 59 2 79 34 12 18 21 43 21 55 0 68 -129 231 -183 231 -77 0 -107 -48 -107 -174 0 -66 1 -70 36 -103 l36 -34 -35 -33 c-36 -33 -108 -80 -279 -180 -53 -31 -110 -67 -125 -81 -27 -24 -27 -24 -5 -25 12 0 22 -6 22 -12 0 -7 -7 -88 -15 -179 -7 -92 -12 -175 -10 -185 34 -169 62 -244 126 -340 52 -77 91 -104 150 -104 105 0 165 93 219 340 75 338 159 557 208 539 6 -2 -7 -70 -28 -156 -60 -234 -66 -288 -46 -412 23 -145 63 -214 155 -273 38 -24 56 -28 112 -28 l67 0 7 -135 c7 -125 3 -236 -11 -360 -6 -50 -6 -50 14 -32 54 49 90 199 99 419 l6 148 33 25 c42 32 107 131 134 203 11 31 28 77 37 102 l17 45 12 -72 c21 -128 88 -241 171 -290 44 -25 57 -28 143 -28 108 1 137 11 190 72 58 65 84 136 88 237 5 108 -7 170 -63 340 -42 129 -73 271 -61 283 3 4 17 -4 31 -17 49 -46 38 5 -34 148 -39 77 -75 143 -80 147 -12 7 -32 -22 -62 -93 -21 -52 -22 -56 -6 -100 8 -26 18 -79 21 -119 9 -113 31 -202 107 -433 38 -118 72 -220 75 -226 7 -15 -59 -40 -128 -49 -119 -15 -216 41 -271 157 -32 66 -44 138 -57 338 -13 189 -50 383 -91 469 -16 35 -31 62 -33 60 -2 -2 -19 -40 -39 -85 l-36 -80 20 -85 c55 -227 73 -441 46 -546 -19 -72 -50 -137 -81 -171 -21 -24 -75 -57 -81 -50 -4 3 -60 1125 -71 1418 l-6 145 36 -40 c44 -50 45 -39 11 105 -48 197 -106 370 -124 370 -3 0 -25 -34 -48 -74z"/>
<path class='lpath' stroke="white" stroke-width="10px" fill="#000000" d="M4527 7273 c-14 -14 -6 -39 38 -108 35 -56 47 -87 54 -140 5 -37 12 -69 14 -72 14 -13 29 75 22 130 -8 77 -27 123 -67 165 -31 31 -48 39 -61 25z"/>
<path class='lpath' stroke="white" stroke-width="10px" fill="#000000" d="M4042 7190 c-74 -153 -92 -277 -49 -341 42 -62 73 -50 119 46 28 61 37 115 17 115 -5 0 -17 -16 -25 -35 -17 -41 -45 -46 -68 -13 -24 34 -19 76 19 183 47 128 39 153 -13 45z"/>
<path class='lpath' stroke="white" stroke-width="10px" fill="#000000" d="M4755 6908 c-2 -7 -6 -40 -7 -72 -2 -44 -8 -62 -21 -70 -25 -16 -37 7 -37 72 0 54 -14 68 -40 37 -9 -11 -7 -30 11 -90 21 -71 24 -75 50 -75 18 0 34 8 41 20 11 18 14 18 30 3 14 -13 25 -14 46 -7 25 9 27 14 30 76 2 45 -2 77 -12 95 -12 24 -15 26 -21 10 -4 -9 -2 -37 4 -62 14 -57 14 -65 -4 -65 -20 0 -45 52 -45 94 0 35 -16 58 -25 34z"/>
<path class='lpath' stroke="white" stroke-width="10px" fill="#000000" d="M3706 6248 c-8 -13 -20 -49 -27 -81 -7 -32 -16 -60 -19 -62 -4 -3 -15 16 -25 41 -36 94 -101 135 -127 79 -10 -22 -8 -29 13 -51 13 -14 31 -23 40 -21 22 6 69 -91 69 -142 0 -21 -9 -73 -20 -117 -27 -104 -29 -173 -5 -190 13 -10 23 -10 37 -3 21 11 48 67 47 96 0 12 -4 8 -11 -9 -12 -35 -23 -35 -44 -2 -16 24 -16 32 15 167 17 78 37 167 44 197 l12 55 40 1 c30 0 41 5 43 18 9 44 -57 63 -82 24z"/>
<path class='lpath' stroke="white" stroke-width="10px" fill="#000000" d="M5407 6240 c-31 -47 -69 -165 -74 -230 -5 -57 -2 -69 17 -92 25 -32 50 -36 73 -10 19 21 47 95 47 125 0 19 -4 18 -34 -12 l-34 -33 -16 23 c-22 33 -20 53 14 148 32 87 35 123 7 81z"/>
<path class='lpath' stroke="white" stroke-width="10px" fill="#000000" d="M3183 6040 c-12 -47 -77 -168 -130 -244 -31 -44 -132 -180 -223 -301 -218 -288 -240 -322 -321 -489 -75 -157 -128 -305 -161 -453 -19 -86 -22 -128 -22 -338 0 -186 4 -261 17 -335 87 -470 407 -822 877 -964 113 -34 246 -56 336 -56 41 0 74 -4 74 -9 0 -5 -16 -34 -35 -66 -53 -88 -70 -148 -70 -245 0 -75 3 -91 29 -138 57 -103 126 -154 206 -154 86 1 169 53 370 232 236 211 409 289 591 266 56 -7 57 -7 62 -46 6 -45 47 -139 84 -193 28 -41 87 -82 103 -72 16 10 40 105 40 157 0 26 3 48 6 48 3 0 49 -9 102 -19 226 -45 373 -36 581 38 303 106 526 363 651 748 83 253 106 426 97 708 -10 310 -74 547 -232 860 -91 182 -175 323 -295 495 -146 208 -196 289 -251 401 -32 64 -62 120 -67 123 -6 3 -22 -25 -37 -63 -28 -69 -28 -70 -11 -133 19 -75 43 -255 52 -402 6 -89 5 -106 -7 -106 -8 0 -138 11 -289 25 -493 46 -637 18 -670 -128 -14 -65 2 -122 45 -163 18 -17 92 -69 164 -115 71 -46 130 -89 131 -94 0 -6 -27 -44 -61 -85 -84 -103 -113 -146 -158 -237 -77 -155 -111 -312 -111 -514 l0 -96 -62 -28 c-35 -15 -69 -29 -75 -32 -24 -10 -13 42 16 77 45 56 63 100 69 167 6 76 -8 134 -57 238 -49 103 -131 199 -131 154 0 -7 17 -39 39 -73 129 -205 145 -309 59 -381 -26 -22 -39 -25 -104 -25 -89 0 -114 10 -232 88 l-89 61 -7 53 c-19 151 -118 368 -240 523 -47 61 -86 112 -86 115 1 3 51 36 113 74 182 112 187 115 207 149 28 46 28 174 0 209 -34 44 -110 69 -247 81 -109 10 -152 8 -356 -11 -128 -13 -248 -22 -268 -22 l-37 0 5 43 c31 331 53 487 74 530 l23 46 -29 71 c-29 72 -43 85 -52 50z m-107 -588 c-9 -78 -16 -148 -16 -155 0 -17 -6 -18 -142 -42 l-96 -17 13 -37 c34 -97 43 -106 116 -130 38 -12 71 -26 73 -30 3 -4 1 -35 -4 -67 -5 -32 -14 -111 -20 -174 -16 -174 -9 -162 -107 -216 -135 -76 -167 -126 -184 -289 -12 -113 5 -258 41 -358 104 -285 392 -508 707 -548 108 -14 187 0 299 51 37 16 73 30 80 30 7 0 39 -30 71 -67 80 -93 101 -111 158 -138 58 -29 140 -33 185 -10 67 35 107 128 117 273 4 62 10 92 18 92 9 0 14 -30 17 -97 5 -107 22 -153 78 -217 59 -66 146 -84 224 -46 62 30 151 105 183 154 l29 43 74 -31 c71 -29 81 -31 210 -31 123 0 143 3 220 29 152 52 248 107 354 205 33 30 61 50 63 45 2 -5 39 -103 82 -219 88 -235 89 -237 8 -249 -90 -13 -161 27 -199 112 -11 24 -23 42 -28 40 -4 -2 -28 -41 -52 -87 -49 -96 -77 -121 -142 -128 -65 -8 -96 14 -96 67 0 21 5 51 12 65 6 14 8 28 4 33 -8 8 -53 -40 -101 -108 -46 -65 -97 -90 -183 -90 -87 0 -102 15 -94 87 4 41 3 46 -12 40 -10 -4 -79 -25 -154 -46 -400 -115 -625 -154 -983 -172 -286 -14 -401 -6 -582 41 -347 89 -610 278 -770 550 -168 285 -199 667 -82 1015 69 206 170 388 376 676 163 228 243 328 247 307 2 -9 -4 -79 -12 -156z m2765 -99 l72 -106 -89 8 c-49 4 -93 10 -97 15 -8 7 -15 56 -31 225 l-5 50 39 -43 c22 -24 71 -91 111 -149z m154 -229 c161 -246 222 -378 294 -629 65 -226 75 -297 75 -495 0 -254 -38 -436 -133 -636 -66 -138 -108 -200 -198 -295 -215 -225 -512 -331 -798 -285 -172 28 -329 88 -355 136 -6 11 -19 24 -30 30 -17 9 -22 7 -30 -12 -10 -22 -15 -23 -106 -20 -114 5 -162 -6 -269 -60 -104 -52 -213 -129 -344 -242 -204 -175 -289 -226 -381 -226 -112 0 -160 48 -160 160 0 74 41 205 84 271 l26 39 98 0 c213 0 468 43 888 151 149 38 280 69 291 69 15 0 22 -8 27 -31 13 -67 76 -119 143 -119 53 1 110 36 165 103 52 65 68 73 68 37 0 -31 48 -79 91 -90 77 -21 145 26 200 139 13 28 27 50 30 51 4 0 24 -21 44 -46 55 -66 88 -84 161 -84 46 0 68 5 87 20 59 47 105 205 94 325 -4 39 -22 101 -50 171 -25 60 -52 133 -61 162 l-15 53 29 -6 c36 -8 39 6 10 53 l-21 34 30 87 c82 240 64 427 -52 526 -22 19 -58 41 -79 47 -31 9 -39 17 -43 42 -8 46 -55 458 -55 482 0 16 11 26 48 39 64 24 65 25 91 100 13 36 25 65 27 65 2 0 38 -52 79 -116z m-2154 56 c142 -14 169 -19 169 -33 -1 -7 -81 -67 -179 -134 l-179 -123 -93 57 c-94 57 -165 91 -314 154 -75 32 -78 34 -45 37 19 1 118 11 220 22 312 34 291 33 421 20z m1528 -25 c101 -8 186 -16 188 -18 4 -4 -160 -77 -172 -77 -4 0 -66 -34 -139 -75 -72 -40 -139 -77 -148 -80 -11 -4 -44 11 -90 40 -104 67 -288 199 -288 207 0 3 33 11 73 16 85 13 317 7 576 -13z m283 -180 c9 -48 38 -358 38 -399 l0 -29 -52 7 c-60 8 -137 40 -202 85 -25 17 -49 31 -55 31 -5 0 -25 -28 -43 -62 -68 -130 -161 -191 -257 -169 -53 12 -67 24 -100 92 -14 29 -30 53 -36 53 -5 1 -21 -30 -34 -67 l-24 -68 31 -67 c39 -86 58 -153 67 -233 6 -59 5 -66 -17 -86 -38 -35 -222 -143 -231 -134 -4 4 -12 36 -19 71 -18 105 23 298 96 452 33 70 173 247 213 270 l31 19 37 -38 36 -38 -3 63 -3 64 70 37 c74 39 286 136 370 170 67 27 79 24 87 -24z m-2329 -36 c73 -33 167 -79 208 -102 l74 -42 -4 -59 -3 -59 41 32 41 33 29 -21 c53 -38 136 -137 189 -227 49 -82 122 -277 109 -290 -4 -4 -167 90 -197 114 -2 2 10 45 28 95 18 51 32 98 32 105 0 30 -20 6 -69 -83 -29 -52 -55 -95 -57 -95 -3 0 -24 10 -47 21 -25 14 -69 24 -109 27 -38 3 -68 8 -68 13 0 4 7 38 16 76 17 73 13 151 -10 206 -17 41 -134 195 -157 207 -27 15 -89 12 -89 -4 0 -27 -70 -152 -102 -183 -18 -18 -44 -34 -58 -35 -23 -3 -24 -1 -21 47 4 77 29 274 37 286 9 15 37 6 187 -62z m86 -231 c59 -48 91 -94 91 -130 0 -62 -137 -196 -270 -263 l-46 -23 9 -66 c7 -44 15 -66 24 -66 7 0 46 17 86 37 70 36 76 37 198 41 98 3 133 0 163 -12 l37 -16 -8 -82 c-14 -145 -10 -180 30 -260 20 -40 59 -99 87 -131 32 -35 50 -63 46 -72 -8 -23 -16 -19 -85 40 -89 75 -166 113 -381 185 -212 71 -286 106 -324 150 -31 38 -31 43 -9 268 l17 172 59 22 c64 23 100 61 137 146 25 57 58 102 74 102 7 0 37 -19 65 -42z m1951 -283 c0 -34 24 -91 57 -133 26 -35 107 -92 129 -92 18 0 34 64 34 138 0 70 -2 69 85 48 l50 -11 12 -95 c18 -151 16 -203 -8 -234 -29 -37 -116 -79 -287 -137 -206 -71 -332 -133 -420 -209 -58 -50 -77 -61 -96 -56 -33 8 -126 121 -126 154 0 4 19 19 43 32 58 33 131 103 162 156 30 52 65 179 65 239 l0 42 52 7 c80 11 114 32 164 102 56 78 84 95 84 49z m-2388 -162 c5 -200 15 -240 82 -332 50 -67 118 -110 266 -166 212 -81 397 -174 373 -188 -30 -18 -134 -29 -243 -25 -110 4 -134 8 -201 35 -198 78 -397 271 -469 453 -12 31 -24 89 -27 132 -5 65 -3 83 16 122 12 25 39 59 59 77 35 31 105 68 129 69 8 0 12 -52 15 -177z m2885 50 c47 -33 88 -79 103 -117 5 -15 10 -59 10 -98 0 -57 -5 -79 -27 -119 -14 -27 -31 -49 -37 -49 -6 0 -24 19 -40 41 l-28 41 -23 -41 c-44 -77 -50 -103 -30 -141 l18 -34 -45 -41 c-49 -44 -192 -124 -303 -171 -67 -28 -77 -29 -222 -29 -83 0 -155 4 -160 8 -24 26 109 95 399 207 165 64 208 94 257 174 62 104 84 171 83 261 -1 44 -4 92 -8 108 -3 15 -1 27 4 27 5 0 27 -12 49 -27z m-1992 -179 c97 -56 145 -100 145 -131 0 -42 -60 -183 -78 -183 -32 0 -108 94 -131 161 -24 69 -40 199 -25 199 5 0 45 -21 89 -46z m279 -200 c33 -26 76 -54 94 -62 30 -15 52 -56 52 -99 0 -18 -119 -27 -185 -13 l-57 12 7 86 c6 90 12 122 22 122 3 0 33 -21 67 -46z m613 -304 l64 -105 -57 -52 c-73 -68 -126 -93 -193 -93 -44 0 -57 4 -81 28 -15 16 -33 46 -39 68 -15 54 -14 137 3 159 15 21 202 105 225 102 8 -1 43 -49 78 -107z m-682 -34 c36 -9 77 -10 148 -3 54 5 101 6 104 3 11 -11 3 -117 -12 -152 -31 -75 -143 -85 -240 -20 -73 48 -135 105 -135 123 0 8 8 28 17 44 18 31 13 30 118 5z"/>
<path class='lpath' stroke="white" stroke-width="10px" fill="#000000" d="M2755 5063 c26 -64 65 -185 71 -220 5 -32 2 -49 -10 -68 -20 -30 -66 -35 -66 -7 0 19 -18 42 -33 42 -26 0 38 -175 68 -186 25 -10 63 12 85 48 17 27 19 43 14 83 -13 100 -100 325 -127 325 -5 0 -6 -8 -2 -17z"/>
<path class='lpath' stroke="white" stroke-width="10px" fill="#000000" d="M2555 4548 c-74 -152 -72 -223 15 -452 29 -76 55 -155 57 -176 11 -78 -39 -105 -88 -47 -31 35 -37 23 -14 -27 21 -44 74 -94 105 -98 l25 -3 3 96 c3 102 -3 126 -74 289 -25 56 -29 78 -29 155 0 82 3 95 32 150 18 33 41 74 52 90 20 30 20 30 0 63 -12 17 -27 32 -34 32 -8 0 -30 -33 -50 -72z"/>
<path class='lpath' stroke="white" stroke-width="10px" fill="#000000" d="M2750 3620 c0 -16 8 -37 18 -46 9 -8 98 -65 197 -126 99 -60 211 -133 248 -160 37 -28 71 -48 74 -44 12 11 -31 87 -67 120 -21 19 -59 46 -86 62 -27 16 -121 72 -208 126 -88 54 -163 98 -168 98 -4 0 -8 -13 -8 -30z"/>
<path class='lpath' stroke="white" stroke-width="10px" fill="#000000" d="M3452 3314 c-28 -25 -52 -51 -52 -57 0 -15 97 -147 107 -147 5 0 36 25 70 55 l62 55 47 -62 c26 -35 51 -67 55 -72 6 -7 47 20 138 91 14 10 -98 153 -119 153 -5 0 -35 -22 -68 -50 l-60 -50 -53 65 c-30 36 -59 65 -64 65 -6 0 -34 -21 -63 -46z"/>
<path class='lpath' stroke="white" stroke-width="10px" fill="#000000" d="M4351 3330 c-29 -49 -45 -123 -31 -149 8 -17 20 -21 59 -21 60 0 81 20 81 77 0 41 -9 56 -62 102 l-27 23 -20 -32z"/>
<path class='lpath' stroke="white" stroke-width="10px" fill="#000000" d="M5970 4958 c-11 -18 -35 -69 -52 -113 -57 -144 -41 -284 35 -293 20 -3 31 5 51 35 30 43 61 131 51 141 -3 4 -19 -8 -33 -26 -39 -47 -66 -43 -82 13 -12 43 -11 51 28 160 40 113 41 146 2 83z"/>
<path class='lpath' stroke="white" stroke-width="10px" fill="#000000" d="M6080 4465 l-23 -24 26 -48 c78 -141 82 -152 82 -253 0 -93 -1 -97 -50 -200 -45 -96 -50 -112 -53 -193 -6 -141 8 -162 74 -112 30 23 82 110 71 121 -3 3 -15 -9 -27 -25 -25 -36 -42 -39 -71 -10 -29 29 -22 75 31 206 94 235 101 335 32 478 -23 47 -47 85 -55 85 -7 0 -24 -11 -37 -25z"/>
<path class='lpath' stroke="white" stroke-width="10px" fill="#000000" d="M3881 2766 c-16 -17 -26 -46 -34 -95 -6 -39 -13 -71 -17 -71 -3 0 -20 31 -37 69 -35 78 -74 114 -98 90 -8 -8 -17 -28 -21 -46 -6 -28 -2 -34 34 -58 28 -19 51 -47 77 -97 26 -49 40 -67 45 -57 4 8 17 61 29 118 12 58 23 106 25 109 3 2 19 -6 36 -18 26 -19 34 -20 41 -9 13 21 11 42 -7 67 -20 29 -45 28 -73 -2z"/>
<path class='lpath' stroke="white" stroke-width="10px" fill="#000000" d="M5440 4889 c0 -21 10 -43 30 -65 42 -48 66 -100 79 -168 13 -72 17 -77 31 -40 16 42 2 131 -31 201 -45 94 -109 136 -109 72z"/>
<path class='lpath' stroke="white" stroke-width="10px" fill="#000000" d="M3390 4143 c-22 -80 -24 -122 -5 -143 22 -24 61 -26 73 -3 9 15 12 14 37 -5 52 -41 85 -20 85 52 0 20 5 45 12 55 9 15 9 23 -1 35 -22 26 -28 19 -33 -39 -5 -60 -18 -81 -42 -72 -12 5 -16 20 -16 54 0 56 -9 93 -21 93 -5 0 -9 -15 -9 -32 0 -38 -33 -98 -54 -98 -12 0 -12 8 -1 57 13 55 11 83 -6 83 -4 0 -13 -17 -19 -37z"/>
<path class='lpath' stroke="white" stroke-width="10px" fill="#000000" d="M5250 4091 c0 -49 -4 -72 -15 -81 -26 -22 -45 5 -45 65 0 59 -5 68 -31 54 -18 -9 -27 -49 -11 -49 4 0 9 -20 10 -45 1 -25 6 -54 12 -65 15 -29 54 -25 79 8 19 25 22 25 32 10 12 -21 49 -24 67 -6 24 24 5 178 -21 178 -9 0 -5 -53 9 -112 5 -22 3 -28 -10 -28 -22 0 -43 37 -51 93 -9 70 -25 57 -25 -22z"/>
<path class='lpath' stroke="white" stroke-width="10px" fill="#000000" d="M3288 5599 c-32 -31 -38 -45 -38 -79 0 -56 14 -77 59 -91 57 -17 81 -1 81 54 -1 42 -40 150 -56 153 -5 1 -26 -15 -46 -37z"/>
<path class='lpath' stroke="white" stroke-width="10px" fill="#000000" d="M5356 5530 c-19 -41 -26 -70 -22 -92 9 -61 63 -76 115 -32 25 21 31 33 31 66 0 35 -6 47 -40 80 -23 21 -45 38 -49 38 -5 0 -20 -27 -35 -60z"/>
<path class='lpath' stroke="white" stroke-width="10px" fill="#000000" d="M3988 4869 c-13 -7 -18 -23 -18 -54 0 -51 12 -56 47 -23 14 13 27 18 32 12 5 -5 21 -57 36 -116 15 -59 31 -105 35 -103 4 3 18 32 30 65 16 43 31 65 54 80 58 35 66 50 51 88 -9 20 -21 32 -34 32 -25 0 -65 -48 -87 -105 -9 -25 -22 -44 -28 -42 -6 2 -17 35 -24 73 -19 94 -46 121 -94 93z"/>
<path class='lpath' stroke="white" stroke-width="10px" fill="#000000" d="M4687 4865 c-9 -8 -23 -51 -33 -95 -9 -44 -20 -80 -23 -80 -4 0 -15 23 -25 50 -34 94 -108 144 -122 83 -3 -16 -7 -33 -9 -40 -2 -7 10 -21 28 -32 46 -28 71 -59 91 -113 30 -81 37 -73 66 74 6 32 19 67 29 79 l18 23 23 -27 c30 -34 40 -27 40 28 0 34 -5 47 -19 55 -27 14 -47 13 -64 -5z"/>
<path class='lpath' stroke="white" stroke-width="10px" fill="#000000" d="M4301 4671 c-22 -33 -41 -64 -41 -70 0 -8 25 -29 136 -113 8 -5 26 13 53 55 22 35 41 68 41 74 0 10 -130 113 -142 113 -3 0 -24 -27 -47 -59z"/>
<path class='lpath' stroke="white" stroke-width="10px" fill="#000000" d="M4321 4432 c-38 -26 -160 -190 -172 -232 -20 -67 11 -120 64 -106 36 9 107 78 107 104 0 27 -12 28 -35 2 -28 -31 -59 -22 -63 17 -4 39 17 82 72 148 63 76 69 85 60 84 -5 0 -20 -7 -33 -17z"/>
<path class='lpath' stroke="white" stroke-width="10px" fill="#000000" d="M3391 2789 c-11 -17 -25 -60 -31 -95 -7 -35 -16 -66 -20 -69 -4 -3 -13 15 -19 40 -12 47 -76 125 -103 125 -10 0 -19 -15 -26 -40 l-10 -40 48 -34 c39 -28 52 -46 71 -97 14 -34 29 -64 34 -66 6 -2 21 48 33 109 13 62 27 117 33 122 5 6 20 2 38 -12 l30 -22 7 37 c6 31 3 39 -16 55 -32 26 -48 23 -69 -13z"/>
<path class='lpath' stroke="white" stroke-width="10px" fill="#000000" d="M4716 2561 c-21 -24 -46 -103 -46 -148 0 -18 -3 -33 -7 -33 -5 0 -26 38 -48 83 -34 69 -44 82 -66 85 -22 3 -29 -2 -38 -29 -17 -49 -14 -54 33 -79 37 -20 45 -30 55 -69 6 -26 22 -60 35 -76 l24 -30 5 25 c24 120 42 183 58 202 l19 23 19 -25 c24 -30 31 -25 33 23 2 61 -40 88 -76 48z"/>
<path class='lpath' stroke="white" stroke-width="10px" fill="#000000" d="M5245 2454 c-176 -71 -422 -192 -460 -226 -40 -35 -71 -89 -58 -101 3 -3 34 12 69 33 84 52 161 91 328 166 168 75 189 90 184 126 l-3 26 -60 -24z"/>
<path class='lpath' stroke="white" stroke-width="10px" fill="#000000" d="M4169 2251 c-86 -107 -114 -149 -106 -159 5 -7 83 -79 172 -161 l161 -149 117 148 116 149 -155 147 c-85 81 -163 153 -172 160 -15 10 -32 -6 -133 -135z"/>
</g>
</svg>
  <div id="welcome-box">
    <div id="welcome-toggle-wrap">
      <div class="welcome-toggle welcome-toggle-selected">Sign In</div><div class="separator"></div><div class="welcome-toggle">Sign Up</div>
    </div>
    <div id="welcome-module-wrap">
      <div id="signin" class="welcome-module">
        <form>
          <div class="form-group">
            <label for="user">User:</label>
            <input type="text" name="user" placeholder="email or username"></input>
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" name="password"></input>
          </div>
        </form>
      </div>
      <div id="signup" class="welcome-module" style="display: none;">
        <form>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" name="email"></input>
          </div>
          <div class="form-group">
            <label for="username">Username:</label>
            <input type="text" name="username"></input>
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" name="password"></input>
          </div>
          <div class="form-group">
            <label for="conf-password">Confirm Password:</label>
            <input type="password" name="conf-password"></input>
          </div>
        </form>
      </div>
      <div class="form-group" id="rem-check">
        <input type="checkbox" value="remember-me"> Remember Me
      </div>
      <button id="welcome-enter">sign in</button>
    </div>
    <span style="opacity: 0.5;">or</span><br/>
    <div id="guest">continue as guest <span>&#8594</span></div>
    <div id="error-text"></div>
  </div>
</div>
<footer>
    <div class="footer-cont">

<div class="buttoncontainer">
    <div class="menu-button" title="flash cards">
  <i id="startdeck" class="daybutton fas fa-layer-group"></i>
    </div>
</div><div class="separator"></div><div class="buttoncontainer">
    <div class="menu-button" title="multiple choice">
  <i id="startdeck2" class="daybutton fas fa-list-ul"></i>
    </div>
  
</div><div class="separator"></div><div class="buttoncontainer">
    <div class="menu-button" title="free response">
  <i id="startdeck2" class="daybutton fas fa-spell-check"></i>
    </div>
  
</div><div class="separator"></div><div class="buttoncontainer" style="
    border: none;
">
    <div class="menu-button" title="settings">
  <i id="settings-btn" class="daybutton fas fa-cog"></i>
    </div>
  
</div>
        
    </div>

<div id="developer">created by <a href="https://dkhawaja.com/" target="_blank">Daniyal Khawaja</a></div>
</footer>
<div id='flashcard'>
  <div id='closedeck' class='cross crossrotate' style=''><div class="innercross"><div class="vert-cross"></div><div class="horiz-cross"></div></div></div>
  <div id='readsurah'><i class="fas fa-book-open"></i></div>
  <div id="flashcont">
  <div id='question'>
    <div id='questcont'></div>
    </div>
  <div id='answercontainer'>
    <div id='answer1'><div class='anscont'></div></div>
    <div id='answer2'><div class='anscont'></div></div>
    <div id='answer-full'><div class='anscont'></div></div>
  </div>
  </div>
  <div id='showanswer'>Show Answer</div>
    <div id='checkcont'>
      <div id='incorrect'><i class="fa fa-times"></i> Missed it</div>
      <div id='correct'><i class="fa fa-check"></i> Got it</div>
    </div>
  </div>
<div id='showsurah'>
  <div id='goback'>
    <i class="fas fa-arrow-left"></i>
  </div>
  <h1>Cheat Sheet</h1>
  <!-- <audio id='sound' src='https://verses.quran.com/' preload='auto'></audio>-->
  <audio id='sound' src=''></audio>
  <div id='surahcont'></div>
</div>
<div id="scoreCard">1/11</div>
<!-- partial -->
<script  src="./script.js"></script>

</body>
</html>