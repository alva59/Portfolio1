
    jQuery(document).ready(function($){


        //$(".embed-responsive iframe").addClass("embed-responsive-item");
        //$(".carousel-inner .item:first-child").addClass("active");
        
        //$('[data-toggle="tooltip"]').tooltip();

$(".header-area").sticky({topspacing:0});
        $('.nav li a[href^="#"]').on('click', function (e) {
					e.preventDefault();

					var target = this.hash;
					var $target = $(target);
                    var headerH = "30";

					$('html, body').animate({
						'scrollTop': $target.offset().top -headerH + "px"
					}, 1000, 'swing');
				});

				$('body').scrollspy({ target: '.mainmenu',offset:200 });
        $(".nav li a").click(function(){
            $(".navbar-collapse").removeClass("in");
        });
        

    });


    