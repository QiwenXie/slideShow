$(function(){
	var slideShow=$(".slideShow"),
	 ul=slideShow.find("ul"),
	 nav =slideShow.find(".nav span");

     iNow = 0
     timer=null

     slideShow.hover(function(){
     clearInterval(timer);
     },autoPlay);

	 nav.on("click",function(){
	 	var now=$(this),
	 	 oneWidth=ul.find("li").eq(0).width(),
	 	 index=now.index();
	 	 iNow=index;
	 	nav.removeClass("active");
	 	now.addClass("active");
	 	ul.animate({
	 		"left":-oneWidth*index
	 	},800);
	 });

        function autoPlay(){
        timer = setInterval(function(){
        iNow++;/*遍历*/
        if(iNow==nav.length){iNow=0;}
        nav.eq(iNow).trigger("click")
        },2000);}

})