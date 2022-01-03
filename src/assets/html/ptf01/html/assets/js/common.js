//공통영역 호출
$('.header__wrap').load('./components/header.html'); //메뉴
$('.footer__wrap').load('./components/footer.html'); //푸터

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

// Custom Select 
$('.custom__selected').on('click', function() {
    $('.custom__selected').toggleClass('__active');
    $('.custom__options').toggleClass('__active');
});
$('.custom__options a').on('click', function() {
    var thisHtml = $(this).text()
        thisParent = $('.custom__options .ranks__lists')
        thisOrder = $(this).parents('li').index() + 1;
        $('.custom__selected p').text(thisHtml);
        $('.custom__selected span').text(thisOrder);
        $('.custom__selected').toggleClass('__active');
        $('.custom__options').toggleClass('__active');

        if (thisOrder < 4) {
            $('.rank__numb').addClass('__highranks');
        } else {
            $('.rank__numb').removeClass('__highranks');
        }
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


// JqueryUI Autocomplete
$('.input__autocomplete').keyup(function(){
    if($(this).val().length) {
        $('.custom__autocomplete').show();
    } else {
        $('.custom__autocomplete').hide();
    }
});


(function( $ ) {
    $.widget( "app.autocomplete", $.ui.autocomplete, {
        options: {
            highlightClass: "ui-state-highlight"
        },
        _renderItem: function( ul, item ) {
            var re = new RegExp( "(" + this.term + ")", "gi" ),
                cls = this.options.highlightClass,
                template = "<span class='" + cls + "'>$1</span>",
                label = item.label.replace( re, template ),
                $li = $( "<li/>" ).appendTo( ul );
            $( "<a/>" ).attr( "href", "#" ).html( label ).appendTo( $li );
            return $li;
        }
    });
    
    var srchDatas = [
        "문화",
        "세계문화",
        "미국문화제",
        "11문화",
        "세계문화22",
        "미국33문화제",
        "44문화",
        "세계55문화",
        "미국66문화제",
        "7711문화",
        "세계88문화22",
        "999미국33문화제",
    ];

    $(function() {
        $( ".input__autocomplete" ).autocomplete({
            highlightClass: "bold-text",
            source: srchDatas,
            appendTo: ".custom__autocomplete .custom__scrollbar",
            focus: function(event, ui) {
                return false;
            },
            select: function (e, ui) {
                $('.custom__autocomplete').hide();
            },
        });
    });
})(jQuery);


// Mobile Submenu 3depth
if (window.innerWidth < 1024) {
    $(document).on('click', '.menulist > li > a', function(e) {
        if ($(this).siblings('.submenulist').length > 0) {
            e.preventDefault();
            $(this).siblings('.submenulist').animate({'width': 'toggle'});;
        }
    });
} 