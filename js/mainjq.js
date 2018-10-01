$(document).ready(function() {
   var timesRun = 0;
   checkScroll();
   $(window).scroll(function() {
      checkScroll();
   });


   var takenWidth = $("h2.title-text").width();
   var totalWidth = $(window).width();
   var remainWidth = totalWidth - takenWidth;
   $("ul.nav-list").css({
      "width": remainWidth + "px"
   });

   /*might need to make this better so it works with pixels and not %*/
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
   var paddingwidth = (((remainWidth - navitemsWidth) / navitems) - 10) / 2; /*TODO:accounting for a couple extra pixels*/
   $("li.nav").css({
      "padding-left": paddingwidth,
      "padding-right": paddingwidth
   });



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






});
