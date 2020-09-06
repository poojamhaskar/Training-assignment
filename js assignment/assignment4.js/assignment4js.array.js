function printData()
{
    let ary=[];
   
     let fName=document.getElementById("fn").value;
     ary[0]=fName;
     let lName=document.getElementById("ln").value;
     ary[1]=lName;
     let deg=document.getElementById("de").value;
     ary[2]=deg;
     let phn=document.getElementById("mb").value;
     ary[3]=phn;
     let add=document.getElementById("ads").value;
     ary[4]=add;
     let city=document.getElementById("ci").value;
     ary[5]=city;
     let sts=document.getElementById("st").value;
     ary[6]=sts;
     let pin=document.getElementById("pc").value;
     ary[7]=pin;
     
       for(let i=0;i<ary.length;i++)
       {
       console.log(ary[i]);
       document.write(ary[i]);
       }
}