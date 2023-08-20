<div id='loadingpage' style="overflow-y: scroll">
  <h1><?php include("./assets/logos-01.svg") ?></h1>
  <?php //include("./assets/loader.php") ?>
  <div id="welcome-box">
    <div id="welcome-toggle-wrap">
      <div class="welcome-toggle welcome-toggle-selected">Surah Looper</div>
    </div>
    <div id="welcome-module-wrap">
      <div id="signin" class="welcome-module">
        <form>
          <div class="form-group">
            <label for="yt_url">YouTube URL:</label>
            <input type="text" id="yt_url" name="yt_url" placeholder="https://www.youtube.com/watch?v=Evjb_RYrxZw" />
            <input type="hidden" id="yt_url_id" />
          </div>
          <div class="form-group param-group">
            <label for="start">Start Time (s):</label>
            <input type="number" name="start" id="start" class="param" min=0 /></input>
          </div>
          <div class="form-group param-group">
            <label for="start">End Time (s):</label>
            <input type="number" name="start" id="end" class="param" min=1 /></input>
          </div>
        </form>
        <!-- <div class="form-group" id="forgotpw">
          Forgot Password?
        </div>
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
    <div id="error-text"></div> -->
    <div id="player"></div>
  </div>
  

<script>
  // 2. This code loads the IFrame Player API code asynchronously.
  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
</script>
<script>
var section = {
  start: 0,
  end: 10
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
  $("#start").prop("value", section.start);
  $("#end").prop("value", section.end);
  player.seekTo(section.start);
  player.playVideo();
  $('#param_start').prop("max", player.getDuration()-1);
  $('#param_end').prop("max", player.getDuration());
}
var yt_timeout = null;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING) {
    var duration = section.end - section.start;
    yt_timeout = setTimeout(restartVideoSection, duration * 1000);
    console.log("start: " + section.start + " | end: " +section.end);
  }
}

function restartVideoSection() {
  player.seekTo(section.start);
}

$(".param").keyup(function(){
    console.log($(this).val());
    if($(this).attr("id").includes("start")){
        section.start = parseInt($(this).val());
    }else{
        section.end = parseInt($(this).val());
    }
})

function extractVideoIdFromUrl(url) {
    const regex = /[?&]v=([^&#]*)/;
    const match = url.match(regex);
    return match && match[1] ? match[1] : null;
}

$("#yt_url").change(function(){
  let vidID = extractVideoIdFromUrl($(this).val());
  console.log(vidID);
  if(vidID != null){
    window.clearTimeout(yt_timeout);
    player.videoId = 
    player.loadVideoById(player.videoId, section.start, section.end);
  }
  
})

</script>
  <div id="version">
    <a href="https://github.com/dan296" target="_blank"><i class="fab fa-github"></i> <span>v1.0.0</span></a>
  </div>
</div>