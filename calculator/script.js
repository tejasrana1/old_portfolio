var screen = document.querySelector(".screen");
var nms=[];
var nm;
var a="+";
var power;
var result=0;
var i;
var temp;
$(".numbers").click(function()
{
  var clicked=this.textContent;
  disp(clicked);
});
$(document).keypress(function(event)
{
  var pressed = event.key;
  disp(pressed);
});
function disp(input)
{
if(input=='=')
calculate(nms);
  if(input=='DEL')
{
  nms.pop();
}
else
  nms.push(input);

  if(input=='DEL')
  screen.textContent=screen.innerHTML.slice(0, screen.innerHTML.length - 1);
  else if(input!=="=")
  screen.textContent+=input;
  if(input=='C')
  {
    nms.length=0;
    screen.textContent="";
    result=0;
    a="+";
  }
}
function calculate(nms)
{
  for(i=0;i<nms.length;i++)
  {
    nm=0;
while(nms[i]>=0&&nms[i]<=9||nms[i]==".")
{
  nm=nm+nms[i];
  i++;
}
nm=parseFloat(nm);
result=parseFloat(result);
switch(a)
{
  case "+":
  result+=nm;
  break;
  case "-":
  result-=nm;
  break;
  case "*":
  result*=nm;
  break;
  case "/":
  result/=nm;
  break;
  case "^":
  result=Math.pow(result,nm);
  break;
  case "√":
  switch(temp)
  {
    case "+":
    result+=Math.sqrt(nm);
    break;
    case "-":
    result-=Math.sqrt(nm);
    break;
    case "*":
    result*=Math.sqrt(nm);
    break;
    case "/":
    result/=Math.sqrt(nm);
    break;
    default:
    result=Math.sqrt(nm);
    break;
  }
  break;
}
switch(nms[i])
{
  case "+":
  a="+";
  break;
  case "-":
  a="-";
  break;
  case "*":
  a="*";
  break;
  case "/":
  a="/";
  break;
  case "^":
  a="^";
  break;
  case "√":
  a="√";
  temp=nms[i-1];
  break;
}
}
screen.textContent=result;
nms.length=0;
input=result;
a="+";
}
