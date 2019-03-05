
const duplicateHtml = (element, quantity) => {
const newContent= new Array(quantity).fill(element.innerHTML).join('')
element.innerHTML = newContent
} 



//here will grab our crosses element

//duplicate it 10 times
duplicateHtml(document.querySelector('#crosses'),10)
anime({
  targets: '#crosses path',
  rotate: '1turn',
  delay: (element,index) => index * 100,
  duration: 1200,
  loop: true,
  direction:'alternate',
 easing:'easeInOutSine',

});


   anime({
  // regular css selector
  targets: '#tunnel circle',
  //scale up by 20%
  scale: 1.1,
  //alternates from beginning to the end
  direction: 'alternate',
  loop: true,
  duration:250,
  //easing allow us to add more character to our movement
  easing:'easeInOutSine',
  
  delay:(el, index) => index * 150,
  
});
//here we set up the conveyor effect
anime({
  // regular css selector
  targets: '.conveyor',
  //we only want to move it half its width
  translateX:'-50%',
  loop: true,
  duration:1500,
  //remove default easing effect to keep it consistently smooth
 easing:'linear',
autoplay:true
  
});


const zigZagPath = document.querySelector('#zigzag path')
//setDashoffset figures out how long our path is
  const zigZagOffset = anime.setDashoffset(zigZagPath);
  zigZagPath.setAttribute('stroke-dashoffset', zigZagOffset);
  anime({
    targets: zigZagPath,
    strokeDashoffset: [zigZagOffset, 0],
    duration: 3000,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    
  });
// we duplicate the same code for the wave
const wavePath = document.querySelector('#wave path')
const waveOffset = anime.setDashoffset(wavePath);   
wavePath.setAttribute('stroke-dashoffset', waveOffset);
  anime({
    targets: wavePath,
    strokeDashoffset: [0,waveOffset],
    duration: 2000,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    
  });

duplicateHtml(document.querySelector('#dots'),40)

const allDots= document.querySelectorAll('#dots .dot')
// we animate each dot by looping through and running each one
allDots.forEach(dot =>{
 anime({
  targets: dot,
  rotate: (element,index) => anime.random(90,360),
  duration: (element,index) => anime.random(250,750),
  loop: true,
  easing:'easeInOutSine',
  direction:'alternate',
 });
})

duplicateHtml(document.querySelector('#circles'),20)

anime({
  targets: '#circles .dot',
  scale: [0,1.2],
  delay:(element,index) => index * 100,
  duration: 250,
  loop: true,
  direction:'alternate',
  easing:'easeInOutSine'
 });

anime({
  targets:'#flash .flash',
  backgroundColor:(element,index) => ['#fff636','#cb89fc','#fc3035','#77ebfd'][index],
  delay:(element,index) => anime.random(50,100),
  duration: 500,
  loop: true,
  direction:'alternate',
  easing:'easeInOutSine'
 });

//animation for squares
anime({
  targets:'#squares rect',
  //need to force the translate position tocenter the squares
  translateX:['-50%', '-50%'],
  //not animating them really
  translateY:['-50%','-50%'],
  rotate: [45,0,-45],
  delay:(element,index) => 100 * index,
  duration: 750,
  loop: true,
  easing:'easeInOutSine',
  direction:'alternate',
 });

