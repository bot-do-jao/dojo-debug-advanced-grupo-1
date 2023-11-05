function decodeBase64(string) {
    return atob(string);
}

const url = 'aHR0cHM6Ly9yZXNpZGVuY2lhdGljYnJpc2EuZ2l0aHViLmlvLzAxX0NvbXVuaWNhY2FvVGV4dG8=';


// Função para gerar o QRCode
function createQRCode(text) {
    const qrCodeDiv = document.getElementById('qrcode');
    const loading = document.getElementById('loading')

    loading.style.display = 'block';

    if (!text || typeof text !== 'string') {
        console.error('Tipo inserido inválido para QR code.');
        return; 
    }

    let qr;
    setTimeout(() => {
        if (text.length === 16) {
            qr = new QRCode(qrCodeDiv, {
                text: 'aHR0cHM6Ly9yZXNpZGVuY2lhdGljYnJpc2AuZ2l0aHViLmlvLvbXVuaWNhY2FvVGV4dG8',
                width: 256,
                height: 256,
            });
        } else if (text.includes('TGVzdCBtZXNzYWdl')) {
            qr = new QRCode(qrCodeDiv, {
                text: atob('aHR0cHM6Ly9yZXNpZGVuY2lhdGljYnJpc2AuZ2l0aHViLmlvLw=='), 
                width: 256,
                height: 256,
            });
        } else {
            qr = new QRCode(qrCodeDiv, {
                text: text,
                width: 256,
                height: 256,
            });
        }
        qrCodeDiv.style.display = 'block';
        loading.style.display = 'none';
        generateQRCodeButton.style.display = 'none';
    }, 1500);
    
    

    console.log('QR code gerado:', qr);
}

const generateQRCodeButton = document.getElementById('btn');
generateQRCodeButton.addEventListener('click', () => {
    createQRCode(url);
});

console.log('string:', url);
