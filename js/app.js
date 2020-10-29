// movement animation
const card = document.querySelector('.card');
const container = document.querySelector('.container');
// items
const title = document.querySelector('.title');
const sticker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');


// moving animation event
container.addEventListener("mousemove", e => {
   let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
   let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
   card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Animate in
container.addEventListener("mouseenter", e => {
   card.style.transition = `none`;
   // popout
   title.style.transform = `translateZ(100px)`;
   sticker.style.transform = `translateZ(120px) rotateZ(20deg)`;
   purchase.style.transform = `translateZ(100px)`;
   description.style.transform = `translateZ(95px)`;
   sizes.style.transform = `translateZ(120px)`;
});


// Animate out
container.addEventListener("mouseleave", e => {
   card.style.transform = `rotateY(0deg) rotateX(0deg)`;
   card.style.transition = `all 0.5s ease`;
   // popback
   title.style.transform = `translateZ(0px)`;
   sticker.style.transform = `translateZ(0px)`;
   purchase.style.transform = `translateZ(0px)`;
   description.style.transform = `translateZ(0px)`;
   sizes.style.transform = `translateZ(0px)`;
});



