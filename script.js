

    
    $(function() {
      
        


        
        // fecebookのさわるとリンクはないよとでる
    $('#naiyo').hover(
        function(){
            $('.sitenai').fadeIn();
        },
        
        function(){
            $('.sitenai').fadeOut();
        }        
    );
        
        //これまでのキャンプのところ
    $('#mada').click(
        function(){
        $('#mada').text('右の写真が変わるよ').css('color','red');
    
    });

     //メニューのアバウト
     $('.yyy').click(
        function(){
        $(this).html('ヤマト');
    
    });


//モーダル
   
        $('#login-show').click(function() {
          $('#login-modal').fadeIn();
        });
        
        $('.signup-show').click(function() {
          $('#signup-modal').fadeIn();
        });
      
        $('.close-modal').click(function() {
          $('#login-modal').fadeOut();
          $('#signup-modal').fadeOut();
        });
        
        // 「.lesson-hover」がhoverされたときのhoverイベントを作成してください
        
        
        
   //hover   activeをつけたり、とったりする機能   
        $('.lesson-hover').hover(
            function() {
              // 子要素の「.text-contents」の要素を取得し、text-activeクラスをつけてください
              $(this).find('.text-contents').addClass('text-active');
              
            },
            function() {
              // 子要素の「.text-contents」の要素を取得し、text-activeクラスを外してください
              $(this).find('.text-contents').removeClass('text-active');
              
            }
          );




  
   // スライド　しゃしんをいろいろする機能=============================================================================
   
   

   $('.index-btn').click(function() {
    $('.activephoto').removeClass('activephoto');
    
    // 変数clickedIndexを定義し、クリックしたボタンのインデックス番号を代入してください
    var clickedIndex = $('.index-btn').index(this);
    
    // eqの引数をclickedIndexに書き換えてください
    $('.syasin').eq(clickedIndex+1).addClass('activephoto');
    
  });


   
  

// スライド　「次へ」と「前へ」の機能　　しゃしんをいろいろする機能========================================================================
   function toggleChangeBtn() {
    var slideIndex = $('.syasin').index($('.activephoto'));
    $('.change-btn').show();
    if (slideIndex == 0) {
      $('.prev-btn').hide();
   
    } else if (slideIndex == $('.syasin').length-1) {
      $('.next-btn').hide();
    }
  }
  
  $('.index-btn').click(function() {
    $('.activephoto').removeClass('activephoto');
    var clickedIndex = $('.index-btn').index($(this));
    $('.syasin').eq(clickedIndex).addClass('activephoto');
    toggleChangeBtn();
  });
  
  $('.change-btn').click(function() {
    var $displaySlide = $('.activephoto');
    $displaySlide.removeClass('activephoto');
    if ($(this).hasClass('next-btn')) {
      $displaySlide.next().addClass('activephoto');
    } 
    else {
      $displaySlide.prev().addClass('activephoto');
    }
    toggleChangeBtn();
  });
   

    
  });