// JavaScript Document
$('.MenuV_style1 > ul > li > a').click(function(){MenuV_fun1(this,'MenuV_style1')});
$('.MenuV_style3 > ul > li > a').click(function(){MenuV_fun1(this,'MenuV_style3')});
MenuV_fun1=function(vthis,domname){
 $('.'+domname+' li').removeClass('active');
  $(vthis).closest('li').addClass('active');	
  var checkElement = $(vthis).next();
  if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
    $(vthis).closest('li').removeClass('active');
    checkElement.slideUp('normal');
  }
  if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
    $('.'+domname+' ul ul:visible').slideUp('normal');
    checkElement.slideDown('normal');
  }
  if($(vthis).closest('li').find('ul').children().length == 0) {
    return true;
  } else {
    return false;	
  }		
}