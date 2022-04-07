//javascript
//hide header on scroll down and show on scroll up
//      var zero = 0;
//      $(window).scroll(function(){
//        var header = $('header.header-menu');
//        var currentScroll = $(window).scrollTop();
//            header.toggleClass('hide',currentScroll > zero);   // class hide{transform:translateY(-100%)}
//            zero = currentScroll;
//      });

$(document).ready(function(){

   
     $(window).scroll(function(){
    //----------Arrow Up button (scroll up btn)------------
       var currentScroll = $(window).scrollTop();
       var arrowUpBtn = $('.arrowKeyUp-btn');
           if(currentScroll > 200){
             arrowUpBtn.css('right','17px');
           }else{ 
             arrowUpBtn.css('right','-20%');
           } 

    //--- to show single search box when scroll down---
    var searchheight = $(".header-menu").outerHeight();
    var offset = $(".header-menu").offset().top;
    var totalheight = searchheight+offset;
      if($(document).scrollTop() >= totalheight){  // this statament is when we scroll down off header menu
        $(".top-header-menu .search-box .signle-form").addClass("show");
      }else{
        $(".top-header-menu .search-box .signle-form").removeClass("show");
      }

    });

     
 //--------------------------content menu---------------------------
     var open = $('.top-header-menu .toggle-icon .icon');
     var close = $('.top-header-menu .toggle-icon .wrapper-content .content-detail > .close');
     var wrapperContent = $('.top-header-menu .toggle-icon .wrapper-content');
     var contentDetail = $('.top-header-menu .toggle-icon .wrapper-content .content-detail')
        open.on('click',function(){
          wrapperContent.toggleClass('show');
          contentDetail.toggleClass('show');
          close.addClass('show');
        });
        close.on('click',function(){
          wrapperContent.toggleClass('show');
          contentDetail.toggleClass('show');
          close.removeClass('show');
        });
    //---click show product name------.
     var lists = $('.search-box .product-list .lists');
     var productName = $('.top-header-menu .product-name');
     var icon  = $(".top-header-menu .search-box .product-list .lists i");
     lists.on('click',function(){
       lists.css({'background-color':'#FF6A00','color':'white'});
       productName.toggleClass('show');
      //click to rotat icon in (All icon)
       icon.toggleClass("rotat");
     });

     // for click outlide to close productName. 
     $(document).click(function(e){
       if($(e.target).closest(lists).length===0){  
         lists.css({'background-color':'','color':''});
         productName.removeClass('show');
       }
            
      //click outside to rotat icon
      $(document).click(function(c){
        if($(c.target).closest(icon).length===0){
          icon.removeClass('rotat');
        }  
      });

     });
     // to show product name into search box when click on productName   
     var inputtext = $('#inputText');
     var productNameItem = productName.children('a');
         productNameItem.each(function(){ 
           $(this).click(function(){
             var value = $(this).text();
             inputtext.val(value);
           });
         });
 
//--------------search box effect appear box-shadow when onfucs of input box.
     var inputText = $('#inputText');
     var SearchBox = $('.top-header-menu .search-box .aline');
     inputText.focus(function(){
       SearchBox.css({
                       border:'2px solid #FF6A00',
                       boxShadow: '0 0 2px 1px #FF6A00'
                     });
     });
     inputText.blur(function(){
       SearchBox.css({
          boxShadow: 'none'
                     });
     });






});
