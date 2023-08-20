<!DOCTYPE html>
<html lang="en" >
<?php include("../includes/head.php")?>
<link rel="stylesheet" href="../assets/css/style.css?v=318475510">
<body>
<h1><?php include("../assets/logos-01.svg") ?></h1>
<!-- 1. The <iframe> (and video player) will replace this <div> tag. -->
<div id="params">
    <input id="param_start" class="param" type="number" min = 0 />
    <input id="param_end" class="param" type="number" min = 1 />
</div>
<div id="player"></div>

<script>
  // 2. This code loads the IFrame Player API code asynchronously.
  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
</script>
<script>
var section = {
  start: 30,
  end: 33
};

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player(
    'player',
    {
      height: '360',
      width: '640',
      videoId: 'Evjb_RYrxZw',
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    }
  );
}

function onPlayerReady(event) {
  player.seekTo(section.start);
  player.playVideo();
  $('#param_start').prop("max", player.getDuration()-1);
  $('#param_end').prop("max", player.getDuration());
}

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING) {
    var duration = section.end - section.start;
    setTimeout(restartVideoSection, duration * 1000);
  }
}

function restartVideoSection() {
  player.seekTo(section.start);
}

$("#params input").keyup(function(){
    console.log($(this).val());
    if($(this).attr("id").includes("start")){
        section.start = parseInt($(this).val());
    }else{
        section.end = parseInt($(this).val());
    }
})

</script>
</body>
</html>