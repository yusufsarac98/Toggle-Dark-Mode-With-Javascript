const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const readingMode = document.getElementById('toggleEye');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color = 'black'; 
        body.style.transition = '2s';
    } else{
        body.style.background = "rgb(13, 17, 23)";
        body.style.color = 'white';
        body.style.transition = '2s';
    }
});