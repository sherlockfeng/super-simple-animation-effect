/**
 * @file index.js
 * @author heyunfeng
 */

window.onload = ready();
function ready() {
    let e = document.getElementById('content');
    let num = 5;
    e.addEventListener('transitionend', () => {
        e.classList.remove('anm');
        e.removeChild(e.firstElementChild);
        e.style.top = 0;
    });
    setInterval(()=> {
        e.classList.add('anm')
        let newE = document.createElement('div');
        newE.innerHTML = num++;
        e.appendChild(newE);
        e.style.top = '-100px';
    }, 5000);
}