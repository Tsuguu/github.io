console.log('Hello World');


jQuery(function ($) {
$("nav").click(function() {
  $(this).toggleClass("on");
});

});


$('a').on('mouseover',function(){
    $(this).css('color','#f4bcff');
})
.on('mouseleave',function(){
    $(this).css('color','rgb(70, 70, 70)');
})


$(window).on('scroll', function() {
    // idがq-11の要素の画面最上部からの距離を取得
    let about = $('#about').offset().top;

    // 画面の高さ
    let wh = $(window).height();

    // $(window).scrollTop()は現在のスクロール位置
    if (about <= $(window).scrollTop() + wh) {
      $('.setsumei1').removeClass('hide');
    } else {
      $('.setsumei1').addClass('hide');
    }
    
})

$(function(){
  $(window).scroll(function (){
      $('.fadein').each(function(){
          var position = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > position - windowHeight + 200){
            $(this).addClass('active');
          }
      });
  });
});


var loop = setInterval(function() {
  //li先頭要素のクローンを作成
  var clone = $(".kizislide li:first").clone(true);
  //li先頭要素のマージンレフトにマイナスを指定しアニメーションさせる
  $(".kizislide li:first").animate({
  marginLeft : "-100%"
  }, {
  duration : 15000,    
  complete : function() {
      //処理完了時に先頭要素を削除
      $(".kizislide li:first").remove();
      //クローンをliの最後に追加
      clone.clone(true).insertAfter($(".kizislide li:last"));
  }
  });
}, 0);
