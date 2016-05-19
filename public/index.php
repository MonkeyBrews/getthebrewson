<!DOCTYPE html>
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]> <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]> <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title>Get the brews on</title>
	<meta name="description" content="">
	<meta name="viewport" content="width=device-width">

	<link href='http://fonts.googleapis.com/css?family=Amaranth:400,700italic' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="library/css/style.css">

</head>
<body>

	<header class="">
		<div class="wrap">

			<h1>Get The Brews On</h1>

		</div>
	</header>

	<section class="">
		<div class="wrap">

			<p>Can't decide who's turn it is to make a brew? Add the contenders and let us pick for you!</p>
			<?php /* <p>Not after a cuppa? Why not pick an artist to listen instead!</p> */ ?>


			<?php

				// Set count variable. We'll use this shortly.
				$count = 1;

				// Get all cookies
				$cookies = $_COOKIE;

				// Dump em all
				//var_dump($cookies);

				// If there are any cookies...
				if($cookies != '') {

					// ...get the total number of names
					$cookie_total = $_COOKIE['brewer_total'];

					// Set this varaible to equal the total number so that older names aren't replaced
					$id = $cookie_total;

					//var_dump($cookies);

			?>
			<ul class="brew-list" id="brewList">
			<?php

					// Now that we have the numbers, lets start the loops.
					foreach($cookies as $cookie) {

						// Compare the total number of cookies with the counter.
						// If they aren't the same, run through them
						if($count <= $cookie_total) {
			?>
				<li class="option-<?php echo $count; ?>"><?php echo $cookie; ?></li>
			<?php
						$count++;

						}

					}
			?>
			</ul>
			<?php

				}

				/*
			?>
			<ul class="brew-list" id="brewList">
				<?php

					if($cookie_total) {
						echo '<p>There are '. $cookie_total .' many names.</p>';
					} else {
						echo '<p>No cookies exist</p>';
					}

					if($_COOKIE != '') {

						foreach($cookies as $cookie) {

							if($cookie_total != $count) {
								$count++;
								echo $count;
							}
				?>
				<li class="option-<?php echo $id; ?>"><?php echo $cookie; ?></li>
				<?php
						}

					}
				?>
			</ul>
			<?php

				*/

			?>

			<?php include 'modules/form-addname.php'; ?>

			<a class="btn" id="brews" href="#" title="#">Pick a Brewer</a>
			<?Php /* <a class="btn" id="clear-list" href="#" title="#">Clear my list, start again!</a> */ ?>

		</div>
	</section>

	<footer>
		<div class="wrap">

			<p>Delivered by <a href="http://www.cargocreative.co.uk" title="Visit Cargo Creative's Website">Cargo</a>.</p>

		</div>
	</footer>

	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
	<script src="library/js/libs/jquery.cookies.js"></script>
	<script src="library/js/scripts.js"></script>

</body>
</html>
