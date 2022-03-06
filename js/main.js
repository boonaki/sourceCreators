document.querySelector("#hamburg").addEventListener('click', toggleSideBar)


function toggleSideBar(){
    document.querySelector("#navigation").classList.toggle('active')
    document.querySelector("#hamburg").classList.toggle('fixIt')
    document.querySelectorAll('span').classList.toggle('iconDisplay')
}

