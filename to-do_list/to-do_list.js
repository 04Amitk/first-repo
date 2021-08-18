
function fetch(){
  var c=document.getElementById('confirm');
  var item=document.getElementById('t1').value;
  document.getElementById('items').innerHTML+="<li>"+item+"</li>";
  if(c.style.display='none')
  {c.style.display='block';}
  document.getElementById('t1').value=" ";
}

function hide() {
  var c=document.getElementById('confirm');
  if(c.style.display!='none')
  {c.style.display='none';}
}
