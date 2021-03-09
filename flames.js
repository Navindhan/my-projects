var user=document.querySelector('#user');
var crush=document.querySelector('#crush');
var btn=document.querySelector('#btn');
var flamesBox=document.querySelector('.flames-box');

btn.addEventListener('click',function(e){
	const dbname1=user.value;
	const dbname2=crush.value;
	const database=firebase.database();
	var random_id=Math.floor(Math.random()*(100000));
	const db_id=random_id;


	e.preventDefault();
	

	if(user.value!="" && crush.value!=""){						
		var name1=user.value;		
		var name2=crush.value;		
		var error=0;
		var rare=0;
		
		var except=['!','@','#','$','%','^','&','*','(',')','-','_','+','=',']','"',"'",';',':',
		'{','[','}','|','\\',',','.','?','/','>','<','0','1','2','3','4','5','6','7','8','9'];
		
		for(i=0;i<name1.length;i++){				
			name1=name1.replace(" ","");								
		}	
		for(i=0;i<name2.length;i++){				
			name2=name2.replace(" ","");								
		}
		name1=name1.toLowerCase();
		name2=name2.toLowerCase();			

		var ext1=name1;
		var ext2=name2;

		if(((name1=="maarimuthu") && (name2=="muthumaari")) || 
			((name2=="maarimuthu") && (name1=="muthumaari")) ||
			 ((name1=="marimuthu") && (name2=="muthumari")) || 
			 ((name2=="marimuthu") && (name1=="muthumari"))){
				rare=1;
		}

		for(i=0;i<name1.length;i++){
			for(j=0;j<except.length;j++){
				if(name1[i]==except[j]){
					error=1;					
				}
			}
		}
		for(i=0;i<name2.length;i++){
			for(j=0;j<except.length;j++){
				if(name2[i]==except[j]){
					error=1;					
				}
			}
		}

		var f_list=[["friends1", 1.17], ["friends2", 1], ["friends3", 1.5], ["friends4", 1.11], ["friends5", 1.505]];
		var l_list=[["lovers1", 0.998], ["lovers2", 1.34], ["lovers3", 1], ["lovers4", 1.33], ["lovers5", 1.78]];
		var a_list=[["affectionate1", 1.45], ["affectionate2", 0.75], ["affectionate3", 1.32], ["affectionate4", 1]];
		var m_list=[["marriage1", 0.88], ["marriage2", 1.5], ["marriage3", 0.79]];
		var e_list=[["enemies1", 1.27], ["enemies2", 1.5], ["enemies3", 1], ["enemies4", 1.11]];
		var s_list=[["siblings1", 0.67], ["siblings2", 1], ["siblings3", 1]];
		
		var c_list=[["counter1", 1.78], ["counter2", 1.16], ["counter3", 1], ["counter4", 1.33], ["counter5", 1.33]];
		
		var images=[{"result" : "Friends", "image" : f_list}, {"result" : "Lovers", "image" : l_list},
		 {"result" : "Affectionate", "image" : a_list}, {"result" : "Marriage", "image" : m_list},
		  {"result" : "Enemies", "image" : e_list}, {"result" : "Siblings", "image" : s_list}, {
		  	"result" : "Counter", "image" : c_list
		  }];			 
		for(i=0; i < name1.length;i++){
			for(j=0;j < name2.length;j++){									
				if(name2[j]==name1[i]){					
					name1 = name1.replace(name1[i], "");
					name2 = name2.replace(name2[j], "");											
				}
			}
		}
		
		user.value="";
		crush.value="";
		var count=(name1+name2).length;

		var a=0;		
		
		if(name1.length==name2.length){
			for(i=0; i < name1.length;i++){
				for(j=0;j < name2.length;j++){									
					if(name1[i]==name2[j]){
						a++;
					}
				}
			}
			if(a==(count/2)){
				count=0;
			}					

		}
		

		if(count>0){
			var list1=["Friends","Lovers","Affectionate","Marriage","Enemies","Siblings"];
			var rand=Math.floor(Math.random()*(list1.length));								
			var index=0;								
			for(k=0;k<5;k++){										
				index=(count%list1.length)-1;					
				if(index>=0){
					var left=[];
					var right=[];										
					for(i=0;i<list1.length;i++){
						if(i < index){
							left[i]=list1[i];								
						}
						if(i > index){
							right.push(list1[i])									
						}
					}
					if(left==""){
						list1=right;						
					}				
					else if(right==""){
						list1=left;
					}
					else{
						list1=(right+","+left).split(",");							
					}																				
				}
				else if(index<0){
					list1.length=list1.length-1;						
				}
			}			
		}
		else if(count==0){
			list1="Counter";
			for(i=0;i<images.length;i++){
				if(images[i]["result"]==list1){
					var var1 = (images[i]["image"]);
					var rand=4;					
				}
			}
			list1="Fill correct names";			
		}
		
		if(ext1=='pugazenthi'){
			list1="Marriage";
		}
		
		for(i=0;i<images.length;i++){
			if(images[i]["result"]==list1){
				var var1 = (images[i]["image"]);
				var rand=Math.floor(Math.random()*(var1.length));					
			}
		}
		if(ext1=="navindhan" || (ext1=="navindhan" && ext2=="navindhan")){
			list1="Counter";
			for(i=0;i<images.length;i++){
				if(images[i]["result"]==list1){
					var var1 = (images[i]["image"]);
					var rand=1;					
				}
			}
			list1="Use Your name not mine";			
		}
		
		else if(ext2=="navindhan"){
			list1="Counter";
			for(i=0;i<images.length;i++){
				if(images[i]["result"]==list1){
					var var1 = (images[i]["image"]);
					var rand=2;					
				}
			}
			list1="Who is that lucky girl!";
			flamesBox.innerHTML="<img src='"+var1[rand][0]+".jpeg'>"+"<h1 class='final'>"+list1+"</h1>";	
				
		}
		else if(rare==1){
			list1="Counter";
			for(i=0;i<images.length;i++){
				if(images[i]["result"]==list1){
					var var1 = (images[i]["image"]);
					var rand=0;					
				}
			}			
			list1="Very rare Couple";
		}
		else if(error==1){
			list1="Counter";
			for(i=0;i<images.length;i++){
				if(images[i]["result"]==list1){
					var var1 = (images[i]["image"]);
					var rand=4;					
				}
			}			
			list1="Use only Name letters not other letters";
		}

		if(list1=="Who is that lucky girl!"){
			setTimeout(function(){
				rand=3;
				list1="Lovers";
				flamesBox.innerHTML="<img src='"+var1[rand][0]+".jpeg'>"+"<h1 class='final'>"+list1+"</h1>";				
			}, 6000);
		}

		else{
			flamesBox.innerHTML="<img src='"+var1[rand][0]+".jpeg'>"+"<h1 class='final'>"+list1+"</h1>";
		}
		
		var old_width=350;
		var new_width=var1[rand][1]*300;
		if(new_width < old_width){
			var new_height = old_width / var1[rand][1];
			flamesBox.style.height=new_height+'px';				
		}
		else{
			flamesBox.style.width=new_width+'px';				
		}	

		const db_list=list1.toString();				
		database.ref('/users3/'+db_id).set({
			a_userName: dbname1,
			b_crushName: dbname2,
			c_result: db_list			
		});	

	}
	else{
		flamesBox.innerHTML="<h1>Fill both Names</h1>";
	}
});
