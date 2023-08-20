var lastselectid = 114;
var lastaction = true;
//var endata = false; coming from endata.js included in html
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
let surahsSelected = [];
var count = true;
let mode = 0;
//var loadingcaps = ["sabr", "your page is loading...", "inshAllah it will load", "Ya Allah!", "Please forgive us, refresh the page"];
//var loadingcapindex = 0;
var ayahLengths = [];
//var versesindiv = []; coming from versesindiv.js
var last_length = 0;

// Initializing states:
$(".juzcont").hide();

//used for ayah lengths
function removeObjectWithId(arr, id) {
  const objWithIdIndex = arr.findIndex((obj) => obj.id === id);

  if (objWithIdIndex > -1) {
    arr.splice(objWithIdIndex, 1);
  }

  return arr;
}

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  // If you don't care about the order of the elements inside
  // the array, you should sort both arrays here.
  // Please note that calling sort on an array will modify that array.
  // you might want to clone your array first.

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
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
        url: './backend/db.php',
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
              $('#setting-email').html(user_data.email);
              $('#setting-email').attr('title', user_data.email);
              $('#setting-user').html(user_data.user_name);
              thisuser = $('#signin input[type=text]').val();
              $('#signin-out-btn').html("Sign out");
              $('.setting-profile').show();
              showMain();
              decks = user_data.decks !== "" ? JSON.parse(user_data.decks) : [];
              updateDecks();
          }
        },
        dataType: 'HTML'
    });
}

// Sign in JS End
var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;

// Sign up JS
function signup(){
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
            url: './backend/db.php',
            data: {email: $("#signup input[type=email]").val(), user: $("#signup input[type=text]").val(), password: $("#signup input[type=password]").val(), signing_up: true, remember: $('#rem-check input').is(':checked')},
            success: function(data){
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
        url: './backend/db.php',
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
// Decks will look like this:
// {name: i.e. Juz 29, surahs: [1,4,5,6,9]}

let decks = [
  {
    name: "Deck 1",
    surahs: [1, 4, 9]
  }
];

function updateDecks(){
  if(decks.length > 0){
    $("#deck-collection").html("");
  }else{
    $("#deck-collection").html("You have no decks");
  }
  for(var i = 0; i < decks.length; i++){
  $("#deck-collection").append(
    "<div class='setting-wrap'>" +
    "<div class='setting-label' style='width: auto;'>"+decks[i].name+"</div>"+
    "<button class='setting-info-btn edit-deck-btn' deck-id="+i+"><i class='fa fa-edit'></i> Edit</button>"+
    "<button class='setting-info-btn learn-deck-btn' deck-id="+i+" style='margin-right: 5px;'><i class='fas fa-brain'></i> Learn</button>" +               
    "</div>"
    )
  }
}
updateDecks();

$('#add-deck-btn').click(function(){
  if($('.added').length > 1){
    let addedSurahs = [];
    $('.added').each(function(){
      addedSurahs.push(parseInt($(this).attr("id"))+1);
    })
    if(decks.filter(e => arraysEqual(e.surahs, addedSurahs)).length > 0){
      let existing_deck = "";
      decks.filter(function(e) {
        if(arraysEqual(e.surahs, addedSurahs)){
          existing_deck = e.name;
        }
      })
      alert("This collection already exists as " + existing_deck);
    }else{
      $("#surah-deck-selection").html("");
      $("#deck_name").prop("value","");
      $('.added').each(function(){
        $("#surah-deck-selection").append(
          "<div class='surah-selection'>" +
          "<div class='surah-label'>" +
          (parseInt($(this).attr("id"))+1) +
          "</div>" +
          $(this).find(".surahname").html() +
          "</div>"
          );
      })
      $("#edit-deck").show();
    }
  } else {
    alert("Select at least 2 surahs!");
  }

})

let editing_deck_id = -1;
$(document).on('click','.edit-deck-btn',function(e) {

//$('#deck-collection .setting-info-btn').eq(0).click(function(){
  //if($('.added').length > 1){
    editing_deck_id = $(this).attr("deck-id");
    $("#surah-deck-selection").html("");
    $("#deck_name").prop("value", decks[editing_deck_id].name);
    //$('.added').each(function(){
    for(var i = 0; i < decks[editing_deck_id].surahs.length; i++){
      let srhInd = decks[editing_deck_id].surahs[i];
      $("#surah-deck-selection").append(
        "<div class='surah-selection'>" +
        "<div class='surah-label'>" +
        srhInd +
        "</div>" +
        $("#"+(srhInd-1)).find(".surahname").html() +
        "</div>"
        );
    }
    //})
    $("#delete-deck").show();
    $("#edit-deck").show();
  /*} else {
    alert("Select at least 2 surahs!");
  }*/

})


$(document).on('click','.learn-deck-btn',function(e) {
//$('#deck-collection .setting-info-btn').eq(1).click(function(){
  let this_deck = decks[$(this).attr("deck-id")];
  $('.surahcont').removeClass('added');
  for(var i = 0; i < this_deck.surahs.length; i++){
    $("#"+(this_deck.surahs[i]-1)).click();
  }
  $("#startdeck").click();
})

$("#edit-deck .exit").click(function(){
  editing_deck_id = -1;
  $("#edit-deck").hide();
  $("#delete-deck").hide();
})

$("#save-deck").click(function(){
  if(decks.filter((e, idx) => (e.name === $("#deck_name").val() && idx !== editing_deck_id)).length > 0 || $("#deck_name").val() == ""){
    alert("Please enter a unique Deck Name");
  }else{
    let deck = {
      name: $("#deck_name").val(),
      surahs: []
    }
    $(".surah-selection").each(function(){
      deck.surahs.push(parseInt($(this).children().html()));
    })
    decks.push(deck);
    $.ajax({
      type: "POST",
      url: './backend/db.php',
      data: {user: thisuser, decks: JSON.stringify(decks), updating_decks: true},
      success: function(data){
        //console.log(data);
        updateDecks();
        $("#edit-deck .exit").click();
      },
      dataType: 'HTML'
    });
    
  }
})

$("#delete-deck").click(function(){
  var confirmDelete = confirm("Would you like to delete the following deck: "+ decks[editing_deck_id].name+ "?");
  if(confirmDelete) {
    decks.splice(editing_deck_id, 1);
    $.ajax({
      type: "POST",
      url: './backend/db.php',
      data: {user: thisuser, decks: JSON.stringify(decks), updating_decks: true},
      success: function(data){
        //console.log(data);
        updateDecks();
        $("#edit-deck .exit").click();
      },
      dataType: 'HTML'
    });
  }
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
/* OLD:
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
}*/
// NEW:
function getWordfromAyah(chapter, ayahnum){
  console.log("Chapter is: "+ chapter);
  let word_array = versesindiv[parseInt(chapter)].verses[ayahnum].words;
  console.log(word_array);
  randWord = word_array[Math.floor(Math.random()*(word_array.length-1))];
  if(nextCard){
    [nextCard.englishWord, nextCard.arabicWord] = [randWord.translation.text, randWord.text];
  }
}

function getWordOptionsfromAyah(card){
  let chapter = parseInt(card.surahNumber);
  let ayahnum = parseInt(card.ayahNum);
  console.log("Chapter is: "+ chapter);
  // Deep copying instead of shallow copy
  let filtered_verses = JSON.parse(JSON.stringify(versesindiv[parseInt(chapter)+1].verses));
  console.log(filtered_verses);
  filtered_verses = filtered_verses.filter(function(el) {
          el.words = el.words.filter(function(tl) {
            if(tl.text !== card.arabicWord && tl.char_type_name !== "end") return tl;
          });
          el.words = shuffle(el.words);
          return el;
        });
  let opts = [];
  for(var i = 0; i < 3; i++){
    let rndIdx = Math.floor(Math.random()*filtered_verses.length);
    let randomWord = filtered_verses[rndIdx].words.pop();
    if(filtered_verses[rndIdx].words.length == 0){
      filtered_verses.splice(rndIdx, 1);
    }
    opts.push([randomWord.translation.text, randomWord.text]);
  }
  return opts;
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
      if($(this).hasClass('menu-btn-selected')){
        $("#settings").addClass("expand-settings");
      }else{
        $("#settings").removeClass("expand-settings");
      }
      $(".decks").hide();
      $(".settings").show();
  }else if($(this).children('i').attr('id') == "decks-btn"){
      $('.menu-button').not(this).removeClass('menu-btn-selected');
      $(this).toggleClass('menu-btn-selected');
      if($(this).hasClass('menu-btn-selected')){
        $("#settings").addClass("expand-settings");
      }else{
        $("#settings").removeClass("expand-settings");
      }
      $(".settings").hide();
      $(".decks").show();
  }else{
    $('#goback').click();
    if($("#settings").hasClass("expand-settings")){
        $("#settings-btn").click();
    }
    if($("#decks").hasClass("expand-settings")){
      $("#decks-btn").click();
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
          nextFlashCard();
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
function nextFlashCard() {
  var fc = parseInt($("#flashOn").val());
  var mcq = parseInt($("#mcqOn").val());
  var fr = parseInt($("#fr").val());
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
  mode = qModeMax[Math.floor(Math.random() * qModeMax.length)];
  console.log("The mode is: " + mode);
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
      getWordfromAyah(parseInt(thisCard.surahNumber)+1, (thisCard.ayahNum-1));
      [thisCard.englishWord, thisCard.arabicWord] = [randWord.translation.text, randWord.text];
    }
  }
  let options = [];
  if(mode == 2){
    if(cases > 3){
      options = getWordOptionsfromAyah(thisCard);
      options.push([thisCard.englishWord, thisCard.arabicWord]);
      options = shuffle(options);
    }else{
      options = newFlashCards.filter(function(el){
        if(el.surahNumber == thisCard.surahNumber && el.ayahNum !== thisCard.ayahNum && el.translation !== thisCard.translation){
          return el;
        }
      })
      options = shuffle(options);
      options = options.slice(0, 3);
      options.push(thisCard);
      options = shuffle(options);
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
      let subMode = Math.random();
      if(subMode < 0.5){
        $("#flashcard #questcont").html("What is the meaning of the following ayah?<br>"
        + "<div class='mcq-quest'>" + thisCard.ayah + "</div>"
        + "<div class='mcq-option'>A) " + options[0].translation + "</div>"
        + "<div class='mcq-option'>B) " + options[1].translation + "</div>"
        + "<div class='mcq-option'>C) " + options[2].translation + "</div>"
        + "<div class='mcq-option'>D) " + options[3].translation + "</div>" 
        );
      }else{
        $("#flashcard #questcont").html("What is the location of the following ayah?<br>"
        + "<div class='mcq-quest'>" + thisCard.ayah + "</div>"
        + "<div class='mcq-option'>A) " + "Chapter " + (parseInt(options[0].surahNumber) + 1) + " | " + options[0].surahName + " | " + options[0].surahTName + " | " + options[0].surahEngName + " | Ayah No. " + options[0].ayahNum + " | " + "</div>"
        + "<div class='mcq-option'>B) " + "Chapter " + (parseInt(options[1].surahNumber) + 1) + " | " + options[1].surahName + " | " + options[1].surahTName + " | " + options[1].surahEngName + " | Ayah No. " + options[1].ayahNum + " | " + "</div>"
        + "<div class='mcq-option'>C) " + "Chapter " + (parseInt(options[2].surahNumber) + 1) + " | " + options[2].surahName + " | " + options[2].surahTName + " | " + options[2].surahEngName + " | Ayah No. " + options[2].ayahNum + " | " + "</div>"
        + "<div class='mcq-option'>D) " + "Chapter " + (parseInt(options[3].surahNumber) + 1) + " | " + options[3].surahName + " | " + options[3].surahTName + " | " + options[3].surahEngName + " | Ayah No. " + options[3].ayahNum + " | " + "</div>" 
        );
      }
      
    }
  } else if (cases == 2) {
    if(mode == 1){
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
    } else if (mode == 2){
      let subMode = Math.random();
      if(subMode < 0.5){
        $("#flashcard #questcont").html("Which ayah has the following meaning?<br>"
          + "<div class='mcq-quest'>" + thisCard.translation + "</div>"
          + "<div class='mcq-option'>A) " + options[0].ayah + "</div>"
          + "<div class='mcq-option'>B) " + options[1].ayah + "</div>"
          + "<div class='mcq-option'>C) " + options[2].ayah + "</div>"
          + "<div class='mcq-option'>D) " + options[3].ayah + "</div>" 
          );
      }else{
        $("#flashcard #questcont").html("What is the location of the following ayah translation?<br>"
        + "<div class='mcq-quest'>" + thisCard.translation + "</div>"
        + "<div class='mcq-option'>A) " + "Chapter " + (parseInt(options[0].surahNumber) + 1) + " | " + options[0].surahName + " | " + options[0].surahTName + " | " + options[0].surahEngName + " | Ayah No. " + options[0].ayahNum + " | " + "</div>"
        + "<div class='mcq-option'>B) " + "Chapter " + (parseInt(options[1].surahNumber) + 1) + " | " + options[1].surahName + " | " + options[1].surahTName + " | " + options[1].surahEngName + " | Ayah No. " + options[1].ayahNum + " | " + "</div>"
        + "<div class='mcq-option'>C) " + "Chapter " + (parseInt(options[2].surahNumber) + 1) + " | " + options[2].surahName + " | " + options[2].surahTName + " | " + options[2].surahEngName + " | Ayah No. " + options[2].ayahNum + " | " + "</div>"
        + "<div class='mcq-option'>D) " + "Chapter " + (parseInt(options[3].surahNumber) + 1) + " | " + options[3].surahName + " | " + options[3].surahTName + " | " + options[3].surahEngName + " | Ayah No. " + options[3].ayahNum + " | " + "</div>" 
        );
      }
    }
  } else if (cases == 3) {
    if(mode == 1){
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
    } else if (mode == 2){
      let subMode = Math.random();
      if(subMode < 0.5){
        $("#flashcard #questcont").html("Which ayah has the following location?<br>"
          + "<div class='mcq-quest'>" + "Chapter " +
            (parseInt(thisCard.surahNumber) + 1) +
            "<br/>" +
            thisCard.surahName +
            "<br/>Surah " +
            thisCard.surahTName +
            "<br/>" +
            thisCard.surahEngName +
            "<br/>Ayah No. " +
            thisCard.ayahNum +
            "<br/>" + "</div>"
          + "<div class='mcq-option'>A) " + options[0].ayah + "</div>"
          + "<div class='mcq-option'>B) " + options[1].ayah + "</div>"
          + "<div class='mcq-option'>C) " + options[2].ayah + "</div>"
          + "<div class='mcq-option'>D) " + options[3].ayah + "</div>" 
          );
      }else{
        $("#flashcard #questcont").html("Which ayah translation has the following location?<br>"
          + "<div class='mcq-quest'>" + "Chapter " +
            (parseInt(thisCard.surahNumber) + 1) +
            "<br/>" +
            thisCard.surahName +
            "<br/>Surah " +
            thisCard.surahTName +
            "<br/>" +
            thisCard.surahEngName +
            "<br/>Ayah No. " +
            thisCard.ayahNum +
            "<br/>" + "</div>"
          + "<div class='mcq-option'>A) " + options[0].translation + "</div>"
          + "<div class='mcq-option'>B) " + options[1].translation + "</div>"
          + "<div class='mcq-option'>C) " + options[2].translation + "</div>"
          + "<div class='mcq-option'>D) " + options[3].translation + "</div>" 
          );
      }
    }
  } else if (cases == 4) {
    if(mode == 1){
      $("#flashcard #answer-full .anscont").html(thisCard.englishWord);
      $("#flashcard #questcont").html(thisCard.arabicWord);
      $('#answer-full .anscont').addClass("sz-en");
      $('#questcont').addClass("sz-ar");
    } else if (mode == 2) {
      $("#flashcard #questcont").html("What is the translation of the following word?<br>"
        + "<div class='mcq-quest'>" + thisCard.arabicWord + "</div>"
        + "<div class='mcq-option' data-c='"+(options[0][0]==thisCard.englishWord)+"'>A) " + options[0][0] + "</div>"
        + "<div class='mcq-option' data-c='"+(options[1][0]==thisCard.englishWord)+"'>B) " + options[1][0] + "</div>"
        + "<div class='mcq-option' data-c='"+(options[2][0]==thisCard.englishWord)+"'>C) " + options[2][0] + "</div>"
        + "<div class='mcq-option' data-c='"+(options[3][0]==thisCard.englishWord)+"'>D) " + options[3][0] + "</div>" 
        );
    }
    
  } else if (cases == 5) {
    if(mode == 1){
      $("#flashcard #answer-full .anscont").html(thisCard.arabicWord);
      $("#flashcard #questcont").html(thisCard.englishWord);
      $('#questcont').addClass("sz-en");
      $('#answer-full .anscont').addClass("sz-ar"); 
    } else if (mode == 2) {
      $("#flashcard #questcont").html("What is the arabic word for:<br>"
        + "<div class='mcq-quest'>" + thisCard.englishWord + "</div>"
        + "<div class='mcq-option' data-c='"+(options[0][1]==thisCard.arabicWord)+"'>A) " + options[0][1] + "</div>"
        + "<div class='mcq-option' data-c='"+(options[1][1]==thisCard.arabicWord)+"'>B) " + options[1][1] + "</div>"
        + "<div class='mcq-option' data-c='"+(options[2][1]==thisCard.arabicWord)+"'>C) " + options[2][1] + "</div>"
        + "<div class='mcq-option' data-c='"+(options[3][1]==thisCard.arabicWord)+"'>D) " + options[3][1] + "</div>" 
        );
    }
    

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
    getWordfromAyah(parseInt(nextCard.surahNumber)+1, (nextCard.ayahNum-1));
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

$("#checkcont2").click(function(){
  $("#questcont").html("");
  $('#questcont').removeClass("sz-ar sz-en");
  $("#checkcont2").css("height", "0px");
  setTimeout(function(){
    nextFlashCard();
  }, 200);
})

$("#showanswer").click(function() {
  if(mode == 1){
    $("#answercontainer").css("height", "276px");
    $("#checkcont").css("height", "40px");
  }else if(mode==2){
    if($(".mcq-option.mcq-selected").length > 0){
      if($(".mcq-option.mcq-selected").attr("data-c") == "true"){
        currentCard.correct++;
        $(".mcq-option.mcq-selected").addClass("mcq-correct");
      }else{
        $(".mcq-option.mcq-selected").addClass("mcq-incorrect");
        for(var i = 0; i < $(".mcq-option").length; i++){
          if($(".mcq-option").eq(i).attr("data-c") == "true"){
            $(".mcq-option").eq(i).addClass("mcq-correct-faded")
            break;
          }
        }
      }
      currentCard.attempts++;
      $(".mcq-option").addClass("mcq-option-no-hover").removeClass("mcq-option");
      $("#checkcont2").css("height", "40px");
    }else{
      alert("Select an option!");
    }
  }
  

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

$("#surahOrJuz div").click(function(){
  $("#surahOrJuz div").removeClass("sur-juz-selected");
  $(this).addClass("sur-juz-selected");

  if($(this).html() == "Surah"){
    $(".surahcont").show();
    $(".juzcont").hide();
  }else{
    $(".juzcont").show();
    $(".surahcont").hide();
  }
})

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

$(document).on('click', '.mcq-option', function(e) {
  $(".mcq-option").removeClass("mcq-selected");
  $(this).addClass("mcq-selected");
});




$('#switchMode').click(function(){
        var isSun = parseInt($(this).val());
        if(isSun){
            $(this).prop('value',0);
            document.documentElement.style.setProperty('--theme', 'white');
            document.documentElement.style.setProperty('--theme-bg', '#1d1d1d');
            document.documentElement.style.setProperty('--theme-strong', 'white');
            document.documentElement.style.setProperty('--theme-bg-strong', 'black');
            //$('body, footer, #settings').css({'background-color':'#313131','color':'white'});
            $('#buttoncontainer button').removeClass('daybutton');
            $('#buttoncontainer button').addClass('nightbutton');
        } else {
            $(this).prop('value',1);
            document.documentElement.style.setProperty('--theme', 'black');
            document.documentElement.style.setProperty('--theme-bg', '#f1f1f1');
            document.documentElement.style.setProperty('--theme-strong', 'black');
            document.documentElement.style.setProperty('--theme-bg-strong', 'white');
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

/* GUIDE INFO*/
$(".setting-label .guide").click(function(){
  var lbl = $(this).parent().html().split(":")[0];
  $('#guide .guide-title').html(lbl);
  $('#guide .guide-info').html(guideInfo[lbl.replace(/\s+/g, '')]);
  $('#guide').show();
})

var guideInfo = {
  "NightMode": "Switch between night mode and dark mode",
  "TextSize": "Switch between small and large text size",
  "JuzRange": "Filter the surah options for your deck by selecting a range of juz",
  "SurahRange": "Filter the surah options for your deck by selecting a range of surahs",
  "FlashCards": "Test your knowledge of the deck with flash cards. The flash cards will give either the verse or word, translation, or description of the verse. The flash cards will generate depending on the <strong class='guide-link'>Vocabulary</strong> and/or the <strong class='guide-link'>Verses</strong> options.",
  "MultipleChoice": "Test your knowledge of the deck with multiple choice questions. The questions will ask for either the quranic text of a verse or word, translation of a verse or word, or location of the verse. You will be provided 4 options to select the correct answer. The questions will generate depending on the <strong class='guide-link'>Vocabulary</strong> and/or the <strong class='guide-link'>Verses</strong> options.",
  "FreeResponse": "Test your knowledge of the deck with free response questions. The questions will ask for either the quranic text of a verse or word, translation of a verse or word, or location of the verse. You will be provided a text field to enter the answer. The questions will generate depending on the <strong class='guide-link'>Vocabulary</strong> and/or the <strong class='guide-link'>Verses</strong> options.",
  "Vocabulary": "If this option is selected, the quiz type chosen will ask about specific words within the verse range selected.",
  "Verses": "If this option is selected, the quiz type chosen will ask about verses within the verse range selected.",
  "VerseRange": "Filter the verses of each surah by selecting a range of verses. The verse range applies to all surahs within the deck."
}

$(document).on('click','.guide-link',function(e) {
  var lbl = $(this).html();
  $('#guide .guide-title').html(lbl);
  $('#guide .guide-info').html(guideInfo[lbl.replace(/\s+/g, '')]);
})

$('.exit').click(function(){
  $(this).parent().hide();
})

/*End Guide Info*/



/* LOCAL STORAGE VARIABLES */
// Settings: displayMode (0: day, 1: night), vocabOn, versesOn, 
if(!parseInt(localStorage.getItem('displayMode'))){
    document.documentElement.style.setProperty('--theme', 'white');
    document.documentElement.style.setProperty('--theme-bg', '#1d1d1d');
    document.documentElement.style.setProperty('--theme-strong', 'white');
    document.documentElement.style.setProperty('--theme-bg-strong', 'black');
    $('#buttoncontainer button').removeClass('daybutton');
    $('#buttoncontainer button').addClass('nightbutton');
    $('#switchMode').click();
}

// localStorage.setItem('myCat', 'Tom');

/* END LOCAL STORAGE */

/* CODE FOR CLICK AND DRAG SELECTION */
function addedHoveredObject(x, y) {
    $(".surahcont").each(function() {
      // check if is inside boundaries
      if (!(
          x <= $(this).offset().left || x >= $(this).offset().left + $(this).outerWidth() ||
          y <= $(this).offset().top - $(document).scrollTop()  || y >= $(this).offset().top + $(this).outerHeight()  - $(document).scrollTop()
      )) {
        if($(this).attr("id") !== lastSur){
            if($(this).hasClass("added")){
                $(this).removeClass("added");
            }else{
                $(this).addClass("added");
            }
        }
        
        lastSur = $(this).attr("id");
      }
    });
}
var lastSur = "";

// if you are using jQuery Mobile replace the next line with
// $("#yourpage").on("pagecreate", function() {
/* REmove this one if need to re enable!! and look at line 1667
$(document).ready(function() {  

    var active = false;

    /*$(".surahcont").on("mousedown", function(ev) {
        active = true;
        //$(".added").removeClass("added"); // clear previous selection
        ev.preventDefault(); // this prevents text selection from happening
        if($(this).attr("id") !== lastSur){
        if($(this).hasClass("added")){
            $(this).removeClass("added");
        }else{
            $(this).addClass("added");
        }
        }
        lastSur = $(this).attr("id");
        
    });

    $(".surahcont").on("mousemove", function(ev) {
        if (active) {
            if($(this).hasClass("added")){
                $(this).removeClass("added");
            }else{
                $(this).addClass("added");
            }
        }
    });

    $(document).on("mouseup", function(ev) {
        active = false;
        setTimeout(function(){
            lastSur = "";
        }, 500)
        
    });* and put slash here

    $(document).on("touchstart",".surahcont", function(ev) {
        active = true;
        //$(".added").removeClass("added"); // clear previous selection
        ev.preventDefault(); // this prevents text selection from happening
        if($(this).attr("id") !== lastSur){
        if($(this).hasClass("added")){
            $(this).removeClass("added");
        }else{
            $(this).addClass("added");
        }
        }
        lastSur = $(this).attr("id");
    });

    $(document).on("touchmove",".surahcont", function(ev) {
        if (active) {
            var touch = ev.originalEvent.touches[0];
            addedHoveredObject(touch.clientX, touch.clientY);
        }
    });

    $(document).on("touchend",".surahcont", function(ev) {
        active = false;
        setTimeout(function(){
            lastSur = "";
        }, 500)
        
    });

});
/* CODE FOR CLICK AND DRAG SELECTION */
//sorting code: ascending/descending
$('#sorter').click(function(){
  $(this).toggleClass("sorted");
  var hasClass = $(this).hasClass("sorted")
  $(".surahcont, .juzcont").sort(function (a, b) {
    if(!hasClass){
      return parseInt(a.id.replace("juz","")) - parseInt(b.id.replace("juz",""));
    } else {
      return parseInt(b.id.replace("juz","")) - parseInt(a.id.replace("juz",""));
    }
    
}).each(function () {
    var elem = $(this);
    elem.remove();
    $(elem).appendTo(".my-new-list");
});
})

//sorting code: ascending/descending
    