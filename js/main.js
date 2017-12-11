$(function() {
    //main visual - bxslider plugin 사용
    var mainslider = $('.visual_list').bxSlider({
    auto: true,
    pager: false,
    controls: false,
    pause:5000,
    onSlideLoad:function(){
	slider.startAuto()
  }
    });
    $('.visual_control .next_btn').on('click', function(){
       mainslider.goToNextSlide();
    });
    $('.visual_control .prev_btn').on('click', function(){
       mainslider.goToPrevSlide();
    });
    
    $('.visual_control .pause_btn').on('click', function(){
       if($(this).attr('class') == 'pause_btn'){
           mainslider.stopAuto();
           $(this).removeClass('pause_btn');
           $(this).addClass('play_btn').html('팝업 롤링 재생');
       }else{
           mainslider.startAuto();
           $(this).removeClass('play_btn');
           $(this).addClass('pause_btn').html('팝업 롤링 정지');
       }
    });
    
    //popupzone visual - bxslider plugin 사용
    var popzoneslider = $('.popupzone_list').bxSlider({
    auto: true,
    pager: false,
    controls: false,
    pause:4000,
    onSlideLoad:function(){
	popzoneslider.startAuto()
  }
    });
    $('.popupzone_control .next_btn').on('click', function(){
       popzoneslider.goToNextSlide();
    });
    $('.popupzone_control .prev_btn').on('click', function(){
       popzoneslider.goToPrevSlide();
    });
    
    $('.popupzone_control .pause_btn').on('click', function(){
       if($(this).attr('class') == 'pause_btn'){
           popzoneslider.stopAuto();
           $(this).removeClass('pause_btn');
           $(this).addClass('play_btn').html('팝업 롤링 재생');
       }else{
           popzoneslider.startAuto();
           $(this).removeClass('play_btn');
           $(this).addClass('pause_btn').html('팝업 롤링 정지');
       }
    });
    
    // notice tabs
	$(".board > ul > li > button").parents(".board").find(">ul>li").children(".more").show();
	$(".tab_btn").children(".more").show();	
	$(".board > ul > li > button").on("click",function(){
		$(this).parents(".board").find(">ul>li").removeClass("active").children(".more").hide();
		$(this).siblings(".more").show().parents().addClass("active");	
		return false;
	});

    //accodion
	$(".accordion > ul > li > button").on("click",function(){
			if( $(this).hasClass('on') ){
                
            }
			else{
				$(".accordion > ul > li > button").removeClass('on').next().slideUp();
				$(this).addClass('on').next().slideDown();
			}
			
			return false;
    });
});