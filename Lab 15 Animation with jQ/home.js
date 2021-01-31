$(document).ready(function(){
  $(".leftBtn").click(function(){
    $("img").animate({
    down:'550px',
    width:"500px", 
    border: "10px",
    height : '500px',
    },
    20000,function(){
      $(".leftBtn").animate({down:"500px"},"slow");
  });
  });
  $(".rightBtn").click(function(){
    $("img").animate({
      width:'110%',
      height:'110%'
      },
      10000,function(){
        $(".rightBtn").animate({top:"900px"},"fast");
    });
});

});
