var typed=new Typed(".text",{
    strings:["Web Developer","UI/UX Designer","Web Developer"],
typeSpeed:100,
backSpeed:100,
backDelay:1000,
loop:true
})

var Skills = document.getElementById("Skills");
var Experience = document.getElementById("Experience");
var Education=document.getElementById("Education")

var Skillss = document.getElementById("Skillss");
var Experiencee = document.getElementById("Experiencee");
var Educationn=document.getElementById("Educationn");


Skills.addEventListener('click', ()=>{
  Skillss.style.display='block';
  Experiencee.style.display='none';
  Educationn.style.display='none';
});


Experience.addEventListener('click', ()=>{
  Skillss.style.display='none';
  Experiencee.style.display='block  ';
  Educationn.style.display='none';
});

Education.addEventListener('click', ()=>{
  Skillss.style.display='none';
  Experiencee.style.display='none';
  Educationn.style.display='block';
});

document.getElementById('Skills').addEventListener('click', function() {
  this.classList.add('active');
  Education.classList.remove('active');
  Experience.classList.remove('active');
});
document.getElementById('Experience').addEventListener('click', function() {
  this.classList.add('active');
  Education.classList.remove('active');
  Skills.classList.remove('active');

});
document.getElementById('Education').addEventListener('click', function() {
  this.classList.add('active');
  Skills.classList.remove('active');
  Experience.classList.remove('active');
});

var sidemenu=document.getElementById("sidemenu")
function openmenu(){
  sidemenu.style.left="0";
}
function closemenu(){
  sidemenu.style.left="-1240px";
}
