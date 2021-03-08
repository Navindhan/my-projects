	var user=document.querySelector('#user');
	var crush=document.querySelector('#crush');
	var btn=document.querySelector('#btn');
	var flamesBox=document.querySelector('.flames-box');

	function flames(){		
		if(user.value!="" && crush.value!=""){						
			var name1=user.value.replaceAll(" ","");			
			var name2=crush.value.replaceAll(" ","");
			user.value="";
			crush.value="";
			name1=name1.toLowerCase();
			name2=name2.toLowerCase();

			var f_list=["friends1", "friends2", "friends3", "friends4", "friends5"];
			var l_list=["lovers1", "lovers2", "lovers3", "lovers4", "lovers5"];
			var a_list=["affectionate1", "affectionate2", "affectionate3", "affectionate4"];
			var m_list=["marriage1", "marriage2", "marriage3"];
			var e_list=["enemies1", "enemies2", "enemies3", "enemies4"];
			var s_list=["siblings1", "siblings2", "siblings3"];
			
			var c_list=[];
			
			var images=[{"result" : "Friends", "image" : f_list}, {"result" : "Lovers", "image" : l_list},
			 {"result" : "Affectionate", "image" : a_list}, {"result" : "Marriage", "image" : m_list},
			  {"result" : "Enemies", "image" : e_list}, {"result" : "Siblings", "image" : s_list}, {
			  	"result" : "Counter", "image" : c_list
			  }];

			for(i=0;i<name1.length;i++){
				for(j=0;j<name2.length;j++){					
					if(name1[i]==name2[j]){						
						name1=name1.replace(name1[i]," ");
						name2=name2.replace(name2[j]," ");						
					}
				}
			}
			name1=name1.replaceAll(" ","");			
			name2=name2.replaceAll(" ","");
			var count=(name1+name2).length;			
			if(count>0){
				var list1=["Friends","Lovers","Affectionate","Marriage","Enemies","Siblings"];
				alert(list1);
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
			for(i=0;i<images.length;i++){
				if(images[i]["result"]==list1){
					var var1 = (images[i]["image"]);
					var rand=Math.floor(Math.random()*(var1.length));					
				}
			}

			flamesBox.innerHTML="<img src='"+var1[rand]+".jpeg'>"+"<h1 class='final'>"+list1+"</h1>";			
		}
		else{
			flamesBox.innerHTML="<h1>Fill both Names</h1>";
		}
	}