$(document).ready(function() { 

var o=document.getElementById("option").getElementsByTagName("td"), linkArray=[];
for(var i=0;i<4;i++){
	linkArray[i]=document.createElement("span");
	linkArray[i].innerHTML='（<a href="/htmlmail/mailsample/sample'+i+'.html" class="iframe fancyBox" target="_blank">サンプル</a>）';
}
o[1].appendChild(linkArray[0]);
o[5].appendChild(linkArray[1]);
o[9].appendChild(linkArray[2]);
o[11].appendChild(linkArray[3]);

//fancyBox Opener
	$("a.fancyBox").fancybox({ 'speedIn': 10, 'speedOut': 100, 'width': 710, 'height': '90%' });

});

