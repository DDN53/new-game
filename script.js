function key(event) {
    if (event.which==13)//Enter
    {
     
      if (rw==0) {
        fid= f();

      rw=setInterval(run,100);
      rs.play();
      bw=setInterval(b,100);
      sw=setInterval(updateScore,100);
      fw=setInterval(move,400);
      
  
      
      
     }
      
    }
   
    if (event.which==32)//space
    {
      //updateScore();
      
      if(jw==0){
        clearInterval(rw);
        rs.pause();
        rw =-1;
        fid= f();
        jw=setInterval(jump,100);
        js.play();
        bw=setInterval(b,100);
       // bs.play();
        sw=setInterval(updateScore,100);
      fw=setInterval(move,400);

        
        
    }
  }
    if(event.which==	16){

      if(ww==0){
        clearInterval(rw);
        rw=-1;
        clearInterval(dw);
        dw=-1;
        rs.pause();
        fid= f();
      ww=setInterval(walk,100);
      ws.play();
      bw=setInterval(b,100);
      bs.play();
      sw=setInterval(updateScore,100);
      fw=setInterval(move,1000);
    }
    }

    if(event.which==	9){

      if(jdw ==0){
        clearInterval(ww);
        clearInterval(jw);
        JW=-1;
        clearInterval(rw);
        rw=-1;
        rs.pause();
        fid= f();

      jdw=setInterval(jumpd,100);
      JAs.play();
      rw=setInterval(run,100);
      
      bw=setInterval(b,100);
      bs.play();
      sw=setInterval(updateScore,100);
      fw=setInterval(move,1000);
    }
    }
    if(event.which==	17){

      if(aw ==0){
       
        clearInterval(jw);
        clearInterval(rw);
        rw.pause();

        fid= f();
        aw=setInterval(Attack,100);
        ws.play();

       ww=setInterval(walk,100);
      bw=setInterval(b,100);
      bs.play();
      sw=setInterval(updateScore,100);
      fw=setInterval(move,800);
    }
    }


    
   }
    

   var rs=new Audio("mountain-path-125573.mp3");
   rs.loop=true;
   var js=new Audio("risk-136788.mp3");
   var ds=new Audio("BossBattle_0050_BPM140_Cm_Goddess-of-Fate_L.mp3");
   var ws=new Audio("Enigma-Long-Version-Complete-Version.mp3");
   var JAs=new Audio("Powerful-Trap-.mp3");
   var aAs=new Audio("BossBattle_0065_BPM126_Dbm_Durandal_L.mp3");
   var bs=new Audio("Gaming.mp3");
    

    var m=200;
    function f() {
    

 for(var y=0;y<1;y++){


     var i= document.createElement("img");
     i.src="fire333.webp";
     i.className="f";
    i.style.marginLeft= m + "px";
    i.id="a"+y;
    m  = m + 500;
    document.getElementById("b").appendChild(i);
       }
       
      
      
       for(var y=10;y<20;y++){


         var c = document.createElement("img");
         c.src="fire.2.webp";
         c.className="f1";
       c.style.marginLeft= m + "px";
       c.id="a"+y;
        m  = m + 500;
        document.getElementById("b").appendChild(c);
           }





          //  for(var y=20;y<30;y++){


          //    var d = document.createElement("img");
          //   d.src="1200w.webp";
          //   d.className="f1";
          //   d.style.marginLeft= m + "px";
          //   d.id="a"+y;
          //   m  = m + 500;
          //   document.getElementById("b").appendChild(d);
          //      }
          


    }
   
    var rw=0;
    var r=0;
    function run() {
     var ring= document.getElementById("boy");
     r=r+1;
     if (r==11) {
      r=1;
      
     }
      ring.src="Run ("+r+").png";
     // dimg.style.marginTop="400px"
     // document.getElementById("e").style.visibility="visible";
    }

    var bw=0;
    var x=0;

    function b(){
      x=x-20;
      document.getElementById("b").style.backgroundPositionX= x+"px";
    }
    var sw=0;
    var u=0;
    function updateScore() {
      u=u+5;
     document.getElementById("score").innerHTML=u;
      
    }
    var fw=0;
    function move(){
      for(var y=0;y<10;y++){

        var d= document.getElementById("a"+y);
        var z= getComputedStyle(d);
      var  p = parseInt(z.marginLeft);
      p = p-10;
      d.style.marginLeft=p+"px";
     
     // alert(p);
      
      
      //   if (p>80 & p<190) {


      //    // if (mt>390) {
          
        

      // //        clearInterval(rw);
      // //  rs.play();
      // //      clearInterval(jw);
      // //      jw =-1;
      // //     clearInterval(bw);
      // //    clearInterval(fw);
      // //     clearInterval(sw);

      // //      dw=setInterval(dead,100);
      // //      ds.play();
      //    }
      //  }
        
      }
     

   }
    

      
    
    

//     for(var y=10;y<20;y++){

//       var d= document.getElementById("c"+y);
//       var z= getComputedStyle(d);
//     var  p=parseInt(z.marginLeft);
//     //alert(p);
//     p=p-20;
//     d.style.marginLeft=p+"px";
    
  
//   }
//   for(var y=20;y<50;y++){

//     var d= document.getElementById("d"+y);
//     var z= getComputedStyle(d);
//   var  p=parseInt(z.marginLeft);
//   //alert(p);
//   p=p-20;
//   d.style.marginLeft=p+"px";
  

// }
//  }
    
   var ww=0;
    var w=0;
function walk() {
 var wimg= document.getElementById("boy");
 w=w+1;
 wimg.src="Walk ("+w+").png";
 
 if (w ==10) {
  w=2;
  clearInterval(rw);
  if (bw==0) {
    bw=setInterval(b,100);
    
   }
   if (fid==0) {

    fid=f();
   }
   if (fw==0) {
    fw=setInterval(move,100);
    
   }
   if (sw==0) {
    sw=setInterval(updateScore,100);
    
   }
 }

  
}
  var mt=410;
    var jw=0;
    var j=1;
    function jump() {
      var jimg=document.getElementById("boy");
      if (j<=5) {//1-6 images
  mt=mt-30;
        
      }if (j>=6) {//7-12 images
  mt=mt+35;
        
      }
      jimg.style.marginTop=mt+"px";
      j=j+1;
      if(j==10){
        j=1;
        clearInterval(jw)
        jw=0;
       rw= setInterval(run,100);
       
       if (bw==0) {
        bw=setInterval(b,100);
        
       }
       if (fid==0) {

        fid=f();
       }
       if (fw==0) {
        fw=setInterval(move,100);
        
       }
       if (sw==0) {
        sw=setInterval(updateScore,100);
        
       }
       
      }
      jimg.src="Jump ("+j+").png";
    }
    var dw=0;
    var d=1;
    function dead() {
     var dimg=document.getElementById("boy");
     d=d+1;
     if (d==10) {
      d=9;
      dimg.style.marginTop="400px"
      document.getElementById("end").style.visibility="visible";
      document.getElementsById("endscore").innerHTML=u;
     }
     dimg.src="Dead ("+d+").png";
      
    }
    

    

    var aw=0;
    var a=1;
    function Attack() {
     var dimg=document.getElementById("boy");
     a=a+1;
     if (a==10) {
      a=2;
     clearInterval(rw);
     clearInterval(jw);

     if (bw==0) {
      bw=setInterval(b,100);
      
     }
     if (fid==0) {

      fid=f();
     }
     if (fw==0) {
      fw=setInterval(move,100);
      
     }
     if (sw==0) {
      sw=setInterval(updateScore,100);
      
     }

     }
     dimg.src="Attack ("+a+").png";
    }

  
 
  var mt=410;
    var jdw=0;
    var j=1;
    function jumpd() {
      var jdimg=document.getElementById("boy");
    
      if (j<=5) {//1-6 images
  mt=mt-30;
        
      }if (j>=6) {//7-12 images
  mt=mt+40;
        
      }
      jdimg.style.marginTop=mt+"px";
      j=j+1;
      if(j==10){
        j=1;
        clearInterval(jdw)
        jdw=0;

       rw= setInterval(run,100);
       
       if (bw==0) {
        bw=setInterval(b,100);
        
       }
       if (fid==0) {

        fid=f();
       }
       if (fw==0) {
        fw=setInterval(move,100);
        
       }
       if (sw==0) {
        sw=setInterval(updateScore,100);
        
       }
       jdimg.src="JumpAttack("+j+").png";
      }
      
    }
    function re() {
      location.reload();
      
    }
    function r() {
      location.replace();
      
    }
    