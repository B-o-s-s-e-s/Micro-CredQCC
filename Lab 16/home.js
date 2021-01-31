$(document).ready(function(){
  $(".leftBtn").click(function(){
    $("img").animate({
    top:'550px',
    width:"500px", 
    border: "10px",
    height : '500px',
    },
    20000,function(){
      $(".leftBtn").animate({top:"500px"},"fast");
  });
  });
  $(".rightBtn").click(function(){
  
    $("img").stop(true, false);

  });

  $(".stop1").click(function(){
  
    $("img").stop(true, true);

  });

  $(".stop2").click(function(){
  
    $("img").stop(true);

  });
  
});


//   $("#start").click(function(){
//     $("div").animate({left: '100px'}, 5000);
//     $("div").animate({fontSize: '3em'}, 5000);
//   });

//   $("#stop").click(function(){
//     $("div").stop();
//   });

//   $("#stop2").click(function(){
//     $("div").stop(true);
//   });

//   $("#stop3").click(function(){
//     $("div").stop(true,true);
//   });

// });




