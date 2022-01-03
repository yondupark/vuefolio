//공통영역 호출
$('.header__wrap').load('./components/header3.html'); //메뉴
$('.footer__wrap').load('./components/footer3.html'); //푸터

// GNB 메뉴
$(window).resize(function(){
    // 태블릿 이상일때
     if (window.innerWidth > 1024) { 
        // 메뉴 토글
        $(document).on('click', '.gnb__groups button', function() {
            $('.header__wrap header').addClass('__active');
        });
        $(document).on('click', '.gnb__close', function() {
            $('.header__wrap header').removeClass('__active');
        });
    } else {  // 태블릿 이하일때
        // 모바일 메뉴버튼
        $(document).on('click', '.mo__trigger', function() {
            $(this).toggleClass('-active');
            $('.gnb__aligner').toggleClass('-active');
            $('body').toggleClass('menu__on');
        });
    }
 }).resize();

// 통합검색 버튼
$(document).on('click', '.search__trigger', function() {
    $(this).addClass('-active');
    $('.dialog.-search').addClass('-active');
    $('#sch__total').focus();
});
$(document).on('click', '.search__trigger.-active', function() {
    $(this).removeClass('-active');
    $('.dialog.-search').removeClass('-active');
});

// 다이얼로그 (레이어팝업)
function openDialog(dialogID){
    var $layer = $("#"+ dialogID);
    $layer.addClass("-active");
}

function fnHidePop(dialogID){
    $("#"+ dialogID).removeClass("-active");
}

// 인풋 파일
$(document).ready(
    function() { 
    var fileTarget = $('.__attach ._hidden'); 
    fileTarget.on('change', function(){
        // 값이 변경되면 
        if(window.FileReader){ 
            var filename = $(this)[0].files[0].name; 
        } 
        else { 
            // old IE
            var filename = $(this).val().split('/').pop().split('\\').pop();
        }
        $(this).siblings('.fileaddr').val(filename); 
    });
});

// to top
$( window ).scroll( function() {
    if ( $( this ).scrollTop() > 200 ) {
        $( '.to_top' ).fadeIn();
    } else {
        $( '.to_top' ).fadeOut();
    }
});
$( '.to_top' ).click( function() {
    $('html, body').animate({scrollTop:0}, 400);
    return false;
});



// Mobile Submenu 3depth
if (window.innerWidth < 1024) {
    $(document).on('click', '.menulist > li > a', function(e) {
        if ($(this).siblings('.submenulist').length > 0) {
            e.preventDefault();
            $(this).siblings('.submenulist').animate({'width': 'toggle'});;
        }
    });
} 