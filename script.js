function tarnation(){
	var query;
	var results;
	var s=new XMLHttpRequest();
	s.open("GET","http://www.faroo.com/api?q="+query+"&key=key");
	s.onreadystatechange=function(){
		if(this.readystate==4&&this.status==200){
			results=this.responseText;
			results=results.results[Math.floor(Math.random()*results.results.length)].iurl;
			document.getElementById("wot").src=results;
		}
	}
	s.send();
}
