class SendForm {
    constructor() {
        this.errorMessage = 'Что-то пошло не так...';
        this.loadMessage = 'Загрузка...';
        this.successMessage = 'Спасибо! Мы скоро с вами свяжимся!';
        this.forms = document.querySelectorAll('form');
    }
    postData(form, body) {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        return new Promise((resolve, reject) => {
            const request = new XMLHttpRequest();
            request.addEventListener('readystatechange', () => {
                if (request.readyState !== 4) {
                    return;
                }
                if (request.status === 200) {
                    resolve();
                } else {
                    reject(request.status);
                }
            });
            request.open('POST', './server.php');
            request.setRequestHeader('Content-Type', 'application/json');
            const formData = new FormData(form);

            request.send(JSON.stringify(body));
        });
    }
    sendAjax() {
        const statusMessage = document.createElement('div');
        statusMessage.style.cssText = `
              font-size: 2rem;
              color: #fff;
      `;

        this.forms.forEach((form) => {
            form.addEventListener('submit', (event) => {
                event.preventDefault();
                form.appendChild(statusMessage);
                statusMessage.textContent = this.loadMessage;
                const formData = new FormData(form);
                let body = {};
                formData.forEach((val, key) => {
                    body[key] = val;
                });

                this.postData(form, body)
                    .then((response) => {
                        if (response.status !== 200) {
                            throw new Error('status network not 200');
                        }
                        if (response.readyState !== 4) {
                            return;
                        }
                        statusMessage.textContent = this.successMessage;
                    })
                    .catch(error => {
                        statusMessage.textContent = this.errorMessage;
                        console.error(error);
                    });
                form.reset();
            });
        });
    }
}

const sendForm = new SendForm();

export default sendForm;