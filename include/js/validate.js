window.onload = function(){
    var pass="";

 
    var x = document.forms[0].elements;
    var i;
    //validating inline
    for(i=0;i<x.length;i++)
    {
    //for text
    if(x[i].type=="text"){
                          x[i].onfocus = function(){foc(this);}
                          x[i].onblur = function(){blu(this);}
                          x[i].onkeyup = function() {
                          validatetext(this);
                          }
                        }  
    //for email                      
    else  if(x[i].type=="email"){
                                  x[i].onfocus = function(){foc(this);}
                                  x[i].onblur = function(){blu(this);}
                                  x[i].onkeyup = function() {
                                  validateemail(this);}
                                  }
                                
    //for password                            
    else if(x[i].type=="password"){
                                    x[i].onfocus = function(){foc(this);}
                                    x[i].onblur = function(){blu(this);} 
                                    x[i].onkeyup = function() {
                                    validatepassword(this);
                                  }
                                }

      else if(x[i].type=="submit"){
                                        x[i].onclick =function(){ return validate();}
                                  }
      }
    }


//onfocus
function foc(x){
x.style.border="1px solid rgba(81, 203, 238, 1)";
x.style.outline="none";
var z=x.name + "error";
if(x.value.length==0 && !document.getElementById(z)){
var pel = document.createElement('p');
pel.id = z;
pel.textContent="enter "+x.name+" ";
if(x.name=="confirm"){pel.textContent=""+x.name+" "+ x.type+"";}
x.parentNode.appendChild(pel);}
}
function blu(x){
  if(x.value.length==0){x.style.border="1px solid red";x.style.outline="none";}
  else {x.style.border="1px solid lightgrey";x.style.outline="1px";}

}  
//validating textboxes
  function validatetext(x){
    var typ= x.getAttribute("class");
    var z=x.name + "error";
    var mil=x.getAttribute("min");
    var mal=x.getAttribute("max");
    if(mil==null) mil=3;
    if(mal==null) mal=6;
    var re=x.getAttribute("required");
    if(re=="true"){
                    if(typ=="number"){ validatenumber(x) ;}
                      else {
                              var fn = /^[A-Za-z0-9 ]/ ;l=x.value.length;
                              if(l==0){ document.getElementById(z).innerHTML = '&#10008; cannot be left blank';document.getElementById(z).style.color="red";return false;}
                              else if(l<mil){document.getElementById(z).innerHTML = "&#10008; it should be minimum "+mil+" char";document.getElementById(z).style.color="red";return false;}
                              else if(l>mal){document.getElementById(z).innerHTML = "&#10008; it cannnot be more than "+mal+" char";document.getElementById(z).style.color="red";return false;}
                              else if(l>=mil && l<=mal && fn.test(x.value)==true){document.getElementById(z).innerHTML = '&#10004;';document.getElementById(z).style.color="green";return true;}
                            }
                  }      
  }
  //validating number
  function validatenumber(x){
    var mal=x.getAttribute("max");
    if(mal==null) mal=10;
    var z=x.name + "error";
    var fnm = /^[0-9 ]{1,30}$/;
    l=x.value.length;
          if(l==0){ document.getElementById(z).innerHTML = '&#10008; number is required!';document.getElementById(z).style.color="red";return false;}
          else if(fnm.test(x.value)==false){document.getElementById(z).innerHTML = '&#10008; doesnt look like a number';document.getElementById(z).style.color="red";return false;}
          else if(l!=mal && fnm.test(x.value)==true){document.getElementById(z).innerHTML = '&#10008; it should be 10 digitts';document.getElementById(z).style.color="red";return false;}
          else if(l==mal && fnm.test(x.value)==true){document.getElementById(z).innerHTML = '&#10004;';document.getElementById(z).style.color="green";return true;}
         
  }
  //validating email
  function validateemail(x){
    var fn=  /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i    ;
     l=x.value.length;
     var z=x.name + "error";
     if(l==0){ document.getElementById(z).innerHTML = '&#10008; cannot be left blank';document.getElementById(z).style.color="red";return false}
     else if(l>0 && fn.test(x.value)==false){document.getElementById(z).innerHTML = '&#10008; Doesnt look like email';document.getElementById(z).style.color="red";return false;}
     else if(l>0 && fn.test(x.value)==true){document.getElementById(z).innerHTML = '&#10004;';document.getElementById(z).style.color="green";return true;}
         
    
  }
  //validTING PASSWORD AND CONFIRM PASSWORD
  function validatepassword(x){
     l=x.value.length;
     var typ= x.getAttribute("class");
     var fn =  /^[A-Za-z0-9!@#$%^&*()_]/;
     var z=x.name + "error";
     var mal=x.getAttribute("max");
     var mil=x.getAttribute("min");
     if(mil==null) mil=6;
     if(mal==null) mal=10;
    //check password type
        if(typ=="confirm"){
    // check confirm password
      if(l==0){ document.getElementById(z).innerHTML = '&#10008; cannot be left blank';document.getElementById(z).style.color="red";}
     else if(l< pass.length){document.getElementById(z).innerHTML = '';document.getElementById(z).style.color="red";return false;}
     else if(l>= pass.length && pass!=x.value){document.getElementById(z).innerHTML = '&#10008; didnt match';document.getElementById(z).style.color="red";return false;}
     else if(l==pass.length && pass==x.value ){document.getElementById(z).innerHTML = '&#10004;';document.getElementById(z).style.color="green";pc=1;return true;}
     }
     //check password
     else {
     if(l==0){ document.getElementById(z).innerHTML = '&#10008; cannot be left blank';document.getElementById(z).style.color="red";return false;}
     else if(l>mal){document.getElementById(z).innerHTML = '&#10008; password cannot be more than '+mal+' chars';document.getElementById(z).style.color="red";return false;}
     else if(l<mil){document.getElementById(z).innerHTML = '&#10008; password should be minimum '+mil+' chars';document.getElementById(z).style.color="red";return false;}
     else if(l>=mil && l<=x.getAttribute("max") && fn.test(x.value)==true){document.getElementById(z).innerHTML = '&#10004;';document.getElementById(z).style.color="green";pc=1;pass=x.value;return true;}
    } 
    
  }

  //validating FORM

function validate(){

 var x = document.forms[0].elements;
 //for(var i=0; i<x.length;i++)
  //alert(x[i].type);
        var t=0,rc=0,rb=0;cb=0,cc=0,rn='';
        for(var i=0;i<x.length;i++)
        {
                      var ckfn = /^[A-Za-z0-9 ]/ ;
                      var cknum = /^[0-9 ]{1,30}$/ ;    
                      var ckem=  /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i    ;
                      var ckpd =  /^[A-Za-z0-9!@#$%^&*()_]/;
                      var cls = x[i].getAttribute("class");
                      var typ = x[i].type;
                      var re= x[i].getAttribute("required");
                      var mil=x[i].getAttribute("min");
                      var mal=x[i].getAttribute("max");
            if(typ=="text" && cls=="number" ){  if(mal==null) mal=10;
                                                   if(x[i].value.length<mal) {x[i].focus();x[i].style.border="1px solid red";return false;}
                                                   else if(x[i].value.length>=mal && cknum.test(x[i].value)==false){x[i].focus();x[i].style.border="1px solid red";return false;}
                                            }
            else if(typ == "text" && re=="true") { if(mil==null) mil=3;if(mal==null) mal=6;
                                                   if(x[i].value.length<mil) {x[i].focus();x[i].style.border="1px solid red";return false;}
                                                   else if(x[i].value.length>mal) {x[i].focus();x[i].style.border="1px solid red";return false;}
                                                   else if(x[i].value.length>mil && x[i].value.length<mal && ckfn.test(x[i]).value==false){x[i].focus();x[i].style.border="1px solid red";return false;};
                              }                                     
            else if(typ=="email" && re=="true"){if(x[i].value.length==0) {x[i].focus();x[i].style.border="1px solid red";return false;}
                                  else if(ckem.test(x[i].value)!=true){x[i].focus();x[i].style.border="1px solid red";return false;}  
                                 }
            else if(typ=="password" && cls=="confirm"){ 
                                                        if(x[i].value.length==0) {x[i].focus();x[i].style.border="1px solid red";return false;}
                                                        if(x[i].value!=pass){x[i].focus();x[i].style.border="1px solid red";return false;}
                                                      }
            else if(typ=="password"){ if(mil==null) mil=3;if(mal==null) mal=6;
                                      if(x[i].value.length<x[i].getAttribute("min")) {x[i].focus();x[i].style.border="1px solid red";return false;}
                                      else if(x[i].value.length>x[i].getAttribute("max")) {x[i].focus();x[i].style.border="1px solid red";return false;}
                                      else if(x[i].value>0 && ckpd.test(x[i].value)==false){x[i].focus();x[i].style.border="1px solid red";return false;}
                                    }
            else if(typ=="radio"){  
                                  var l= x[i].parentNode.children.length;
                                  for(var j=0;j<l;j++)
                                   {
                                    if(x[i].parentNode.children[j].type=="radio"){rb++;} 
                                    if(x[i].parentNode.children[j].checked==true){rc++;x[i].style.outline="0px";} 

                                   }
                                  if(rb>0 && rc==0){x[i].focus();x[i].style.outline="1px solid red";return false;}
                                  else {rb=0;rc=0;}
                                  }                               
            else if(typ=="checkbox"){
                                      var z=x.name + "error";
                                    var mil= x[i].parentNode.getAttribute("min");
                                    var mal= x[i].parentNode.getAttribute("max");
                                    if(mil==null) mil=1;
                                    if(mal==null) mal=3;
                                    var l= x[i].parentNode.children.length;
                                    for(var j=0;j<l;j++)
                                     {
                                      if(x[i].parentNode.children[j].type=="checkbox"){cb++;} 
                                      if(x[i].parentNode.children[j].checked==true){cc++;x[i].style.outline="0px";} 

                                     }
                                   
                                    if(cb>0 && cc<mil ){
                                      for(var k=0;k<mil;k++){
                                      if(x[i+k].checked==false)
                                      {x[i+k].focus();x[i+k].style.outline="1px solid red";return false;}
                                      else {x[i+k+1].focus();x[i+k+1].style.outline="1px solid red";return false;}
                                      }
                                    }else if(cc>mal){alert("cannot be checked more than "+mal+" items");return false;}
                                    else {cb=0;cc=0;}
                                    }
            else if(typ=="select-one"){
                                        if( x[i].value == "0" || x[i].value == ""|| x[i].value == "-1" || x[i].value == " " ){
                                                                  x[i].focus();
                                                                  x[i].style.border="0px";
                                                                  x[i].style.outline="1px solid red";
                                                                  return false;
                                                                } else if(x[i].value!="0"){x[i].style.outline="0px";}
                                      }   
        }
        alert("sign up successful");
        
    }
