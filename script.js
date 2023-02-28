var lastselectid = 114;
var lastaction = true;
//var endata = false; coming from endata.js included in html
//console.log(endata);
var filteredEnData = [...endata];
var datachecker = false;
var timer;
var flashCards = [];
var filterFlashCards;
var currentCard; // need to reset if closing deck
var nextCard = false; // need to reset if closing deck
var nextCase = -1; // need to reset if closing deck
var studying = false;
var numSurahsInDeck = 0;
var count = true;
//var loadingcaps = ["sabr", "your page is loading...", "inshAllah it will load", "Ya Allah!", "Please forgive us, refresh the page"];
//var loadingcapindex = 0;
var ayahLengths = [];
//var versesindiv = []; coming from versesindiv.js
var last_length = 0;

//used for ayah lengths
function removeObjectWithId(arr, id) {
  const objWithIdIndex = arr.findIndex((obj) => obj.id === id);

  if (objWithIdIndex > -1) {
    arr.splice(objWithIdIndex, 1);
  }

  return arr;
}

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

/*function newLoadingCaption(index){
  $('#loadingcaps').fadeOut(function(){
    if(index > loadingcaps.length - 1){
      index == loadingcaps.length - 1;
    }
    $('#loadingcaps').html(loadingcaps[index]);
    $('#loadingcaps').delay(500).fadeIn(500);
  })
}
newLoadingCaption(loadingcapindex);*/

function shake(e, oncomplete, distance, time) {
var time = 250;
var distance = 5;
  var new_e = e[0];
var start = (new Date()).getTime();
animate();
function animate() {
    var now = (new Date()).getTime();
    // Get current time
    var elapsed = now - start;
    // How long since we started
    var fraction = elapsed / time;
    // What fraction of total time?
    if (fraction < 1) {
        var x = distance * Math.sin(fraction * 4 * Math.PI);
        new_e.style.left = x + "px";
        // We're aiming for a smooth 40 frames/second animation.
        setTimeout(animate, Math.min(25, time - elapsed));
    } else {
        // Otherwise, the animation is complete
        if (oncomplete) oncomplete(e);
        // Invoke completion callback
    }
   }
}

// Welcome Box JS Begin
$('.welcome-toggle').click(function(){
  $('.welcome-toggle').removeClass('welcome-toggle-selected');
  $(this).addClass('welcome-toggle-selected');
  $('.welcome-module').hide();
  let thisWlcmMod = $(this).html().toLowerCase().replace(/\s/g, '');
  $('#'+thisWlcmMod).show();
  $('#welcome-enter').html($(this).html().toLowerCase());
})

$('.form-group input').on('focus', function() {
  $(this).parent().css('opacity',  1);
})
$('.form-group input').on('blur', function() {
  if($(this).val().length < 1 || ($(this).val() == "remember-me" && !$('#rem-check').is(':checked'))){
    $(this).parent().css('opacity',  0.5);
  }
})

$('#guest').click(function(){
  showMain();
})

// Welcome Box JS End

// Sign in JS
function signin(){
    $.ajax({
        type: "POST",
        url: 'db.php',
        data: {user: $( "#signin input[type=text]" ).val(), password: $( "#signin input[type=password]" ).val(), signing_in: true, remember: $('#rem-check').is(':checked')},
        success: function(data){
          if(data.substring(0,5) == "Error"){
              if(data.indexOf("User") > -1){
                  shake($( "#signin input[type=text]" ).parent());
                  $( "#signin input[type=text]" ).parent().addClass( "invalid-focus" );
              }else if(data.indexOf("Password") > -1){
                  shake($( "#signin input[type=password]" ).parent());
                  $( "#signin input[type=password]" ).parent().addClass( "invalid-focus" );
              }
              $('#error-text').show();
              $('#error-text').html(data);
          }else{
            let user_data = JSON.parse(data);
              //show screen
              /*userObj = [];
              if(data!== ""){
                userObj = JSON.parse(data.replace(/singqt/g, "'"));
              }*/
              $('#setting-email').html(user_data.email);
              $('#setting-email').attr('title', user_data.email);
              $('#setting-user').html(user_data.user_name);
              thisuser = $('#signin input[type=text]').val();
              $('#signin-out-btn').html("Sign out");
              $('.setting-profile').show();
              showMain();
          }
        },
        dataType: 'HTML'
    });
}

// Sign in JS End
var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;

// Sign up JS
function signup(){
  console.log("sign up clicked");
    if(!testEmail.test($("#signup input[type=email]").val())){
        shake($( "#signup input[type=email]" ).parent());
        //$( "#signup input[type=email]" ).parent().effect( "shake", {distance: 5} );
         $( "#signup input[type=email]" ).parent().addClass( "invalid-focus" );
         $('#error-text').show();
         $('#error-text').html("Error: invalid email address");
    }else if(!alphaNumeric($("#signup input[type=text]").val())){
        shake($( "#signup input[type=text]" ).parent());
        $( "#signup input[type=text]" ).parent().addClass( "invalid-focus" );
        $('#error-text').show();
        $('#error-text').html("Error: not alphanumeric");
    }else if($("#signup input[type=text]").val().length<5){
         shake($( "#signup input[type=text]" ).parent());
         $( "#signup input[type=text]" ).parent().addClass( "invalid-focus" );
         $('#error-text').show();
         $('#error-text').html("Error: must be longer than 4 characters");
    }else if(!alphaNumeric($('#signup input[type=password]').eq(0).val())){
        shake($( "#signup input[type=password]" ).eq(0).parent());
        $( "#signup input[type=password]" ).eq(0).parent().addClass( "invalid-focus" );
        $('#error-text').show();
        $('#error-text').html("Error: not alphanumeric");
    } else if($('#signup input[type=password]').eq(0).val().length<7){
        shake($( "#signup input[type=password]" ).eq(0).parent());
        $( "#signup input[type=password]" ).eq(0).parent().addClass( "invalid-focus" );
        $('#error-text').show();
        $('#error-text').html("Error: must be longer than 6 characters");
    }else if($('#signup input[type=password]').eq(1).val() !== $('#signup input[type=password]').eq(0).val()){
        shake($( "#signup input[type=password]" ).parent());
        $( "#signup input[type=password]" ).parent().addClass( "invalid-focus" );
        $('#error-text').show();
        $('#error-text').html("Error: passwords do not match!");
    }else{
        $.ajax({
            type: "POST",
            url: 'db.php',
            data: {email: $("#signup input[type=email]").val(), user: $("#signup input[type=text]").val(), password: $("#signup input[type=password]").val(), signing_up: true, remember: $('#rem-check input').is(':checked')},
            success: function(data){
              console.log(data);
              data = data.trim();
              if(data.substring(0,5) == "Error"){
                  if(data.indexOf("user") > -1){
                      shake($( "#signup input[type=text]" ).parent());
                      $( "#signup input[type=text]" ).parent().addClass( "invalid-focus" );
                  }else if(data.indexOf("Email") > -1){
                      shake($( "#signup input[type=email]" ).parent());
                      $( "#signup input[type=email]" ).parent().addClass( "invalid-focus" );
                  }
                  $('#error-text').show();
                  $('#error-text').html(data);
              }else{
                  //show screen
                  thisuser = data;
                  showMain() 
              }
            },
            dataType: 'HTML'
        });
    }
}
$('#welcome-enter').click(function(e){
  e.preventDefault();
  if($(this).html() == "sign up"){
    signup();
  }else{
    signin();
  }
})
// Sign up JS End

function alphaNumeric(inputtxt)
  {
   var letters = /^[a-z0-9]+$/i;
   if(inputtxt.match(letters))
     {
      return true;
     }
   else
     {
     //alert("message");
     return false;
     }
  }

function signOut(){
    $.ajax({
        type: "POST",
        url: 'db.php',
        data: {signing_out: true},
        success: function(){
            cookieSet = false;
            thisuser = null;
            $('#signin-out-btn').html("Sign in / Sign up");
            $('.setting-profile').hide();
        },
        dataType: 'HTML'
    });

    
}

$('.form-group input').keydown(function(e){
  if(e.keyCode == 13){
    $('#welcome-enter').click();
  }else{
    clearError();
  }
})

function clearError(){
    $( ".form-group" ).removeClass( "invalid-focus" );
    $('#error-text').hide();
}
setTimeout(function(){
  $('.form-group input').each(function(){
    if(($(this).val().length > 0 && $(this).val() !== "remember-me") || ($(this).val() == "remember-me" && $('#rem-check').is(':checked'))){
      $(this).parent().css('opacity', 1);
    }
  })
}, 2000)



$('#signin-out-btn').click(function(){

  if($(this).html() == "Sign out"){
    signOut();
  }
  showHome();
})

function showMain(){
  $("#loadingpage").fadeOut();
}
function showHome(){
  $("#loadingpage").fadeIn();
}

function arabicDigits(num){
  num = num.toString().split('');
  var final =[];
  var arabnums = ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
  for(var i = 0; i < num.length; i++){
      final.push(arabnums[parseInt(num[i])]);
  }
  return final.join('');
}

var randWord = {};
function getWordfromAyah(chapter, ayahnum){
    $.ajaxSetup({
        async: (!nextCard) ? false : true
    });
    $.getJSON("https://api.quran.com/api/v4/verses/by_key/"+chapter+":"+ayahnum+"?language=en&words=true&word_fields=text_uthmani", function(data){
        gvrs = data;
        var words = data.verse.words;
        randWord = words[Math.floor(Math.random()*(words.length-1))];
        if(nextCard){
          [nextCard.englishWord, nextCard.arabicWord] = [randWord.translation.text, randWord.text];
        }
    })
    $.ajaxSetup({
        async: true
    });
}

var ardata = [];
  $('.surahcont').click(function(){
        if($("#settings").hasClass("expand-settings")){
          // had it blocked for some reason?
            $("#settings-btn").click();
        }
      var thisid = this.id;      
      if (thisid == undefined) {
        thisid = e.target.parentElement.id;
      }
      if (thisid == undefined) {
        thisid = e.target.parentElement.parentElement.id;
      }
        //NEED TO ADD LOGIC FOR CHANGING MAX ATTR
        if(endata[thisid].ayahs.length > parseInt($('#verseMax').val())){
           // $('#verseMax').val(data[thisid].ayahs.length);
            //$('#verseMin').attr("max",data[thisid].ayahs.length);
        }
      
      var bismillah = "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ ";
      bismillah += "<br/><br/>"
      if(thisid == 8){
          bismillah = "<br/>";
      }
      if (studying) {
          
        $('#showsurah h1').html("Chapter " +
            (parseInt(thisid)+1));
        $("#surahcont").html(
          endata[thisid].name +
            "<br/>Surah " +
            endata[thisid].englishName +
            "<br/>" +
            endata[thisid].englishNameTranslation +
            "<br/>" +
            bismillah +
            "<i id='surah-audio' class='fas fa-play-circle ayah-audio' onclick='playAudio("+thisid+")'></i>"
        );

        for (var k = 0; k < endata[thisid].ayahs.length; k++) {
          if(k == 0){
              endata[thisid].ayahs[k].arab_text = endata[thisid].ayahs[k].arab_text.replace("بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ ", "")
              console.log(endata[thisid].ayahs[k].text);
          }
 
          var newtext = "";
          for(var m = 0; m < versesindiv[parseInt(thisid)+1].verses[k].words.length-1; m++){
              newtext += "<span  onclick='playAudio(0,0,\""+versesindiv[parseInt(thisid)+1].verses[k].words[m].audio_url+"\")' title='"+versesindiv[parseInt(thisid)+1].verses[k].words[m].translation.text+"'>"+versesindiv[parseInt(thisid)+1].verses[k].words[m].text+"</span>"
          }
          newtext+="<span class='ayahsym' title='Ayah " + (k+1) + "' id='ayahsym"+k+"'>۝<div class='ayahnum' id='ayahnum"+k+"'>"+arabicDigits(k+1) +"</div></span>";
          
          
          
          $("#surahcont").append("<div class='ayah-wrap'><div class='ayah-text'>"+
            newtext +
               "<i class='fas fa-play-circle ayah-audio' onclick='playAudio("+thisid+","+k+")'></i></div><br/> <div class='ayah-trans'>"+ (k+1) + ") " +
              endata[thisid].ayahs[k].text +
              "</div></div>"
          );

          var onewidth = $('#ayahnum'+k).width();
          var twowidth = $('#ayahsym'+k).width();
          $('#ayahsym'+k).css('margin-left',-1*((twowidth/2)+(.75*onewidth))+'px');
        }
      } else {
        var remove = false;
        var surah = endata[thisid].englishNameTranslation;
        flashCards = flashCards.filter(function(el) {
          if (el.surahEngName != surah) {
            return el;
          } else {
            remove = true;
          }
        });

        if(remove){
          removeObjectWithId(ayahLengths, thisid.toString());
        }else{
          ayahLengths.push({id: thisid, length: endata[thisid].ayahs.length});
        }
        if(ayahLengths.length > 0){
          $('#verseMin, #verseMax').attr("max",Math.max(...ayahLengths.map(o => o.length)));
          //if(parseInt($('#verseMax').attr('max')) < $('#verseMax').val()){
          $('#verseMax').val($('#verseMax').attr('max'));
          //}
        }else{
          $('#verseMin, #verseMax').attr("max",1);
          $('#verseMin, #verseMax').val(1);
        }

        if (!remove) {
          for (var k = 0; k < endata[thisid].ayahs.length; k++) {
            if(k == 0){
              endata[thisid].ayahs[k].arab_text = endata[thisid].ayahs[k].arab_text.replace("بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ ", "")
            }
            flashCards.push(
              createFlashCard(
                endata[thisid].ayahs[k].arab_text,
                endata[thisid].ayahs[k].text,
                endata[thisid].name,
                endata[thisid].englishName,
                endata[thisid].englishNameTranslation,
                endata[thisid].ayahs[k].numberInSurah,
                thisid
              )
            );
          }
        }
        
      }
    });


window.addEventListener(
  "click",
  function(e) {
    var thisid = e.target.id;
    if (thisid == "") {
      thisid = e.target.parentElement.id;
    }
    if (thisid == "") {
      thisid = e.target.parentElement.parentElement.id;
    }
    console.log(thisid);
    if (!isNaN(parseInt(thisid))) {
      var jqid = "#" + thisid;
      if ($(jqid).hasClass("added")) {
        lastaction = false;
        $(jqid).removeClass("added");
        numSurahsInDeck--;
        $(jqid + " .cross").removeClass("crossrotate");
      } else {
        lastaction = true;
        $(jqid).addClass("added");
        numSurahsInDeck++;
        
        $(jqid + " .cross").addClass("crossrotate");
      }

      if (e.shiftKey) {
        var lastselectidind = parseInt(lastselectid);
        var thisidind = parseInt(thisid);
        var startind;
        var finalind;
        if (lastselectidind > thisidind) {
          startind = thisidind;
          finalind = lastselectidind;
        } else {
          startind = lastselectidind;
          finalind = thisidind;
        }
        for (var i = startind + 1; i < finalind; i++) {
          if (lastaction) {
            if ($("#" + i).hasClass("added")) {
            } else {
              //$('#'+i).addClass('added');
              $("#" + i).click();
            }
          } else {
            if ($("#" + i).hasClass("added")) {
              //$('#'+i).removeClass('added');
              $("#" + i).click();
            } else {
            }
          }
        }
      } else {
        lastselectid = thisid;
      }
    }
  },
  false
);

/*$("#startdeck").click(function(e) {
  e.preventDefault();
  if (numSurahsInDeck > 0) {
    studying = true;
    //$("#newdeck").css("height", "100%");
    $("#flashcard, #scoreCard").fadeIn();
    nextFlashCard();
    $("#veil").show();
  }else{
      alert('Please select at least one surah!');
      $(this).parent().removeClass('menu-btn-selected');
  }
});*/

$('.menu-button').click(function(){
  if($(this).children('i').attr('id') == "settings-btn"){
      $('.menu-button').not(this).removeClass('menu-btn-selected');
      $(this).toggleClass('menu-btn-selected');
      $("#settings").toggleClass("expand-settings");
  }else{
    $('#goback').click();
    if($("#settings").hasClass("expand-settings")){
        $("#settings-btn").click();
    }
    $('.menu-button').removeClass('menu-btn-selected');
    $(this).addClass('menu-btn-selected');
    
    if($(this).children('i').attr('id') !== "settings-btn"){
      if (numSurahsInDeck > 0) {
        var fc = parseInt($("#flashOn").val());
        var mcq = parseInt($("#mcqOn").val());
        var fr = parseInt($("#fr").val());
        if(fc || mcq || fr){
          studying = true;
          //$("#newdeck").css("height", "100%");
          $("#flashcard").fadeIn();
          nextFlashCard(fc, mcq, fr);
          $("#veil").show();
        }else{
          alert('Quiz Settings are invalid! Please select a question mode!');
          $(this).removeClass('menu-btn-selected');
        }
          
      }else{
          alert('Please select at least one surah!');
          $(this).removeClass('menu-btn-selected');
      }
    }
  }
})
    
    
    

$("#closedeck").click(function(e) {
  e.preventDefault();
  $('.menu-button').removeClass('menu-btn-selected');
  studying = false;
  currentCard = undefined;
  nextCard = false; 
  nextCase = -1; 
  $("#flashcard").fadeOut();
  $("#surahcont").html("");
  $("#newdeck").css("height", "0%");
  $("#veil").hide();
  $("#questcont").html("");
  $("#answer1 .anscont").html("");
  $("#answer2 .anscont").html("");
  $("#answercontainer").css("height", "0%");
  $("#checkcont").css("height", "0px");
});

/*FLASHCARDS OBJECT:
Each Flash card will have to do with one ayah. Three different ways to ask the question:
1) Show arabic ayah
  a) Answer will be translation and name of surah and ayah number
2) Show Name of Surah and Ayah Number
  a) Answer will be translation and arabic ayah
3) Show translation
  a) Answer will be arabic ayah and surah and ayah number
  
  array of objects each with a property of arabic ayah, translation, and surah/ayahnum
  */
function createFlashCard(
  ayah,
  translation,
  surahName,
  surahTName,
  surahEngName,
  ayahNum,
  surahNumber,
  englishWord,
  arabicWord
) {
  var thisCard = new Object();
  thisCard.ayah = ayah;
  thisCard.translation = translation;
  thisCard.surahName = surahName;
  thisCard.surahTName = surahTName;
  thisCard.surahEngName = surahEngName;
  thisCard.ayahNum = ayahNum;
  thisCard.correct = 0;
  thisCard.attempts = 0;
  thisCard.surahNumber = surahNumber;
  thisCard.englishWord = "";
  thisCard.arabicWord = "";
  return thisCard;
}
var newFlashCards;
function nextFlashCard(fc, mcq, fr) {
  var totalCorrect = 0;
  newFlashCards = [...flashCards];
  newFlashCards = newFlashCards.filter(function(el){
    if(el.ayahNum >= parseInt($("#verseMin").val()) && el.ayahNum <= parseInt($("#verseMax").val())){
      return el;
    }
  })

  var qModeMax = []; // choosing between flashcard, mcq, or free response
  if(fc) { qModeMax.push(1) };
  if(mcq) { qModeMax.push(2) };
  if(fr) { qModeMax.push(3) };
  let mode = qModeMax[Math.floor(Math.random() * qModeMax.length)];
  //newFlashCards = newFlashCards.slice(parseInt($("#verseMin").val())-1,parseInt($("#verseMax").val()));
  for(var i = 0; i < newFlashCards.length; i++){
    totalCorrect += newFlashCards[i].correct;
  }
  $('#scoreCard').html(totalCorrect+'/'+newFlashCards.length);
  
  var thisCard = nextCard ? nextCard : newFlashCards[Math.floor(Math.random() * newFlashCards.length)];
  ayahnumindex = thisCard.ayahNum - 1;
  currentCard = thisCard;
  $("#" + thisCard.surahNumber).click(); // USED TO SHOW SURAH!!! -- can later fix by creating function to show
  $("#" + thisCard.surahNumber).click(); // NEED TO DOUBLE CLICK TO KEEP IN LIST!!!

  $("#flashcard").css(
    "border-color",
    getLevelColor(thisCard.correct, thisCard.attempts)
  );
  var cases = (nextCase > -1) ? nextCase : 0;
  var vrsOn = parseInt($('#versesOn').val());
  var vocabOn = parseInt($('#vocabOn').val());

  if(vrsOn && !vocabOn){
      if(nextCase == -1){
        cases = Math.floor(Math.random() * 3) + 1;  
      }
      nextCase = Math.floor(Math.random() * 3) + 1;
  } else if(!vrsOn && vocabOn){
      if(nextCase == -1){
        cases = Math.floor(Math.random() * 2) + 4;  
      }
      nextCase = Math.floor(Math.random() * 2) + 4;
  } else if(vrsOn && vocabOn){
      if(nextCase == -1){
        cases = Math.floor(Math.random() * 5) + 1;  
      }
      nextCase = Math.floor(Math.random() * 5) + 1;
  } else {
      alert("Flash Card Settings are invalid!")
  }
  $('.anscont').html("");
  $('#answer-full').hide();
  if(cases > 3){ 
    $('#answer-full').show(); 
    if(!nextCard){
      console.log("doing work");
      getWordfromAyah(parseInt(thisCard.surahNumber)+1, thisCard.ayahNum);
      [thisCard.englishWord, thisCard.arabicWord] = [randWord.translation.text, randWord.text];
    }
  }

  if (cases == 1) {
    if(mode == 1){
      // if Flash Card
      $("#flashcard #questcont").html(thisCard.ayah);
      $("#flashcard #answer1 .anscont").html(thisCard.translation);
      $("#flashcard #answer2 .anscont").html(
        "Chapter " +
          (parseInt(thisCard.surahNumber) + 1) +
          "<br/>" +
          thisCard.surahName +
          "<br/>" +
          thisCard.surahTName +
          "<br/>" +
          thisCard.surahEngName +
          "<br/>Ayah No. " +
          thisCard.ayahNum +
          "<br/>"
      );
      $('.anscont').addClass("sz-en");
      $('#questcont').addClass("sz-ar");
    } else if (mode == 2){
      let options = newFlashCards.filter(function(el){
          if(el.surahNumber == thisCard.surahNumber && el.ayahNum !== thisCard.ayahNum){
            return el;
          }
        })
      options = shuffle(options);
      options = options.slice(0, 3);
      options.push(thisCard);
      $("#flashcard #questcont").html("What is the meaning of the following ayah?<br>"
        + "<div class='mcq-quest'>" + thisCard.ayah + "</div>"
        + "<div class='mcq-option'>A) " + options[0].translation + "</div>"
        + "<div class='mcq-option'>B) " + options[1].translation + "</div>"
        + "<div class='mcq-option'>C) " + options[2].translation + "</div>"
        + "<div class='mcq-option'>D) " + options[3].translation + "</div>" 
        );
    }
    
  } else if (cases == 2) {
    $("#flashcard #answer1 .anscont").html(thisCard.ayah);
    $("#flashcard #questcont").html(thisCard.translation);
    $("#flashcard #answer2 .anscont").html(
      "Chapter " +
        (parseInt(thisCard.surahNumber) + 1) +
        "<br/>" +
        thisCard.surahName +
        "<br/>" +
        thisCard.surahTName +
        "<br/>" +
        thisCard.surahEngName +
        "<br/>Ayah No. " +
        thisCard.ayahNum +
        "<br/>"
    );
    $('#answer2 .anscont, #questcont').addClass("sz-en");
    $('#answer1 .anscont').addClass("sz-ar");
  } else if (cases == 3) {
    $("#flashcard #answer1 .anscont").html(thisCard.ayah);
    $("#flashcard #answer2 .anscont").html(thisCard.translation);
    $("#flashcard #questcont").html(
      "Chapter " +
        (parseInt(thisCard.surahNumber) + 1) +
        "<br/>" +
        thisCard.surahName +
        "<br/>Surah " +
        thisCard.surahTName +
        "<br/>" +
        thisCard.surahEngName +
        "<br/>Ayah No. " +
        thisCard.ayahNum +
        "<br/>"
    );
    $('#answer2 .anscont, #questcont').addClass("sz-en");
    $('#answer1 .anscont').addClass("sz-ar");
  } else if (cases == 4) {
    $("#flashcard #answer-full .anscont").html(thisCard.englishWord);
    $("#flashcard #questcont").html(thisCard.arabicWord);
    $('#answer-full .anscont').addClass("sz-en");
    $('#questcont').addClass("sz-ar");
  } else if (cases == 5) {
    $("#flashcard #answer-full .anscont").html(thisCard.arabicWord);
    $("#flashcard #questcont").html(thisCard.englishWord);
    $('#questcont').addClass("sz-en");
    $('#answer-full .anscont').addClass("sz-ar");
  }
  
  if ($("#questcont").height() > $("#question").height()) {
    $("#questcont").css({ height: "auto", bottom: "auto" });
  } else {
    $("#questcont").css({ height: "max-content", bottom: 0 });
  }
  if ($("#answer1 .anscont").height() > 180) {
    $("#answer1 .anscont").css({ height: "auto", bottom: "auto" });
  } else {
    $("#answer1 .anscont").css({ height: "max-content", bottom: 0 });
  }
  if ($("#answer2 .anscont").height() > 180) {
    $("#answer2 .anscont").css({ height: "auto", bottom: "auto" });
  } else {
    $("#answer2 .anscont").css({ height: "max-content", bottom: 0 });
  }

  nextCard = newFlashCards[Math.floor(Math.random() * newFlashCards.length)];
  if(nextCase > 3){
    console.log("doing work for next");
    getWordfromAyah(parseInt(nextCard.surahNumber)+1, nextCard.ayahNum);
  }
  
}


$("#correct").click(function() {
  $("#questcont").html("");
  $("#answer1 .anscont").html("");
  $("#answer2 .anscont").html("");
  $('#questcont').removeClass("sz-ar sz-en");
  $("#answercontainer").css("height", "0%");
  $("#checkcont").css("height", "0px");
  currentCard.correct++;
  currentCard.attempts++;
  //console.log(currentCard.correct);
  setTimeout(function(){
    $('.anscont').removeClass("sz-ar sz-en");
    nextFlashCard();
  }, 200);
  //nextFlashCard();
});

$("#incorrect").click(function() {
  $("#questcont").html("");
  $("#answer1 .anscont").html("");
  $("#answer2 .anscont").html("");
  $('#questcont').removeClass("sz-ar sz-en");
  $("#answercontainer").css("height", "0%");
  $("#checkcont").css("height", "0px");
  //had this commented out?
  currentCard.attempts++;
  setTimeout(function(){
    $('.anscont').removeClass("sz-ar sz-en");
    nextFlashCard();
  }, 200);
});

$("#showanswer").click(function() {
  $("#answercontainer").css("height", "276px");
  $("#checkcont").css("height", "40px");
});

function getLevelColor(correct, attempts) {
  if (attempts == 0) {
    return "var(--theme)";
  } else {
    var percent = correct / attempts;
    if (percent < 1 / 3) {
      return "#f94f4f";
    } else if (percent < 2 / 3) {
      return "#ffeb3b";
    } else {
      return "#41ffa7";
    }
  }
}



function filterSearch(){
    if($("#settings").hasClass("expand-settings")){
        $("#settings-btn").click();
    }
    var search = $('#search input').val();
    //var results = filterIt(endata, search);
    var results = filterIt(filteredEnData, search);
    $('.surahcont').hide();
    if(results.length>0){
            
            for(var i = 0; i < results.length; i++){
        
        var surahnum = results[i].number - 1;
        $('#'+surahnum).show();
    }
        }else{
            //$('.surahcont').show();
        }  
}

function filterJuz(){
    var juzMin = parseInt($("#juzMin").val());
    var juzMax = parseInt($("#juzMax").val());
    var results = [];
    filteredEnData = filteredEnData.filter(function(el){
      var filteredAyahs = el.ayahs.filter(function(ayah){
                if(ayah.juz >= juzMin && ayah.juz <= juzMax && results.indexOf(el) == -1){
                    results.push(el);
                    return ayah;
                }
            })
      if(filteredAyahs.length > 0) return el;
    })


    
    if(results.length>0){
      $('.surahcont').hide();
        for(var i = 0; i < results.length; i++){
            var surahnum = results[i].number - 1;
            $('#'+surahnum).show();
        }
    }else{
        $('.surahcont').show();
        filteredEnData = [...endata];
        $("#juzMin, #juzMax").attr({"min": 1, "max": 30});
        $("#juzMin").val(1);
        $("#juzMax").val(30);
        $("#surahMin, #surahMax").attr({"min": 1, "max": 114});
        $("#surahMin").val(1);
        $("#surahMax").val(114);
    }
}

function filterSurah(){
    var surahMin = parseInt($("#surahMin").val());
    var surahMax = parseInt($("#surahMax").val());
    var results = [];
    filteredEnData = filteredEnData.filter(function(el){
      if(el.number >= surahMin && el.number <= surahMax && results.indexOf(el) == -1){
          results.push(el);
          return el;
      }
    })

    
    if(results.length>0){
      $('.surahcont').hide();
        for(var i = 0; i < results.length; i++){
            var surahnum = results[i].number - 1;
            $('#'+surahnum).show();
        }
    }else{
        $('.surahcont').show();
        filteredEnData = [...endata];
        $("#juzMin, #juzMax").attr({"min": 1, "max": 30});
        $("#juzMin").val(1);
        $("#juzMax").val(30);
        $("#surahMin, #surahMax").attr({"min": 1, "max": 114});
        $("#surahMin").val(1);
        $("#surahMax").val(114);
    }
}

function filterIt(arr, searchKey) {
  var results = [];
  var tresults = [];
  //results = Object.values(arr[0]);
  results = arr.filter(function(el){
      var thresults = Object.values(el).filter(function(val){
          if(val.toString().toLowerCase().indexOf(searchKey.toLowerCase()) !== -1){
              tresults.push(el);
          }
            
    })
    var ayahresults = el.ayahs.filter(function(ayah){
                var thresults = Object.values(ayah).filter(function(val){
                      if(val.toString().toLowerCase().indexOf(searchKey.toLowerCase()) !== -1){
                          tresults.push(el)
                      }
                        
                })
            })
    if(searchKey.toLowerCase().includes("chapter") || searchKey.toLowerCase().includes("surah")){
        var surah = searchKey.replace("surah", "").replace("chapter", "").replace(/\s/g, "");
        if(isNaN(parseInt(surah))){
            console.log('no number');
            console.log(surah);
            if(el.englishNameTranslation.toLowerCase().indexOf(surah) !== -1 && tresults.indexOf(el) == -1){
                tresults.push(el);
            }
            if(el.englishName.toLowerCase().indexOf(surah) !== -1 && tresults.indexOf(el) == -1){
                tresults.push(el);
            }
        }else{
            surah = parseInt(surah);

                if(el.number == surah && tresults.indexOf(el) == -1){
                    tresults.push(el);
                }
        }
        
    }
    if(searchKey.toLowerCase().includes("juz") || searchKey.toLowerCase().includes("book")){
        var juz = searchKey.replace("juz", "").replace("book", "").replace(/\s/g, "");
        juz = parseInt(juz);
        var ayahresults = el.ayahs.filter(function(ayah){
                if(ayah.juz == juz && tresults.indexOf(el) == -1){
                    tresults.push(el);
                }
            })
    }

  });
  //el.toString().toLowerCase().includes(searchKey.toLowerCase())
  /*console.log(Object.values(arr[0]).some(res => res.includes(searchKey)));
  */
  console.log(tresults);
  return tresults;
}
var ayahnumindex = 0;
$('#readsurah').click(function(){
  $('#showsurah').fadeIn(500);
  $('#showsurah div, #showsurah h1').delay(500).fadeIn(500);
  setTimeout(function(){
    $('#showsurah').animate({
        scrollTop: $(".ayah-text").eq(ayahnumindex).offset().top- $('#showsurah').offset().top + $('#showsurah').scrollTop()
    }, 500);
  },700);
  setTimeout(function(){
    $(".ayah-text").eq(ayahnumindex).parent().addClass('highlight-ayah');
  },1000);
  setTimeout(function(){
    $(".ayah-text").eq(ayahnumindex).parent().removeClass('highlight-ayah');
  },3000);
  
})

$('#goback').click(function(){
  $('#sound')[0].pause();
  $('#showsurah div, #showsurah h1').fadeOut(500);
  $('#showsurah').delay(500).fadeOut(500);
})
//Animating Divs
//$('#loadingpage h1').addClass('animated bounceInDown');
/*$('#loadingpage h1').hide();
$('#loadingpage h1').delay(1000).fadeIn(1000);*/

// PLAYING AUDIO
var myAudio = $('#sound')[0];

myAudio.addEventListener("ended", function(){
     myAudio.currentTime = 0;
     $('.fa-pause-circle').toggleClass('fa-pause-circle fa-play-circle');
});

function playAudio(surah, ayah, wordUrl = false){
    if(ayah == undefined){
      if($('#sound').attr("src") !== ("https://download.quranicaudio.com/qdc/mishari_al_afasy/murattal/"+(parseInt(surah)+1)+".mp3")){
          $('#sound').attr("src","https://download.quranicaudio.com/qdc/mishari_al_afasy/murattal/"+(parseInt(surah)+1)+".mp3");
      }
      //for whole surah use:
      // https://download.quranicaudio.com/qdc/mishari_al_afasy/murattal/74.mp3
    }else{
      var audioText = "";
      var tsur = parseInt(surah)+1;
      var tayah = parseInt(ayah) + 1;
      var prefix = "Alafasy/mp3/";
      if(tsur > 99){
        audioText = tsur;
      }else if(tsur > 9){
        audioText = "0"+tsur;
      }else{
        audioText = "00"+tsur;
      }
      audioText = prefix + audioText;
      
      if(tayah > 99){
        audioText += tayah;
      }else if(tayah > 9){
        audioText += "0"+tayah;
      }else{
        audioText += "00"+tayah;
      }
      audioText+=".mp3";
      if(wordUrl){
          audioText = wordUrl;
      }
      if($('#sound').attr("src") !== "https://verses.quran.com/"+audioText){
        $('#sound').attr("src","https://verses.quran.com/"+audioText);
      }
      
    }
    $('#sound')[0].play();
    
}

// Handling Pausing and Playing Audio
/*$('.fa-play-circle, .fa-pause-circle').on('click', function () {
  $(this).toggleClass('fa-pause-circle fa-play-circle');
})

$('.fa-pause-circle').on('click', function () {
  $('#sound')[0].pause();

})
*/
$(document).on('click','.fa-play-circle',function(e) {
  //handler code here
  $('.fa-pause-circle').toggleClass('fa-pause-circle fa-play-circle');
  $(this).toggleClass('fa-pause-circle fa-play-circle');
});
$(document).on('click','.fa-pause-circle',function(e) {
  //handler code here
  $('#sound')[0].pause();
  $(this).toggleClass('fa-pause-circle fa-play-circle');
});




$('#switchMode').click(function(){
        var isSun = parseInt($(this).val());
        if(isSun){
            $(this).prop('value',0);
            document.documentElement.style.setProperty('--theme', 'white');
            document.documentElement.style.setProperty('--theme-bg', '#313131');
            //$('body, footer, #settings').css({'background-color':'#313131','color':'white'});
            $('#buttoncontainer button').removeClass('daybutton');
            $('#buttoncontainer button').addClass('nightbutton');
        } else {
            $(this).prop('value',1);
            document.documentElement.style.setProperty('--theme', 'black');
            document.documentElement.style.setProperty('--theme-bg', '#f1f1f1');
            
            //$('body, footer, #settings').css({'background-color':'#f1f1f1','color':'black'});
            $('#buttoncontainer button').removeClass('nightbutton');
            $('#buttoncontainer button').addClass('daybutton');
        }
        localStorage.setItem('displayMode', $(this).val());
    })

$('#textSize').click(function(){
    var isSmall = parseInt($(this).val());
    if(isSmall){
        //$(this).prop('value',1);
        document.documentElement.style.setProperty('--ar-font-sz', '20pt');
        document.documentElement.style.setProperty('--en-font-sz', '12pt');
        document.documentElement.style.setProperty('--ayah-num-font-sz', '6pt');
        document.documentElement.style.setProperty('--ayah-num-pos-left', '18px');
        document.documentElement.style.setProperty('--ayah-num-pos-top', '14px');
    } else {
        //$(this).prop('value',1);
        document.documentElement.style.setProperty('--ar-font-sz', '30pt');
        document.documentElement.style.setProperty('--en-font-sz', '16pt');
        document.documentElement.style.setProperty('--ayah-num-font-sz', '9pt');
        document.documentElement.style.setProperty('--ayah-num-pos-left', '7px');
        document.documentElement.style.setProperty('--ayah-num-pos-top', '11px');
        
    }
    localStorage.setItem('textSize', $(this).val());
})
    
$('.setting-input input').not("#switchMode, .num-input").click(function(){
    var currVal = parseInt($(this).val());
    console.log(currVal);
    if(currVal){
        $(this).prop('value',0);
    } else {
        $(this).prop('value',1);
    }
})    

//Last val is used in the case the user empties the number input, it will auto fill in the last value in that num input
var last_val = 1;

$('.num-input').keydown(function(){
  last_val = parseInt($(this).val());
})

$('.num-input').change(function() {
  
  var max = parseInt($(this).attr('max'));
  if (parseInt($(this).val()) > max) {
      $(this).val(max); 
  }

  // min handling
  var min = parseInt($(this).attr('min'));
  if (parseInt($(this).val()) < min) {
      $(this).val(min); 
  }

  if($(this).val() == ""){
    $(this).val(last_val);
  }

  //TESTING CONSOLIDATED LOGIC:
  var min_max = parseInt($(this).parent().children('.num-input-min').attr('max'));
  var min_val = parseInt($(this).parent().children('.num-input-min').val());
  var min_min = parseInt($(this).parent().children('.num-input-min').attr('min'));
  var max_max = parseInt($(this).parent().children('.num-input-max').attr('max'));
  var max_val = parseInt($(this).parent().children('.num-input-max').val());
  var last_num_diff = parseInt($(this).parent().attr("data-diff"));

  if(min_val > max_val){
    if($(this).hasClass("num-input-min")){
      if(min_val + last_num_diff <= max_max){
        $(this).parent().children('.num-input-max').val(min_val + last_num_diff);
      }else{
        $(this).parent().children('.num-input-max').val(max_max);
      }
    }else if($(this).hasClass("num-input-max")){
      if(max_val - last_num_diff >= min_min){
        $(this).parent().children('.num-input-min').val(max_val - last_num_diff);
      }else{
        $(this).parent().children('.num-input-min').val(min_min);
      }
    }
  }

  var last_num_diff = $(this).parent().children('.num-input-max').val() - $(this).parent().children('.num-input-min').val();
  $(this).parent().attr("data-diff", last_num_diff);

});

$("#juzMax, #juzMin").change(function(){ filterJuz() });
$("#surahMax, #surahMin").change(function(){ filterSurah() });



/* LOCAL STORAGE VARIABLES */
// Settings: displayMode (0: day, 1: night), vocabOn, versesOn, 
if(!parseInt(localStorage.getItem('displayMode'))){
    document.documentElement.style.setProperty('--theme', 'white');
    document.documentElement.style.setProperty('--theme-bg', '#313131');
    $('#buttoncontainer button').removeClass('daybutton');
    $('#buttoncontainer button').addClass('nightbutton');
    $('#switchMode').click();
}

// localStorage.setItem('myCat', 'Tom');

/* END LOCAL STORAGE */



    