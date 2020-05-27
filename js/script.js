const list = document.querySelector('.nav-list'),
    left = document.querySelector('.navbar-navigation-left'),
    right = document.querySelector('.navbar-navigation-right');
    

    list.addEventListener('click', function () {
        left.style.transition='.8s all';
        right.style.transition='.8s all';
        document.getElementById('check').checked = false;    
    }); 