function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

document.addEventListener('DOMContentLoaded', () => {
    const friendName = getParameterByName('name'); // 'name' is the URL parameter
    if (friendName) {
        document.getElementById('greeting').innerHTML = 
            document.getElementById('greeting').innerHTML.replace('[ALL]', friendName);
    }
});


function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❅';
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    snowflake.style.opacity = Math.random();
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';

    document.body.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

setInterval(createSnowflake, 100);

document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.card');

    window.addEventListener('scroll', () => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;

        if (cardPosition < screenPosition) {
            card.classList.add('in-view');
        } else {
            card.classList.remove('in-view');
        }
    });
});


