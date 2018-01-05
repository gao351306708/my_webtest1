var H = $(window).height();
$('#mainContent').css("min-height",H-246);
var lanren = {
	changeClass: function (target,id) {
       	var className = $(target).attr('class');
       	var ids = document.getElementById(id);
       	if(className == 'on'){
       		document.getElementById("audio-btn1").className = 'off';
       		ids.pause();
       	}else{
       		document.getElementById("audio-btn1").className = 'on';
       		ids.play();
       	}
   	}
}
