$(function(){


//hieu ung thay doi menu khi cuon chuot

var khoangcach=$('body,html').scrollTop();

if(khoangcach>80){
	$('.navbar').addClass('biendoi');
	$('.topbar').css('display', 'none');

}
else if(khoangcach<80){
	$('.navbar').removeClass('biendoi');
	$('.topbar').css('display', 'block');
}
$(window).scroll(function(event) {

	var khoangcach=$('body,html').scrollTop();
if(khoangcach>80){
	$('.navbar').addClass('biendoi');
	$('.topbar').css('display', 'none');
}
else if(khoangcach<80){
	$('.navbar').removeClass('biendoi');
	$('.topbar').css('display', 'block');
}
});

$("#datepicker-departure").datepicker({         
autoclose: true,         
todayHighlight: true 
}).datepicker('update', new Date());

//chieu cao cua div child-appointment 
var chieucao1 =$('.child-appointment').offset().top;
//vi tri re chuot
var vitrirechuot = $('body,html').scrollTop();
//ket qua cua chieucao1 tru di vitrirechuot
var hieu = chieucao1 - vitrirechuot;

if(hieu>10 && hieu<300 ){
	$('.child-appointment').addClass('tora1');
}
// div hien ung xay ra khi cuon chuot toi div 
$(window).scroll(function(event) {
//chieu cao cua div child-appointment 
var chieucao1 =$('.child-appointment').offset().top;
//vi tri re chuot
var vitrirechuot = $('body,html').scrollTop();
//ket qua cua chieucao1 tru di vitrirechuot
var hieu = chieucao1 - vitrirechuot;


if(hieu>10 && hieu<300 ){
	$('.child-appointment').addClass('tora1');
}
});


var chieucao2 =$('.about').offset().top;
//vi tri re chuot
var vitrirechuot1 = $('body,html').scrollTop();
//ket qua cua chieucao1 tru di vitrirechuot
var hieu1 = chieucao2 - vitrirechuot1;

if(hieu1>10 && hieu1<300 ){
	$('.child-about').addClass('tora1');
}
$(window).scroll(function(event) {

//chieu cao cua div child-appointment 
var chieucao2 =$('.about').offset().top;
//vi tri re chuot
var vitrirechuot1 = $('body,html').scrollTop();
//ket qua cua chieucao1 tru di vitrirechuot
var hieu1 = chieucao2 - vitrirechuot1;


if(hieu1>10 && hieu1<300 ){
	$('.child-about').addClass('tora1');
}
});

var dorong=($(window).width());
	if(dorong<750){
		$('.sangphai').addClass('col-xs-push-1');
	}
	else if(dorong>750){
		$('.sangphai').removeClass('col-xs-push-1');
	}

})

$(window).resize(function(event) {
	//ham tinh do rong man hinh
	var dorong=($(window).width());
	if(dorong<750){
		
		$('.sangphai').addClass('col-xs-push-1');
	}
	else if(dorong>750){
		
		$('.sangphai').removeClass('col-xs-push-1');
	}



})

var dorong=($(window).width());
	if(dorong<850){
		$('.hieuung').addClass('thunho');
	}
	else if(dorong>850){
		$('.hieuung').removeClass('thunho');
	}

$(window).resize(function(event) {
	//ham tinh do rong man hinh
	var dorong=($(window).width());
	if(dorong<850){
		$('.hieuung').addClass('thunho');
	
	}
	else if(dorong>850){
		$('.hieuung').removeClass('thunho');
		
	}

});


