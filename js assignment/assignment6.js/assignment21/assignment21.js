function addele()
{
    var a=[];
   var num= document.getElementById("num").value;
   if(!num)
   {
       alert("add element plz");
   }
   a.push(num);
   document.getElementById("num").value = "";
   document.getElementById("result").value = `[${a}]`;
}