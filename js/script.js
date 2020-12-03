
window.onload = function() {
	// location.reload(true);
	/**
	 * Developer tools.
	 *  - Live display of parameters.
	 */
	// live data display
	const lidD = document.getElementById("lidD");
	var lidData;
	var lid = (d1) => {
		lidD.innerHTML = `${d1}<br>`;
	}
	lidD.addEventListener("click", ()=>{
		lidD.classList.toggle("hide");
	});

	// root data
	var viewportHeight = window.innerHeight;
	var viewportWidth = window.innerWidth;
	var viewportBottom, viewportFocusY;
	var mobile = viewportWidth >= 651 ? false : true ;

	//¨´¨´¨´¨´¨´¨´¨´¨´¨´¨´¨´¨´¨´¨´¨´¨´¨´¨´¨´¨´¨´¨´¨
	//custom method library  ||  nixie.js
	//_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
	////-body-
	const pageBody = document.getElementById("body");
	// document.documentElement.style.height = window.outerHeight + "px";
	// pageBody.style.height = window.innerHeight + "px";

	/**
	 * Main operator that binds custom prototype methods.
	 */
	var nxi_define = (() => {
		let descriptor = Object.create(null);
		descriptor.enumerable, descriptor.configurable = false;
		descriptor.writable = true;
		return function (constructor, name, value) {
			if (typeof constructor != 'function'
				|| !('prototype' in constructor))
				throw new TypeError('Constructor expected.');
				descriptor.value = value;
			Object.defineProperty(constructor.prototype, name, descriptor);
		}
	})();

	// custom prototype methods
	nxi_define(Element, "getPageOffsetTop", function() {
		let yOffset = 0;
		let currentNode = this;
		while (currentNode != pageBody) {
			if(!currentNode) break;
			let currentYOffset = currentNode.offsetTop;
			yOffset += currentYOffset;
			currentNode = currentNode.offsetParent;
		}
		this.top = yOffset;
		return yOffset;
	});

	nxi_define(Element, "getHeight", function() {
		this.height = this.offsetHeight;
		this.bottom = this.top + this.height;
		return this.height;
	});

	/**<pre>For further documentation visit {@link https://zergski.com|zergski.com}.</pre>
	 * <pre>Gets and sorts dom elements and binds them.
	 * to window Object. Array key will be the nodes variable name.</pre>
	 * <pre>-W.I.P- Currently supports only Id and className getters.</pre>
	 * @param {Object} nodeList - collection of target node and variable names.
	 */
	var wall_e = (nodeList)=>{
		for (let i=0; i<Object.keys(nodeList).length; i++) {
			let nodeVarName = Object.keys(nodeList)[i];
			let searchString = Object.values(nodeList)[i].replace(/\s+/g, "").split(",");
			if (searchString[0][0] === "#") {
				this[nodeVarName] = document.getElementById(searchString[0].replace(/#/, ""));
			} else if (searchString[0][0] === ".") {
				this[nodeVarName] = document.getElementsByClassName(searchString[0].replace(/./, "").replace(/\./g, " "));
				if (this[nodeVarName].length === 1) {
					this[nodeVarName] = this[nodeVarName][0];
				}
			}
		}
	}

	
	// main node collection
	wall_e({
		// navigation
		"mainLogo": "#logo",
		"descNav": "#desctop-nav",
		"burger": "#burger",
		"loadPostBtn": "#more-news-btn",
		"links": ".linkBtn",

		// sections
		"landing": "#landing",
		"landingBg": "#landing-bg",
		"greeting": "#greeting",
		"mobileMenu": "#mobile-menu",
		"doormat": "#doormat",
		"descGal": "#desctop-gal",
		"menuBg": "#menu-bg",
		"abootItem": ".aboot-item",
		"abootImg": ".aboot-img",
		"newsPost": ".news-post",
		"menuBtn": ".menue-btn",
		"contactSection": "#map",
		"gallery": "#gallery",
		"aboot": "#aboot-first",
		
		// pseudo nodes
		"closeBtn": "#close-menu",
		"loadSpinner": ".load-spin",
		"mobMenuAnimBg": "#mob-menu-anim-bg",
		"mobNavBg": "#mob-nav-bg"
	});

	// redo el getters *************
	const businessHoursBtn = document.getElementById("business-hours-btn");
	const businessHours = document.getElementById("business-hours");
	const quickbar = document.getElementById("quickbar");

	businessHoursBtn.addEventListener("click", displayHours);

	function displayHours () {
		businessHoursBtn.classList.toggle("open");
		businessHours.classList.toggle("open");
	}


	// getting gallery items and randomizing their movespeed
	const galItems = document.querySelectorAll("td div");

	// addition node elements bound to objects
	burger.addEventListener("click", openMenu);
	
	loadPostBtn.addEventListener("click", loadPosts);
	loadPostBtn.textEl = loadPostBtn.childNodes[1];

	// single get nodes
	descNav.getPageOffsetTop();

		
	var elementPostions = [
		doormat, menuBg, abootItem, abootImg, newsPost, menuBtn, loadPostBtn, contactSection, gallery, aboot
	]

	var elementHeight = [
		descNav, landing, doormat, menuBg, abootImg, menuBtn
	]

	
	
	function updateNodeValues() {
		elementPostions.forEach((e) => {
			if (e.length > 1) {
				for (let i=0; i<e.length; i++) {
					e[i].getPageOffsetTop();
					// console.log(e[i].id + " : " + e[i].top);
				}
			} else {
				e.getPageOffsetTop();
				// console.log(e.id + " : " + e.top);
			}
		});
		elementHeight.forEach((e) => {
			if (e.length > 1) {
				for (let i=0; i<e.length; i++) {
					e[i].getHeight();
					// console.log(e[i].id + " : " + e[i].height);
				}
			} else {
				e.getHeight();
				// console.log(e.id + " : " + e.height);
			}
		});
	}
	updateNodeValues();



	// primitive function that shakes the screen
	// to trigger animated elements
	// let refreshFrequency = 20;
	// function pageScroll(speed) {
	// 	window.requestAnimationFrame(()=>{
	// 		window.scrollBy(0,speed);
	// 	});
	// 	if (speed > 1) {
	// 		setTimeout(()=>{
	// 			pageScroll(speed-10);
	// 		},refreshFrequency);
	// 	} else if (speed === 1) {
	// 		setTimeout(()=>{
	// 			pageScroll(-41);
	// 		},refreshFrequency);
	// 	} else if (speed < -1) {
	// 		setTimeout(()=>{
	// 			pageScroll(speed+10);
	// 		},refreshFrequency);
	// 	} else if (speed === -1) {
	// 		return;
	// 	}
	// }
	Math.floor(pageYOffset) > 20 && update();
	// alert((window.outerHeight));
	// alert(window.screen.height);

	
	let resize = () => {
		viewportHeight = window.innerHeight;
		updateNodeValues();
		if (mobile) {
			landing.style.height = (100 - ((document.documentElement.offsetHeight - viewportHeight) / document.documentElement.offsetHeight * 100)) + "vh";
		} else {
			// landing.style.height = viewportHeight + "px";
			// descNav.top = landing.offsetHeight - descNav.height;
			// descNav.getPageOffsetTop();
			// console.log(descNav.top);
		}
	}
	resize();

	if (!mobile) {
		window.onresize = () => {
			descNav.getPageOffsetTop();
			viewportHeight = window.innerHeight;
			updateNodeValues();
		}
	}
	

	// event listener functions
	var dip = 3; // displayed posts.
	var lipPosts = false;
	function loadPosts() {
		if (!lipPosts) {

			if (dip <= 6) {
				
				for (let i=dip; i<=dip+2; i++) {
					newsPost[i].style.display = "inline-block";
					!mobile && setTimeout(()=>{
						newsPost[i].classList.remove("fade-in-center");
					}, 70);
				}
				setTimeout(()=>{
					mobile && newsPost[dip-3].classList.remove("fade-in-center"); mob_postAniPlayed = false ;
					if (dip === 9) {
						loadPostBtn.textEl.innerHTML = "Mer på Instagram";
						loadPostBtn.href = "https://www.instagram.com/otstockholm/";
						instaBtnAniPlayed = false;
					}
				}, 70);
				dip = dip === 6 ? 9 : 6 ;
				updateNodeValues();
			}
			
			var spinner = loadSpinner.cloneNode();

			loadPostBtn.textEl.style.opacity = "0";
			spinnerAppendAndDisplay(spinner, loadPostBtn);

			// **** change timeout to async function that executes when load is complete
			setTimeout(()=>{
				spinnerDisperse(spinner);
			}, 700)
		}
	}

	function spinnerAppendAndDisplay(el, tgt) {
		lipPosts = true;
		tgt.appendChild(el).style.visibility = "visible";
	}

	function spinnerDisperse(el) {
		lipPosts = false;
		el.remove();
		loadPostBtn.textEl.style.opacity = "1";
	}


	// single run animation status booleans and counters
	// they stop listeners after individual animations are played
	var desc_postAniPlayed, mob_postAniPlayed, 
		desc_menuAniPlayed, mob_menuAniPlayed = false;
	var mob_postAniIteration = mob_menuAniIteration = 0;
	var instaBtnAniPlayed = "idle";
	var currentSection = "landing";

	var desc_newsRow = Math.min(newsPost[0].top, newsPost[1].top, newsPost[2].top);

	// main scroll event
	var lastScrollY = 0,
		landingPaxY = 0,
		ticking = false;

	// pageBody.addEventListener('scroll', function(e) {
	// 	// console.log(pageBody.scrollTop);
	// 	if (!ticking) {
	// 		lastScrollY = pageBody.scrollTop;
	// 		landingPaxY = Math.floor(lastScrollY * .4);
	// 		window.requestAnimationFrame(update);
	// 		ticking = true;
	// 	}
	// 	ticking = !ticking && false;
	// });
	window.addEventListener('scroll', function(e) {
		if (!ticking) {
			lastScrollY = window.scrollY;
			landingPaxY = Math.floor(lastScrollY * .4);
			window.requestAnimationFrame(update);
			ticking = true;
		}
		ticking = !ticking && false;
	});

	lid("scrollY : " + Math.floor(lastScrollY) +
		"<br>vpBtm : " + Math.floor(viewportBottom) + 
		"<br>w.inH : " + window.innerHeight + 
		"<br>d.oH : " + document.documentElement.offsetHeight +
		"<br>w.sH : " + window.screen.availHeight +
		"<br>lanH : " + landing.style.height);

	// main update function_______________________||
	var scrollTriggerMargin = viewportHeight / 20;
	function update() {

		lid("scrollY : " + Math.floor(lastScrollY) +
		"<br>vpBtm : " + Math.floor(viewportBottom) + 
		"<br>w.inH : " + window.innerHeight + 
		"<br>d.oH : " + document.documentElement.offsetHeight +
		"<br>w.sH : " + window.screen.availHeight +
		"<br>lanH : " + landing.style.height);
		// update bottom of viewport
		viewportBottom = lastScrollY + viewportHeight;
		viewportFocusY = lastScrollY + viewportHeight / 2;
		// landing parallax
		// if (Math.floor(lastScrollY) <= doormat.top) {
			// landingBg.style.transform = "translate3d(0, " + landingPaxY + "px, 0)";
			// raf(greeting, "parallax", .1);
		// }

		// menu parallax
		// if (viewportBottom >= menuBg.top && Math.floor(lastScrollY) <= menuBg.bottom) {
		// 		landingBg.style.transform = "translate3d(0, " + Math.floor((Math.floor(lastScrollY) - dtl) * speed) + "px, 0)";
		// 		for (let i=0; i<9; i++) {
		// 			el[i].style.backgroundPosition = Math.floor((Math.floor(lastScrollY) - dtl) * el[i].horSpeed)/2 + "px " + Math.floor((Math.floor(lastScrollY) - dtl) * el[i].vertSpeed)/2 + "px";
		// 		}
		// }
		

		// desctop operations
		//-----------------------------------------------------
		if (!mobile) {

			// header
			if (Math.floor(lastScrollY) >= descNav.top) {
				descNav.style.cssText = "position: fixed;\
					top: 0;";
				mainLogo.style.cssText = "height: 3.2rem";
			} else {
				descNav.style.cssText = "";
				mainLogo.style.cssText = "";
			}

			// news posts
			if (!desc_postAniPlayed && viewportBottom >= desc_newsRow + scrollTriggerMargin) {
				for (let i=0; i<=2; i++) {
					newsPost[i].classList.remove("fade-in-center");
				}
				desc_postAniPlayed = true;
			}

			// gallery animation
			// if (viewportBottom >= descGal.top + scrollTriggerMargin * 2 && Math.floor(lastScrollY) + descNav.height <= descGal.bottom - scrollTriggerMargin * 2) {
			// 	// raf(galItems, "bgParallax", .4, descGal.top+viewportHeight);
			// 	for (let i=0; i<9; i++) {
			// 		galItems[i].classList.remove("desc-gal-ani");
			// 	}
			// } else {
			// 	for (let i=0; i<9; i++) {
			// 		galItems[i].classList.add("desc-gal-ani");
			// 	}
			// }

			// menu buttons
			if (!desc_menuAniPlayed && viewportBottom >= menuBtn[0].top + scrollTriggerMargin) {
				Array.from(menuBtn).forEach((e) => { 
					e.style.cssText = "opacity: 1; transform: scale(1)";
					setTimeout(()=>{ e.style.cssText = "transition-delay: 0s; opacity: 1; transform: scale(1)"; }, 140);
				});
				desc_menuAniPlayed = true;
			}
		} 
		
		// mobile operations
		//---------------------------------------------------
		if (mobile) {

			// display quickbar
			if (Math.floor(lastScrollY) >= doormat.top) {
				quickbar.classList.remove("hidden");
			} else {
				quickbar.classList.add("hidden");
			}
			// news posts
			if (!mob_postAniPlayed && viewportBottom >= newsPost[0].top) {
				for (let i=0+mob_postAniIteration; i<dip; i++) {
					if (viewportBottom >= newsPost[i].top + scrollTriggerMargin) {
						mob_postAniIteration++;
						newsPost[i].classList.remove("fade-in-center");
						if (i === dip-1) mob_postAniPlayed = true ;
					}
				}
			}

			// menu buttons
			if (!mob_menuAniPlayed && viewportBottom >= menuBtn[0].top) {
				for (let i=0+mob_menuAniIteration; i<menuBtn.length; i++) {
					if (viewportBottom >= menuBtn[i].top + scrollTriggerMargin) {
						mob_menuAniIteration++;
						setTimeout(()=>{ menuBtn[i].style.cssText = "transition-delay: 0s; opacity: 1; transform: scale(1)"; }, 70);
						if (i === menuBtn.length-1) mob_menuAniPlayed = true ;
					}
				}
			}
		}

		// applied to all formats
		//----------------------------------------

		// aboot img animation
		if (viewportBottom >= abootItem[0].top) {
			Array.from(abootImg).forEach((e) => {
				if (viewportBottom >= e.top + scrollTriggerMargin && Math.floor(lastScrollY) <= e.bottom - scrollTriggerMargin) {
					e.classList.remove("img-zoom");
				} else {
					e.classList.add("img-zoom");
				}
			});
		}

		if (!instaBtnAniPlayed && viewportBottom >= loadPostBtn.top + scrollTriggerMargin) {
			loadPostBtn.classList.add("insta-btn-ani");
			instaBtnAniPlayed = true;
		}

		// misc one-time animated elements
		if (playedAniCount >= playedAniCheck) {
			if (viewportBottom > doormat.top + (scrollTriggerMargin*3)) {
				removeClasses(doormat, [ "fade-in-left", "fade-in-right"]);
			}

			for (let i=0; i<abootItem.length; i++) {
				if (viewportBottom > abootItem[i].top + scrollTriggerMargin) {
					removeClasses(abootItem[i], [ "fade-in-left", "fade-in-right"]);
				}
			}
		}

		if (currentSection !== "landing" && viewportFocusY <= doormat.bottom) {
			currentSection = "landing";
		} else if (currentSection !== "news" && viewportFocusY >= doormat.bottom && viewportFocusY < gallery.top) {
			currentSection = "news";
		} else if (currentSection !== "gallery" && viewportFocusY >= gallery.top && viewportFocusY < menuBg.top) {
			currentSection = "gallery";
		} else if (currentSection !== "menu" && viewportFocusY >= menuBg.top && viewportFocusY < aboot.top) {
			currentSection = "menu";
		} else if (currentSection !== "aboot" && viewportFocusY >= aboot.top && viewportFocusY < contactSection.top) {
			currentSection = "aboot";
		} else if (currentSection !== "contact" && viewportFocusY >= contactSection.top) {
			currentSection = "contact";
		}

		ticking && window.requestAnimationFrame(update);
	}

	
	var fadeInElements = document.querySelectorAll(".fade-in-left, .fade-in-right");
	var playedAniCount = fadeInElements.length;


	var playedAniCheck = 1;
	function removeClasses(el, cn) {
		for (let i=0; i<cn.length; i++) {
			let batch = el.getElementsByClassName(cn[i]);
			
			for (let k of batch) {
				k.classList.remove(cn[i]);
				playedAniCheck++;
			}
		}
	}


	// function raf(el, act, speed, dtl) {
	// 	window.requestAnimationFrame(animate(el, act, speed, dtl));
	// }
	
	function animate(el, act, speed = .2, dtl = 0) {
		
	}

	let rafList = [],
		queueWaiting = false;
	function rafQueuePlayer () {

	}

	function openMenu() {
		// window.requestAnimationFrame(()=>{

			mobileMenu.style.display = "block";
			// pageBody.style.overflowY = "hidden";
			// pageBody.style.height = "100%";
			burger.classList.add("burger-animation");
			mobNavBg.classList.remove("mob-nav-bg-fill");

			closeBtn.addEventListener("click", closeMenu);
		// });
		
		for (var i = 0; i < links.length; i++) {
			
			links[i].addEventListener("click", closeMenu);
			// console.log(links[i] + " is in focus");
			links[i].childNodes[0].classList.remove("ani-swing-out-right");
			links[i].childNodes[0].classList.add("ani-swing-in-right");

			// window.requestAnimationFrame(()=>{
			// });
		}
		setTimeout(()=>{
			window.requestAnimationFrame(()=>{
				closeBtn.classList.remove("close-btn-animation");
				mobNavBg.style.transitionDelay = ".28s";
				for (var i = 0; i < links.length; i++) {
					links[i].classList.remove("fade-in-up");
				}
			});
		}, 20);
	}
	
	function closeMenu() {
		if (this.id != "close-menu" && this.name != currentSection) {
			window.requestAnimationFrame(()=>{
				mobMenuAnimBg.classList.add("mob-menu-fill-anim");
			});
			setTimeout(()=>{
				window.requestAnimationFrame(()=>{
					mobMenuAnimBg.classList.remove("mob-menu-fill-anim");
				});
			},1500);
		}
		window.requestAnimationFrame(()=>{
			mobNavBg.classList.add("mob-nav-bg-fill");
			closeBtn.classList.add("close-btn-animation");
		});
			closeBtn.removeEventListener("click", closeMenu);
		
		for (var i = 0; i < links.length; i++) {
			links[i].removeEventListener("click", closeMenu);
			
			links[i].classList.add("fade-in-up");
			links[i].childNodes[0].classList.remove("ani-swing-in-right");
			links[i].childNodes[0].classList.add("ani-swing-out-right");
			window.requestAnimationFrame(()=>{
			});
		}
		setTimeout(()=>{
			// window.requestAnimationFrame(()=>{
				burger.classList.remove("burger-animation");
				mobileMenu.style.display = "none";
				// pageBody.style.overflowY = "";
				// pageBody.style.height = "";
				mobNavBg.style.transitionDelay = "";
			// });
		}, 350);
	}
















	// media viever elements
	const viewer = document.getElementById("viewer");
	const viewerCanvasses = document.getElementsByClassName("contentCanvas");

	// viewer ui
	const nxtArrow = document.getElementById("next-arrow");
	const prvArrow = document.getElementById("prev-arrow");
	const closeButton = document.getElementById("close-button");

	// gallery media
	const galleryItems = document.getElementsByClassName("gallery-img");
	const menuButtons = document.getElementsByClassName("menu-button");

	// empty, brand-new Objects
	var viewerListeners = Object.create(null),
		userInput = Object.create(null),
		actCnv = Object.create(null),
		nxtCnv = Object.create(null),
		prvCnv = Object.create(null);
	userInput = {
		active: false,
		travelY: 0, travelX: 0,
		horizontalScroll: false, verticalScroll: false
	}
	var rafPointInput = 0;
	
	for (let i=0; i<galleryItems.length; i++) {
		galleryItems[i].onclick = ()=>{
			viewMedia(galleryItems, i);
		}
	}
	for (let i=0; i<menuButtons; i++) {
		menuButtons[i].onclick = ()=>{
			viewMedia(galleryItems, i);
		}
	}
	
	// media viewer method
	function viewMedia(tgt, idx) {
		pageBody.style.overflowY = "hidden";
		viewer.classList.remove("hidden");
		closeButton.classList.remove("hidden");
		
		const canvasInFocus = focus => {
			// remove all obsolete
			for (let i=0; i<3; i++) {
				viewerCanvasses[i].classList.remove("prev", "active", "next");
			}

			// get correct iteration
			actCnv.c = focus;
			nxtCnv.c = actCnv.c === 2 ? 0 : actCnv.c + 1;
			prvCnv.c = actCnv.c === 0 ? 2 : actCnv.c - 1;
			// assign new
			viewerCanvasses[prvCnv.c].classList.add("prev");
			viewerCanvasses[actCnv.c].classList.add("active");
			viewerCanvasses[nxtCnv.c].classList.add("next");
		}
		canvasInFocus(1);

		const mediaInFocus = focus => {
			actCnv.m = focus;
			nxtCnv.m = actCnv.m === 0 ? tgt.length-1 : actCnv.m-1;
			prvCnv.m = actCnv.m === tgt.length-1 ? 0 : actCnv.m+1;
		}
		mediaInFocus(idx);
		
		// viewer and its content
		viewerCanvasses[prvCnv.c].setAttribute("src", tgt[nxtCnv.m].getAttribute("data-src"));
		viewerCanvasses[actCnv.c].setAttribute("src", tgt[actCnv.m].getAttribute("data-src"));
		viewerCanvasses[nxtCnv.c].setAttribute("src", tgt[prvCnv.m].getAttribute("data-src"));
		
		viewerCanvasses[actCnv.c].addEventListener("mousedown", onPress, false);
		viewerCanvasses[actCnv.c].addEventListener("touchstart", onPress, {passive: true});

		/**
		 * Mouse and touch input event handlers
		 */
		nxtArrow.addEventListener("click", nextCanvas, false);
		prvArrow.addEventListener("click", prevCanvas, false);
		closeButton.addEventListener("click", closeViewer, false);

		viewerListeners = {
			viewerCanvasses: [[viewerCanvasses],[["mousedown", onPress, false],['touchstart', onPress, false]]],
			nxtArrow: [[nxtArrow],["click", nextCanvas, false]],
			prvArrow: [[prvArrow],["click", prevCanvas, false]],
			closeButton: [[closeButton],["click", closeViewer, false]]
		}

		// main event functions
		function onPress(ev) {
			ev.preventDefault();
			viewerCanvasses[actCnv.c].style.transitionDuration = "0s";

			userInput.active = true;
			userInput.startY = (ev.clientY || ev.touches[0].clientY) - userInput.travelY;
			userInput.startX = (ev.clientX || ev.touches[0].clientX) - userInput.travelX;

			// cancel any clashing animation frames
			cancelAnimationFrame(rafPointInput);
			rafPointInput = window.requestAnimationFrame(pointInputStep);

			document.addEventListener("mousemove", onMove, false);
			document.addEventListener("mouseup", onRelease, false);
			viewerCanvasses[actCnv.c].addEventListener("touchmove", onMove, {passive: true});
			viewer.addEventListener("touchend", onRelease, {passive: true});
			// someElement.addEventListener('touchcancel', onRelease, false);
		}

		function onMove(ev) {
			try {
				if (!userInput.horizontalScroll) userInput.travelY = (ev.clientY || ev.touches[0].clientY) - userInput.startY;
				if (!userInput.verticalScroll) userInput.travelX = (ev.clientX || ev.touches[0].clientX) - userInput.startX;
			} catch(exc) { console.log(exc) }
			
			if (Math.abs(userInput.travelY) > 5 && !userInput.horizontalScroll) {
				userInput.verticalScroll = true;
				userInput.travelX = 0;
			} else if (Math.abs(userInput.travelX) > 5 && !userInput.verticalScroll) {
				userInput.horizontalScroll = true;
				userInput.travelY = 0;
			}
		}

		function onRelease(ev) {

			ev.preventDefault();
			if (userInput.travelX < -(viewportWidth / 4)) {
				nextCanvas();
			} else if (userInput.travelX > (viewportWidth / 4)) {
				prevCanvas();
			}
			if (Math.abs(userInput.travelY) > viewportHeight / 4) {
				userInput.travelY = 0;
				cancelAnimationFrame(rafPointInput);
				closeViewer();
			}
			userInput.active = false;
			document.removeEventListener("mousemove", onMove, false);
			document.removeEventListener("mouseup", onRelease, false);
			viewerCanvasses[actCnv.c].removeEventListener("touchmove", onMove, {passive: true});
			viewer.removeEventListener("touchend", onRelease, {passive: true});
			// viewer.removeEventListener('touchcancel', onRelease, false);
			userInput.verticalScroll = false;
			userInput.horizontalScroll = false;
		}

		function animationHandler() {
			let activeBool;
			activeBool = ((Math.abs(userInput.travelY) > 2 || Math.abs(userInput.travelX) > 2) || userInput.active) ? true : false;
			if (!userInput.active) (userInput.travelY *= .92) || (userInput.travelX *= .92);

			return activeBool;
		}

		// raf function for mouse and touch events
		let lastFrame = null;
		function pointInputStep(ts) {
			
			// frame logger.. displays those that take longer than 20ms
			let frameLength = ts - lastFrame || ts;
			(frameLength > 20 && frameLength < 100) && console.log(Math.floor(1000 / frameLength) + "fps [" + frameLength.toFixed(2) + "ms]")
			
			let animationActive = animationHandler();

			if (animationActive) {
				rafPointInput = window.requestAnimationFrame(pointInputStep);
			} else {
				// restore defaults
				viewerCanvasses[actCnv.c].removeAttribute("style");
			}

			// limit frames, get more stable..
			if (frameLength > 12 && animationActive) {
				viewerCanvasses[actCnv.c].style.transform = "translate3d(" + Math.floor(userInput.travelX) + "px," + Math.floor(userInput.travelY) + "px,0)";
				viewerCanvasses[actCnv.c].style.opacity = 1.1 - Math.abs(userInput.travelY) * .003;
				viewer.style.opacity = 1.1 - Math.abs(userInput.travelY) * .002;
				
				lastFrame = ts;
			}
		}

		function nextCanvas() {
			mediaInFocus(prvCnv.m);
			resetCanvas(nxtCnv, prvCnv);
		}

		function prevCanvas() {
			mediaInFocus(nxtCnv.m);
			resetCanvas(prvCnv, nxtCnv);
		}

		function resetCanvas(tgtCnv, secCnv) {
			cancelAnimationFrame(rafPointInput);
			viewerCanvasses[actCnv.c].removeAttribute("style");
			userInput.travelY = 0;
			userInput.travelX = 0;
			viewerCanvasses[actCnv.c].removeEventListener("mousedown", onPress, false);
			viewerCanvasses[actCnv.c].removeEventListener("touchstart", onPress, {passive: true});
			nxtArrow.removeEventListener("click", nextCanvas, false);
			prvArrow.removeEventListener("click", prevCanvas, false);
			// prevent transition on invisible elements
			viewerCanvasses[secCnv.c].style.transitionDuration = "0s";

			viewerCanvasses[actCnv.c].addEventListener("transitionend", function() {
				viewerCanvasses[tgtCnv.c].removeAttribute("style");
				viewerCanvasses[tgtCnv.c].setAttribute("src", tgt[secCnv.m].getAttribute("data-src"));
				nxtArrow.addEventListener("click", nextCanvas, false);
				prvArrow.addEventListener("click", prevCanvas, false);
				viewerCanvasses[actCnv.c].addEventListener("mousedown", onPress, false);
				viewerCanvasses[actCnv.c].addEventListener("touchstart", onPress, {passive: true});
				lid(tgt[actCnv.m].getAttribute("data-src"));
				this.removeEventListener("transitionend", arguments.callee);
			}, false);

			// animate visible
			cancelAnimationFrame(rafPointInput);
			rafClassChange = window.requestAnimationFrame(()=>{
				// assign new classes
				canvasInFocus(tgtCnv.c);
			});
		}

		// close viewer
		function closeViewer() {
			viewer.style.opacity = 0;
			

			viewer.addEventListener("transitionend", function(){
				pageBody.style.overflowY = "";
				viewer.classList.add("hidden");
				closeButton.classList.add("hidden");
				viewer.removeAttribute("style");
				for (let c=0; c<3; c++) {
					viewerCanvasses[c].removeAttribute("style");
				}

				let l = 0;
				Object.values(viewerListeners).forEach((value)=>{
					if (value[0][0] == viewerCanvasses) {
						for (let l=0; l<3; l++) {
							value[0][0][l].removeEventListener(...value[1]);
						}
					} else {
						value[0][0].removeEventListener(...value[1]);
					}
				});
				this.removeEventListener("transitionend", arguments.callee);
			}, false);
		}
	}
}