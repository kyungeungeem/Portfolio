/* ===================================
--------------------------------------
	NISSA - PHOTOGRAPHY STUDIO TEMPLATE
	Version: 1.0
 -------------------------------------
 =====================================*/

// "use strict";

$(window).on("load", function () {
  /*------------------
		Preloder
	--------------------*/
  $(".loader").fadeOut();
  $("#preloder").delay(400).fadeOut("slow");
});

/*------------------
		 Custom Scrollbar
	--------------------*/
function site_scrollbar() {
  if ($(window).width() > 991) {
    $(".main-sidebar").niceScroll({
      cursorborder: "",
      cursorcolor: "#000",
      boxzoom: false,
      cursorwidth: 4,
      cursorborderradius: 2,
      railoffset: { top: 0, right: 0, left: 0, bottom: 0 },
    });

    $(".page-section").niceScroll({
      cursorborder: "",
      cursorcolor: "#000",
      boxzoom: false,
      cursorwidth: 4,
      autohidemode: true,
      cursorborderradius: 2,
      background: "#fff",
    });
  }
}

if ($(window).width() < 990) {
  $("body").niceScroll({
    cursorborder: "",
    cursorcolor: "#000",
    boxzoom: false,
    cursorwidth: 4,
    cursorborderradius: 2,
    railoffset: { top: 0, right: 0, left: 0, bottom: 0 },
  });
}

site_scrollbar();

let isVisible = false;

$(".main-sidebar").scroll(function() {
  if ( checkVisible($('#skills_detail')) && !isVisible) {
    showGraph();
    isVisible=true;
  }
})

function checkVisible( elm, eval ) {
  eval = eval || "object visible";
  let viewportHeight = $(window).height(),
      scrolltop = $(window).scrollTop(),
      y = $(elm).offset().top,
      elementHeight = $(elm).height();   
  
  if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
  if (eval == "above") return ((y < (viewportHeight + scrolltop)));
}

function mkGrapghElement(innerText, percent, idx) {
  idx = idx == 1 ? '' : idx;
  let graph = document.createElement('div');
  graph.className = 'graph stack' + idx;
  let b = document.createElement('b');
  b.className = 'position';
  b.innerText = innerText;
  let span = document.createElement('span');
  span.style.width = percent;
  span.innerText = percent;
  document.getElementById('skills_detail').appendChild(graph);
  graph.appendChild(b);
  graph.appendChild(span);
}

let skills = ['Illust', 'Photoshop', 'Indesign', 'Html & Css', 'Premier & After Effect'];
let percents = ['95%', '95%', '90%', '85%', '75%'];

function showGraph() {
  let n = skills.length;
  for(let i = 0; i < n; i++) {
    document.getElementById('stack' + (i + 1)).remove();
    mkGrapghElement(skills[i], percents[i], n - i);
  }
}