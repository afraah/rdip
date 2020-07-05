//TASK 1

function calc(){
   //alert("Hello");
	op =document.getElementById('ops').value;
   
	if(op=="Addition"){
    a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = Number(a)+Number(b);
	//document.getElementById("ans").value = "Answer:"+c;
	document.getElementById("ans").innerHTML= "Answer: "+c;
	return false;
	}

	if(op=="Subtraction"){
		a = document.getElementById('a').value;
		b = document.getElementById('b').value;
		c = a-b;
		document.getElementById("ans").innerHTML= "Answer: "+c;
		return false;
	}
	if(op=="Multiplication"){
		a = document.getElementById('a').value;
		b = document.getElementById('b').value;
		c = a*b;
		document.getElementById("ans").innerHTML= "Answer: "+c;
		return false;
	}
	if(op=="Division"){
		a = document.getElementById('a').value;
		b = document.getElementById('b').value;
		c = a/b;
		document.getElementById("ans").innerHTML= "Answer: "+c;
		return false;
	}
	if(op=="Percentage"){
		a = document.getElementById('a').value;
		b = document.getElementById('b').value;
		c = (a/100)*b;
		document.getElementById("ans").innerHTML= "Answer: "+c;
		return false;
	}

	else if(op=="Absolute Value"){
		a = document.getElementById('a').value;
		c = Math.abs(Number(a));
		document.getElementById("ans").innerHTML= "Answer: "+c;
		return false;
	}
	else if(op=="Square Root"){
		a = document.getElementById('a').value;
		if(Number.isInteger(a)==false){
			document.getElementById("ans").innerHTML="Please enter an integer.";
			return false;
		}
		c = Math.sqrt(Number(a));
		c=c.toFixed(3);

		document.getElementById("ans").innerHTML= "Answer: "+c;
		return false;
	}

	
}

$(document).ready(function(){
			  $("#ops").change(function(){
			  	if(ops.value=="Square Root" || ops.value=="Absolute Value"){
			    $("#b").hide();
			     $("#labelb").hide();
			 }
	 });
			 
});

function tryagain(){
	document.location.reload(true);
	return false;
}


//TASK 2

function validate(){
	 var nameRegex = /^[$A-Z_][0-9A-Z_$]*$/i;
	  var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	  var phoneRegex = /^(\+91-|\+91|0)?\d{10}$/;

	  if(nameRegex.test(document.valform.name.value)==false){
	  	alert("Invalid Name");
	  	return false;
	  }

	  if(phoneRegex.test(document.valform.phone.value)==false){
	  	alert("Invalid Phone Number");
	  	return false;
	  }

	  if(emailRegex.test(document.valform.email.value)==false){
	  	alert("Invalid Email ID");
	  	return false;
	  }

	  alert("Successful Validation!");

	  return false;  
}


//TASK 3


function palindrome(){
	string = document.getElementById('pal').value;
	string = string.toLocaleLowerCase();
  	if( Array.from(string).toString() === Array.from(string).reverse().toString() ){
  		alert("It is a Palindrome!");
  		return false;
  	}
  	else{
  		alert("It is NOT a Palindrome.");
  		return false;
  	}
}

function anagram(){
	stringA = document.getElementById('an1').value;
	stringB=document.getElementById('an2').value;
       stringA = stringA.replace(/[^\w]/g, '');
        stringA = stringA.toLowerCase();
        stringB = stringB.replace(/[^\w]/g, '');
        stringB = stringB.toLowerCase();
        stringA = stringA.split('');
        stringA = stringA.sort().join('');
        stringB = stringB.split('');
        stringB = stringB.sort().join('');
       
       if(stringA===stringB)
       {
           alert("They are Anagrams!");
           return true;
       }
       else{
        alert("They are NOT Anagrams.");
        return false;
       }
   
}


//TASK 4

function survive(){

	var map = new Map([[0 ,"Human"],  
        [1, "Cockroach"], [2, "Nuclear Bomb"]]); 

	n1= Number(document.getElementById('num1').value);
	n2=Number(document.getElementById('num2').value);
   

    if(n1<0 || n1>1000 || n2<0 || n2>1000){
    	alert("Enter numbers in the range 1-1000!");
    	return false;
    }

    n1=n1%3;
    n2=n2%3;
    
    //alert("helo");

    if( n1 == n2){
    	alert(map.get(n1)+" VS "+map.get(n2)+": It's a TIE!");
    	return false;   	
    }

    

    if(n1==0 && n2==1 || (n1==1 && n2==0)){
    	alert(map.get(n1)+" VS "+map.get(n2) +": Human survives!");
    	return false;
    }
    else if(n1==1 && n2==2 || (n1==2 && n2==1)){
	alert(map.get(n1)+" VS "+map.get(n2) +": Cockroach survives!");
    	return false;
    }
    else if(n1==0 && n2==2 || (n1==2 && n2==0)){
	alert(map.get(n1)+" VS "+map.get(n2) +": Human Dies!");
    	return false;
    }
   
}

function genran(){
	//var num=Math.floor(Math.random() * 1000) +1;   //1 to 1000
   // alert("hello");

	document.getElementById("num1").value=Math.floor(Math.random()*1000);
    document.getElementById("num2").value=Math.floor(Math.random()*1000);
}
