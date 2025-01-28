let topBtn=document.getElementById("topBtn");
window.onscroll=function(){
    scroll();
}
function scroll(){
    if(document.body.scrollTop> 20|| document.documentElement.scrollTop >20){
        topBtn.style.display="block";
    }else{
        topBtn.style.display="none";
    }
}
function topView(){
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
}
function copyEmail(){
    const eMail="Matthewpickering2000@gmail.com";
    const textarea= document.createElement("textarea");
    textarea.value=eMail;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("Email copied to clipboard!")
}
document.addEventListener('DOMContentLoaded',() => {
    const projectImages=document.querySelectorAll('.project-Thumbnail');
    projectImages.forEach(image => {
        image.addEventListener('click',() =>{
            const link =image.closest('a').href;
            window.location.href=link;
        })
    })
})