<?php
require 'libs/functions.php';

$name = isset( $_POST[ 'name' ] ) ? $_POST[ 'name' ] : NULL;
$email = isset( $_POST[ 'email' ] ) ? $_POST[ 'email' ] : NULL;
$message = isset( $_POST[ 'message' ] ) ? $_POST[ 'message' ] : NULL;
$subject = isset( $_POST[ 'subject' ] ) ? $_POST[ 'subject' ] : NULL;

if (isset($_POST['submitted'])) {

  $_POST = checkInput( $_POST );

  if(isset($_POST['name'])) {
    $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
  }

  if(isset($_POST['email'])) {
    $email = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['email']);
    $email = filter_var($email, FILTER_VALIDATE_EMAIL);
  }

  if(isset($_POST['message'])) {
    $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);
  }

  if ($_SERVER['REQUEST_METHOD']==='POST') {

    require 'libs/mailvars.php';

    $mail_body = 'コンタクトページからのお問い合わせ' . "\n\n";
    $mail_body .=  "お名前： " .h($name) . "\n";
    $mail_body .=  "Email： " . h($email) . "\n"  ;
    $mail_body .=  "＜お問い合わせ内容＞" . "\n" . h($message);

    //-------- sendmail
    $mailTo = mb_encode_mimeheader(MAIL_TO_NAME) ."<" . MAIL_TO. ">";

    $returnMail = MAIL_RETURN_PATH; 

    mb_language( 'ja' );
    mb_internal_encoding( 'UTF-8' );


    $header = "From: " . mb_encode_mimeheader($name) ."<" . $email. ">\n";
    $header .= "Cc: " . mb_encode_mimeheader(MAIL_CC_NAME) ."<" . MAIL_CC.">\n";
    // $header .= "Bcc: <" . MAIL_BCC.">";


    if ( ini_get( 'safe_mode' ) ) {
      $result = mb_send_mail( $mailTo, $subject, $mail_body, $header );
    } else {
      $result = mb_send_mail( $mailTo, $subject, $mail_body, $header, '-f' . $returnMail );
    }


    if ( $result ) {
      $_POST = array();
      $name = '';
      $email = '';
      $message = '';

      $params = '?result='. $result;
      if(isset($_SERVER['HTTP_X_FORWARDED_PROTO']) and $_SERVER['HTTP_X_FORWARDED_PROTO'] === "https") {
        $_SERVER['HTTPS'] = 'on';
      }
      $url = (empty($_SERVER['HTTPS']) ? 'http://' : 'https://').$_SERVER['HTTP_HOST'].$_SERVER['SCRIPT_NAME'];
      header('Location:' . $url . $params);
      exit;
    }
  }
}
?>

<!DOCTYPE html>
<html>
<head>
	<meta property="og:url" content="https://yutamorofuji.com/contact"/>
	<meta property="og:type" content="website">
	<meta property="og:title" content="Yuta Morofuji - Contact"/>
	<meta property="og:description" content="Contact"/>
	<meta property="og:site_name" content="Yuta Morofuji"/>
	<meta property="og:image" content="img/moya.png"/>
	<meta charset="UTF-8" />
  	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
  	<meta http-equiv="X-UA-Compatible" content="ie=edge" />
  	<title>Yuta Morofuji - Contact</title>
	<link href="css/style.css" rel="stylesheet" />
</head>
<body>
	<div class="container">
		<div class="placeholder">
			<div class="parallax-window" data-parallax="scroll" data-image-src="img/moya.png">
				<div class="tm-header">
					<div class="row tm-header-inner">
						<div class="col-md-6 col-12">
							<div class="tm-site-text-box">
								<h1 class="tm-site-title">Yuta Morofuji</h1>
							</div>
						</div>
						<nav class="col-md-6 col-12 tm-nav">
							<ul class="tm-nav-ul">
								<li class="tm-nav-li"><a href="index.html" class="tm-nav-link">Works</a></li>
								<li class="tm-nav-li"><a href="about.html" class="tm-nav-link">About</a></li>
								<li class="tm-nav-li"><a href="contact.php" class="tm-nav-link active">Contact</a></li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</div>
		<main>
			<header class="row tm-welcome-section">
				<h2 class="col-12 text-center tm-section-title">Contact</h2>
			</header>
			<div class="tm-container-inner-2 tm-contact-section">
				<div class="row">
					<div class="col-md-6">
						<?php  if ( isset($_GET['result']) && $_GET['result'] ):?>
					  <h4>Sending succeeded</h4>
					  <hr>
					  <?php elseif (isset($result) && !$result ):?>
					  <h4>Sending failed</h4>
					  <hr>
					  <?php endif; ?>
						<form method="POST" class="tm-contact-form">
					        <div class="form-group">
					          <input type="text" name="name" class="form-control" placeholder="Name" required="" />
					        </div>
					        <div class="form-group">
					          <input type="email" name="email" class="form-control" placeholder="Email" required="" />
					        </div>
					        <div class="form-group">
					          <textarea rows="5" name="message" class="form-control" placeholder="Message" required=""></textarea>
					        </div>
					        <div class="form-group tm-d-flex">
					          <button type="submit" name="submitted" class="tm-btn tm-btn-success tm-btn-right">
					            Send
					          </button>
					        </div>
						</form>
					</div>
					<div class="col-md-6">
						<div class="tm-address-box">
							<h4 class="tm-info-title tm-text-success">Address</h4>
							<a href="tel:080-090-0110" class="tm-contact-link">
								<i class="fas fa-phone tm-contact-icon"></i>080-4425-8527
							</a>
							<a href="mailto:info@yutamorofuji.com" class="tm-contact-link">
								<i class="fas fa-envelope tm-contact-icon"></i>info[at]yutamorofuji[dot]com</a>
							<div class="tm-contact-social">
								<a href="https://www.facebook.com/morofujix" class="tm-social-link"><i class="fab fa-facebook tm-social-icon"></i></a>
								<a href="https://www.instagram.com/lilmorofuji" class="tm-social-link"><i class="fab fa-instagram tm-social-icon"></i></a>
							</div>
						</div>
					</div>
				</div>
			</div>
				<div class="row">
					<div class="col-12">
						<div class="placeholder-2">
							<div class="parallax-window-2" data-parallax="scroll" data-image-src="img/moya.png"></div>
						</div>
					</div>
				</div>
		</main>
		<footer class="text-center">
			<p class="tm-footer">Copyright &copy; 2022 Yuta Morofuij, All Rights Reserved.
		</footer>
	</div>
	<script src="js/jquery.min.js"></script>
	<script src="js/parallax.min.js"></script>
	<script>
		$(document).ready(function(){
			var acc = document.getElementsByClassName("accordion");
			var i;
			for (i = 0; i < acc.length; i++) {
			  acc[i].addEventListener("click", function() {
			    this.classList.toggle("active");
			    var panel = this.nextElementSibling;
			    if (panel.style.maxHeight) {
			      panel.style.maxHeight = null;
			    } else {
			      panel.style.maxHeight = panel.scrollHeight + "px";
			    }
			  });
			}
		});
	</script>
</body>
</html>
