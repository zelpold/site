let ideas = document.querySelectorAll(".ideas");
let flag = true;
let anim = document.querySelector(".conversion");
let textp = document.querySelector(".new_idea > p");
let a = document.querySelector(".new_idea > a");

let texts  = [
	"Необычная анимированная кнопка, созданная с помощью обектов с абсолютным позиционированием",
	"Узор созданный с помощью градиента, который можно использовать в качестве фона, не загружая при этом картинок",
	"Красивая анимация теней на css"
];
let hrefs = [
	"https://html5book.ru/krasivye-knopki-dlya-sayta-chast-4",
	"https://html5book.ru/krasivye-gradienty/",
	"https://html5book.ru/css3-ten-bloka/"
]
let count_ideas = 0;
let pre_count = count_ideas;

function animation(){
	flag = false;
	let start = Date.now(); 
	let timer = setInterval(function() {
	  let timePassed = Date.now() - start;
	  if (timePassed >= 1000) {
		anim.style.width = 0;
		flag=true;
		clearInterval(timer); 
		return;
	  }
	  draw(timePassed);
	}, 20);

	
	function draw(timePassed) {
	  anim.style.width = timePassed / 1.25 + 'px';
		if(timePassed>=500){
			ideas[pre_count].style.display = "none";
			ideas[count_ideas].style.display = "block";
			anim.style.width = (1000-timePassed)/ 1.25 + 'px';
		}
	}
}

function prev(){
	if (!flag) return false;
	pre_count=count_ideas;
	count_ideas--;
	if(count_ideas < 0){
		count_ideas=ideas.length - 1;
	}
	animation();
	textp.textContent=texts[count_ideas];
	a.href = hrefs[count_ideas];	
}// JavaScript Document
function next(){
	if (!flag) return false;
	pre_count=count_ideas;
	count_ideas++;
	if(count_ideas >= ideas.length){
		count_ideas=0;
	}
	animation();
	textp.textContent=texts[count_ideas];
	a.href = hrefs[count_ideas];
}
