$(document).ready(function() { 

var o=document.getElementById("option").getElementsByTagName("dt"), linkArray=[];
for(var i=0,l=o.length;i<l;i++){
	linkArray[i]=document.createElement("span");
	linkArray[i].innerHTML='（<a href="/htmlmail/mailsample/sample'+i+'.html" class="iframe fancyBox" target="_blank">サンプル</a>）';
o[i].appendChild(linkArray[i]);
}

//fancyBox Opener
	$("a.fancyBox").fancybox({ 'speedIn': 10, 'speedOut': 100, 'width': 710, 'height': '90%' });

});

