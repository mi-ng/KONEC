$(document).ready(function () {//시작

  //로그인
  $(".login-lang>input[id=korean]").click(function () {
    $(".save-txt").text("접속 정보 기억");
    $(".submit-txt").text("로그인");
    document.getElementsByName('info')[0].placeholder = '로그인';
    document.getElementsByName('info')[1].placeholder = '비밀번호';


  });

  $(".login-lang>input[id=english]").click(function () {
    $(".save-txt").text("SAVE LOGIN INFO");
    $(".submit-txt").text("LOGIN");
    document.getElementsByName('info')[0].placeholder = 'LOGIN';
    document.getElementsByName('info')[1].placeholder = 'PASSWORD';

  });

  //태블릿, pc화면 gnb depth2 이벤트
    $("nav .depth2").hide();
  $(".depth2-bg").hide();

  $("nav .gnb>li").mouseenter(function () {
    $("nav .depth2").stop().slideDown();
    $(".depth2-bg").stop().slideDown(); 
  });
  $("nav .gnb >li").mouseleave(function () {
    $("nav .depth2").stop().slideUp();
    $(".depth2-bg").stop().slideUp(); 
  });



  //언어설정 드롭다운
  $(".lang-menu").click(function () {
    $(".lang-menu .lang-en").toggleClass("down");
    $(".lang-menu .lang-korea span").toggleClass("down");
  });



  //mgnb 드롭다운

  $(".mgnb > li").click(function () {

    if ($(window).width() < 1023) {
      if ($(this).children(".depth2").css("display") == "block") {
        $(this).children(".depth2").slideUp();
        $(this).children(".arr").find("span").removeClass("up");
      } else {
        $(".depth2").stop().slideUp();
        $(this).children(".depth2").slideDown();
        $(".arr span").removeClass("up");
        $(this).children(".arr").find("span").addClass("up");
      };
    }

  });

  //모바일 메뉴바 닫기

  $(".ham-menu").click(function () {
    $(this).toggleClass("active");
    $(".mgnb-menu").toggleClass("right");
  });

  //select

  $(".selectbox select").focusin(function () {
    $(this).addClass("active");
  });
  $(".selectbox select").focusout(function () {
    $(this).removeClass("active");
  });

  //txtbox
  $("input[type='text']").focusin(function () {
    $(this).addClass("active");
  });
  $("input[type='text']").focusout(function () {
    $(this).removeClass("active");
  });

  //passbox
  $("input[type='password']").focusin(function () {
    $(this).addClass("active");
  });
  $("input[type='password']").focusout(function () {
    $(this).removeClass("active");
  });
 
  //datebox
  $("input[type='date']").focusin(function () {
    $(this).addClass("active");
  });
  $("input[type='date']").focusout(function () {
    $(this).removeClass("active");
  });


  //토글버튼
  const toggleList = document.querySelectorAll(".toggleSwitch");

  toggleList.forEach(($toggle) => {
    $toggle.onclick = () => {
      $toggle.classList.toggle('active');
    }
  });


});//끝