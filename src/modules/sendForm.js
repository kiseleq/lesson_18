class SendForm {
    constructor() {
        this.errorMessage = 'Что-то пошло не так...';
        this.loadMessage = 'Загрузка...';
        this.successMessage = 'Спасибо! Мы скоро с вами свяжемся!';
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
        statusMessage.classList.add('delete');
        statusMessage.style.cssText = `
              font-size: 2rem;
              color: #fff;
      `;

        

        this.forms.forEach((form) => {
            form.addEventListener('submit', (event) => {
                setTimeout(() => {
                    let
                    deleteElem = document.querySelector('.delete');
                    deleteElem.remove();
                }, 5000);
                event.preventDefault();

                // Проверка на пустую строку
                // if (form.value.trim() === '') {
                //     alert('Введите данные в поле(я) ввода');
                //     return;
                // }


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
                        } else {
                            statusMessage.textContent = this.successMessage;
                            
                        }
                        if (response.readyState !== 4) {
                            return;
                        } else {
                            statusMessage.textContent = this.successMessage;
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