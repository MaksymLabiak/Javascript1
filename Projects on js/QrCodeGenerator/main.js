const api_url = fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example`);

let imgBox = document.querySelector('#imgBox');
let qrImage = document.querySelector('#qrImage');
let qrText = document.querySelector('#qrText');
let generateQRBtn = document.querySelector('.generator');

generateQRBtn.addEventListener('click', generateQR);

function generateQR() {
    if (qrText.value.length > 0) {
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}`;
        imgBox.classList.add('showImg');
    } else {
        qrText.classList.add('error');
        setTimeout(() => {
            imgBox.classList.remove('error')
        }, 1000);
    }

}

