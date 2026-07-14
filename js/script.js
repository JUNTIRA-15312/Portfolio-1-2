const bg = document.querySelector(".background");

for(let i=0;i<120;i++){

let num=document.createElement("span");

num.classList.add("number");

num.innerHTML=Math.random()>0.5?0:1;

num.style.left=Math.random()*100+"%";

num.style.animationDuration=(5+Math.random()*10)+"s";

num.style.fontSize=(15+Math.random()*35)+"px";

bg.appendChild(num);

}
