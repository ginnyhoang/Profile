
// -----------------------------Content skills------------------------
const titles= document.querySelectorAll('.title__info-my');
const contents = document.querySelectorAll('.content');
const currentActive = 0;
titles.forEach(function(title,index) {
    title.addEventListener('click', function(e)  {
        document.querySelector('.title__info-my.active').classList.remove('active');
        this.classList.add('active');


        document.querySelector('.content.active').classList.remove('active');
        contents[index].classList.add('active');
    });
})

// -----------------------------------------Thanh tiến độ----------------------------------------------
// let number = document.querySelector('.content_item-skill-number');
// let counter = 0;
// let idProgress = document.getElementById('data_progress');
// let dataProgress =idProgress.dataset.progress;


// setInterval(() => {
//     if(counter == dataProgress) {
//         clearInterval();
//     }else{
//     counter = counter + 1;
//     number.innerHTML = counter + "%";
//     }

// },30);


// window.onscroll = function() {
// const slideBar = document.querySelector('.title__info');
// if(document.documentElement.scrollTop == 500) {
//     slideBar.style.position = 'fixed';
//     slideBar.style.margin-top == '30px';
//     slideBar.style.top = '0px';
    

// } else {
//     slideBar.style.position = 'none';
// }
// }

const dark_title_info = document.getElementById('dark_title__info');
const dark_content = document.getElementsByClassName('content');
var checkbox_toggle = document.getElementById('light-dark');
const box_dark = document.getElementsByClassName('box');
const dark_title = document.getElementsByClassName('dark_title');
const h3 = document.getElementsByTagName('h3');
const h4 = document.getElementsByTagName('h4');
const h5 = document.getElementsByTagName('h5');
const b = document.getElementsByTagName('b');
const menu = document.getElementsByTagName('lord-icon');
checkbox_toggle.addEventListener('change', function(){
    document.body.classList.toggle('dark');
    for(var i = 0; i < box_dark.length; i++) {
        box_dark[i].classList.toggle('dark-box');

    }
    dark_title_info.classList.toggle('dark-title__info');

    for(var i = 0; i < dark_content.length; i++) {
        dark_content[i].classList.toggle('dark-content');

    }
    document.body.classList.toggle('dark-text');
    for(var i = 0; i < dark_title.length; i++) {
        dark_title[i].classList.toggle('dark-text');

    }
    for(var i = 0; i < h3.length; i++) {
        h3[i].classList.toggle('dark-text');

    }
    for(var i = 0; i < h4.length; i++) {
        h4[i].classList.toggle('dark-text');
    }
    for(var i = 0; i < h5.length; i++) {
        h5[i].classList.toggle('dark-text');
    }

    for(var i = 0; i < b.length; i++) {
        b[i].classList.toggle('dark-text');

    }

})

// checkbox_toggle.addEventListener('click', function(){
//     for(var i = 0; i < menu.length; i++) {
//       menu[i].setAttribute('colors', 'primary:#000,secondary:#fff');
//       }
// })

