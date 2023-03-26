function showTime(){
    var dt=new Date();
    var hh=dt.getHours();
    var mm=dt.getMinutes();
    var ss=dt.getSeconds();
    var h1,m1,s1;
 if(hh<10)
 h1="0"+hh;
 else
 h1=hh;
 if(mm<10)
 m1="0"+mm;
 else
 m1=mm;
 if(ss<10)
 s1="0"+ss;
 else
 s1=ss;
 var time1=h1+":"+m1+":"+s1;
 document.getElementById("sp2").innerHTML=time1;
 
 }
 function call()
 {
 setInterval(showTime,1000);
 }
 