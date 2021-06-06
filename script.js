VanillaTilt.init(document.querySelector(".img"), {
		max: 10,
		speed: 400
	});
$(".toggler").click(
  function()
  {
    $(".modeout").toggleClass("active");
    $(".toggler").toggleClass("active");
    $(".pt").toggleClass("active");
    $(".main").toggleClass("active");
    $(".sm").toggleClass("active");
    $(".body").toggleClass("active");
    $(".sc").toggleClass("light");
    $("h3").toggleClass("light");
    $("p").toggleClass("light");
    $(".divider").toggleClass("light");
    $(".checkbtn").toggleClass("light");
    $("nav").toggleClass("light");
    $(".anima").toggleClass("light");
    $(".n1").toggleClass("light");
    $(".n2").toggleClass("light");
    $(".n3").toggleClass("light");
    $(".n4").toggleClass("light");
    $(".h1").toggleClass("light");
    $(".h2").toggleClass("light");
    $(".tejas").toggleClass("light");
    $(".maindivider").toggleClass("light");
    $(".skills").toggleClass("light");
    $(".stars").toggleClass("light");
    $(".prt").toggleClass("light");
		$("footer").toggleClass("light");
		$(".footer-text").toggleClass("light");
  }
);
