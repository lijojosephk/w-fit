<?php include("../includes/settings.php") ?>
<!DOCTYPE html>
<html>
<head>
    <title>Signup</title>
    <?php include('../includes/header-imports.php') ?>
</head>
<body>
    <!-- website header[start] -->
    <?php include('../components/shared/header-account.php') ?> 
    <!-- website header[end] -->
    <!-- common loader[start] -->
    <?php include('../components/shared/loader.php') ?>
    <!-- common loader[end] -->
    <main>

    <div class="login">
            <div class="container">  

                <div class="row">
                    <div class="col-12 col-lg-4 offset-lg-4">

                      <!-- Login with password -->    

                            <h2 class="text-center login--heading">Create An Account</h2>
                                <form action="">
                                   <div class="signup-form"> 
                                    <span class="create-account-form--half-field animated-placeholder">
                                        <label for="login-first-name">First Name</label>
                                        <input id="login-first-name" type="text">
                                    </span>
                                    <span class="create-account-form--half-field animated-placeholder">
                                        <label for="login-last-name">Last Name</label>
                                        <input id="login-last-name" type="text">
                                    </span>
                                    </div>
                                    <span class="create-account-form--field animated-placeholder">
                                        <label for="login-email">Email</label>
                                        <input id="login-email" type="text">
                                    </span>
                                    <span class="create-account-form--field animated-placeholder">
                                        <label for="login-password">Password</label>
                                        <input id="login-password" type="password">
                                    </span>
                                    <div class="button-block">
                                        <button type="submit" class="main-button w-100 login--signin-button">SIGN UP</button>
                                    </div>
                                </form>
                                <!-- Sign in with OTP --> 
                                <div class="login--signin-otp text-center">
                                  Already have an account <a href="#">Sign In</a>
                                </div>
                                <div class="signup-bottom text-center">
                                    <img class="mw-100" src="<?php echo $imagesurl; ?>handshake-icon.png" alt="amazon">
                                    <p>Your login information is used to allow you to sign in securely and access your data.</p>
                                    <a href="#">Learn how Wakefit protects your privacy.</a>
                                </div>
                                
                               
                    </div>   
                </div>


            </div>
     </div>





    </main>
    <!-- website footer[start] -->
    <?php // include('../components/shared/footer.php') ?>
    <!-- website footer[end] -->
    <!-- scripts[start] -->
    <?php include('../includes/bottom-scripts.php') ?> 
    <!-- scripts[end] -->
    <!-- page dependancy scripts -->
    <script src="<?php echo $assetsurl ?>js/page-js/checkout.js"></script>
    <script type="text/javascript" src="https://use.fontawesome.com/releases/v5.0.1/js/all.js?ver=5.9.0"></script>
</body>
</html>



