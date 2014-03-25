

$(function(){
 $("#nav-bar").load("nav-bar.html");

});

$(function(){
 $("#carousel").load("carousel.html").hide().fadeIn(1500);
});


$(function(){

  $("#right-side").hide().load("right-side.html");
  setTimeout(function() {
    $("#right-side").fadeIn("slow");
  },0);

});



$(function(){
 

  $("#recent").hide().load("recent.html");
  setTimeout(function() {
    $("#recent").fadeIn("slow");
  },450);


 /**
  setTimeout(function() {
        $(".panel").each(function(index) {
    $(this).delay(400*index).fadeIn(300);
      },500);
});
**/

  //  $("#recent").fadeIn("slow");


});






/**
                                    <script>
        $(document).ready(function(){
          boxes = $('#recent .panel-body');
          maxHeight = Math.max.apply(
            Math, boxes.map(function() {
              return $(this).height();
            }).get());
          boxes.height(maxHeight);
          
        });
</script>**/
