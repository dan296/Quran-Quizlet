var lastselectid = 114;
var lastaction = true;
var endata = false;
var datachecker = false;
var timer;
var flashCards = [];
var filterFlashCards;
var currentCard;
var studying = false;
var numSurahsInDeck = 0;
var count = true;
var loadingcaps = ["sabr", "your page is loading...", "inshAllah it will load", "Ya Allah!", "Please forgive us, refresh the page"];
var loadingcapindex = 0;

function newLoadingCaption(index){
  $('#loadingcaps').fadeOut(function(){
    if(index > loadingcaps.length - 1){
      index == loadingcaps.length - 1;
    }
    $('#loadingcaps').html(loadingcaps[index]);
    $('#loadingcaps').delay(500).fadeIn(500);
  })
}
newLoadingCaption(loadingcapindex);

function arabicDigits(num){
  num = num.toString().split('');
  var final =[];
  var arabnums = ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
  for(var i = 0; i < num.length; i++){
      final.push(arabnums[parseInt(num[i])]);
  }
  return final.join('');
}

function newTest(){
  $.getJSON("https://api.quran.com:3000/api/v3/chapters", function(data){
    console.log(data);
  })
}

$.getJSON("https://api.alquran.cloud/quran/en.pickthall", function(engdata) {
  endata = engdata.data.surahs;
  if ($(".my-new-list").html()) {
    $("#loadingpage").fadeOut();
    count = false;
    console.log("It took " + counter + " seconds to load this page!");
  }
});

$.getJSON("https://api.alquran.cloud/quran/quran-uthmani", function(data) {
  if (endata) {
    $("#loadingpage").fadeOut();
    count = false;
    console.log("It took " + counter + " seconds to load this page!");
  }

  var data = data.data.surahs;
  var surahs = [];
  $.each(data, function(key, val) {
    surahs.push(
      "<div id='" +
        key +
        "' class='surahcont'><div class='cross'><div class='innercross'><div class='horiz-cross'></div><div class='vert-cross'></div></div></div><div class='surahname'>" +
        val.englishName +
        "</div></div>"
    );
  });

  $("<div/>", {
    class: "my-new-list",
    html: surahs.join("")
  }).prependTo("body");
  $("body").prepend(
    '<h1 style="text-align: center; margin-top: 0; padding-top: 20px; font-size: 20px;">Create a Deck</h1><h3 style="text-align: center; font-size: 14px;">Add Surahs You Know to Your Deck</h3><div id="search"><i class="fa fa-search"></i><input type="text" placeholder="Ex: Mankind" onkeyup="filterSearch()"></div><i id="switchMode" class="fas fa-sun"></i>'
  );
  
  $('#switchMode').click(function(){
    var isSun = $(this).hasClass('fa-sun');
    if(isSun){
      $(this).removeClass('fa-sun');
      $(this).addClass('fa-moon');
      $('body, footer').css({'background-color':'#313131','color':'white'});
      $('#buttoncontainer button').removeClass('daybutton');
      $('#buttoncontainer button').addClass('nightbutton');
    } else {
      $(this).removeClass('fa-moon');
      $(this).addClass('fa-sun');
      $('body, footer').css({'background-color':'white','color':'black'});
      $('#buttoncontainer button').removeClass('nightbutton');
      $('#buttoncontainer button').addClass('daybutton');
    }
})

  for (var i = 0; i < 114; i++) {
    $("#" + i).click(function() {
      var thisid = this.id;
      if (thisid == undefined) {
        thisid = e.target.parentElement.id;
      }
      if (thisid == undefined) {
        thisid = e.target.parentElement.parentElement.id;
      }
      console.log(thisid);
      var bismillah = "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ ";
      bismillah += "<br/><br/>"
      if(thisid == 8){
          bismillah = "<br/>";
      }
      if (studying) {
        $('#showsurah h1').html("Chapter " +
            (parseInt(thisid)+1));
        $("#surahcont").html(
          data[thisid].name +
            "<br/>Surah " +
            data[thisid].englishName +
            "<br/>" +
            data[thisid].englishNameTranslation +
            "<br/>" +
            bismillah
        );
        for (var k = 0; k < data[thisid].ayahs.length; k++) {
          /*$("#surahcont").append("<div style='display: inline-block;position: relative;calc(100% - 40px);height: 30px; border-top: 3px solid;'></div><div class='ayah-text'>"+
            data[thisid].ayahs[k].text +
              "<span class='ayahsym' id='ayahsym"+k+"'>۝<div class='ayahnum' id='ayahnum"+k+"'>" +
              arabicDigits(k+1) +
              "</div></span></div><br/> <div class='ayah-trans'>"+ (k+1) + ") " +
              endata[thisid].ayahs[k].text +
              "</div><br/><br/>"
          );*/
          if(k == 0){
              data[thisid].ayahs[k].text = data[thisid].ayahs[k].text.replace("بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ ", "")
          }
          $("#surahcont").append("<div class='ayah-text'>"+
            data[thisid].ayahs[k].text +
              "<span class='ayahsym' id='ayahsym"+k+"'>۝<div class='ayahnum' id='ayahnum"+k+"'>" +
              arabicDigits(k+1) +
              "</div></span></div><br/> <div class='ayah-trans'>"+ (k+1) + ") " +
              endata[thisid].ayahs[k].text +
              "</div>"
          );
          var onewidth = $('#ayahnum'+k).width();
          var twowidth = $('#ayahsym'+k).width();
          $('#ayahsym'+k).css('margin-left',-1*((twowidth/2)+(.75*onewidth))+'px');
        }
      } else {
        filteredFlashCards = undefined;
        var remove = false;
        var surah = data[thisid].englishNameTranslation;
        console.log(surah);
        flashCards = flashCards.filter(function(el) {
          if (el.surahEngName != surah) {
            return el;
          } else {
            remove = true;
          }
        });

        console.log(remove);

        for (var k = 0; k < data[thisid].ayahs.length; k++) {
          if (remove) {
          } else {
            flashCards.push(
              createFlashCard(
                data[thisid].ayahs[k].text,
                endata[thisid].ayahs[k].text,
                data[thisid].name,
                data[thisid].englishName,
                data[thisid].englishNameTranslation,
                data[thisid].ayahs[k].numberInSurah,
                thisid
              )
            );
          }
        }
        console.log(flashCards);
      }
    });
  }
});
var counter = 0;
setInterval(function() {
  if (count) {
    counter += 1;
  }
  if (counter % 7 == 0){
    loadingcapindex++;
    newLoadingCaption(loadingcapindex);
  }
}, 1000);

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

$("#startdeck").click(function(e) {
  e.preventDefault();
  if (numSurahsInDeck > 0) {
    studying = true;
    $("#newdeck").css("height", "100%");
    $("#flashcard, #scoreCard").fadeIn();
    nextFlashCard();
    $("#veil").show();
  }else{
      alert('Please select at least one surah!')
  }
});

$("#newdeck").click(function(e) {
  e.preventDefault();
  studying = false;
  $("#flashcard, #scoreCard").fadeOut();
  $("#surahcont").html("");
  $("#newdeck").css("height", "0%");
  $("#veil").hide();
});

$("#closedeck").click(function() {
  $("#newdeck").click();
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
  surahNumber
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
  return thisCard;
}

function nextFlashCard() {
  var totalCorrect = 0;
  for(var i = 0; i < flashCards.length; i++){
    totalCorrect += flashCards[i].correct;
  }
  $('#scoreCard').html(totalCorrect+'/'+flashCards.length);
  var thisCard = flashCards[Math.floor(Math.random() * flashCards.length)];
  ayahnumindex = thisCard.ayahNum - 1;
  currentCard = thisCard;
  $("#" + thisCard.surahNumber).click();
  $("#" + thisCard.surahNumber).click();
  $("#flashcard").css(
    "border-color",
    getLevelColor(thisCard.correct, thisCard.attempts)
  );
  var cases = Math.floor(Math.random() * 3) + 1;
  if (cases == 1) {
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
  console.log("ran");
  console.log(flashCards);
}
$("#correct").click(function() {
  $("#questcont").html("");
  $("#answer1 .anscont").html("");
  $("#answer2 .anscont").html("");
  $("#answercontainer").css("height", "0%");
  $("#checkcont").css("height", "0px");
  currentCard.correct++;
  currentCard.attempts++;
  console.log(currentCard.correct);
  setTimeout(nextFlashCard, 200);
});

$("#incorrect").click(function() {
  $("#questcont").html("");
  $("#answer1 .anscont").html("");
  $("#answer2 .anscont").html("");
  $("#answercontainer").css("height", "0%");
  $("#checkcont").css("height", "0px");
  currentCard.attempts++;
  setTimeout(nextFlashCard, 200);
});

$("#showanswer").click(function() {
  $("#answercontainer").css("height", "276px");
  $("#checkcont").css("height", "40px");
});

function getLevelColor(correct, attempts) {
  if (attempts == 0) {
    return "white";
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
    var search = $('#search input').val();
    var results = filterIt(endata, search);
    if(results.length>0){
            $('.surahcont').hide();
            for(var i = 0; i < results.length; i++){
        
        var surahnum = results[i].number - 1;
        $('#'+surahnum).show();
    }
        }else{
            $('.surahcont').show();
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
})

$('#goback').click(function(){
  $('#showsurah div, #showsurah h1').fadeOut(500);
  $('#showsurah').delay(500).fadeOut(500);
})
//Animating Divs
$('#loadingpage h1').addClass('animated bounceInDown');