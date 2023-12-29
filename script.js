let mune=document.getElementById('mune')
let list =document.querySelector('.navbar')
mune.addEventListener('click',function(){

    mune.classList.toggle('fa-times')
    list.classList.toggle('active')
})
$('.Facility').magnificPopup({
    delegate:'a',
    type:'image',
    gallery:{
        enabled:true
    }
})