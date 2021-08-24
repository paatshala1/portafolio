/* CONTACTFORM */

((d)=>{
    const $form = contactForm;
    const $loader = contactFormLoader;
    const $response = contactFormResponse;

    console.log(`Leídos id's: ${$form.getAttribute('id')} , ${$loader.getAttribute('id')} , ${$response.getAttribute('id')}`);

    $form.addEventListener('submit', (e) => {
        e.preventDefault();
        $loader.classList.remove('none');
        fetch('https://formsubmit.co/ajax/hugo.rodriguezz@icloud.com', {
        method:'POST',
        body: new FormData(e.target)
        })
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then((jsonRes) => {
            console.log(jsonRes);
            // $loader.classList.add('none'); /* Se sustituye por el finally para que siempre se ejecute y no tener que duplicar la línea */
            location.hash = '#gracias';
            $form.reset();
        })
        .catch(err => {
            console.log(err);
            let message = errStatusText || 'Ocurrió un error en el envío. Por favor intenta de nuevo';
            $response.querySelector('H3').innerHTML = `Error ${err.status}: ${message}`;
        })
        .finally(()=>{
            $loader.classList.add('none');
            setTimeout(()=>{
                location.hash = '#close';
            }, 3000);
        })
    });

})(document);
