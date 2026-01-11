let searchform=document.querySelector('.search-form')
document.querySelector('#search').onclick = () =>
{
    searchform.classList.toggle('active');

}
let be=document.querySelector('.be')
let become=document.querySelector('.become')
let cont=document.querySelector('.cont')
let capt=document.querySelector('.capture')
let store=document.querySelector('.sto')
let crea=document.querySelector('.create')
let dri=document.querySelector('.dri')
let drive=document.querySelector('.drive')
// document.querySelector('#capture').onclick = () =>
// {
    cont.classList.toggle('active');
    capt.classList.toggle('active');
   
// }
document.querySelector('#become').onclick = () =>
{
    be.classList.toggle('active');
    become.classList.toggle('active');
    cont.classList.toggle('inactive');
    capt.classList.toggle('inactive');
}
document.querySelector('#create').onclick = () =>
    {
        store.classList.toggle('active');
        crea.classList.toggle('active')
        cont.classList.toggle('inactive');
        capt.classList.toggle('inactive');
    }
document.querySelector('#drive').onclick = () =>
{
dri.classList.toggle('active');
drive.classList.toggle('active');
cont.classList.toggle('inactive');
capt.classList.toggle('inactive');
}
let read = document.querySelector('.more')
let resil = document.querySelector('.resil')
let fullfill = document.querySelector('.fullfill')
let blog = document.querySelector('.blog')
let brands = document.querySelector('.topbrands')
let rec = document.querySelector('.recommended')
let end = document.querySelector('.end')
document.querySelector('#more').onclick = () =>
    {
        read.classList.toggle('active');
        resil.classList.toggle('active');
        fullfill.classList.toggle('active');
        blog.classList.toggle('active');
        brands.classList.toggle('active');
        rec.classList.toggle('active');
        end.classList.toggle('active');
    }
