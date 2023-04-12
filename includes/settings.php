<div id="settings">
  <?php include("./assets/logos-01.svg") ?>
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
        <div class='setting-wrap' style="margin-bottom: 5px">
            <button id="signin-out-btn">Sign in / Sign up</button>
        </div>
    </section>

    <section>
        <div class='setting-title'>Display Settings</div>
        <div class='setting-wrap'>
            <div class='setting-label'>Night Mode:<i class="fa fa-info-circle guide" aria-hidden="true"></i></div>
            <div class='setting-input'><label class="switch"><input type="checkbox" class="toggleInput-checkbox" id="switchMode" value="1"><span class="slider round"></span></label></div>
        </div>
        <div class='setting-wrap'>
            <div class='setting-label'>Text Size:<i class="fa fa-info-circle guide" aria-hidden="true"></i></div>
            <div class='setting-input'><label class="switch"><input type="checkbox" class="toggleInput-checkbox" id="textSize" value="0"><span class="slider round"></span></label></div>
        </div>
    </section>

    <section>
        <div class='setting-title'>Filter</div>
        <div class='setting-wrap'>
            <div class='setting-label'>Juz Range:<i class="fa fa-info-circle guide" aria-hidden="true"></i></div>
            <div class='setting-input' data-diff="29">
              <input type="number" class="num-input num-input-min" id="juzMin" value="1" min="1" max="30">
              <input type="number" class="num-input num-input-max" id="juzMax" value="30" min="1" max="30">
            </div>
        </div>
        <div class='setting-wrap'>
            <div class='setting-label'>Surah Range:<i class="fa fa-info-circle guide" aria-hidden="true"></i></div>
            <div class='setting-input' data-diff="113">
              <input type="number" class="num-input num-input-min" id="surahMin" value="1" min="1" max="114">
              <input type="number" class="num-input num-input-max" id="surahMax" value="114" min="1" max="114">
            </div>
        </div>
    </section>
    
    <section>
        <div class='setting-title'>Quiz Settings</div>
        <div class='setting-wrap'>
            <div class='setting-label'>Flash Cards:<i class="fa fa-info-circle guide" aria-hidden="true"></i></div>
            <div class='setting-input'><label class="switch"><input type="checkbox" class="toggleInput-checkbox" id="flashOn" value="1" checked><span class="slider round"></span></label></div>
        </div>
        <div class='setting-wrap'>
            <div class='setting-label'>Multiple Choice:<i class="fa fa-info-circle guide" aria-hidden="true"></i></div>
            <div class='setting-input'><label class="switch"><input type="checkbox" class="toggleInput-checkbox" id="mcqOn" value="0"><span class="slider round"></span></label></div>
        </div>
        <div class='setting-wrap'>
            <div class='setting-label'>Free Response:<i class="fa fa-info-circle guide" aria-hidden="true"></i></div>
            <div class='setting-input'><label class="switch"><input type="checkbox" class="toggleInput-checkbox" id="freeOn" value="0"><span class="slider round"></span></label></div>
        </div>
        <div class='setting-wrap'>
            <div class='setting-label'>Vocabulary:<i class="fa fa-info-circle guide" aria-hidden="true"></i></div>
            <div class='setting-input'><label class="switch"><input type="checkbox" class="toggleInput-checkbox" id="vocabOn" value="0"><span class="slider round"></span></label></div>
        </div>
        <div class='setting-wrap'>
            <div class='setting-label'>Verses:<i class="fa fa-info-circle guide" aria-hidden="true"></i></div>
            <div class='setting-input'><label class="switch"><input type="checkbox" class="toggleInput-checkbox" id="versesOn" value="1" checked><span class="slider round"></span></label></div>
        </div>
        <div class='setting-wrap'>
            <div class='setting-label'>Verse Range:<i class="fa fa-info-circle guide" aria-hidden="true"></i></div>
            <div class='setting-input' data-diff="0">
              <input type="number" class="num-input num-input-min" id="verseMin" value="1" min="1" max="286">
              <input type="number" class="num-input num-input-max" id="verseMax" value="1" min="1" max="286">
            </div>
        </div>
    </section>

    <div id="version2">
      <a href="https://github.com/dan296" target="_blank"><i class="fab fa-github"></i> <span>v1.0.0</span></a>
    </div>
</div>