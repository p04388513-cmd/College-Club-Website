const menuBtn=document.getElementById('menuBtn'),nav=document.getElementById('nav'),themeBtn=document.getElementById('themeBtn');
menuBtn.addEventListener('click',()=>{nav.classList.toggle('open');menuBtn.textContent=nav.classList.contains('open')?'✕':'☰'});
document.querySelectorAll('#nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuBtn.textContent='☰'}));
if(localStorage.getItem('club-theme')==='dark'){document.body.classList.add('dark');themeBtn.textContent='☀️'}
themeBtn.addEventListener('click',()=>{document.body.classList.toggle('dark');const dark=document.body.classList.contains('dark');localStorage.setItem('club-theme',dark?'dark':'light');themeBtn.textContent=dark?'☀️':'🌙'});
document.getElementById('year').textContent=new Date().getFullYear();
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
