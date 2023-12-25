const mv = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true,
});


mv.reveal('.side-bar', {delay:600, origin:'left'});
mv.reveal('.content', {delay:200, origin:'top'});
mv.reveal('.image', {delay:450, origin:'right'});
mv.reveal('.title', {delay:200, origin:'bottom'});
mv.reveal('.card', {delay:100, origin:'left'});


const icon = document.querySelector('.icon');
        const search = document.querySelector('.search');
        var c = document.getElementById('cl');
        var cb = document.getElementById(c, "::before");
        var ca = document.getElementById(c, "::after");

        icon.onclick = function engine(){
            search.classList.toggle('active');
            cb.style.visibility = 'visible';
            ca.style.visibility = 'visible';
}