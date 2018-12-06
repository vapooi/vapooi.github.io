$(document).ready(function() {
	$(".square").mouseenter(function(){
		$(".square").addClass("hide");
		$(this).removeClass("hide");
		$(this).addClass("overflow");
		
		$(".bg").toggleClass($(this).attr("data-bg")  );
	});

	$(".square").mouseleave(function(){
		$(".square").removeClass("hide");

		$(this).removeClass("overflow");
		
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

	$(".div1").click(function(){
		$(".div1").toggleClass("overflow");
		$(".bg").toggleClass("bg1")
	});
	$(".div1").click(function(){
		$(".shoename").text("'Banned'");
		$(".year").text("1985");
		$(".shoedesc").text("Banned by the NBA in 1985, Michael Jordan was charged $5,000 per game for wearing the Air Jordan 1 'Black/Red' because they didn't include the color white which was part of the Chicago Bulls' official team colors. Used as a marketing tactic, Nike crafted the 'Banned' campaign around the sneakers to launch and promote the Air Jordan line. The sneaker was retroed in 1994, 2011, 2013 and 2016. The 2011 pair featured an 'X' on the heel paying homage to the 'Banned' nickname.");
	});

	$(".div2").click(function(){
		$(".div1").toggleClass("hide");
		$(".div2").toggleClass("overflow");
		$(".div3").toggleClass("hide");
		$(".div4").toggleClass("hide");
		$(".div5").toggleClass("hide");
		$(".div6").toggleClass("hide");
		$(".div7").toggleClass("hide");
		$(".div8").toggleClass("hide");
		$(".div9").toggleClass("hide");
		$(".div10").toggleClass("hide");
		$(".div11").toggleClass("hide");
		$(".div12").toggleClass("hide");
		$(".div13").toggleClass("hide");
		$(".bg").toggleClass("bg2")
		$(".shoename").text("Fragment Design x AJ1");
		$(".year").text("2014");
		$(".shoedesc").text("The Nike Fragment Design x Air Jordan 1 Retro High OG is the first collaboration between Hiroshi Fujiwara's Fragment Design and Brand Jordan. One of the most coveted Air Jordan 1 colorways ever created, the design combines the OG black-toe color blocking with royal blue accents. Released in limited quantities in December 2014, the design also includes Nike Air branding on the tongue and a Fragment Design logo at the heel.");
	});

	$(".div3").click(function(){
		$(".div1").toggleClass("hide");
		$(".div2").toggleClass("hide");
		$(".div3").toggleClass("overflow");
		$(".div4").toggleClass("hide");
		$(".div5").toggleClass("hide");
		$(".div6").toggleClass("hide");
		$(".div7").toggleClass("hide");
		$(".div8").toggleClass("hide");
		$(".div9").toggleClass("hide");
		$(".div10").toggleClass("hide");
		$(".div11").toggleClass("hide");
		$(".div12").toggleClass("hide");
		$(".div13").toggleClass("hide");
		$(".bg").toggleClass("bg3")
		$(".shoename").text("OFF-WHITE x AJ1");
		$(".year").text("2018");
		$(".shoedesc").text("Created by designer Virgil Abloh, the Air Jordan 1 x OFF-WHITE comes in the classic Chicago colorway. Some of the sneakers' half-finished features include a Swoosh connected to the shoe with visible blue stitching, 'Air' printed on the midsole, and an OFF-WHITE zip tie on the collar. The box comes deconstructed as it's been turned inside-out with the inside consisting of a black base and gold Jumpman logo, while the outside is plain cardboard with the words 'Jumpman' printed on it. Virgil's OFF-WHITE collection included remixed iterations of the Air VaporMax, Air Presto, Air Max 90, Blazer, Air Max 97, Hyperdunk 2017, Air Force 1, Zoom Fly, and Chuck Taylor.");
	});

	$(".div4").click(function(){
		$(".div1").toggleClass("hide");
		$(".div2").toggleClass("hide");
		$(".div3").toggleClass("hide");
		$(".div4").toggleClass("overflow");
		$(".div5").toggleClass("hide");
		$(".div6").toggleClass("hide");
		$(".div7").toggleClass("hide");
		$(".div8").toggleClass("hide");
		$(".div9").toggleClass("hide");
		$(".div10").toggleClass("hide");
		$(".div11").toggleClass("hide");
		$(".div12").toggleClass("hide");
		$(".div13").toggleClass("hide");
		$(".shoename").text("'Royals'");
		$(".year").text("1985");
		$(".shoedesc").text("In 1985 sports photographer, Chuck Kohn, photographed Michael Jordan wearing the Air Jordan 1 Royals. This photo turned Nike poster was the first time anyone saw Michael wearing the Air Jordan 1 sneakers. Ever. Known to be his favorite colorway, Jordan chose the Royals to be the first Air Jordan 1 available for purchase. They were also the only color-way out of the Top 3 Air Jordan 1 Retro colorways ('Banned' and 'Chicago') that he never wore on the court. Since 1985, the Royals have been released in 2001, 2013, and 2017.");
	});

	$(".div5").click(function(){
		$(".div1").toggleClass("hide");
		$(".div2").toggleClass("hide");
		$(".div3").toggleClass("hide");
		$(".div4").toggleClass("hide");
		$(".div5").toggleClass("overflow");
		$(".div6").toggleClass("hide");
		$(".div7").toggleClass("hide");
		$(".div8").toggleClass("hide");
		$(".div9").toggleClass("hide");
		$(".div10").toggleClass("hide");
		$(".div11").toggleClass("hide");
		$(".div12").toggleClass("hide");
		$(".div13").toggleClass("hide");
		$(".shoename").text("'UNC'");
		$(".year").text("1985");
		$(".shoedesc").text("Released in 1985, this Air Jordan 1 Retro High OG 'UNC' was retroed as part of the Jordan Brand's Holiday 2015 retro pack. Featuring a blue and white colorway, this retro calls back to Jordan's college days at the University of North Carolina where he won the 1982 NCAA National Championship as a freshman. The shoe features classic branding details like the Nike Air logo on the tongue, the Air Jordan 'Wings' logo, and a clean heel. ");
	});

	$(".div6").click(function(){
		$(".div1").toggleClass("hide");
		$(".div2").toggleClass("hide");
		$(".div3").toggleClass("hide");
		$(".div4").toggleClass("hide");
		$(".div5").toggleClass("hide");
		$(".div6").toggleClass("overflow");
		$(".div7").toggleClass("hide");
		$(".div8").toggleClass("hide");
		$(".div9").toggleClass("hide");
		$(".div10").toggleClass("hide");
		$(".div11").toggleClass("hide");
		$(".div12").toggleClass("hide");
		$(".div13").toggleClass("hide");
		$(".shoename").text("'Shattered Backboard'");
		$(".year").text("2015");
		$(".shoedesc").text("In 1985 on a Nike Europe tour, Michael Jordan shattered a backboard when throwing down a monstrous dunk while wearing an orange, black, and white uniform. Commemorating the moment and uniform, this 2015 Air Jordan 1 'Shattered Backboard' (aka 'Shattered Backboard' 1.0) sneaker was released. Shortly after in the Fall of 2016, an Air Jordan 1 'Shattered Backboard Away' (aka 'Reverse' and 'Shattered Backboard 2.0') was released. The sneaker keeps the black laces and Nike branding, but swaps out the orange toe box and black around the toe and tongue for white.");
	});

	$(".div7").click(function(){
		$(".div1").toggleClass("hide");
		$(".div2").toggleClass("hide");
		$(".div3").toggleClass("hide");
		$(".div4").toggleClass("hide");
		$(".div5").toggleClass("hide");
		$(".div6").toggleClass("hide");
		$(".div7").toggleClass("overflow");
		$(".div8").toggleClass("hide");
		$(".div9").toggleClass("hide");
		$(".div10").toggleClass("hide");
		$(".div11").toggleClass("hide");
		$(".div12").toggleClass("hide");
		$(".div13").toggleClass("hide");
		$(".shoename").text("Union x AJ1");
		$(".year").text("2018");
		$(".shoedesc").text("The Union x Air Jordan 1 Retro 'Black' sees the venerable Los Angeles retailer take inspiration from thrifting and DIY culture to create a new take on the sneaker that started it all. In addition to a pre-yellowed midsole for a vintage aesthetic, a mismatched collar is attached to the rest of the upper with zigzag stitching that gives the impression of a makeshift design.");
	});

	$(".div8").click(function(){
		$(".div1").toggleClass("hide");
		$(".div2").toggleClass("hide");
		$(".div3").toggleClass("hide");
		$(".div4").toggleClass("hide");
		$(".div5").toggleClass("hide");
		$(".div6").toggleClass("hide");
		$(".div7").toggleClass("hide");
		$(".div8").toggleClass("overflow");
		$(".div9").toggleClass("hide");
		$(".div10").toggleClass("hide");
		$(".div11").toggleClass("hide");
		$(".div12").toggleClass("hide");
		$(".div13").toggleClass("hide");
		$(".shoename").text("Nigel Sylvester x AJ1");
		$(".year").text("2018");
		$(".shoedesc").text("The Air Jordan I Hi OG NRG colorway takes inspiration from professional BMX rider and Nike, Inc. family member, Nigel Sylvester. Serving as his go-to riding shoe, Nigel's AJ1s are often seen with heavy distress marks created during the trial and error part of mastering tricks.");
	});

	$(".div9").click(function(){
		$(".div1").toggleClass("hide");
		$(".div2").toggleClass("hide");
		$(".div3").toggleClass("hide");
		$(".div4").toggleClass("hide");
		$(".div5").toggleClass("hide");
		$(".div6").toggleClass("hide");
		$(".div7").toggleClass("hide");
		$(".div8").toggleClass("hide");
		$(".div9").toggleClass("overflow");
		$(".div10").toggleClass("hide");
		$(".div11").toggleClass("hide");
		$(".div12").toggleClass("hide");
		$(".div13").toggleClass("hide");
		$(".shoename").text("'Shadow'");
		$(".year").text("1985");
		$(".shoedesc").text("This Nike Air Jordan 1 Retro High OG 'Shadow' 2018 is a retro re-release of an original 1985 colorway. The shoe features a black and medium grey leather upper with a white midsole and black outsole. It also features OG Nike Air branding on the tongue and the Wings logo on the ankle collar. It was last retroed in 2013, and a low-top version dropped in 2015.");
	});

	$(".div10").click(function(){
		$(".div1").toggleClass("hide");
		$(".div2").toggleClass("hide");
		$(".div3").toggleClass("hide");
		$(".div4").toggleClass("hide");
		$(".div5").toggleClass("hide");
		$(".div6").toggleClass("hide");
		$(".div7").toggleClass("hide");
		$(".div8").toggleClass("hide");
		$(".div9").toggleClass("hide");
		$(".div10").toggleClass("overflow");
		$(".div11").toggleClass("hide");
		$(".div12").toggleClass("hide");
		$(".div13").toggleClass("hide");
		$(".shoename").text("'Court Purple'");
		$(".year").text("2018");
		$(".shoedesc").text("The Air Jordan 1 Retro High OG 'Court Purple' features an all-leather build, executed with the same color-blocking seen on AJ1 models like the 'Shattered Backboard' and 'Bred Toe.' Here, the toe box, heel and wings are finished in Court Purple, while a crisp white quarter panel is overlaid with a contrasting black Swoosh. The shoe earns its 'OG' designation through the purple Nike tag on the black nylon tongue.");
	});

	$(".div11").click(function(){
		$(".div1").toggleClass("hide");
		$(".div2").toggleClass("hide");
		$(".div3").toggleClass("hide");
		$(".div4").toggleClass("hide");
		$(".div5").toggleClass("hide");
		$(".div6").toggleClass("hide");
		$(".div7").toggleClass("hide");
		$(".div8").toggleClass("hide");
		$(".div9").toggleClass("hide");
		$(".div10").toggleClass("hide");
		$(".div11").toggleClass("overflow");
		$(".div12").toggleClass("hide");
		$(".div13").toggleClass("hide");
		$(".shoename").text("'Pine Green'");
		$(".year").text("2018");
		$(".shoedesc").text("The Air Jordan 1 Retro High OG 'Pine Green' showcases a modified take on the silhouette's classic 'Black Toe' design, first introduced to the world in 1985. The leather high-top employs a black and white color scheme with Pine Green accents on the heel, outsole and leather wings that wrap around the collar. Unlike the original 'Black Toe,' the traditional white finish on the toe box is colored in with more Pine Green.");
	});

	$(".div12").click(function(){
		$(".div1").toggleClass("hide");
		$(".div2").toggleClass("hide");
		$(".div3").toggleClass("hide");
		$(".div4").toggleClass("hide");
		$(".div5").toggleClass("hide");
		$(".div6").toggleClass("hide");
		$(".div7").toggleClass("hide");
		$(".div8").toggleClass("hide");
		$(".div9").toggleClass("hide");
		$(".div10").toggleClass("hide");
		$(".div11").toggleClass("hide");
		$(".div12").toggleClass("overflow");
		$(".div13").toggleClass("hide");
		$(".shoename").text("'Chicago'");
		$(".year").text("1985");
		$(".shoedesc").text("The Air Jordan 1 Retro High OG 'Chicago' 2015 colorway was designed to avoid Jordan's $5,000-per game fines from the NBA after the original black and red colorway was banned. The 'Chicago' was first retroed in 1994 and stayed true to the 1985 design. Further retros were released in 2013 with small changes to the design, and again in 2015 with the original branding details: the Nike Air logo on the tongue and the original clean heel without the Jumpman logo.");
	});

	$(".div13").click(function(){
		$(".div1").toggleClass("hide");
		$(".div2").toggleClass("hide");
		$(".div3").toggleClass("hide");
		$(".div4").toggleClass("hide");
		$(".div5").toggleClass("hide");
		$(".div6").toggleClass("hide");
		$(".div7").toggleClass("hide");
		$(".div8").toggleClass("hide");
		$(".div9").toggleClass("hide");
		$(".div10").toggleClass("hide");
		$(".div11").toggleClass("hide");
		$(".div12").toggleClass("hide");
		$(".div13").toggleClass("overflow");
		$(".shoename").text("'Top 3'");
		$(".year").text("2016");
		$(".shoedesc").text("In 2016, Nike combined three original Air Jordan 1 colorways ('Bred/Banned,' 'Chicago,' and 'Royal') into one new colorway, the Air Jordan 1 Retro High OG 'Top 3'. The sneaker comes in mismatched' color panels and outsoles while staying true to the original design by featuring the 'Wings' logo on the ankle and Nike Air branding on the insole and tongue. 'Top 3' also nods to Jordan being drafted third overall in the 1984 NBA Draft.");
	});

	$(".button").click(function(){
		$(".intro").hide(function(){
			$(".intro").fadeOut(250, 0.25,)
		});
	});
});