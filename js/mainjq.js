$(document).ready(function() {
   window.onload = function() {
      var timesRun = 0;
      var remainWidth = 0;
      debugger;
      $(window).scroll(function() {
         checkScroll();
      });
      $(window).resize(function() {
         checkResize();
      });
      debugger;
      // Gets the number of nav links and counts their width
      var navitems = $("ul.nav-list").children().length;
      var navitemsWidth = 0;
      var i = 0;
      var navindex = 0;
      while (i <= (navitems-1)) {
         var currentWidth = $("li.nav:eq(" + navindex + ")").width();
         navitemsWidth += currentWidth;
         navindex += 1;
         i++;
      }


      function checkScroll() {
         var column = document.getElementById("columnleft");
         var sticky = column.offsetTop - 46;
         var clientHeight = $("#banner").height();
         if (window.pageYOffset >= sticky) {
            $("#columnleft").addClass("sticky");
            $("#columnright").addClass("sticky");
            $("#navbar").addClass("navshadowon");
            $("#navbar").removeClass("navshadowoff");
         }
         if (window.pageYOffset <= clientHeight) {
            $("#columnleft").removeClass("sticky");
            $("#columnright").removeClass("sticky");
            $("#navbar").removeClass("navshadowon");
            if (timesRun !== 0) {
               $("#navbar").addClass("navshadowoff");
            }
         }
         timesRun += 1;

      }


      var resizeNav = (function () {
         return function () {
            // Gets availible width in the nav bar
            var takenWidth = $("h2.title-text").width();
            var totalWidth = $(window).width();
            var remainWidth = totalWidth - takenWidth;
            // makes the ul the size of the remaining width on the page. (Acts as a container)
            $("ul.nav-list").css({
               "width": remainWidth + "px"
            });


            // Sets the new padding for the li tag
            var paddingwidth = (((remainWidth - navitemsWidth) / navitems) - 10) / 4;
            $("li.nav").css({
               "padding-left": paddingwidth,
               "padding-right": paddingwidth
            });
            $("a.nav").css({
               "padding-left": paddingwidth,
               "padding-right": paddingwidth
            });
         }
      })();

      var resizeLeft = (function () {
         return function () {
            var remainWidth = $("#columnleft").width();
            $("div.square").css({
               "width": remainWidth,
               "height": remainWidth
            });
         }
      })();

      function checkResize() {
         resizeNav();
         resizeLeft();
      }


      function runFormat() {
         checkScroll();
         checkResize();
      }
      
      runFormat()

   }
});
