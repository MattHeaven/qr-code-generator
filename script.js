const api_url = 'http://api.qrserver.com/v1/create-qr-code/?data=';
const qrContainer = document.getElementById('qr');
const button = document.querySelector('button');

function getImage(url) {
    qrContainer.src = api_url + url + '&size=250x250';
    console.log(qrContainer)
    
    let inputUrl1 = document.querySelector('input');
    button.innerHTML = 'Generate New QR';
    inputUrl1.value = '';
}


button.addEventListener('click', function() {
    const inputUrl = document.querySelector('input').value;
    if(inputUrl === '') {
        document.querySelector('input').classList.add('error');
        setTimeout(() => {
            document.querySelector('input').classList.remove('error');
        }, 1000);
    } else {
        getImage(inputUrl);
    }

});