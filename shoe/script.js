$(document).ready(function() {
	$(".square").mouseenter(function(){
		$(".square").addClass("hide");
		$(this).removeClass("hide");
		$(this).addClass("overflow");
		$(".shoedesc").text($(this).attr("data-text") );
		$(".shoename").text($(this).attr("data-title") );
		$(".year").text($(this).attr("data-year") );
		$(".bg").toggleClass($(this).attr("data-bg")  );
	});

	$(".square").mouseleave(function(){
		$(".square").removeClass("hide");

		$(this).removeClass("overflow");
		$(".shoedesc").text("");
		$(".shoename").text("");
		$(".year").text("");
		$(".bg").toggleClass($(this).attr("data-bg")  );
	});

	// $(".div2").hover(function(){
	// 	$(".div1").toggleClass("hide");
	// 	$(".div2").toggleClass("overflow");
	// 	$(".div3").toggleClass("hide");
	// 	$(".div4").toggleClass("hide");
	// 	$(".div5").toggleClass("hide");
	// 	$(".div6").toggleClass("hide");
	// 	$(".div7").toggleClass("hide");
	// 	$(".div8").toggleClass("hide");
	// 	$(".div9").toggleClass("hide");
	// 	$(".div10").toggleClass("hide");
	// 	$(".div11").toggleClass("hide");
	// 	$(".div12").toggleClass("hide");
	// 	$(".div13").toggleClass("hide");
	// 	$(".bg").toggleClass("bg2")
	// });

	// $(".div3").hover(function(){
	// 	$(".div1").toggleClass("hide");
	// 	$(".div2").toggleClass("hide");
	// 	$(".div3").toggleClass("overflow");
	// 	$(".div4").toggleClass("hide");
	// 	$(".div5").toggleClass("hide");
	// 	$(".div6").toggleClass("hide");
	// 	$(".div7").toggleClass("hide");
	// 	$(".div8").toggleClass("hide");
	// 	$(".div9").toggleClass("hide");
	// 	$(".div10").toggleClass("hide");
	// 	$(".div11").toggleClass("hide");
	// 	$(".div12").toggleClass("hide");
	// 	$(".div13").toggleClass("hide");
	// 	$(".bg").toggleClass("bg3")
	// });

	// $(".div4").hover(function(){
	// 	$(".div1").toggleClass("hide");
	// 	$(".div2").toggleClass("hide");
	// 	$(".div3").toggleClass("hide");
	// 	$(".div4").toggleClass("overflow");
	// 	$(".div5").toggleClass("hide");
	// 	$(".div6").toggleClass("hide");
	// 	$(".div7").toggleClass("hide");
	// 	$(".div8").toggleClass("hide");
	// 	$(".div9").toggleClass("hide");
	// 	$(".div10").toggleClass("hide");
	// 	$(".div11").toggleClass("hide");
	// 	$(".div12").toggleClass("hide");
	// 	$(".div13").toggleClass("hide");
	// });

	// $(".div5").hover(function(){
	// 	$(".div1").toggleClass("hide");
	// 	$(".div2").toggleClass("hide");
	// 	$(".div3").toggleClass("hide");
	// 	$(".div4").toggleClass("hide");
	// 	$(".div5").toggleClass("overflow");
	// 	$(".div6").toggleClass("hide");
	// 	$(".div7").toggleClass("hide");
	// 	$(".div8").toggleClass("hide");
	// 	$(".div9").toggleClass("hide");
	// 	$(".div10").toggleClass("hide");
	// 	$(".div11").toggleClass("hide");
	// 	$(".div12").toggleClass("hide");
	// 	$(".div13").toggleClass("hide");
	// });

	// $(".div6").hover(function(){
	// 	$(".div1").toggleClass("hide");
	// 	$(".div2").toggleClass("hide");
	// 	$(".div3").toggleClass("hide");
	// 	$(".div4").toggleClass("hide");
	// 	$(".div5").toggleClass("hide");
	// 	$(".div6").toggleClass("overflow");
	// 	$(".div7").toggleClass("hide");
	// 	$(".div8").toggleClass("hide");
	// 	$(".div9").toggleClass("hide");
	// 	$(".div10").toggleClass("hide");
	// 	$(".div11").toggleClass("hide");
	// 	$(".div12").toggleClass("hide");
	// 	$(".div13").toggleClass("hide");
	// });

	// $(".div7").hover(function(){
	// 	$(".div1").toggleClass("hide");
	// 	$(".div2").toggleClass("hide");
	// 	$(".div3").toggleClass("hide");
	// 	$(".div4").toggleClass("hide");
	// 	$(".div5").toggleClass("hide");
	// 	$(".div6").toggleClass("hide");
	// 	$(".div7").toggleClass("overflow");
	// 	$(".div8").toggleClass("hide");
	// 	$(".div9").toggleClass("hide");
	// 	$(".div10").toggleClass("hide");
	// 	$(".div11").toggleClass("hide");
	// 	$(".div12").toggleClass("hide");
	// 	$(".div13").toggleClass("hide");
	// });

	// $(".div8").hover(function(){
	// 	$(".div1").toggleClass("hide");
	// 	$(".div2").toggleClass("hide");
	// 	$(".div3").toggleClass("hide");
	// 	$(".div4").toggleClass("hide");
	// 	$(".div5").toggleClass("hide");
	// 	$(".div6").toggleClass("hide");
	// 	$(".div7").toggleClass("hide");
	// 	$(".div8").toggleClass("overflow");
	// 	$(".div9").toggleClass("hide");
	// 	$(".div10").toggleClass("hide");
	// 	$(".div11").toggleClass("hide");
	// 	$(".div12").toggleClass("hide");
	// 	$(".div13").toggleClass("hide");
	// });

	// $(".div9").hover(function(){
	// 	$(".div1").toggleClass("hide");
	// 	$(".div2").toggleClass("hide");
	// 	$(".div3").toggleClass("hide");
	// 	$(".div4").toggleClass("hide");
	// 	$(".div5").toggleClass("hide");
	// 	$(".div6").toggleClass("hide");
	// 	$(".div7").toggleClass("hide");
	// 	$(".div8").toggleClass("hide");
	// 	$(".div9").toggleClass("overflow");
	// 	$(".div10").toggleClass("hide");
	// 	$(".div11").toggleClass("hide");
	// 	$(".div12").toggleClass("hide");
	// 	$(".div13").toggleClass("hide");
	// });

	// $(".div10").hover(function(){
	// 	$(".div1").toggleClass("hide");
	// 	$(".div2").toggleClass("hide");
	// 	$(".div3").toggleClass("hide");
	// 	$(".div4").toggleClass("hide");
	// 	$(".div5").toggleClass("hide");
	// 	$(".div6").toggleClass("hide");
	// 	$(".div7").toggleClass("hide");
	// 	$(".div8").toggleClass("hide");
	// 	$(".div9").toggleClass("hide");
	// 	$(".div10").toggleClass("overflow");
	// 	$(".div11").toggleClass("hide");
	// 	$(".div12").toggleClass("hide");
	// 	$(".div13").toggleClass("hide");
	// });

	// $(".div11").hover(function(){
	// 	$(".div1").toggleClass("hide");
	// 	$(".div2").toggleClass("hide");
	// 	$(".div3").toggleClass("hide");
	// 	$(".div4").toggleClass("hide");
	// 	$(".div5").toggleClass("hide");
	// 	$(".div6").toggleClass("hide");
	// 	$(".div7").toggleClass("hide");
	// 	$(".div8").toggleClass("hide");
	// 	$(".div9").toggleClass("hide");
	// 	$(".div10").toggleClass("hide");
	// 	$(".div11").toggleClass("overflow");
	// 	$(".div12").toggleClass("hide");
	// 	$(".div13").toggleClass("hide");
	// });

	// $(".div12").hover(function(){
	// 	$(".div1").toggleClass("hide");
	// 	$(".div2").toggleClass("hide");
	// 	$(".div3").toggleClass("hide");
	// 	$(".div4").toggleClass("hide");
	// 	$(".div5").toggleClass("hide");
	// 	$(".div6").toggleClass("hide");
	// 	$(".div7").toggleClass("hide");
	// 	$(".div8").toggleClass("hide");
	// 	$(".div9").toggleClass("hide");
	// 	$(".div10").toggleClass("hide");
	// 	$(".div11").toggleClass("hide");
	// 	$(".div12").toggleClass("overflow");
	// 	$(".div13").toggleClass("hide");
	// });

	// $(".div13").hover(function(){
	// 	$(".div1").toggleClass("hide");
	// 	$(".div2").toggleClass("hide");
	// 	$(".div3").toggleClass("hide");
	// 	$(".div4").toggleClass("hide");
	// 	$(".div5").toggleClass("hide");
	// 	$(".div6").toggleClass("hide");
	// 	$(".div7").toggleClass("hide");
	// 	$(".div8").toggleClass("hide");
	// 	$(".div9").toggleClass("hide");
	// 	$(".div10").toggleClass("hide");
	// 	$(".div11").toggleClass("hide");
	// 	$(".div12").toggleClass("hide");
	// 	$(".div13").toggleClass("overflow");
	// });

	$(".button").click(function(){
		$(".intro").hide(function(){
			$(".intro").fadeOut(250, 0.25,)
		});
	});
});