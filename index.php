<?php
	require'be/feed.php';

	$hours_arr = ["12-22", "11-22", "11-22", "11-23", "11-23", "11-24", "12-24"];
	$days_arr = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];

	$day_itr = date("w");
	$next_in_arr = $day_itr == 6 ? 0 : $day_itr + 1;
	$line = "Öppet idag: " . $hours_arr[$day_itr];
	$last_queued = $next_in_arr;
?>

<!DOCTYPE html>

<html lang="en">

<!-- head -->
<head>
	<!-- developer tools -->
	<script type="text/javascript" src="!dev/live.js"></script>
	<!-- <script type="text/javascript" src="!dev/t.js"></script> -->
	
	<!-- some much needed meta tags! -->
	<meta charset="utf-8">
	<meta name="HandheldFriendly" content="true" />
	<meta name="MobileOptimized" content="320" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="theme-color" content="#13181b" />
	<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
	<meta http-equiv="Pragma" content="no-cache" />
	<meta http-equiv="Expires" content="0" />
	<!-- <link rel="manifest" href="/brokenOT/IP/rot/manifest.json"> -->
	<!-- Chrome, Firefox OS and Opera -->     
	<!-- <meta name="theme-color" content="#13181b">   -->
	<!-- Windows Phone -->     
	<!-- <meta name="msapplication-navbutton-color" content="#13181b">      -->
	<!-- iOS Safari -->     
	<!-- <meta name="apple-mobile-web-app-status-bar-style" content="#13181b"> -->
	<!-- <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"> -->
	<!-- loose elements -->

	<!-- , minimal-ui -->

	<title>herewegoagain</title>
	
	<!-- css -->
	<link rel="stylesheet" type="text/css" href="css/styles.css">
	<!-- a lil bit of js -->
	<script type="text/javascript" src="js/script.js"></script>
	
</head>

<!-- quickinfo lives up top -->
<header>
	<a id="business-hours-btn" class="button-core button-filled">
		<img src="ass/svg/icons/calendar.svg" alt="Calendar icon with a clock in the corner">
		<h4><?php echo $line; ?></h4>
		<img src="ass/svg/icons/arrow.svg">
		<div id="hours-container">
			<div id="business-hours" class="">
				<?php
					for ($i=1; $i<=6; $i++) {
						$day_itr = $next_in_arr;
						$next_in_arr = $day_itr === 6 ? 0 : $day_itr + 1;
				
						if ($i > 1 && $i < 6 && $hours_arr[$day_itr] === $hours_arr[$next_in_arr]) {
							continue;
						}
						
						$line = $day_itr != $last_queued ? "<span>" . substr($days_arr[$last_queued], 0, 3) . "-" . substr($days_arr[$day_itr], 0, 3) . ":</span><span>" . $hours_arr[$day_itr] . "</span>" : "<span>" . ($i === 1 ? "Imorgon" : $days_arr[$day_itr]) . ":</span><span>" . $hours_arr[$day_itr] . "</span>";
				
						echo "<h4>" . $line  . "</h4>";
				
						$last_queued = $next_in_arr;
					}
				?>
			</div>
		</div>
	</a>
	

	<a id="quickpin" class="button-core button-bordered" href="https://goo.gl/maps/LduQqVjaEuu7u7rCA" target="blanc">
		<img src="ass/svg/icons/marker.svg" alt="Classic Geo marker">
		<h4>Repslagargatan 6</h4>
	</a>
	<a id="quickcall" class="button-core button-bordered" href="tel:+468 555 44 44+1">
		<img src="ass/svg/icons/phone.svg" alt="Simple phone icon">
		<h4>08-640 05 66</h4>
	</a>
</header>

<nav id="quickbar" class="hidden">
	<a id="logo-mini" href="#landing"><img src="ass/svg/icons/otlogo-mini.svg" alt="Small Oliver Twist logo"><h5>Stockholm</h5></a>
	<a id="quickpin-mini" href="https://goo.gl/maps/LduQqVjaEuu7u7rCA" target="blanc">
		<img src="ass/svg/icons/marker.svg" alt="Classic Geo marker">
	</a>
	<a id="quickcall-mini" href="tel:+468 555 44 44+1">
		<img src="ass/svg/icons/phone.svg" alt="Simple phone icon">
	</a>
</nav>

<!-- cant do without it -->
<nav id="mobile-nav">
	<div id="mob-menu-anim-bg"></div>
	<div id="mob-nav-bg" class="mob-nav-bg-fill"></div>
	<div id="burger" class="deliburger uishadow"><img src="ass/svg/icons/burger.svg"></div>
	<div id="mobile-menu" class="mob-menu">
		<a class="linkBtn fade-in-up" name="book" href="https://bit.ly/2PESCtU"><h5>Boka bord</h5></a>
		<a class="linkBtn fade-in-up" name="contact" href="#map"><h5>Kontakt</h5></a>
		<a class="linkBtn fade-in-up" name="aboot" href="#aboot-first"><h5>Om oss</h5></a>
		<a class="linkBtn fade-in-up" name="menu" href="#menues"><h5>Meny</h5></a>
		<a class="linkBtn fade-in-up" name="gallery" href="#gallery"><h5>Galleri</h5></a>
		<a class="linkBtn fade-in-up" name="news" href="#news"><h5>Nyheter</h5></a>

		<div id="close-menu" class="close-btn-animation"></div>
	</div>
</nav>



<nav id="desctop-nav">
	<a href="#landing"><img id="logo" src="ass/svg/icons/otlogo.svg"></a>
	<a href="#news"><h3>Nyheter</h3></a>
	<a href="#gallery"><h3>Galleri</h3></a>
	<a href="#menues"><h3>Meny</h3></a>
	<a href="#aboot-first"><h3>Om oss</h3></a>
	<a href="#map"><h3>Kontakt</h3></a>
	<a href="https://bit.ly/2PESCtU"><h3>Boka bord</h3></a>
</nav>

<body id="body">


	<!-- landing  -->
	<div id="landing">
		<!-- greeting wrapper -->
		<div id="landing-bg">
			<picture>
				<source media="(max-width: 640px)" srcset="ass/img/root/landing-bg-v640w.jpg">
				<source media="(min-width: 641px)" srcset="ass/img/root/landing-bg-h1920w.jpg">
				<img class="center-horizontal" scr="ass/img/root/landing-bg-v640w.jpg" alt="Wide view of the bar">
			</picture>
		</div>
		<div id="greeting">
			<h3 class="textshadow">Välkommen till</h3>
			<h1 class="heading textshadow">En upplevelse<br> som ingen annan</h1>
			<h3 class="textshadow">Vi bjuder på korv<br> och jättegoda popcorn!</h3>
			<h3 class="textshadow">Sedan 1993</h3>
			<h3 class="desctop-filler textshadow">Tänk dig en pub som kanske inte bara är en pub. Samma känsla av att känna sig välkommen, samma inbjudande atmosfär, men med en känsla av att du klivit in i nåt unikt, nånting annorlunda och speciellt.</h3>
		</div>
		
		<!-- zé bottom background container -->
		<div id="lan-bottom">
			<img id="mob-logo" src="ass/svg/icons/otlogo.svg">
		</div>
	</div>

	<!-- welcome section -->
	<section id="doormat" name="doormat">
	
		<!-- background decal, better to import in css. easier to manage on resize -->
		<div id="doormat-decal"></div>
		
		<h2 id="doormat-greeting" class="heading fade-in-left">Sortiment<br>vi är stolta över</h2>
		<h3 class="fade-in-left">På fat har vi 23 olika öl som roterar med sorter från världens bästa bryggerier. Bland våra 180+ olika flasköl, även där med ett alternerande sortiment, hittar du precis det du letar efter.<br>Vi har nåt för alla.
		</h3>

		<!-- <div class="radius-bg"></div> -->
		
	</section>
	
	<!-- blog posts, and not much else -->
	<section id="news">
	
		<!-- section description -->
		<h1 class="heading dark">Senaste nytt</h1>
		<h3 class="dark">Nyheter, evenemang, 
			nysläpp och mycket mer upptaderat dagligen
		</h3>

		<?php

			// check and remove location check-ins 
			//				(can easily show them instead)
			function remove_unnecessary_tags ($string) {
				while (preg_match('/@/', $string)) {
					$start = strpos($string, '@');
					$end = strpos($string, ' #', $start) ? strpos($string, ' #', $start) : -1;
					$string = $end < 0 ? substr($string, 0, $start) : substr_replace($string, "#", $start, $end);
				}
				return $string;
			}

			// post loop & variables
			$lunch = false;
			$posts_count = 0;
			$post_group = 1;

			foreach ($data as $post) {
				
				$raw_caption = remove_unnecessary_tags(isset($post->caption)?$post->caption:'');

				// allow only one post with the tag "lunch" to be displayed
				if (preg_match('/#lunch/', $raw_caption)) {
					if (!$lunch) { $lunch = true; } else { continue; }
				}

				// max shown posts and assigned rows for desctop
				if ($posts_count < 9) {
					$posts_count++;
					$post_group = $posts_count > 3 ? ($posts_count > 6 ? 3 : 2) : 1;
				} else {
					break;
				}

				// split caption into comment and tags
				$split_caption = explode("#",  $raw_caption);

				// check if the media is and image or a video
				$media = ($post->media_type == 'VIDEO') ? '<video class="news-vid" autoplay muted controls><source src="' . $post->media_url . '"></video>' : '<img src="' . $post->media_url . '">';
				
				// and print post values in a HTML template
				echo '
				<div id="newsPost' . $posts_count . '" class="news-post post-group' . $post_group . ' fade-in-center lightshadow">
					' . $media . '

					<h5 class="timestamp">' . date('D d M H:i', strtotime($post->timestamp)) . '</h5>
					<h4 class="comment">' . $split_caption[0] . '</h4>

					<div class="tags-cont">';

						// tag loop & vairables
						$max_tag_length = 66;
						$total_tag_length = 0;
						$tag_count = 1;
						$tags_hidden = false;
						$break_row = false;

						while (isset($split_caption[$tag_count]) && $total_tag_length <= $max_tag_length) {
							
							// remove all spaces and count the tag length
							$current_tag = preg_replace('/\s+/', '', $split_caption[$tag_count]);
							$tag_length = strlen($current_tag);
							$space_left = $max_tag_length - $total_tag_length;
							
							// see if tag fits
							if ($tag_length > $space_left && isset($split_caption[$tag_count])) {
								$tags_hidden = true;
							} else if ($tag_length < $space_left) {
								$total_tag_length += $tag_length;
								echo '<h5>' . $current_tag . '</h5>';
							}

							$tag_count++;

							if (!isset($split_caption[$tag_count])) {
								if ($tags_hidden) echo '<div class="theresmoredots"></div>';
								break;
							}
						}

					echo '
					</div>
				</div>';
			}
		?>

		<div class="btn-container">
			<a id="more-news-btn" class="idle-btn insta-btn" target="blanc">
				<h5>Ladda fler</h5>
			</a>
		</div>

		<div class="borderline"></div>
		
	
	</section>
	
	<!-- pictures!!! -->
	<section id="gallery">
	
		<h1 class="dark">Bildgalleri</h1>

		<div class="container">
			<picture class="gallery-img-wrap wide">
				<source media="(max-width: 640px)" srcset="ass\img\gallery\gal-1.jpg">
				<source media="(min-width: 641px)" srcset="ass\img\gallery\gal-1.jpg">
				<img class="gallery-img" scr="ass\img\gallery\gal-1-thumb.jpg" data-src="ass\img\gallery\gal-1.jpg" alt="Restaurant gallery media">
			</picture>
			<picture class="gallery-img-wrap">
				<source media="(max-width: 640px)" srcset="ass\img\gallery\gal-2.jpg">
				<source media="(min-width: 641px)" srcset="ass\img\gallery\gal-2.jpg">
				<img class="gallery-img" scr="ass\img\gallery\gal-2.jpg" data-src="ass\img\gallery\gal-2.jpg" alt="Restaurant gallery media">
			</picture>
			<picture class="gallery-img-wrap">
				<source media="(max-width: 640px)" srcset="ass\img\gallery\gal-3.jpg">
				<source media="(min-width: 641px)" srcset="ass\img\gallery\gal-3.jpg">
				<img class="gallery-img" scr="ass\img\gallery\gal-3.jpg" 
				data-src="ass\img\gallery\gal-3.jpg" alt="Restaurant gallery media">
			</picture>
			<picture class="gallery-img-wrap tall">
				<source media="(max-width: 640px)" srcset="ass\img\gallery\gal-4.jpg">
				<source media="(min-width: 641px)" srcset="ass\img\gallery\gal-4.jpg">
				<img class="gallery-img" scr="ass\img\gallery\gal-4.jpg" 
				data-src="ass\img\gallery\gal-4.jpg" alt="Restaurant gallery media">
			</picture>
			<picture class="gallery-img-wrap">
				<source media="(max-width: 640px)" srcset="ass\img\gallery\gal-5.jpg">
				<source media="(min-width: 641px)" srcset="ass\img\gallery\gal-5.jpg">
				<img class="gallery-img" scr="ass\img\gallery\gal-5.jpg" 
				data-src="ass\img\gallery\gal-5.jpg" alt="Restaurant gallery media">
			</picture>
			<picture class="gallery-img-wrap large">
				<source media="(max-width: 640px)" srcset="ass\img\gallery\gal-6.jpg">
				<source media="(min-width: 641px)" srcset="ass\img\gallery\gal-6.jpg">
				<img class="gallery-img" scr="ass\img\gallery\gal-6.jpg" data-src="ass\img\gallery\gal-6.jpg" 
				alt="Restaurant gallery media">
			</picture>
			<picture class="gallery-img-wrap">
				<source media="(max-width: 640px)" srcset="ass\img\gallery\gal-7.jpg">
				<source media="(min-width: 641px)" srcset="ass\img\gallery\gal-7.jpg">
				<img class="gallery-img" scr="ass\img\gallery\gal-7.jpg" data-src="ass\img\gallery\gal-7.jpg" alt="Restaurant gallery media">
			</picture>
			<picture class="gallery-img-wrap">
				<source media="(max-width: 640px)" srcset="ass\img\gallery\gal-8.jpg">
				<source media="(min-width: 641px)" srcset="ass\img\gallery\gal-8.jpg">
				<img class="gallery-img" scr="ass\img\gallery\gal-8.jpg" 
				data-src="ass\img\gallery\gal-8.jpg" alt="Restaurant gallery media">
			</picture>
			<picture class="gallery-img-wrap wide">
				<source media="(max-width: 640px)" srcset="ass\img\gallery\gal-9.jpg">
				<source media="(min-width: 641px)" srcset="ass\img\gallery\gal-9.jpg">
				<img class="gallery-img" scr="ass\img\gallery\gal-9.jpg" data-src="ass\img\gallery\gal-9.jpg" alt="Restaurant gallery media">
			</picture>
		</div>			
	</section>
	
	<!-- food and drink -->
	<section id="menues">
		<div id="menu-bg"></div>
		<h1 class="heading textshadow">Våran Meny</h1>
		<h3 class="textshadow">Till ölen, och våra väl utvalda viner, hittar du en meny som vi är stolta over. All mat är gjord från grunden av bästa möjliga råvaror tillagad med kärlek.
		</h3>
		
		<!-- choosie-thingies -->
		<a class="menu-button"><div id="lunch" class="menue-btn darkshadow">
			<h1 class="textshadow">Lunch</h1>
		</div></a>
		<a class="menu-button"><div id="alacarte" class="menue-btn darkshadow">
			<h1 class="textshadow">A la Carté</h1>
		</div></a>
		<a class="menu-button"><div id="drinks" class="menue-btn darkshadow">
			<h1 class="textshadow">Öl & Dryck</h1>
		</div></a>
		<div id="menuContainer">
			<img class="menu-page" src="" alt="Menue page description">
			<img class="menu-page" src="" alt="Menue page description">
			<img class="menu-page" src="" alt="Menue page description">
			<img class="menu-page" src="" alt="Menue page description">
			<a id="menu-file" href="link to pdf" alt="pdf file of menu"><img src="" alt="Download pdf icon"></a>
		</div>
		
	</section>
	
	<!-- about section, almost done! -->
	<section id="aboot-first">
		
		<!-- intro -->
		<h1 class="dark">It's not<br>complicated<p></h1>
		<h3 class="dark">Tänk dig en pub som kanske inte bara är en pub. Samma känsla av att känna sig välkommen, samma inbjudande atmosfär, men med en känsla av att du klivit in i nåt unikt, nånting annorlunda och speciellt.
		<p>När vi öppnade 1993 var Sverige en öken. Av de få öl som fanns var nästan alla öl ljus tråkig lager, och det fanns inte många! Vi tyckte det var direkt fel, och det var tid för förändring. Som du märker har det hänt en del.
		</h3>
		
		<!-- and more -->
		<div id="aboot-item-one" class="aboot-item onright">
			<h2 class="heading fade-in-left dark">Samarbete<br> & Import</h2>
			<h3 class="fade-in-left dark">Sedan 2008 har vi med stor hjälp av vårt egna importföretag sett till att ha Nordens, om inte Europas starkaste utbud av Amerikansk Craft Beer i våra kylar. Så titta förbi och upptäck varför.
			</h3>
			<div id="abootImg1" class="aboot-img img-cont img-zoom fade-in-right lightshadow"></div>
		</div>
		
		<div id="aboot-item-two" class="aboot-item onleft">
			<h2 class="heading fade-in-right dark">Support your<br>local brewers</h2>
			<h3 class="fade-in-right dark">Vi samarbetar nära med Sveriges skickligaste bryggare. Och man hittar allt från nyheter till gamla godingar på både fat och flaska. Många gånger får vi också besök av våra lokala stjärnor.
			</h3>
			<div id="abootImg2" class="aboot-img img-cont img-zoom fade-in-left lightshadow"></div>
		</div>
	</section>
	
	<section id="aboot-second">
		<div id="aboot-item-three" class="aboot-item onright">
			<h2 class="heading fade-in-left">Med service i fokus</h2>
			<h3 class="fade-in-left">Praesent tristique dui fringilla, blandit nibh eget, tempus tortor. Nam a porta enim. Donec venenatis ligula tortor, eu dictum arcu bibendum id. In sed odio ac turpis sodales facilisis.
			</h3>
			<div id="abootImg3" class="aboot-img img-cont img-zoom fade-in-right darkshadow"></div>
		</div>
		
		<div id="aboot-item-four" class="aboot-item onleft">
			<h2 class="heading fade-in-right">Vi strävar<br>efter kvalitet</h2>
			<h3 class="fade-in-right">Vår hantering av Real Ale gjorde att vi 2001 fick den brittiska utmärkelsen Cask Marque som första pub utanför de brittiska öarna, en utmärkelse vi fått varje år sedan dess.
			</h3>
			<div id="abootImg4" class="aboot-img img-cont img-zoom fade-in-left darkshadow"></div>
		</div>
	</section>
	
	<section id="map">
		
	</section>
		
	
</body>

<!-- moveable elements -->
<section id="viewer" class="hidden">
	<img class="contentCanvas prev" src="">
	<img class="contentCanvas active" src="">
	<img class="contentCanvas next" src="">
	<div id="next-arrow">
		<img src="ass/svg/icons/arrow-filled.svg" alt="Arrow right">
	</div>
	<div id="prev-arrow">
		<img src="ass/svg/icons/arrow-filled.svg" alt="Arrow left">
	</div>
</section>
<div id="close-button" class="hidden">
	<img src="ass/svg/icons/close-button.svg" alt="Close button">
</div>

<img name="load-spin" class="load-spin" src="ass/svg/dtl/load_spin1.svg"/>


<footer>
	<a class="social" href="https://www.instagram.com/otstockholm/" target="blanc"><img src="ass/svg/icons/instagram.svg"></a>
	<a class="social" href="https://www.facebook.com/otstockholm/" target="blanc"><img src="ass/svg/icons/facebook.svg"></a>
	<a class="social" href="https://www.tripadvisor.com/Restaurant_Review-g189852-d1095673-Reviews-Oliver_Twist_Pub_Restaurang-Stockholm.html" target="blanc"><img src="ass/svg/icons/tripadv.svg"></a>
	<a class="social" href="https://www.google.com/search?gs_ssp=eJzj4tZP1zcsyTBLTrdMM2C0UjWoMDEzTTM3TzVJTjNJtTA1NLcyqDC3NE9KTUqzSEw2S0w0Tk7zEsvPySxLLVIoKc8sLlEoLslPzs7Iz8kFAFmjGEo&q=oliver+twist+stockholm&oq=olivertwist+st&aqs=chrome.1.69i57j46l2j0l3j69i60l2.4756j0j4&sourceid=chrome&ie=UTF-8" target="blanc"><img src="ass/svg/icons/google.svg"></a>
	
	<div class="borderline"></div>
	
	
	

	<div id="contact-wrapper">
		<a class="contact" href="tel:+468 555 44 44+1">
		<img src="ass/svg/icons/phone.svg">
		<h5>+468 555 44 33</h5>
		</a>
		<a class="contact" href="mailto:restaurang@olivertwist.se, reservations@olivertwist.se">
		<img src="ass/svg/icons/email.svg">
		<h5>restaurang@olivertwist.se<br>reservations@olivertwist.se</h5>
		</a>
		<a class="contact" href="https://goo.gl/maps/LduQqVjaEuu7u7rCA" target="blanc">
		<img src="ass/svg/icons/marker.svg">
		<h5>Repslagargatan 6<br>118 46 Stockholm</h5>
		</a>
	</div>
	
	<div class="borderline"></div>
	
	<div id="reg-hours">
		<img src="ass/svg/icons/clock.svg">
		<h5 class="heading">Vanliga öppettider</h5>
		<table>
			<tr>
				<td><h5>Måndag</h5></td>
				<td><h5>11-23</h5></td>
			</tr>
			<tr>
				<td><h5>Tisdag</h5></td>
				<td><h5>11-01</h5></td>
			</tr>
			<tr>
				<td><h5>Onsdag</h5></td>
				<td><h5>11-01</h5></td>
			</tr>
			<tr>
				<td><h5>Torsdag</h5></td>
				<td><h5>11-01</h5></td>
			</tr>
			<tr>
				<td><h5>Fredag</h5></td>
				<td><h5>11-01</h5></td>
			</tr>
			<tr>
				<td><h5>Lördag</h5></td>
				<td><h5>12-01</h5></td>
			</tr>
			<tr>
				<td><h5>Söndag</h5></td>
				<td><h5>12-23</h5></td>
			</tr>			
		</table>
		<h5>*för avvikelser kika kalendern</h5>
	</div>
	
	<div id="devstamp"><h5>zergski<br>dev.i.p. v[554]0.01 2019</h5></div>
		
</footer>

<div id="lidD">N/I</div>

</html>