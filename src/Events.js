let IT = document.querySelector('.ITServ')

setTimeout(()=>{
    IT = document.querySelector('.ITServ')
}, 5000)

function go_to_IT(){
    IT = document.querySelector('.ITServ')
    IT.scrollIntoView({behavior: 'smooth'})
}

function hideMenu(){
    document.querySelector('.sidebarPad').style.visibility = 'hidden'
}
function showMenu(){
    document.querySelector('.sidebarPad').style.visibility = 'visible'
}

setInterval(()=>{
    window.scrollY > 100 ? document.querySelector('.toTop').style.right = '1.5rem' : document.querySelector('.toTop').style.right = '-3rem'
}, 700)