function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function checkPeriod(i) {
  if (i > 12) {
    return 2;
  }
  return 1;
}

var today = new Date();
var h = today.getHours();
var m = today.getMinutes();
var s = today.getSeconds();

h = checkTime(h);
m = checkTime(m);
s = checkTime(s);

a = h.toString().split("");
h1 = parseInt(a[0]) + 1;
h2 = parseInt(a[1]) + 1;

//add 1 for exact num
$("ul.hourPlay2 li:nth-child(" + h1 + ")").addClass("active");
$("ul.hourPlay li:nth-child(" + h2 + ")").addClass("active");

a = m.toString().split("");
m1 = parseInt(a[0]) + 1;
m2 = parseInt(a[1]) + 1;

$("ul.minutePlay2 li:nth-child(" + m1 + ")").addClass("active");
$("ul.minutePlay li:nth-child(" + m2 + ")").addClass("active");

a = s.toString().split("");
s1 = parseInt(a[0]) + 1;
s2 = parseInt(a[1]) + 1;

$("ul.secondPlay2 li:nth-child(" + s1 + ")").addClass("active");
$("ul.secondPlay li:nth-child(" + s2 + ")").addClass("active");


setInterval(function () {
  secondPlay();
}, 1000);

function secondPlay() {
  $("body").removeClass("play");
  var aa = $("ul.secondPlay li.active");

  if (aa.html() == undefined) {
    aa = $("ul.secondPlay li").eq(0);
    aa.addClass("before")
      .removeClass("active")
      .next("li")
      .addClass("active")
      .closest("body")
      .addClass("play");
  } else if (aa.is(":last-child")) {
    $("ul.secondPlay li").removeClass("before");
    aa.addClass("before").removeClass("active");
    aa = $("ul.secondPlay li").eq(0);
    aa.addClass("active").closest("body").addClass("play");
    secondPlay2();
  } else {
    $("ul.secondPlay li").removeClass("before");
    aa.addClass("before")
      .removeClass("active")
      .next("li")
      .addClass("active")
      .closest("body")
      .addClass("play");
  }
}

function secondPlay2() {
  $("body").removeClass("play");
  var aa = $("ul.secondPlay2 li.active");

  if (aa.html() == undefined) {
    aa = $("ul.secondPlay2 li").eq(0);
    aa.addClass("before")
      .removeClass("active")
      .next("li")
      .addClass("active")
      .closest("body")
      .addClass("play");
  } else if (aa.is(":last-child")) {
    $("ul.secondPlay2 li").removeClass("before");
    aa.addClass("before").removeClass("active");
    aa = $("ul.secondPlay2 li").eq(0);
    aa.addClass("active").closest("body").addClass("play");
    minutePlay();
  } else {
    $("ul.secondPlay2 li").removeClass("before");
    aa.addClass("before")
      .removeClass("active")
      .next("li")
      .addClass("active")
      .closest("body")
      .addClass("play");
  }
}

function minutePlay() {
  $("body").removeClass("play");
  var aa = $("ul.minutePlay li.active");

  if (aa.html() == undefined) {
    aa = $("ul.minutePlay li").eq();
    aa.addClass("before")
      .removeClass("active")
      .next("li")
      .addClass("active")
      .closest("body")
      .addClass("play");
  } else if (aa.is(":last-child")) {
    $("ul.minutePlay li").removeClass("before");
    aa.addClass("before").removeClass("active");
    aa = $("ul.minutePlay li").eq(0);
    aa.addClass("active").closest("body").addClass("play");
    minutePlay2();
  } else {
    $("ul.minutePlay li").removeClass("before");
    aa.addClass("before")
      .removeClass("active")
      .next("li")
      .addClass("active")
      .closest("body")
      .addClass("play");
  }
}
function minutePlay2() {
  $("body").removeClass("play");
  var aa = $("ul.minutePlay2 li.active");

  if (aa.html() == undefined) {
    aa = $("ul.minutePlay2 li").eq(0);
    aa.addClass("before")
      .removeClass("active")
      .next("li")
      .addClass("active")
      .closest("body")
      .addClass("play");
  } else if (aa.is(":last-child")) {
    $("ul.minutePlay2 li").removeClass("before");
    aa.addClass("before").removeClass("active");
    aa = $("ul.minutePlay2 li").eq(0);
    aa.addClass("active").closest("body").addClass("play");
    hourPlay();
  } else {
    $("ul.minutePlay2 li").removeClass("before");
    aa.addClass("before")
      .removeClass("active")
      .next("li")
      .addClass("active")
      .closest("body")
      .addClass("play");
  }
}

function hourPlay() {
  $("body").removeClass("play");
  var aa = $("ul.hourPlay li.active");

  if (aa.html() == undefined) {
    aa = $("ul.hourPlay li").eq(0);
    aa.addClass("before")
      .removeClass("active")
      .next("li")
      .addClass("active")
      .closest("body")
      .addClass("play");
  } else if ( aa.is(":last-child") || (aa.is($("ul.hourPlay li").eq(3)) && $("ul.hourPlay2 li.active").is(":last-child"))) {
    $("ul.hourPlay li").removeClass("before");
    aa.addClass("before").removeClass("active");
    aa = $("ul.hourPlay li").eq(0);
    aa.addClass("active").closest("body").addClass("play");
    hourPlay2();
  } else {
    $("ul.hourPlay li").removeClass("before");
    aa.addClass("before")
      .removeClass("active")
      .next("li")
      .addClass("active")
      .closest("body")
      .addClass("play");
  }
}

function hourPlay2() {
  $("body").removeClass("play");
  var aa = $("ul.hourPlay2 li.active");

  if (aa.html() == undefined) {
    aa = $("ul.hourPlay2 li").eq(0);
    aa.addClass("before")
      .removeClass("active")
      .next("li")
      .addClass("active")
      .closest("body")
      .addClass("play");
  } else if (aa.is(":last-child")) {
    $("ul.hourPlay2 li").removeClass("before");
    aa.addClass("before").removeClass("active");
    aa = $("ul.hourPlay2 li").eq(0);
    aa.addClass("active").closest("body").addClass("play");
  } else {
    $("ul.hourPlay2 li").removeClass("before");
    aa.addClass("before")
      .removeClass("active")
      .next("li")
      .addClass("active")
      .closest("body")
      .addClass("play");
  }
}