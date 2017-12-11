    
var windowWidth = $(window).width();
  $(window).resize(function() {
    if( windowWidth != $(window).width() ) {
      if ( $(window).width() > 1024){
        pc_menu();
       
        return false;
      } else {
        mobile_menu();
      }
    }
    windowWidth = $(window).width();
  });


        
$(function() {
  //pc lnb navigation
    pc_menu();
    function pc_menu(){
      $(".top_menu > li > a").on("mouseenter focus", function(){
          $(".depth2_sub").hide();
          $(this).parent(".depth1").find(".depth2_sub").show();
      });
      $(".top_menu").on("mouseleave focus", function(){
          $(this).find(".depth2_sub").hide();

      });
    };
  //mobile lnb navigation
   mobile_menu(); 
   function mobile_menu(){  
      $(".top_menu > li").on("click", function(){
          event.preventDefault();
          $(".top_menu > li").not(this).removeClass("on").next("div").hide();
          $(this).toggleClass("on").next("div").css({display:"block"}).show();
      });
   };
    
  //mobile button click
    $(".mobile_btn > a").on("click", function(){
          $(".menu_wrap").css({display:"block"}).show(2000);
          return false;
      });
    $(".mobile_top > a").on("click", function(){
          $(".menu_wrap").hide();
      });
   
    //language button click
	$('.language button').on('click', function(event){
		var $target=$(event.target);
		if($target.is('.on')){
			$(this).removeClass('on').next('div').stop().slideUp();
			$(this).children('span.hidden').html("버튼열기");
		}else{
			$(this).addClass('on').next('div').stop().slideDown();
			$(this).children('span.hidden').html("버튼닫기");
		};
		return false;
    });
    
    //search button click
	$('.search_wrap button').on('click', function(event){
		var $target=$(event.target);
		if($target.is('.on')){
			$(this).removeClass('on').next('div').stop().hide();
			$(this).attr('class',"search_btn").html("검색영역 열기");
		}else{
			$(this).addClass('on').next('div').stop().show();
			$(this).attr('class',"search_btn on").html("검색영역 닫기");
		};
		return false;
	});
	$('.search_wrap .search_submit').on('focusout', function(){
		var Layer = $(this).parents('.search_box');
		$('.search_wrap button').removeClass('on').text('검색영역 열기');
		Layer.hide();
	});
    
    //site link - 관련사이트 바로가기
    $('.site_link button').click(function(){		
		var $target=$(event.target);
		if($target.is('.on')){
			$(this).removeClass('on').next('.obj').slideUp('fast');
		}else{
			$(this).addClass('on').next('.obj').slideDown('fast');
		};
		return false;
	});
    
    //footer banner - bxslider plugin 사용
    var bannerslider = $('.banner_list').bxSlider({
        auto: true,
        pager: false,
        controls: false,
        slideMargin: 5,
        slideWidth:160,
        minSlides: 1,
        maxSlides: 6,
        moveSlides: 1,
        onSlideLoad:function(){
        bannerslider.startAuto()
  }
    });
    $('.main_banner .banner_control .next_btn').on('click', function(){
       bannerslider.goToNextSlide();
    });
    $('.main_banner .banner_control .prev_btn').on('click', function(){
       bannerslider.goToPrevSlide();
    });
    
    $('.main_banner .banner_control .pause_btn').on('click', function(){
       if($(this).attr('class') == 'pause_btn'){
           bannerslider.stopAuto();
           $(this).removeClass('pause_btn');
           $(this).addClass('play_btn').html('배너 롤링 재생');
       }else{
           bannerslider.startAuto();
           $(this).removeClass('play_btn');
           $(this).addClass('pause_btn').html('배너 롤링 정지');
       }
    });
});





