<div id='loadingpage'>
  <h1 style="padding-top: 10px;"><?php include("assets/logos-01.svg") ?></h1>
  <?php includes("assets/loader.php") ?>
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
        <div class="form-group" id="forgotpw">
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
    <div id="error-text"></div>
  </div>
  <div id="version">
    <a href="https://github.com/dan296" target="_blank"><i class="fab fa-github"></i> <span>v1.0.0</span></a>
  </div>
</div>