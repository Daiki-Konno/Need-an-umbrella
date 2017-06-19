function judge() {
 
  var ans = document.getElementById("answer");
  var body = document.body;
  var text = document.getElementsByClassName("text");
  var a;
 
  a=window.document.myform.a.value-0;
 

  if (a>=80) {
    ans.innerHTML="傘を持っていこう！";
    body.style.backgroundImage = "url(img/rainy.jpeg)";
  } else if(a>=40){
    ans.innerHTML="折りたたみ傘を持っていこう！";
    body.style.backgroundImage = "url(img/cloudy.jpeg)";
  }else{
  	ans.innerHTML="持っていかなくてもいいかも！";
    body.style.backgroundImage = "url(img/sunny.jpg)";
  }
}



  