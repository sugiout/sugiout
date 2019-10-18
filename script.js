

    
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
        $('#mada').text('ごめんね まだないよ').css('color','red');
    
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







    
  });