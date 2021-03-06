app.controller('photoCtrl', function (global, globalEmail) {
	let vm = this;
	vm.album = global.getPhoto();

	vm.email = [];
	vm.email = globalEmail.getEmail();

	vm.addEmail = function () {
		vm.email.push({
			name: vm.guestName,
			email: vm.guestEmail,
			mes: vm.guestMes
		})
		vm.guestName = '';
		vm.guestEmail = '';
		vm.guestMes = '';
	}

	vm.allPhotos = function () {
		for (let i = 1; i < vm.album.length; i++) {
			return this;
		}
	}

	$(function () {
		$(".imgCard").click(function () {
			let img = $(this);
			let src = img.attr('src');
			$("body").append("<div class='popup'>" + "<div class='popup_bg'></div>" + "<img src='" + src + "' class='popup_img'/>" + "<img src='images/xIcon.png' class='xIcon'/>" + "</div>");
			$(".popup").fadeIn(600);
			$(".popup_bg").click(function () {
				$(".popup").fadeOut(600);
				setTimeout(function () {
					$(".popup").remove();
				}, 600);
			});
			$(".xIcon").click(function () {
				$(this).animate({
					width: '5px'
				}, 200);
				$(".popup").fadeOut(600);
				setTimeout(function () {
					$(".popup").remove();
				}, 600);
			});

		})

		$('.go_to').click(function () {
			//			$('body').css('overflow', 'scroll');
			var scroll_el = $(this).attr('href');
			if ($(scroll_el).length != 0) {
				$('html, body').animate({
					scrollTop: $(scroll_el).offset().top
				}, 1300);
			}
		});
		$(window).bind("scroll", function () {
			if ($(this).scrollTop() > 200) {
				$(".back-to-top").fadeIn(400);
			} else {
				$('.back-to-top').fadeOut(400);
			}
		});
		$('.back-to-top').click(function () {

			$('html, body').animate({
				scrollTop: '0px'
			}, 1000);
		});
		$(window).scroll(function () {
			$('.hideme').each(function (i) {
				let bottom_of_object = $(this).offset().top + ($(this).outerHeight() - 217);
				let bottom_of_window = $(window).scrollTop() + $(window).height();
				if (bottom_of_window > bottom_of_object) {
					$(this).animate({
						'opacity': '1'
					}, 500);
				}
			});
		});
		$('.arrowLeft').click(function () {
			$('.titl').css('background-color', '#292c2f');
			//			$('body').css('overflow', 'scroll');
			$('.mainContainer').animate({
				left: '-100%'
			});
			$('.minimenu').show();
			$(this).animate({
				left: '-100%'
			});
		})
		$('.contact').click(function () {
			//			$('body').css('overflow', 'scroll');
		});



		$('.minimenu').click(function () {
			//			$('.obg').css('display', 'block');
			$('.titl').css('background-color', '#272631');
			//						$('body').css('overflow', 'hidden');
			$('.arrowLeft').animate({
				left: '135px',
				top: '8px'
			}, 400);
			$(this).hide();
			$('.mainContainer').animate({
				left: 0
			}, 300);
		})
	})
});
