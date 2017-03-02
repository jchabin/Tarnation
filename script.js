var wot;
window.onload=function(){
	var wot=document.getElementById("wot");
	document.getElementById("bottom").style.top=wot.getBoundingClientRect().top+wot.getBoundingClientRect().height+10+"px";
}
function tarnation(){
	document.getElementById("hidden").style.diplay="block";
	var query;
	var results;
	var s=new XMLHttpRequest();
	s.open("GET","http://www.faroo.com/api?q="+query+"&key=key");
	s.onreadystatechange=function(){
		if(this.readystate==4&&this.status==200){
			results=this.responseText;
			results=results.results[Math.floor(Math.random()*results.results.length)].iurl;
			wot.src=results;
		}
	}
	s.send();
}
