<!DOCTYPE html>
<html>
<head>
	<title>Birthday Wish</title>	
	<style type="text/css">
		*{
			padding: 0;
			margin: 0;
			font-family: sans-serif;
			box-sizing: border-box;
		}
		body{
			background: #77a;
			width: 100%;
			height: 100vh;
			display: flex;
			justify-content: center;
			align-items: center;
			overflow-y: auto;
		}
		.container1{
			background: #0ff;
			width: 400px;
			height: 600px;
			padding: 10px;
			display: flex;			
			justify-content: center;
			align-items: center;
			flex-direction: column;
			border-radius: 5px;
			box-shadow: 5px 5px 20px rgba(0,0,0,0.5); 
		}
		.container1 h1,.container1 h2,.container1 h3{
			margin: 10px;
			text-align: center;
		}
		.container1 .wish-box{
			width: calc(100% - 4px);
			height: 55%;
			margin: 10px 0;
			background: #f50;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
		}
		.container1 .wish-box input{
			width: calc(100% - 50px);
			height: 50px;
			margin: 10px 0;
			padding: 10px;
			font-size: 20px;
			border-radius: 4px;
			outline-color: blue;
		}
		.container1 .wish-box button{
			width: calc(100% - 100px);
			height: 50px;
			margin: 10px 0;
			padding: 10px;
			font-size: 20px;
			border-radius: 2rem;
			border: none;
			outline: none;			
			cursor: pointer;
			background: #f50;
			color: #fff;
			letter-spacing: 2px;
			box-shadow: 3px 3px 10px rgba(0,0,0,0.5);
		}
		.container1 .wish-box button:hover{
			background: #0ff;
			color: #000;
			box-shadow: 0px 0px 0px #fff;
		}
		@media (max-width: 980px) and (min-height: 600px){			
			body{
				height: 100vh;
			}
			.container1{			
				width: calc(100% - 100px);												
				height: 1000px;
			}
			.container1 h1{
				font-size: 70px;
			}
			.container1 h2{
				font-size: 60px;				
			}
			.container1 h3{
				font-size: 50px;
			}
			.container1 .wish-box input,.container1 .wish-box button{
				margin: 20px 0;
				height: 100px;
				font-size: 50px;
			}
		}
		@media (max-width: 980px) and (max-height: 700px){
			body{
				height: 200vh;
			}
		}
		@media (max-width: 600px) and (max-height: 650px){
			body{
				height: 600px;
			}
		}
	</style>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</head>
<body>
	<div class="container1">
		<h1>Welcome to this page</h1>
		<h2>This is <span>Navindhan</span> Birthday Wishes Page</h2>		
		<h3>If you want to wish him,<br/> You can wish here</h3>
		<div class="wish-box">
			<input type="text" id="name" placeholder="Enter Your Name">
			<input type="text" id="msg" placeholder="Enter Your Wish">
			<button id="btn">Submit</button>
		</div>
	</div>
	<span id="ip"></span>
</body>
<script type="text/javascript">
	var container1=document.querySelector('.container1');
	var span=document.querySelector('.container1 h2 span');
	var ip_span=document.querySelector('span#ip');
	var bDay=1;
	var bMonth=5;	
	// var ip = 0;
	var date = new Date();
	var daynumber=date.getDate();
	var timeList=[];			
	var monthnumber=date.getMonth()+1;		
	var yearnumber=date.getFullYear();	
	timeList=[daynumber,monthnumber,yearnumber];
	// var a=0;
	window.onload=function(){			
		var setInt=setInterval(timeInt,500);
		
		// $.ajax({
		// 	url:"https://geoip-db.com/jsonp/",
		// 	dataType:"jsonp"					
		// })
		// jQuery.get("http://ipinfo.io",function(e){
		// 	var a=e.ip;

		// 	// ip_span.innerText=a;			
		// },"jsonp")	
		var a="<?php echo $_SERVER['REMOTE_ADDR']; ?>";
		// var a="<?php 
		// echo $_SERVER['HTTP_CLIENT_IP'];
		 ?>";
		alert(a);							
		if(timeList[0]!=bDay){				
			container1.style.visibility="visible";
		}
		else{
			container1.style.visibility="hidden";					
		}		
	}	
	// function callback(response){		
	// 	const ip = response.IPv4;
	// 	ip_span.innerText=ip;		
	// }		
	function timeInt(){
		span.style.color=rgbGen();		
	}
	function rgbGen(){
		//Generate the three color Streams
		var red=Math.floor(Math.random()*(256));
		var green=Math.floor(Math.random()*(256));
		var blue=Math.floor(Math.random()*(256));
		
		var gencolor="rgb("+red.toString()+", "+green.toString()+", "+blue.toString()+")";
		return gencolor;	
	}
	
</script>
</html>