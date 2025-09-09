document.addEventListener("DOMContentLoaded", (event) => {


    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    ScrollSmoother.create({
        wrapper: '.ss-wrapper',
        content: '.smooth-content',
        smooth: 1,
        smoothTouch: 0,
        effects: true,
    });



    let player;
	let currentVideoId = null;

	// 1. Load YouTube Iframe API
	let tag = document.createElement('script');
	tag.src = "https://www.youtube.com/iframe_api";
	let firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	// 2. Make this global so YouTube can call it
	window.onYouTubeIframeAPIReady = function () {
		player = new YT.Player('player', {
			height: '360',
			width: '640',
			videoId: '', // Will load later
			playerVars: {
				playsinline: 1,
				rel: 0
			}
		});
	};

	// 3. Handle play button clicks
	document.addEventListener('click', function (e) {
		const target = e.target.closest('.play-video');
		if (target) {
			e.preventDefault();
			currentVideoId = target.getAttribute('data-video-id');
			$('#modal-direwolf-video-container').modal('show');
		}
	});

	// 4. When modal is shown, load and play the video
	$('#modal-direwolf-video-container').on('shown.bs.modal', function () {
		if (player && currentVideoId) {
			player.loadVideoById(currentVideoId);
		}
	});

	// 5. When modal is hidden, stop the video
	$('#modal-direwolf-video-container').on('hidden.bs.modal', function () {
		if (player) {
			player.stopVideo();
		}
	});


});







