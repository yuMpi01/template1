$(document).on("scroll", function () {
    if ($(this).width()>975) {
    $(
      "div.wrapper>div.menu>div:nth-of-type(2)>div.container3>div.direction1>div:nth-of-type(2)>div.box"
    ).on("mouseenter", function () {
      $(this).css({
        backgroundColor: "#ECE6F6",
        border: "1px solid #9E94B1",
        width: "27%",
        transition: "250ms",
      });
    });
    $(
      "div.wrapper>div.menu>div:nth-of-type(2)>div.container3>div.direction1>div:nth-of-type(2)>div.box"
    ).on("mouseleave", function () {
      $(this).css({
        backgroundColor: "rgba(207, 193, 233, .2)",
        border: "1px solid #c0b8cf",
        width: "25%",
        transition: "250ms",
      });
    });
    $(
      "div.wrapper>div.menu>div:nth-of-type(2)>div.container3>div.direction2>div:nth-of-type(2)>div.box"
    ).on("mouseenter", function () {
      $(this).css({
        backgroundColor: "#F3F2F4",
        border: "1px solid #9E94B1",
        width: "27%",
        transition: "250ms",
      });
    });
    $(
      "div.wrapper>div.menu>div:nth-of-type(2)>div.container3>div.direction2>div:nth-of-type(2)>div.box"
    ).on("mouseleave", function () {
      $(this).css({
        backgroundColor: "white",
        border: "1px solid #d2ccdd",
        width: "25%",
        transition: "250ms",
      });
    });
    $(
      "div.wrapper>div.menu>div:nth-of-type(2)>div.container3>div.direction3>div:nth-of-type(2)>div.box"
    ).on("mouseenter", function () {
      $(this).css({
        backgroundColor: "#F3F2F4",
        border: "1px solid #9E94B1",
        width: "36%",
        transition: "250ms",
      });
    });
    $(
      "div.wrapper>div.menu>div:nth-of-type(2)>div.container3>div.direction3>div:nth-of-type(2)>div.box"
    ).on("mouseleave", function () {
      $(this).css({
        backgroundColor: "white",
        border: "1px solid #d2ccdd",
        width: "33.3333%",
        transition: "250ms",
      });
    });
    $(
      "div.wrapper>div.menu>div:nth-of-type(2)>div.container3>div.direction4>div:nth-of-type(3)>div.box"
    ).on("mouseenter", function () {
      $(this).css({
        backgroundColor: "#F3F2F4",
        border: "1px solid #9E94B1",
        width: "36%",
        transition: "250ms",
      });
    });
    $(
      "div.wrapper>div.menu>div:nth-of-type(2)>div.container3>div.direction4>div:nth-of-type(3)>div.box"
    ).on("mouseleave", function () {
      $(this).css({
        backgroundColor: "white",
        border: "1px solid #d2ccdd",
        width: "33.3333%",
        transition: "250ms",
      });
    });
    $(
      "div.wrapper>div.menu>div:nth-of-type(2)>div.container3>div.direction5>div:nth-of-type(3)>div.box"
    ).on("mouseenter", function () {
      $(this).css({
        backgroundColor: "#F3F2F4",
        border: "1px solid #9E94B1",
        width: "27%",
        transition: "250ms",
      });
    });
    $(
      "div.wrapper>div.menu>div:nth-of-type(2)>div.container3>div.direction5>div:nth-of-type(3)>div.box"
    ).on("mouseleave", function () {
      $(this).css({
        backgroundColor: "white",
        border: "1px solid #d2ccdd",
        width: "25%",
        transition: "250ms",
      });
    });
  }
});

$(document).on("scroll", function () {
  if ($(this).width()>1183){
  let st = $(document).scrollTop();

    /* start container2 (about the template) */

  if (st > 170) {
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container2>p").css({
      transform: "translate3d(0,0px,0)",
      opacity: "1",
      transition: "800ms",
      transitionDelay: "100ms",
    });
  } else {
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container2>p").css({
      transform: "translate3d(0,50px,0)",
      opacity: "0",
    });
  }

  if (st > 290) {
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container2>h2").css({
      transform: "scale3d(1,1,1)",
      transition: "800ms",
      transitionDelay: "150ms",
      opacity: "1",
    });
  } else {
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container2>h2").css({
      transform: "scale3d(0.5,0.5,0.5)",
      opacity: "0",
    });
  }

  if (st > 480) {
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container2>div").css({
      transform: "translate3d(0,0,0)",
      opacity: "1",
      transition: "800ms",
      transitionDelay: "100ms",
    });
  } else {
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container2>div").css({
      transform: "translate3d(0,50px,0)",
      opacity: "0",
    });
  }

  /* end container2 (about the template) */

  /* start menu background */

  if (st > 690) {
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.menuBg").css({
      transform: "translate3d(0,0px,0)",
      transition: "cubic-bezier(.11,.26,.99,.61)",
      transitionDuration: "700ms",
    });
  } else {
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.menuBg").css({
      transform: "translate3d(0,-60px,0)",
      transition: "cubic-bezier(.11,.26,.99,.61)",
      transitionDuration: "700ms",
    });
  }

  /* end menu background */

  /* start container5 (modern design) */

  if(st>2910){
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.left>div").css({
      position:"sticky",
      top:"100px"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.left>div>h3").css({
      transform:"translate3d(0,0,0)",
      transition:"700ms",
      opacity:"1"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.left>div>div").css({
      transform:"translate3d(0,0,0)",
      transition:"700ms",
      transitionDelay:"200ms",
      opacity:"1"
    })
  }else{
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.left>div").css({
      position:"relative",
      top:"0px"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.left>div>h3").css({
      transform:"translate3d(0,100px,0)",
      transition:"700ms",
      opacity:"0"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.left>div>div").css({
      transform:"translate3d(0,100px,0)",
      transition:"700ms",
      opacity:"0"
    })
  }

  if(st>2890){
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box1>div:nth-of-type(1)>div:nth-of-type(2)").css({
      transform:"rotatex(0deg)",
      transition:"1000ms",
      transitionDelay:"700ms"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box1>div:nth-of-type(1)>div:nth-of-type(1)").css({
      transform:"scale3d(1,1,1)",
      transition:"700ms"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box1>div:nth-of-type(2)>p:nth-of-type(1)").css({
      transform:"translate3d(0,0,0)",
      transition:"1000ms",
      opacity:"1"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box1>div:nth-of-type(2)>p:nth-of-type(2)").css({
      transform:"translate3d(0,0,0)",
      transition:"1000ms",
      opacity:"1",
      transitionDelay:"500ms"
    })
  }else{
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box1>div:nth-of-type(1)>div:nth-of-type(2)").css({
      transform:"rotatex(90deg)",
      transition:"1000ms"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box1>div:nth-of-type(1)>div:nth-of-type(1)").css({
      transform:"scale3d(0,0,1)",
      transition:"700ms",
      transitionDelay:"700ms"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box1>div:nth-of-type(2)>p:nth-of-type(1)").css({
      transform:"translate3d(0,10px,0)",
      transition:"1000ms",
      opacity:"0",
      transitionDelay:"700ms"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box1>div:nth-of-type(2)>p:nth-of-type(2)").css({
      transform:"translate3d(0,10px,0)",
      transition:"1000ms",
      opacity:"0",
      transitionDelay:"700ms"
    })
  }

  if(st>3025){
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box2>div:nth-of-type(1)>div:nth-of-type(2)").css({
      transform:"rotatex(0deg)",
      transition:"1000ms",
      transitionDelay:"700ms"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box2>div:nth-of-type(1)>div:nth-of-type(1)").css({
      transform:"scale3d(1,1,1)",
      transition:"700ms"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box2>div:nth-of-type(2)>p:nth-of-type(1)").css({
      transform:"translate3d(0,0,0)",
      transition:"1000ms",
      opacity:"1"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box2>div:nth-of-type(2)>p:nth-of-type(2)").css({
      transform:"translate3d(0,0,0)",
      transition:"1000ms",
      opacity:"1",
      transitionDelay:"500ms"
    })
  }else{
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box2>div:nth-of-type(1)>div:nth-of-type(2)").css({
      transform:"rotatex(90deg)",
      transition:"1000ms"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box2>div:nth-of-type(1)>div:nth-of-type(1)").css({
      transform:"scale3d(0,0,1)",
      transition:"700ms",
      transitionDelay:"700ms"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box2>div:nth-of-type(2)>p:nth-of-type(1)").css({
      transform:"translate3d(0,10px,0)",
      transition:"1000ms",
      opacity:"0",
      transitionDelay:"700ms"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box2>div:nth-of-type(2)>p:nth-of-type(2)").css({
      transform:"translate3d(0,10px,0)",
      transition:"1000ms",
      opacity:"0",
      transitionDelay:"700ms"
    })
  }

  if(st>3157){
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box3>div:nth-of-type(1)>div:nth-of-type(2)").css({
      transform:"rotatex(0deg)",
      transition:"1000ms",
      transitionDelay:"700ms"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box3>div:nth-of-type(1)>div:nth-of-type(1)").css({
      transform:"scale3d(1,1,1)",
      transition:"700ms"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box3>div:nth-of-type(2)>p:nth-of-type(1)").css({
      transform:"translate3d(0,0,0)",
      transition:"1000ms",
      opacity:"1"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box3>div:nth-of-type(2)>p:nth-of-type(2)").css({
      transform:"translate3d(0,0,0)",
      transition:"1000ms",
      opacity:"1",
      transitionDelay:"500ms"
    })
  }else{
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box3>div:nth-of-type(1)>div:nth-of-type(2)").css({
      transform:"rotatex(90deg)",
      transition:"1000ms"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box3>div:nth-of-type(1)>div:nth-of-type(1)").css({
      transform:"scale3d(0,0,1)",
      transition:"700ms",
      transitionDelay:"700ms"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box3>div:nth-of-type(2)>p:nth-of-type(1)").css({
      transform:"translate3d(0,10px,0)",
      transition:"1000ms",
      opacity:"0",
      transitionDelay:"700ms"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box3>div:nth-of-type(2)>p:nth-of-type(2)").css({
      transform:"translate3d(0,10px,0)",
      transition:"1000ms",
      opacity:"0",
      transitionDelay:"700ms"
    })
  }

  if(st>3283){
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box4>div:nth-of-type(1)>div:nth-of-type(2)").css({
      transform:"rotatex(0deg)",
      transition:"1000ms",
      transitionDelay:"700ms"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box4>div:nth-of-type(1)>div:nth-of-type(1)").css({
      transform:"scale3d(1,1,1)",
      transition:"700ms"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box4>div:nth-of-type(2)>p:nth-of-type(1)").css({
      transform:"translate3d(0,0,0)",
      transition:"1000ms",
      opacity:"1"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box4>div:nth-of-type(2)>p:nth-of-type(2)").css({
      transform:"translate3d(0,0,0)",
      transition:"1000ms",
      opacity:"1",
      transitionDelay:"500ms"
    })
  }else{
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box4>div:nth-of-type(1)>div:nth-of-type(2)").css({
      transform:"rotatex(90deg)",
      transition:"1000ms"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box4>div:nth-of-type(1)>div:nth-of-type(1)").css({
      transform:"scale3d(0,0,1)",
      transition:"700ms",
      transitionDelay:"700ms"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box4>div:nth-of-type(2)>p:nth-of-type(1)").css({
      transform:"translate3d(0,10px,0)",
      transition:"1000ms",
      opacity:"0",
      transitionDelay:"700ms"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box4>div:nth-of-type(2)>p:nth-of-type(2)").css({
      transform:"translate3d(0,10px,0)",
      transition:"1000ms",
      opacity:"0",
      transitionDelay:"700ms"
    })
  }

  if(st>3420){
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box5>div:nth-of-type(1)>div:nth-of-type(2)").css({
      transform:"rotatex(0deg)",
      transition:"1000ms",
      transitionDelay:"700ms"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box5>div:nth-of-type(1)>div:nth-of-type(1)").css({
      transform:"scale3d(1,1,1)",
      transition:"700ms"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box5>div:nth-of-type(2)>p:nth-of-type(1)").css({
      transform:"translate3d(0,0,0)",
      transition:"1000ms",
      opacity:"1"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box5>div:nth-of-type(2)>p:nth-of-type(2)").css({
      transform:"translate3d(0,0,0)",
      transition:"1000ms",
      opacity:"1",
      transitionDelay:"500ms"
    })
  }else{
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box5>div:nth-of-type(1)>div:nth-of-type(2)").css({
      transform:"rotatex(90deg)",
      transition:"1000ms"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box5>div:nth-of-type(1)>div:nth-of-type(1)").css({
      transform:"scale3d(0,0,1)",
      transition:"700ms",
      transitionDelay:"700ms"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box5>div:nth-of-type(2)>p:nth-of-type(1)").css({
      transform:"translate3d(0,10px,0)",
      transition:"1000ms",
      opacity:"0",
      transitionDelay:"700ms"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box5>div:nth-of-type(2)>p:nth-of-type(2)").css({
      transform:"translate3d(0,10px,0)",
      transition:"1000ms",
      opacity:"0",
      transitionDelay:"700ms"
    })
  }

  if(st>3545){
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box6>div:nth-of-type(1)>div:nth-of-type(2)").css({
      transform:"rotatex(0deg)",
      transition:"1000ms",
      transitionDelay:"700ms"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box6>div:nth-of-type(1)>div:nth-of-type(1)").css({
      transform:"scale3d(1,1,1)",
      transition:"700ms"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box6>div:nth-of-type(2)>p:nth-of-type(1)").css({
      transform:"translate3d(0,0,0)",
      transition:"1000ms",
      opacity:"1"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box6>div:nth-of-type(2)>p:nth-of-type(2)").css({
      transform:"translate3d(0,0,0)",
      transition:"1000ms",
      opacity:"1",
      transitionDelay:"500ms"
    })
  }else{
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box6>div:nth-of-type(1)>div:nth-of-type(2)").css({
      transform:"rotatex(90deg)",
      transition:"1000ms"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box6>div:nth-of-type(1)>div:nth-of-type(1)").css({
      transform:"scale3d(0,0,1)",
      transition:"700ms",
      transitionDelay:"700ms"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box6>div:nth-of-type(2)>p:nth-of-type(1)").css({
      transform:"translate3d(0,10px,0)",
      transition:"1000ms",
      opacity:"0",
      transitionDelay:"700ms"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box6>div:nth-of-type(2)>p:nth-of-type(2)").css({
      transform:"translate3d(0,10px,0)",
      transition:"1000ms",
      opacity:"0",
      transitionDelay:"700ms"
    })
  }

  if(st>3675){
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box7>div:nth-of-type(1)>div:nth-of-type(2)").css({
      transform:"rotatex(0deg)",
      transition:"1000ms",
      transitionDelay:"700ms"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box7>div:nth-of-type(1)>div:nth-of-type(1)").css({
      transform:"scale3d(1,1,1)",
      transition:"700ms"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box7>div:nth-of-type(2)>p:nth-of-type(1)").css({
      transform:"translate3d(0,0,0)",
      transition:"1000ms",
      opacity:"1"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box7>div:nth-of-type(2)>p:nth-of-type(2)").css({
      transform:"translate3d(0,0,0)",
      transition:"1000ms",
      opacity:"1",
      transitionDelay:"500ms"
    })
  }else{
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box7>div:nth-of-type(1)>div:nth-of-type(2)").css({
      transform:"rotatex(90deg)",
      transition:"1000ms"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box7>div:nth-of-type(1)>div:nth-of-type(1)").css({
      transform:"scale3d(0,0,1)",
      transition:"700ms",
      transitionDelay:"700ms"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box7>div:nth-of-type(2)>p:nth-of-type(1)").css({
      transform:"translate3d(0,10px,0)",
      transition:"1000ms",
      opacity:"0",
      transitionDelay:"700ms"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box7>div:nth-of-type(2)>p:nth-of-type(2)").css({
      transform:"translate3d(0,10px,0)",
      transition:"1000ms",
      opacity:"0",
      transitionDelay:"700ms"
    })
  }

  if(st>3845){
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box8>div:nth-of-type(1)>div:nth-of-type(2)").css({
      transform:"rotatex(0deg)",
      transition:"1000ms",
      transitionDelay:"700ms"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box8>div:nth-of-type(1)>div:nth-of-type(1)").css({
      transform:"scale3d(1,1,1)",
      transition:"700ms"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box8>div:nth-of-type(2)>p:nth-of-type(1)").css({
      transform:"translate3d(0,0,0)",
      transition:"1000ms",
      opacity:"1"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box8>div:nth-of-type(2)>p:nth-of-type(2)").css({
      transform:"translate3d(0,0,0)",
      transition:"1000ms",
      opacity:"1",
      transitionDelay:"500ms"
    })
  }else{
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box8>div:nth-of-type(1)>div:nth-of-type(2)").css({
      transform:"rotatex(90deg)",
      transition:"1000ms"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box8>div:nth-of-type(1)>div:nth-of-type(1)").css({
      transform:"scale3d(0,0,1)",
      transition:"700ms",
      transitionDelay:"700ms"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box8>div:nth-of-type(2)>p:nth-of-type(1)").css({
      transform:"translate3d(0,10px,0)",
      transition:"1000ms",
      opacity:"0",
      transitionDelay:"700ms"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box8>div:nth-of-type(2)>p:nth-of-type(2)").css({
      transform:"translate3d(0,10px,0)",
      transition:"1000ms",
      opacity:"0",
      transitionDelay:"700ms"
    })
  }

  if(st>3975){
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box9>div:nth-of-type(1)>div:nth-of-type(2)").css({
      transform:"rotatex(0deg)",
      transition:"1000ms",
      transitionDelay:"700ms"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box9>div:nth-of-type(1)>div:nth-of-type(1)").css({
      transform:"scale3d(1,1,1)",
      transition:"700ms"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box9>div:nth-of-type(2)>p:nth-of-type(1)").css({
      transform:"translate3d(0,0,0)",
      transition:"1000ms",
      opacity:"1"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box9>div:nth-of-type(2)>p:nth-of-type(2)").css({
      transform:"translate3d(0,0,0)",
      transition:"1000ms",
      opacity:"1",
      transitionDelay:"500ms"
    })
  }else{
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box9>div:nth-of-type(1)>div:nth-of-type(2)").css({
      transform:"rotatex(90deg)",
      transition:"1000ms"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box9>div:nth-of-type(1)>div:nth-of-type(1)").css({
      transform:"scale3d(0,0,1)",
      transition:"700ms",
      transitionDelay:"700ms"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box9>div:nth-of-type(2)>p:nth-of-type(1)").css({
      transform:"translate3d(0,10px,0)",
      transition:"1000ms",
      opacity:"0",
      transitionDelay:"700ms"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box9>div:nth-of-type(2)>p:nth-of-type(2)").css({
      transform:"translate3d(0,10px,0)",
      transition:"1000ms",
      opacity:"0",
      transitionDelay:"700ms"
    })
  }

  if(st>4105){
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box10>div:nth-of-type(1)>div:nth-of-type(2)").css({
      transform:"rotatex(0deg)",
      transition:"1000ms",
      transitionDelay:"700ms"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box10>div:nth-of-type(1)>div:nth-of-type(1)").css({
      transform:"scale3d(1,1,1)",
      transition:"700ms"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box10>div:nth-of-type(2)>p:nth-of-type(1)").css({
      transform:"translate3d(0,0,0)",
      transition:"1000ms",
      opacity:"1"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box10>div:nth-of-type(2)>p:nth-of-type(2)").css({
      transform:"translate3d(0,0,0)",
      transition:"1000ms",
      opacity:"1",
      transitionDelay:"500ms"
    })
  }else{
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box10>div:nth-of-type(1)>div:nth-of-type(2)").css({
      transform:"rotatex(90deg)",
      transition:"1000ms"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box10>div:nth-of-type(1)>div:nth-of-type(1)").css({
      transform:"scale3d(0,0,1)",
      transition:"700ms",
      transitionDelay:"700ms"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box10>div:nth-of-type(2)>p:nth-of-type(1)").css({
      transform:"translate3d(0,10px,0)",
      transition:"1000ms",
      opacity:"0",
      transitionDelay:"700ms"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box10>div:nth-of-type(2)>p:nth-of-type(2)").css({
      transform:"translate3d(0,10px,0)",
      transition:"1000ms",
      opacity:"0",
      transitionDelay:"700ms"
    })
  }

  if(st>4215){
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box11>div:nth-of-type(1)>div:nth-of-type(2)").css({
      transform:"rotatex(0deg)",
      transition:"1000ms",
      transitionDelay:"700ms"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box11>div:nth-of-type(1)>div:nth-of-type(1)").css({
      transform:"scale3d(1,1,1)",
      transition:"700ms"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box11>div:nth-of-type(2)>p:nth-of-type(1)").css({
      transform:"translate3d(0,0,0)",
      transition:"1000ms",
      opacity:"1"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box11>div:nth-of-type(2)>p:nth-of-type(2)").css({
      transform:"translate3d(0,0,0)",
      transition:"1000ms",
      opacity:"1",
      transitionDelay:"500ms"
    })
  }else{
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box11>div:nth-of-type(1)>div:nth-of-type(2)").css({
      transform:"rotatex(90deg)",
      transition:"1000ms"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box11>div:nth-of-type(1)>div:nth-of-type(1)").css({
      transform:"scale3d(0,0,1)",
      transition:"700ms",
      transitionDelay:"700ms"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box11>div:nth-of-type(2)>p:nth-of-type(1)").css({
      transform:"translate3d(0,10px,0)",
      transition:"1000ms",
      opacity:"0",
      transitionDelay:"700ms"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box11>div:nth-of-type(2)>p:nth-of-type(2)").css({
      transform:"translate3d(0,10px,0)",
      transition:"1000ms",
      opacity:"0",
      transitionDelay:"700ms"
    })
  }

  if(st>4325){
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box12>div:nth-of-type(1)>div:nth-of-type(2)").css({
      transform:"rotatex(0deg)",
      transition:"1000ms",
      transitionDelay:"700ms"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box12>div:nth-of-type(1)>div:nth-of-type(1)").css({
      transform:"scale3d(1,1,1)",
      transition:"700ms"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box12>div:nth-of-type(2)>p:nth-of-type(1)").css({
      transform:"translate3d(0,0,0)",
      transition:"1000ms",
      opacity:"1"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box12>div:nth-of-type(2)>p:nth-of-type(2)").css({
      transform:"translate3d(0,0,0)",
      transition:"1000ms",
      opacity:"1",
      transitionDelay:"500ms"
    })
  }else{
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box12>div:nth-of-type(1)>div:nth-of-type(2)").css({
      transform:"rotatex(90deg)",
      transition:"1000ms"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box12>div:nth-of-type(1)>div:nth-of-type(1)").css({
      transform:"scale3d(0,0,1)",
      transition:"700ms",
      transitionDelay:"700ms"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box12>div:nth-of-type(2)>p:nth-of-type(1)").css({
      transform:"translate3d(0,10px,0)",
      transition:"1000ms",
      opacity:"0",
      transitionDelay:"700ms"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box12>div:nth-of-type(2)>p:nth-of-type(2)").css({
      transform:"translate3d(0,10px,0)",
      transition:"1000ms",
      opacity:"0",
      transitionDelay:"700ms"
    })
  }

  /* end container5 (modern design) */

  /* start container7 (Choose from 3 different...) */

  if(st>5455){
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box1>div>div.imgs>img:nth-of-type(1),div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box1>div>div.imgs>img:nth-of-type(2),div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box1>div>div.imgs>img:nth-of-type(3)").css({
      transform:"scale3d(1,1,1)",
      transition:"1200ms",
      opacity:"1"
    })
  }else{
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box1>div>div.imgs>img:nth-of-type(1),div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box1>div>div.imgs>img:nth-of-type(2),div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box1>div>div.imgs>img:nth-of-type(3)").css({
      transform:"scale3d(0.5,0.5,0.5)",
      opacity:"0"
    })
  }

  if(st>6575){
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box2>div>div.imgs>img:nth-of-type(1),div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box2>div>div.imgs>img:nth-of-type(2),div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box2>div>div.imgs>img:nth-of-type(3)").css({
      transform:"scale3d(1,1,1)",
      transition:"1200ms",
      opacity:"1"
    })
  }else{
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box2>div>div.imgs>img:nth-of-type(1),div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box2>div>div.imgs>img:nth-of-type(2),div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box2>div>div.imgs>img:nth-of-type(3)").css({
      transform:"scale3d(0.5,0.5,0.5)",
      opacity:"0"
    })
  }

  if(st>7662){
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box3>div>div.imgs>img:nth-of-type(1),div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box3>div>div.imgs>img:nth-of-type(2),div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box3>div>div.imgs>img:nth-of-type(3)").css({
      transform:"scale3d(1,1,1)",
      transition:"1200ms",
      opacity:"1"
    })
  }else{
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box3>div>div.imgs>img:nth-of-type(1),div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box3>div>div.imgs>img:nth-of-type(2),div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box3>div>div.imgs>img:nth-of-type(3)").css({
      transform:"scale3d(0.5,0.5,0.5)",
      opacity:"0"
    })
  }

  /* end container7 (Choose from 3 different...) */

  /* start footer */

  if(st>8830){
    $("div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f1>h2").css({
      transform:"scale3d(1,1,1)",
      transition:"800ms",
      opacity:"1"
    })
  }else{
    $("div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f1>h2").css({
      transform:"scale3d(0.8,0.8,0.8)",
      opacity:"0"
    })
  }

  if(st>9270){
    $("div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f2>div:nth-of-type(1)>video").css({
      transform:"translate3d(0,0,0)",
      transition: "cubic-bezier(.94,.83,.24,.88)",
      transitionDuration: "800ms",
      transitionDelay:"200ms"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f2>div:nth-of-type(2)>div:nth-of-type(1)>p:nth-of-type(1),div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f2>div:nth-of-type(2)>div:nth-of-type(1)>p:nth-of-type(2)").css({
      transform:"scale3d(1,1,1)",
      transition:"800ms",
      opacity:"1"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f2>div:nth-of-type(2)>div:nth-of-type(2)>img").css({
      transform:"translate3d(0,0,0)",
      transition: "cubic-bezier(.94,.83,.24,.88)",
      transitionDuration: "800ms",
      transitionDelay:"200ms"
    })
  }else{
    $("div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f2>div:nth-of-type(1)>video").css({
      transform:"translate3d(-100%,0,0)"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f2>div:nth-of-type(2)>div:nth-of-type(1)>p:nth-of-type(1),div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f2>div:nth-of-type(2)>div:nth-of-type(1)>p:nth-of-type(2)").css({
      transform:"scale3d(0.8,0.8,0.8)",
      opacity:"0"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f2>div:nth-of-type(2)>div:nth-of-type(2)>img").css({
      transform:"translate3d(-100%,0,0)"
    })
  }

  if(st>9810){
    $("div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f3>div.left>div:nth-of-type(1)>p:nth-of-type(1),div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f3>div.left>div:nth-of-type(1)>p:nth-of-type(2)").css({
      transform:"scale3d(1,1,1)",
      transition:"800ms",
      opacity:"1"
    })
  }else{
    $("div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f3>div.left>div:nth-of-type(1)>p:nth-of-type(1),div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f3>div.left>div:nth-of-type(1)>p:nth-of-type(2)").css({
      transform:"scale3d(0.8,0.8,0.8)",
      opacity:"0"
    })
  }

  if(st>10030){
    $("div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f3>div.left>div:nth-of-type(2)>img").css({
      transform:"translate3d(0,0,0)",
      transition: "cubic-bezier(.94,.83,.24,.88)",
      transitionDuration: "800ms",
      transitionDelay:"200ms"
    })
  }else{
    $("div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f3>div.left>div:nth-of-type(2)>img").css({
      transform:"translate3d(-100%,0,0)"
    })
  }
  /* end footer */
  }
  
})


$(document).on("scroll", function () {
  if ($(this).width()>975 && $(this).width()<1183){
  let st = $(document).scrollTop();

    /* start container2 (about the template) */

  if (st > 128) {
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container2>p").css({
      transform: "translate3d(0,0px,0)",
      opacity: "1",
      transition: "800ms",
    });
  } else {
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container2>p").css({
      transform: "translate3d(0,50px,0)",
      opacity: "0",
    });
  }

  if (st > 185) {
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container2>h2").css({
      transform: "scale3d(1,1,1)",
      transition: "800ms",
      opacity: "1",
    });
  } else {
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container2>h2").css({
      transform: "scale3d(0.5,0.5,0.5)",
      opacity: "0",
    });
  }

  if (st > 390) {
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container2>div").css({
      transform: "translate3d(0,0,0)",
      opacity: "1",
      transition: "800ms",
      transitionDelay: "100ms",
    });
  } else {
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container2>div").css({
      transform: "translate3d(0,50px,0)",
      opacity: "0",
    });
  }

  /* end container2 (about the template) */

  /* start menu background */

  if (st > 690) {
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.menuBg").css({
      transform: "translate3d(0,0px,0)",
      transition: "cubic-bezier(.11,.26,.99,.61)",
      transitionDuration: "700ms",
    });
  } else {
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.menuBg").css({
      transform: "translate3d(0,-60px,0)",
      transition: "cubic-bezier(.11,.26,.99,.61)",
      transitionDuration: "700ms",
    });
  }

  /* end menu background */

  /* start container5 (modern design) */

    if(st>2360){
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.left>div").css({
        position:"sticky",
        top:"100px"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.left>div>h3").css({
        transform:"translate3d(0,0,0)",
        transition:"700ms",
        opacity:"1"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.left>div>div").css({
        transform:"translate3d(0,0,0)",
        transition:"700ms",
        transitionDelay:"200ms",
        opacity:"1"
      })
    }else{
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.left>div").css({
        position:"relative",
        top:"0px"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.left>div>h3").css({
        transform:"translate3d(0,100px,0)",
        transition:"700ms",
        opacity:"0"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.left>div>div").css({
        transform:"translate3d(0,100px,0)",
        transition:"700ms",
        opacity:"0"
      })
    }
  
    if(st>2360){
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box1>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(0deg)",
        transition:"1000ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box1>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(1,1,1)",
        transition:"700ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box1>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box1>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1",
        transitionDelay:"400ms"
      })
    }else{
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box1>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(90deg)",
        transition:"1000ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box1>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(0,0,1)",
        transition:"700ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box1>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box1>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
    }
  
    if(st>2472){
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box2>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(0deg)",
        transition:"1000ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box2>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(1,1,1)",
        transition:"700ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box2>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box2>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1",
        transitionDelay:"400ms"
      })
    }else{
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box2>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(90deg)",
        transition:"1000ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box2>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(0,0,1)",
        transition:"700ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box2>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box2>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
    }
  
    if(st>2561){
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box3>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(0deg)",
        transition:"1000ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box3>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(1,1,1)",
        transition:"700ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box3>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box3>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1",
        transitionDelay:"400ms"
      })
    }else{
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box3>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(90deg)",
        transition:"1000ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box3>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(0,0,1)",
        transition:"700ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box3>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box3>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
    }
  
    if(st>2672){
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box4>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(0deg)",
        transition:"1000ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box4>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(1,1,1)",
        transition:"700ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box4>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box4>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1",
        transitionDelay:"400ms"
      })
    }else{
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box4>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(90deg)",
        transition:"1000ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box4>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(0,0,1)",
        transition:"700ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box4>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box4>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
    }
  
    if(st>2778){
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box5>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(0deg)",
        transition:"1000ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box5>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(1,1,1)",
        transition:"700ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box5>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box5>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1",
        transitionDelay:"400ms"
      })
    }else{
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box5>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(90deg)",
        transition:"1000ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box5>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(0,0,1)",
        transition:"700ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box5>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box5>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
    }
  
    if(st>2888){
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box6>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(0deg)",
        transition:"1000ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box6>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(1,1,1)",
        transition:"700ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box6>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box6>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1",
        transitionDelay:"400ms"
      })
    }else{
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box6>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(90deg)",
        transition:"1000ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box6>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(0,0,1)",
        transition:"700ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box6>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box6>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
    }
  
    if(st>2994){
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box7>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(0deg)",
        transition:"1000ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box7>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(1,1,1)",
        transition:"700ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box7>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box7>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1",
        transitionDelay:"400ms"
      })
    }else{
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box7>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(90deg)",
        transition:"1000ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box7>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(0,0,1)",
        transition:"700ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box7>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box7>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
    }
  
    if(st>3136){
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box8>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(0deg)",
        transition:"1000ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box8>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(1,1,1)",
        transition:"700ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box8>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box8>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1",
        transitionDelay:"400ms"
      })
    }else{
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box8>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(90deg)",
        transition:"1000ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box8>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(0,0,1)",
        transition:"700ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box8>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box8>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
    }
  
    if(st>3247){
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box9>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(0deg)",
        transition:"1000ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box9>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(1,1,1)",
        transition:"700ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box9>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box9>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1",
        transitionDelay:"400ms"
      })
    }else{
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box9>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(90deg)",
        transition:"1000ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box9>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(0,0,1)",
        transition:"700ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box9>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box9>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
    }
  
    if(st>3348){
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box10>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(0deg)",
        transition:"1000ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box10>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(1,1,1)",
        transition:"700ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box10>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box10>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1",
        transitionDelay:"400ms"
      })
    }else{
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box10>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(90deg)",
        transition:"1000ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box10>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(0,0,1)",
        transition:"700ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box10>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box10>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
    }
  
    if(st>3445){
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box11>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(0deg)",
        transition:"1000ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box11>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(1,1,1)",
        transition:"700ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box11>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box11>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1",
        transitionDelay:"400ms"
      })
    }else{
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box11>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(90deg)",
        transition:"1000ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box11>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(0,0,1)",
        transition:"700ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box11>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box11>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
    }
  
    if(st>3531){
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box12>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(0deg)",
        transition:"1000ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box12>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(1,1,1)",
        transition:"700ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box12>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box12>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1",
        transitionDelay:"400ms"
      })
    }else{
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box12>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(90deg)",
        transition:"1000ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box12>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(0,0,1)",
        transition:"700ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box12>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box12>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
    }

    /* end container5 (modern design) */

    /* start container7 (Choose from 3 different...) */

  if(st>4402){
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box1>div>div.imgs>img:nth-of-type(1),div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box1>div>div.imgs>img:nth-of-type(2),div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box1>div>div.imgs>img:nth-of-type(3)").css({
      transform:"scale3d(1,1,1)",
      transition:"1200ms",
      opacity:"1"
    })
  }else{
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box1>div>div.imgs>img:nth-of-type(1),div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box1>div>div.imgs>img:nth-of-type(2),div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box1>div>div.imgs>img:nth-of-type(3)").css({
      transform:"scale3d(0.5,0.5,0.5)",
      opacity:"0"
    })
  }

  if(st>5308){
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box2>div>div.imgs>img:nth-of-type(1),div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box2>div>div.imgs>img:nth-of-type(2),div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box2>div>div.imgs>img:nth-of-type(3)").css({
      transform:"scale3d(1,1,1)",
      transition:"1200ms",
      opacity:"1"
    })
  }else{
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box2>div>div.imgs>img:nth-of-type(1),div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box2>div>div.imgs>img:nth-of-type(2),div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box2>div>div.imgs>img:nth-of-type(3)").css({
      transform:"scale3d(0.5,0.5,0.5)",
      opacity:"0"
    })
  }

  if(st>6190){
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box3>div>div.imgs>img:nth-of-type(1),div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box3>div>div.imgs>img:nth-of-type(2),div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box3>div>div.imgs>img:nth-of-type(3)").css({
      transform:"scale3d(1,1,1)",
      transition:"1200ms",
      opacity:"1"
    })
  }else{
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box3>div>div.imgs>img:nth-of-type(1),div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box3>div>div.imgs>img:nth-of-type(2),div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box3>div>div.imgs>img:nth-of-type(3)").css({
      transform:"scale3d(0.5,0.5,0.5)",
      opacity:"0"
    })
  }

  /* end container7 (Choose from 3 different...) */

  /* start footer */

  if(st>7045){
    $("div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f1>h2").css({
      transform:"scale3d(1,1,1)",
      transition:"800ms",
      opacity:"1"
    })
  }else{
    $("div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f1>h2").css({
      transform:"scale3d(0.8,0.8,0.8)",
      opacity:"0"
    })
  }

  if(st>7450){
    $("div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f2>div:nth-of-type(1)>video").css({
      transform:"translate3d(0,0,0)",
      transition: "cubic-bezier(.94,.83,.24,.88)",
      transitionDuration: "800ms",
      transitionDelay:"200ms"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f2>div:nth-of-type(2)>div:nth-of-type(1)>p:nth-of-type(1),div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f2>div:nth-of-type(2)>div:nth-of-type(1)>p:nth-of-type(2)").css({
      transform:"scale3d(1,1,1)",
      transition:"800ms",
      transitionDelay:"150ms",
      opacity:"1"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f2>div:nth-of-type(2)>div:nth-of-type(2)>img").css({
      transform:"translate3d(0,0,0)",
      transition: "cubic-bezier(.94,.83,.24,.88)",
      transitionDuration: "800ms",
      transitionDelay:"200ms"
    })
  }else{
    $("div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f2>div:nth-of-type(1)>video").css({
      transform:"translate3d(-100%,0,0)"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f2>div:nth-of-type(2)>div:nth-of-type(1)>p:nth-of-type(1),div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f2>div:nth-of-type(2)>div:nth-of-type(1)>p:nth-of-type(2)").css({
      transform:"scale3d(0.8,0.8,0.8)",
      opacity:"0"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f2>div:nth-of-type(2)>div:nth-of-type(2)>img").css({
      transform:"translate3d(-100%,0,0)"
    })
  }

  if(st>7870){
    $("div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f3>div.left>div:nth-of-type(1)>p:nth-of-type(1),div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f3>div.left>div:nth-of-type(1)>p:nth-of-type(2)").css({
      transform:"scale3d(1,1,1)",
      transition:"800ms",
      opacity:"1"
    })
  }else{
    $("div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f3>div.left>div:nth-of-type(1)>p:nth-of-type(1),div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f3>div.left>div:nth-of-type(1)>p:nth-of-type(2)").css({
      transform:"scale3d(0.8,0.8,0.8)",
      opacity:"0"
    })
  }

  if(st>8050){
    $("div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f3>div.left>div:nth-of-type(2)>img").css({
      transform:"translate3d(0,0,0)",
      transition: "cubic-bezier(.94,.83,.24,.88)",
      transitionDuration: "800ms",
      transitionDelay:"200ms"
    })
  }else{
    $("div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f3>div.left>div:nth-of-type(2)>img").css({
      transform:"translate3d(-100%,0,0)"
    })
  }

  /* end footer */
  
  
  }
})

$(document).on("scroll", function () {
  if ($(this).width()>751 && $(this).width()<975){
  let st = $(document).scrollTop();

    /* start container2 (about the template) */

  if (st > 154) {
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container2>p").css({
      transform: "translate3d(0,0px,0)",
      opacity: "1",
      transition: "800ms",
    });
  } else {
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container2>p").css({
      transform: "translate3d(0,50px,0)",
      opacity: "0",
    });
  }

  if (st > 233) {
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container2>h2").css({
      transform: "scale3d(1,1,1)",
      transition: "800ms",
      opacity: "1",
    });
  } else {
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container2>h2").css({
      transform: "scale3d(0.5,0.5,0.5)",
      opacity: "0",
    });
  }

  if (st > 500) {
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container2>div").css({
      transform: "translate3d(0,0,0)",
      opacity: "1",
      transition: "800ms",
      transitionDelay: "100ms",
    });
  } else {
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container2>div").css({
      transform: "translate3d(0,50px,0)",
      opacity: "0",
    });
  }

  /* end container2 (about the template) */

  /* start menu background */

  if (st > 690) {
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.menuBg").css({
      transform: "translate3d(0,0px,0)",
      transition: "cubic-bezier(.11,.26,.99,.61)",
      transitionDuration: "700ms",
    });
  } else {
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.menuBg").css({
      transform: "translate3d(0,-60px,0)",
      transition: "cubic-bezier(.11,.26,.99,.61)",
      transitionDuration: "700ms",
    });
  }

  /* end menu background */

  /* start container5 (modern design) */

    if(st>3021){
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.left>div>h3").css({
        transform:"translate3d(0,0,0)",
        transition:"700ms",
        opacity:"1"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.left>div>div").css({
        transform:"translate3d(0,0,0)",
        transition:"700ms",
        transitionDelay:"200ms",
        opacity:"1"
      })
    }else{
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.left>div>h3").css({
        transform:"translate3d(0,100px,0)",
        transition:"700ms",
        opacity:"0"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.left>div>div").css({
        transform:"translate3d(0,100px,0)",
        transition:"700ms",
        opacity:"0"
      })
    }
  
    if(st>3308){
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box1>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(0deg)",
        transition:"1000ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box1>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(1,1,1)",
        transition:"700ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box1>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box1>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1",
        transitionDelay:"400ms"
      })
    }else{
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box1>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(90deg)",
        transition:"1000ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box1>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(0,0,1)",
        transition:"700ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box1>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box1>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
    }
  
    if(st>3439){
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box2>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(0deg)",
        transition:"1000ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box2>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(1,1,1)",
        transition:"700ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box2>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box2>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1",
        transitionDelay:"400ms"
      })
    }else{
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box2>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(90deg)",
        transition:"1000ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box2>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(0,0,1)",
        transition:"700ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box2>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box2>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
    }
  
    if(st>3568){
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box3>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(0deg)",
        transition:"1000ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box3>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(1,1,1)",
        transition:"700ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box3>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box3>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1",
        transitionDelay:"400ms"
      })
    }else{
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box3>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(90deg)",
        transition:"1000ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box3>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(0,0,1)",
        transition:"700ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box3>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box3>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
    }
  
    if(st>3697){
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box4>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(0deg)",
        transition:"1000ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box4>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(1,1,1)",
        transition:"700ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box4>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box4>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1",
        transitionDelay:"400ms"
      })
    }else{
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box4>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(90deg)",
        transition:"1000ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box4>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(0,0,1)",
        transition:"700ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box4>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box4>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
    }
  
    if(st>3828){
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box5>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(0deg)",
        transition:"1000ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box5>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(1,1,1)",
        transition:"700ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box5>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box5>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1",
        transitionDelay:"400ms"
      })
    }else{
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box5>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(90deg)",
        transition:"1000ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box5>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(0,0,1)",
        transition:"700ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box5>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box5>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
    }
  
    if(st>3961){
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box6>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(0deg)",
        transition:"1000ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box6>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(1,1,1)",
        transition:"700ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box6>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box6>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1",
        transitionDelay:"400ms"
      })
    }else{
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box6>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(90deg)",
        transition:"1000ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box6>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(0,0,1)",
        transition:"700ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box6>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box6>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
    }
  
    if(st>4092){
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box7>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(0deg)",
        transition:"1000ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box7>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(1,1,1)",
        transition:"700ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box7>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box7>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1",
        transitionDelay:"400ms"
      })
    }else{
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box7>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(90deg)",
        transition:"1000ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box7>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(0,0,1)",
        transition:"700ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box7>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box7>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
    }
  
    if(st>4254){
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box8>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(0deg)",
        transition:"1000ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box8>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(1,1,1)",
        transition:"700ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box8>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box8>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1",
        transitionDelay:"400ms"
      })
    }else{
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box8>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(90deg)",
        transition:"1000ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box8>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(0,0,1)",
        transition:"700ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box8>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box8>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
    }
  
    if(st>4384){
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box9>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(0deg)",
        transition:"1000ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box9>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(1,1,1)",
        transition:"700ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box9>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box9>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1",
        transitionDelay:"400ms"
      })
    }else{
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box9>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(90deg)",
        transition:"1000ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box9>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(0,0,1)",
        transition:"700ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box9>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box9>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
    }
  
    if(st>4512){
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box10>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(0deg)",
        transition:"1000ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box10>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(1,1,1)",
        transition:"700ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box10>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box10>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1",
        transitionDelay:"400ms"
      })
    }else{
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box10>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(90deg)",
        transition:"1000ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box10>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(0,0,1)",
        transition:"700ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box10>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box10>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
    }
  
    if(st>4621){
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box11>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(0deg)",
        transition:"1000ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box11>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(1,1,1)",
        transition:"700ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box11>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box11>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1",
        transitionDelay:"400ms"
      })
    }else{
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box11>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(90deg)",
        transition:"1000ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box11>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(0,0,1)",
        transition:"700ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box11>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box11>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
    }
  
    if(st>4729){
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box12>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(0deg)",
        transition:"1000ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box12>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(1,1,1)",
        transition:"700ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box12>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box12>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1",
        transitionDelay:"400ms"
      })
    }else{
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box12>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(90deg)",
        transition:"1000ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box12>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(0,0,1)",
        transition:"700ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box12>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box12>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
    }

    /* end container5 (modern design) */

    /* start container7 (Choose from 3 different...) */

  if(st>5723){
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box1>div>div.imgs>img:nth-of-type(1),div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box1>div>div.imgs>img:nth-of-type(2),div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box1>div>div.imgs>img:nth-of-type(3)").css({
      transform:"scale3d(1,1,1)",
      transition:"1200ms",
      opacity:"1"
    })
  }else{
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box1>div>div.imgs>img:nth-of-type(1),div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box1>div>div.imgs>img:nth-of-type(2),div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box1>div>div.imgs>img:nth-of-type(3)").css({
      transform:"scale3d(0.5,0.5,0.5)",
      opacity:"0"
    })
  }

  if(st>6636){
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box2>div>div.imgs>img:nth-of-type(1),div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box2>div>div.imgs>img:nth-of-type(2),div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box2>div>div.imgs>img:nth-of-type(3)").css({
      transform:"scale3d(1,1,1)",
      transition:"1200ms",
      opacity:"1"
    })
  }else{
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box2>div>div.imgs>img:nth-of-type(1),div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box2>div>div.imgs>img:nth-of-type(2),div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box2>div>div.imgs>img:nth-of-type(3)").css({
      transform:"scale3d(0.5,0.5,0.5)",
      opacity:"0"
    })
  }

  if(st>7464){
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box3>div>div.imgs>img:nth-of-type(1),div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box3>div>div.imgs>img:nth-of-type(2),div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box3>div>div.imgs>img:nth-of-type(3)").css({
      transform:"scale3d(1,1,1)",
      transition:"1200ms",
      opacity:"1"
    })
  }else{
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box3>div>div.imgs>img:nth-of-type(1),div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box3>div>div.imgs>img:nth-of-type(2),div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box3>div>div.imgs>img:nth-of-type(3)").css({
      transform:"scale3d(0.5,0.5,0.5)",
      opacity:"0"
    })
  }

  /* end container7 (Choose from 3 different...) */

  /* start footer */

  if(st>8349){
    $("div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f1>h2").css({
      transform:"scale3d(1,1,1)",
      transition:"800ms",
      opacity:"1"
    })
  }else{
    $("div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f1>h2").css({
      transform:"scale3d(0.8,0.8,0.8)",
      opacity:"0"
    })
  }

  if(st>8730){
    $("div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f2>div:nth-of-type(1)>video").css({
      transform:"translate3d(0,0,0)",
      transition: "cubic-bezier(.94,.83,.24,.88)",
      transitionDuration: "800ms",
      transitionDelay:"200ms"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f2>div:nth-of-type(2)>div:nth-of-type(1)>p:nth-of-type(1),div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f2>div:nth-of-type(2)>div:nth-of-type(1)>p:nth-of-type(2)").css({
      transform:"scale3d(1,1,1)",
      transition:"800ms",
      transitionDelay:"200ms",
      opacity:"1"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f2>div:nth-of-type(2)>div:nth-of-type(2)>img").css({
      transform:"translate3d(0,0,0)",
      transition: "cubic-bezier(.94,.83,.24,.88)",
      transitionDuration: "800ms",
      transitionDelay:"200ms"
    })
  }else{
    $("div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f2>div:nth-of-type(1)>video").css({
      transform:"translate3d(-100%,0,0)"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f2>div:nth-of-type(2)>div:nth-of-type(1)>p:nth-of-type(1),div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f2>div:nth-of-type(2)>div:nth-of-type(1)>p:nth-of-type(2)").css({
      transform:"scale3d(0.8,0.8,0.8)",
      opacity:"0"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f2>div:nth-of-type(2)>div:nth-of-type(2)>img").css({
      transform:"translate3d(-100%,0,0)"
    })
  }

  if(st>9156){
    $("div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f3>div.left>div:nth-of-type(1)>p:nth-of-type(1),div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f3>div.left>div:nth-of-type(1)>p:nth-of-type(2)").css({
      transform:"scale3d(1,1,1)",
      transition:"800ms",
      opacity:"1"
    })
  }else{
    $("div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f3>div.left>div:nth-of-type(1)>p:nth-of-type(1),div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f3>div.left>div:nth-of-type(1)>p:nth-of-type(2)").css({
      transform:"scale3d(0.8,0.8,0.8)",
      opacity:"0"
    })
  }

  if(st>9330){
    $("div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f3>div.left>div:nth-of-type(2)>img").css({
      transform:"translate3d(0,0,0)",
      transition: "cubic-bezier(.94,.83,.24,.88)",
      transitionDuration: "800ms",
      transitionDelay:"200ms"
    })
  }else{
    $("div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f3>div.left>div:nth-of-type(2)>img").css({
      transform:"translate3d(-100%,0,0)"
    })
  }

  /* end footer */
  
  }
})

$(document).on("scroll", function () {
  if ($(this).width()>590 && $(this).width()<751){
  let st = $(document).scrollTop();

    /* start container2 (about the template) */

  if (st > 18) {
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container2>p").css({
      transform: "translate3d(0,0px,0)",
      opacity: "1",
      transition: "800ms",
    });
  } else {
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container2>p").css({
      transform: "translate3d(0,50px,0)",
      opacity: "0",
    });
  }

  if (st > 81) {
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container2>h2").css({
      transform: "scale3d(1,1,1)",
      transition: "800ms",
      opacity: "1",
    });
  } else {
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container2>h2").css({
      transform: "scale3d(0.5,0.5,0.5)",
      opacity: "0",
    });
  }

  if (st > 309) {
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container2>div").css({
      transform: "translate3d(0,0,0)",
      opacity: "1",
      transition: "800ms",
      transitionDelay: "100ms",
    });
  } else {
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container2>div").css({
      transform: "translate3d(0,50px,0)",
      opacity: "0",
    });
  }

  /* end container2 (about the template) */

  /* start menu background */

  if (st > 621) {
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.menuBg").css({
      transform: "translate3d(0,0px,0)",
      transition: "cubic-bezier(.11,.26,.99,.61)",
      transitionDuration: "700ms",
    });
  } else {
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.menuBg").css({
      transform: "translate3d(0,-60px,0)",
      transition: "cubic-bezier(.11,.26,.99,.61)",
      transitionDuration: "700ms",
    });
  }

  /* end menu background */

  /* start container5 (modern design) */

    if(st>2768){
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.left>div>h3").css({
        transform:"translate3d(0,0,0)",
        transition:"700ms",
        opacity:"1"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.left>div>div").css({
        transform:"translate3d(0,0,0)",
        transition:"700ms",
        transitionDelay:"200ms",
        opacity:"1"
      })
    }else{
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.left>div>h3").css({
        transform:"translate3d(0,100px,0)",
        transition:"700ms",
        opacity:"0"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.left>div>div").css({
        transform:"translate3d(0,100px,0)",
        transition:"700ms",
        opacity:"0"
      })
    }
  
    if(st>3028){
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box1>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(0deg)",
        transition:"1000ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box1>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(1,1,1)",
        transition:"700ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box1>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box1>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1",
        transitionDelay:"400ms"
      })
    }else{
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box1>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(90deg)",
        transition:"1000ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box1>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(0,0,1)",
        transition:"700ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box1>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box1>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
    }
  
    if(st>3153){
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box2>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(0deg)",
        transition:"1000ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box2>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(1,1,1)",
        transition:"700ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box2>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box2>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1",
        transitionDelay:"400ms"
      })
    }else{
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box2>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(90deg)",
        transition:"1000ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box2>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(0,0,1)",
        transition:"700ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box2>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box2>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
    }
  
    if(st>3284){
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box3>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(0deg)",
        transition:"1000ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box3>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(1,1,1)",
        transition:"700ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box3>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box3>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1",
        transitionDelay:"400ms"
      })
    }else{
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box3>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(90deg)",
        transition:"1000ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box3>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(0,0,1)",
        transition:"700ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box3>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box3>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
    }
  
    if(st>3416){
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box4>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(0deg)",
        transition:"1000ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box4>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(1,1,1)",
        transition:"700ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box4>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box4>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1",
        transitionDelay:"400ms"
      })
    }else{
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box4>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(90deg)",
        transition:"1000ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box4>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(0,0,1)",
        transition:"700ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box4>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box4>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
    }
  
    if(st>3545){
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box5>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(0deg)",
        transition:"1000ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box5>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(1,1,1)",
        transition:"700ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box5>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box5>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1",
        transitionDelay:"400ms"
      })
    }else{
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box5>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(90deg)",
        transition:"1000ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box5>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(0,0,1)",
        transition:"700ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box5>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box5>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
    }
  
    if(st>3673){
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box6>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(0deg)",
        transition:"1000ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box6>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(1,1,1)",
        transition:"700ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box6>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box6>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1",
        transitionDelay:"400ms"
      })
    }else{
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box6>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(90deg)",
        transition:"1000ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box6>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(0,0,1)",
        transition:"700ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box6>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box6>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
    }
  
    if(st>3804){
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box7>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(0deg)",
        transition:"1000ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box7>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(1,1,1)",
        transition:"700ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box7>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box7>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1",
        transitionDelay:"400ms"
      })
    }else{
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box7>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(90deg)",
        transition:"1000ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box7>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(0,0,1)",
        transition:"700ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box7>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box7>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
    }
  
    if(st>3968){
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box8>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(0deg)",
        transition:"1000ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box8>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(1,1,1)",
        transition:"700ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box8>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box8>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1",
        transitionDelay:"400ms"
      })
    }else{
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box8>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(90deg)",
        transition:"1000ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box8>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(0,0,1)",
        transition:"700ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box8>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box8>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
    }
  
    if(st>4100){
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box9>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(0deg)",
        transition:"1000ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box9>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(1,1,1)",
        transition:"700ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box9>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box9>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1",
        transitionDelay:"400ms"
      })
    }else{
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box9>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(90deg)",
        transition:"1000ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box9>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(0,0,1)",
        transition:"700ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box9>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box9>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
    }
  
    if(st>4231){
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box10>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(0deg)",
        transition:"1000ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box10>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(1,1,1)",
        transition:"700ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box10>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box10>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1",
        transitionDelay:"400ms"
      })
    }else{
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box10>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(90deg)",
        transition:"1000ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box10>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(0,0,1)",
        transition:"700ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box10>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box10>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
    }
  
    if(st>4340){
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box11>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(0deg)",
        transition:"1000ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box11>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(1,1,1)",
        transition:"700ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box11>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box11>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1",
        transitionDelay:"400ms"
      })
    }else{
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box11>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(90deg)",
        transition:"1000ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box11>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(0,0,1)",
        transition:"700ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box11>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box11>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
    }
  
    if(st>4450){
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box12>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(0deg)",
        transition:"1000ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box12>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(1,1,1)",
        transition:"700ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box12>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box12>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1",
        transitionDelay:"400ms"
      })
    }else{
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box12>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(90deg)",
        transition:"1000ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box12>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(0,0,1)",
        transition:"700ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box12>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box12>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
    }

    /* end container5 (modern design) */

    /* start container7 (Choose from 3 different...) */

  if(st>5355){
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box1>div>div.imgs>img:nth-of-type(1),div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box1>div>div.imgs>img:nth-of-type(2),div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box1>div>div.imgs>img:nth-of-type(3)").css({
      transform:"scale3d(1,1,1)",
      transition:"1200ms",
      opacity:"1"
    })
  }else{
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box1>div>div.imgs>img:nth-of-type(1),div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box1>div>div.imgs>img:nth-of-type(2),div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box1>div>div.imgs>img:nth-of-type(3)").css({
      transform:"scale3d(0.5,0.5,0.5)",
      opacity:"0"
    })
  }

  if(st>6101){
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box2>div>div.imgs>img:nth-of-type(1),div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box2>div>div.imgs>img:nth-of-type(2),div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box2>div>div.imgs>img:nth-of-type(3)").css({
      transform:"scale3d(1,1,1)",
      transition:"1200ms",
      opacity:"1"
    })
  }else{
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box2>div>div.imgs>img:nth-of-type(1),div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box2>div>div.imgs>img:nth-of-type(2),div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box2>div>div.imgs>img:nth-of-type(3)").css({
      transform:"scale3d(0.5,0.5,0.5)",
      opacity:"0"
    })
  }

  if(st>6816){
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box3>div>div.imgs>img:nth-of-type(1),div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box3>div>div.imgs>img:nth-of-type(2),div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box3>div>div.imgs>img:nth-of-type(3)").css({
      transform:"scale3d(1,1,1)",
      transition:"1200ms",
      opacity:"1"
    })
  }else{
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box3>div>div.imgs>img:nth-of-type(1),div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box3>div>div.imgs>img:nth-of-type(2),div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box3>div>div.imgs>img:nth-of-type(3)").css({
      transform:"scale3d(0.5,0.5,0.5)",
      opacity:"0"
    })
  }

  /* end container7 (Choose from 3 different...) */

  /* start footer */

  if(st>7580){
    $("div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f1>h2").css({
      transform:"scale3d(1,1,1)",
      transition:"800ms",
      opacity:"1"
    })
  }else{
    $("div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f1>h2").css({
      transform:"scale3d(0.8,0.8,0.8)",
      opacity:"0"
    })
  }

  if(st>7924){
    $("div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f2>div:nth-of-type(1)>video").css({
      transform:"translate3d(0,0,0)",
      transition: "cubic-bezier(.94,.83,.24,.88)",
      transitionDuration: "800ms",
      transitionDelay:"200ms"
    })
  }else{
    $("div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f2>div:nth-of-type(1)>video").css({
      transform:"translate3d(-100%,0,0)"
    })
  }

  if(st>8195){
    $("div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f2>div:nth-of-type(2)>div:nth-of-type(1)>p:nth-of-type(1),div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f2>div:nth-of-type(2)>div:nth-of-type(1)>p:nth-of-type(2)").css({
      transform:"scale3d(1,1,1)",
      transition:"800ms",
      transitionDelay:"200ms",
      opacity:"1"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f2>div:nth-of-type(2)>div:nth-of-type(2)>img").css({
      transform:"translate3d(0,0,0)",
      transition: "cubic-bezier(.94,.83,.24,.88)",
      transitionDuration: "800ms",
      transitionDelay:"200ms"
    })
  }else{
    $("div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f2>div:nth-of-type(2)>div:nth-of-type(1)>p:nth-of-type(1),div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f2>div:nth-of-type(2)>div:nth-of-type(1)>p:nth-of-type(2)").css({
      transform:"scale3d(0.8,0.8,0.8)",
      opacity:"0"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f2>div:nth-of-type(2)>div:nth-of-type(2)>img").css({
      transform:"translate3d(-100%,0,0)"
    })
  }

  if(st>8469){
    $("div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f3>div.left>div:nth-of-type(1)>p:nth-of-type(1),div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f3>div.left>div:nth-of-type(1)>p:nth-of-type(2)").css({
      transform:"scale3d(1,1,1)",
      transition:"800ms",
      opacity:"1"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f3>div.left>div:nth-of-type(2)>img").css({
      transform:"translate3d(0,0,0)",
      transition: "cubic-bezier(.94,.83,.24,.88)",
      transitionDuration: "800ms",
      transitionDelay:"200ms"
    })
  }else{
    $("div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f3>div.left>div:nth-of-type(1)>p:nth-of-type(1),div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f3>div.left>div:nth-of-type(1)>p:nth-of-type(2)").css({
      transform:"scale3d(0.8,0.8,0.8)",
      opacity:"0"
    })
    $("div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f3>div.left>div:nth-of-type(2)>img").css({
      transform:"translate3d(-100%,0,0)"
    })
  }

  /* end footer */
  
  }
})

$(document).on("scroll", function () {
  if ($(this).width()>300 && $(this).width()<590){
  let st = $(document).scrollTop();

  console.log(st);
    /* start container2 (about the template) */

  if (st > 48) {
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container2>p").css({
      transform: "translate3d(0,0px,0)",
      opacity: "1",
      transition: "800ms",
    });
  } else {
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container2>p").css({
      transform: "translate3d(0,50px,0)",
      opacity: "0",
    });
  }

  if (st > 100) {
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container2>h2").css({
      transform: "scale3d(1,1,1)",
      transition: "800ms",
      opacity: "1",
    });
  } else {
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container2>h2").css({
      transform: "scale3d(0.5,0.5,0.5)",
      opacity: "0",
    });
  }

  if (st > 394) {
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container2>div").css({
      transform: "translate3d(0,0,0)",
      opacity: "1",
      transition: "800ms",
      transitionDelay: "100ms",
    });
  } else {
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container2>div").css({
      transform: "translate3d(0,50px,0)",
      opacity: "0",
    });
  }

  /* end container2 (about the template) */

  /* start menu background */

  if (st > 621) {
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.menuBg").css({
      transform: "translate3d(0,0px,0)",
      transition: "cubic-bezier(.11,.26,.99,.61)",
      transitionDuration: "700ms",
    });
  } else {
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.menuBg").css({
      transform: "translate3d(0,-60px,0)",
      transition: "cubic-bezier(.11,.26,.99,.61)",
      transitionDuration: "700ms",
    });
  }

  /* end menu background */

  /* start container5 (modern design) */

    if(st>2754){
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.left>div>h3").css({
        transform:"translate3d(0,0,0)",
        transition:"700ms",
        opacity:"1"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.left>div>div").css({
        transform:"translate3d(0,0,0)",
        transition:"700ms",
        transitionDelay:"200ms",
        opacity:"1"
      })
    }else{
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.left>div>h3").css({
        transform:"translate3d(0,100px,0)",
        transition:"700ms",
        opacity:"0"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.left>div>div").css({
        transform:"translate3d(0,100px,0)",
        transition:"700ms",
        opacity:"0"
      })
    }
  
    if(st>3160){
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box1>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(0deg)",
        transition:"1000ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box1>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(1,1,1)",
        transition:"700ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box1>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box1>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1",
        transitionDelay:"400ms"
      })
    }else{
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box1>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(90deg)",
        transition:"1000ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box1>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(0,0,1)",
        transition:"700ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box1>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box1>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
    }
  
    if(st>3287){
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box2>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(0deg)",
        transition:"1000ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box2>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(1,1,1)",
        transition:"700ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box2>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box2>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1",
        transitionDelay:"400ms"
      })
    }else{
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box2>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(90deg)",
        transition:"1000ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box2>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(0,0,1)",
        transition:"700ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box2>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box2>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
    }
  
    if(st>3417){
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box3>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(0deg)",
        transition:"1000ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box3>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(1,1,1)",
        transition:"700ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box3>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box3>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1",
        transitionDelay:"400ms"
      })
    }else{
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box3>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(90deg)",
        transition:"1000ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box3>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(0,0,1)",
        transition:"700ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box3>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box3>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
    }
  
    if(st>3550){
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box4>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(0deg)",
        transition:"1000ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box4>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(1,1,1)",
        transition:"700ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box4>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box4>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1",
        transitionDelay:"400ms"
      })
    }else{
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box4>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(90deg)",
        transition:"1000ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box4>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(0,0,1)",
        transition:"700ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box4>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box4>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
    }
  
    if(st>3680){
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box5>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(0deg)",
        transition:"1000ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box5>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(1,1,1)",
        transition:"700ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box5>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box5>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1",
        transitionDelay:"400ms"
      })
    }else{
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box5>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(90deg)",
        transition:"1000ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box5>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(0,0,1)",
        transition:"700ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box5>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box5>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
    }
  
    if(st>3815){
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box6>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(0deg)",
        transition:"1000ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box6>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(1,1,1)",
        transition:"700ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box6>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box6>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1",
        transitionDelay:"400ms"
      })
    }else{
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box6>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(90deg)",
        transition:"1000ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box6>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(0,0,1)",
        transition:"700ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box6>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box6>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
    }
  
    if(st>3946){
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box7>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(0deg)",
        transition:"1000ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box7>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(1,1,1)",
        transition:"700ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box7>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box7>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1",
        transitionDelay:"400ms"
      })
    }else{
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box7>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(90deg)",
        transition:"1000ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box7>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(0,0,1)",
        transition:"700ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box7>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box7>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
    }
  
    if(st>4160){
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box8>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(0deg)",
        transition:"1000ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box8>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(1,1,1)",
        transition:"700ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box8>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box8>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1",
        transitionDelay:"400ms"
      })
    }else{
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box8>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(90deg)",
        transition:"1000ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box8>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(0,0,1)",
        transition:"700ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box8>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box8>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
    }
  
    if(st>4290){
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box9>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(0deg)",
        transition:"1000ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box9>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(1,1,1)",
        transition:"700ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box9>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box9>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1",
        transitionDelay:"400ms"
      })
    }else{
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box9>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(90deg)",
        transition:"1000ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box9>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(0,0,1)",
        transition:"700ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box9>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box9>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
    }
  
    if(st>4422){
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box10>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(0deg)",
        transition:"1000ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box10>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(1,1,1)",
        transition:"700ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box10>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box10>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1",
        transitionDelay:"400ms"
      })
    }else{
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box10>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(90deg)",
        transition:"1000ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box10>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(0,0,1)",
        transition:"700ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box10>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box10>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
    }
  
    if(st>4536){
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box11>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(0deg)",
        transition:"1000ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box11>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(1,1,1)",
        transition:"700ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box11>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box11>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1",
        transitionDelay:"400ms"
      })
    }else{
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box11>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(90deg)",
        transition:"1000ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box11>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(0,0,1)",
        transition:"700ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box11>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box11>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
    }
  
    if(st>4650){
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box12>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(0deg)",
        transition:"1000ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box12>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(1,1,1)",
        transition:"700ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box12>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box12>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,0,0)",
        transition:"1000ms",
        opacity:"1",
        transitionDelay:"400ms"
      })
    }else{
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box12>div:nth-of-type(1)>div:nth-of-type(2)").css({
        transform:"rotatex(90deg)",
        transition:"1000ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box12>div:nth-of-type(1)>div:nth-of-type(1)").css({
        transform:"scale3d(0,0,1)",
        transition:"700ms",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box12>div:nth-of-type(2)>p:nth-of-type(1)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
      $("div.wrapper>div.menu>div:nth-of-type(2)>div.container5>div.right>div.box12>div:nth-of-type(2)>p:nth-of-type(2)").css({
        transform:"translate3d(0,10px,0)",
        transition:"1000ms",
        opacity:"0",
        transitionDelay:"600ms"
      })
    }

    /* end container5 (modern design) */

    /* start container7 (Choose from 3 different...) */

  if(st>5780){
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box1>div>div.imgs>img:nth-of-type(1),div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box1>div>div.imgs>img:nth-of-type(2),div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box1>div>div.imgs>img:nth-of-type(3)").css({
      transform:"scale3d(1,1,1)",
      transition:"1200ms",
      opacity:"1"
    })
  }else{
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box1>div>div.imgs>img:nth-of-type(1),div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box1>div>div.imgs>img:nth-of-type(2),div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box1>div>div.imgs>img:nth-of-type(3)").css({
      transform:"scale3d(0.5,0.5,0.5)",
      opacity:"0"
    })
  }

  if(st>6316){
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box2>div>div.imgs>img:nth-of-type(1),div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box2>div>div.imgs>img:nth-of-type(2),div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box2>div>div.imgs>img:nth-of-type(3)").css({
      transform:"scale3d(1,1,1)",
      transition:"1200ms",
      opacity:"1"
    })
  }else{
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box2>div>div.imgs>img:nth-of-type(1),div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box2>div>div.imgs>img:nth-of-type(2),div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box2>div>div.imgs>img:nth-of-type(3)").css({
      transform:"scale3d(0.5,0.5,0.5)",
      opacity:"0"
    })
  }

  if(st>6820){
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box3>div>div.imgs>img:nth-of-type(1),div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box3>div>div.imgs>img:nth-of-type(2),div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box3>div>div.imgs>img:nth-of-type(3)").css({
      transform:"scale3d(1,1,1)",
      transition:"1200ms",
      opacity:"1"
    })
  }else{
    $("div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box3>div>div.imgs>img:nth-of-type(1),div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box3>div>div.imgs>img:nth-of-type(2),div.wrapper>div.menu>div:nth-of-type(2)>div.container7>div.box3>div>div.imgs>img:nth-of-type(3)").css({
      transform:"scale3d(0.5,0.5,0.5)",
      opacity:"0"
    })
  }

  /* end container7 (Choose from 3 different...) */

  /* start footer */

  if(st>7360){
    $("div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f1>h2").css({
      transform:"scale3d(1,1,1)",
      transition:"800ms",
      opacity:"1"
    })
  }else{
    $("div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f1>h2").css({
      transform:"scale3d(0.8,0.8,0.8)",
      opacity:"0"
    })
  }

  if(st>7630){
    $("div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f2>div:nth-of-type(1)>video").css({
      transform:"translate3d(0,0,0)",
      transition: "cubic-bezier(.94,.83,.24,.88)",
      transitionDuration: "800ms",
      transitionDelay:"200ms"
    })
  }else{
    $("div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f2>div:nth-of-type(1)>video").css({
      transform:"translate3d(-100%,0,0)"
    })
  }

  if(st>7935){
    $("div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f2>div:nth-of-type(2)>div:nth-of-type(1)>p:nth-of-type(1),div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f2>div:nth-of-type(2)>div:nth-of-type(1)>p:nth-of-type(2)").css({
      transform:"scale3d(1,1,1)",
      transition:"800ms",
      transitionDelay:"200ms",
      opacity:"1"
    })
  }else{
    $("div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f2>div:nth-of-type(2)>div:nth-of-type(1)>p:nth-of-type(1),div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f2>div:nth-of-type(2)>div:nth-of-type(1)>p:nth-of-type(2)").css({
      transform:"scale3d(0.8,0.8,0.8)",
      opacity:"0"
    })
  }

  if(st>8070){
    $("div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f2>div:nth-of-type(2)>div:nth-of-type(2)>img").css({
      transform:"translate3d(0,0,0)",
      transition: "cubic-bezier(.94,.83,.24,.88)",
      transitionDuration: "800ms",
      transitionDelay:"200ms"
    })
  }else{
    $("div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f2>div:nth-of-type(2)>div:nth-of-type(2)>img").css({
      transform:"translate3d(-100%,0,0)"
    })
  }

  if(st>8372){
    $("div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f3>div.left>div:nth-of-type(1)>p:nth-of-type(1),div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f3>div.left>div:nth-of-type(1)>p:nth-of-type(2)").css({
      transform:"scale3d(1,1,1)",
      transition:"800ms",
      opacity:"1"
    })
  }else{
    $("div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f3>div.left>div:nth-of-type(1)>p:nth-of-type(1),div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f3>div.left>div:nth-of-type(1)>p:nth-of-type(2)").css({
      transform:"scale3d(0.8,0.8,0.8)",
      opacity:"0"
    })
  }

  if(st>8508){
    $("div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f3>div.left>div:nth-of-type(2)>img").css({
      transform:"translate3d(0,0,0)",
      transition: "cubic-bezier(.94,.83,.24,.88)",
      transitionDuration: "800ms",
      transitionDelay:"200ms"
    })
  }else{
    $("div.wrapper>div.menu>div:nth-of-type(2)>footer>div.f3>div.left>div:nth-of-type(2)>img").css({
      transform:"translate3d(-100%,0,0)"
    })
  }

  /* end footer */
  
  }
})