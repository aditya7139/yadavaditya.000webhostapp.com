
  $(window).resize(function(){

    if ($(window).width() <= 768) {  

        $(document).ready(function() {
            var body = $('html,body'), NAVBAR_HEIGHT = 70;
            function smoothScrollingTo(target) {
              if($(target)) body.animate({scrollTop:$(target).offset().top - NAVBAR_HEIGHT}, 500);
            }
            $('a[href*=\\#]').on('click', function(event){
              event.preventDefault();
              smoothScrollingTo(this.hash);
            });
            $(document).ready(function(){
              smoothScrollingTo(location.hash);
            });
          });
           

    }     

});

$(document).ready(function () {
    $('nav li').click(function(e) {

        $('nav li').removeClass('active');

        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }
        //e.preventDefault();
    });
});


$(document).ready(function () {
    $('nav a').click(function(e) {

        $('nav a').removeClass('active');

        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }
        //e.preventDefault();
    });
});

// Restricting Opening Inspect and View Page Source and Right Click

window.onload = function() {
  document.addEventListener("contextmenu",function(event){
    event.preventDefault();
    var contextMenu = document.getElementById("context-menu");
    contextMenu.style.display = "block";
    var x = event.x, y = event.y, X = window.innerWidth, Y = window.innerHeight, w = contextMenu.offsetWidth+4, h = contextMenu.offsetHeight+4;
    if(X-x<w) contextMenu.style.left = x-w+"px";
    else contextMenu.style.left = x+"px";
    if(Y-y<h) contextMenu.style.top = y-h+"px";
    else contextMenu.style.top = y+"px";
  },false);
  document.addEventListener("click",function(event){
  },false);
  document.addEventListener("keydown", function(e) {
    // "I" key
    if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
      disabledEvent(e);
    }
    // "J" key
    if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
      disabledEvent(e);
    }
    // "S" key + macOS
    if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
      disabledEvent(e);
    }
    // "U" key
    if (e.ctrlKey && e.keyCode == 85) {
      disabledEvent(e);
    }
    // "F12" key
    if (event.keyCode == 123) {
      disabledEvent(e);
    }
  }, false);
  function disabledEvent(e){
    if (e.stopPropagation){
      e.stopPropagation();
    } else if (window.event){
      window.event.cancelBubble = true;
    }
    e.preventDefault();
    return false;
  }
};
