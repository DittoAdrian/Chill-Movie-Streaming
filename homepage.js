let a = 1;
const dropDown = document.querySelector('.dropDown')
const arrowDown = document.querySelector('.butoonDrop')
function test (){
    if (a === 1){dropDown.classList.add("active");arrowDown.classList.add("rotate");a = 0}
    else{dropDown.classList.remove("active");arrowDown.classList.remove("rotate");a = 1}
}

const lanjutCard = document.querySelectorAll('.card-lanjutTonton')
console.log(lanjutCard)

lanjutCard.forEach((item)=>{
    item.addEventListener('mouseover',function(){
        const child = this.querySelector('.card-lanjutTonton img');
        const review = this.querySelector('.card-lanjutTonton-preview');
        child.classList.add('active');
        review.classList.add('active');
    })
    item.addEventListener('mouseout',function(){
        const child = this.querySelector('.card-lanjutTonton img');
        const review = this.querySelector('.card-lanjutTonton-preview');
        child.classList.remove('active');
        review.classList.remove('active');
    })
})

let b = 1;
let c = 1;
const accBantuan = document.getElementById('footer-bantuan-header')
const footerBantuanBody = document.querySelector('#footer-bantuan-body')
const accGenre = document.getElementById('footer-genre-header')
const footerGenreBody = document.querySelector('#footer-genre-body')

accGenre.addEventListener('click',()=>{
    if (b === 1){footerGenreBody.classList.add('active');b=0;}
    else{footerGenreBody.classList.remove('active');b=1;}})
accBantuan.addEventListener('click',()=>{
    if (b === 1){footerBantuanBody.classList.add('active');b=0;}
    else{footerBantuanBody.classList.remove('active');b=1;}})

document.addEventListener('DOMContentLoaded',()=>{
    const scrollable = document.querySelector('#lanjut-container-scroll')
    const scrollAmount = 350;

    document.getElementById('lanjut-scroll-kiri').addEventListener('click',()=>{
        scrollable.scrollLeft -= window.innerWidth/2;})
    document.getElementById('lanjut-scroll-kanan').addEventListener('click',()=>{
        scrollable.scrollLeft += window.innerWidth/2})

    const scrollableTopRating = document.querySelector('#topRatingScroll')

    document.getElementById('topRating-scroll-kiri').addEventListener('click',()=>{
        scrollableTopRating.scrollLeft -= window.innerWidth/2;})
    document.getElementById('topRating-scroll-kanan').addEventListener('click',()=>{
            scrollableTopRating.scrollLeft += window.innerWidth/2;})

    const scrollableFilmTranding = document.getElementById('filmTrendingScroll')

    document.getElementById('tranding-scroll-kiri').addEventListener('click',()=>{
        scrollableFilmTranding.scrollLeft -= window.innerWidth/2;})
    document.getElementById('tranding-scroll-kanan').addEventListener('click',()=>{
        scrollableFilmTranding.scrollLeft += window.innerWidth/2;})

    const scrollableRilisBaru = document.getElementById('rilisBaruScroll')

    document.getElementById('rilisBaru-scroll-kiri').addEventListener('click',()=>{
        scrollableRilisBaru.scrollLeft -= window.innerWidth/2;})
    document.getElementById('rilisBaru-scroll-kanan').addEventListener('click',()=>{
        scrollableRilisBaru.scrollLeft += window.innerWidth/2;})
})
