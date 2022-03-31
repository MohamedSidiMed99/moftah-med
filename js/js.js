let ar = document.getElementById('ar');
let en = document.getElementById('en');
let li = document.getElementById('ul').getElementsByTagName('li');

let about = document.querySelector('.about');
let serv = document.querySelector('.serv');
let contact = document.querySelector('.contact');
let home = document.getElementById('home');
let team = document.querySelector('.team');
let so = document.querySelector('.so');
let mpage = document.querySelector('.mpage');

ar.onclick=()=>{
     lang('ar');
     localStorage.setItem("lan",'ar')
};

en.onclick=()=>{
    lang('en');
    localStorage.setItem("lan",'en')
};

onload=()=>{
    lang(localStorage.getItem('lan'));
}

function lang(getlang){
    if(getlang === 'ar')
    {
    li[8].style.float = 'right';
    ar.style.display ='none';
    en.style.display ='block';
    home.innerHTML='الرئيسية';
    about.innerHTML='حول';
    serv.innerHTML='الخدمات';
    contact.innerHTML='اتصل بنا';
    team.innerHTML='الفريق';
    mpage.innerHTML='الصفحتي ';
    so.innerHTML='الخروج';
    console.log('it is working');
    }
    else if(getlang === 'en')
   {
    li[7].style.float = 'right';
    ar.style.display ='block';
    en.style.display ='none';
    home.innerHTML='Home';
    about.innerHTML='About';
    serv.innerHTML='Services';
    contact.innerHTML='Contact';
    team.innerHTML='Team';
    mpage.innerHTML='My page';
    so.innerHTML='Sign out';
   }
    
}

