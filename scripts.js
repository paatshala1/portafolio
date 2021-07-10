((d)=>{
    const $menuBtn = d.querySelector('.menu-btn');
    const $menu = d.querySelector('.menu');

    $menuBtn.addEventListener('click', (e)=>{
        $menu.classList.toggle('is-active');
        $menuBtn.firstElementChild.classList.toggle('none');
        $menuBtn.lastElementChild.classList.toggle('none');
    });

    $menu.addEventListener('click', (e)=>{
        if (!e.target.matches('.menu a')) {
            false;
        }
        
        $menuBtn.firstElementChild.classList.remove('none');
        $menuBtn.lastElementChild.classList.add('none');
        $menu.classList.remove('is-active');
    });

})(document);



