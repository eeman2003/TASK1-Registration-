
document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const outputDiv = document.getElementById('formOutput');
    const entryDiv = document.createElement('div');
    entryDiv.classList.add('entry');


    formData.forEach((value, key) => {
        const keyDiv = document.createElement('div');

        keyDiv.classList.add('key');
        keyDiv.textContent = key;

        const valueDiv = document.createElement('div');
        valueDiv.classList.add('value');
        valueDiv.textContent = value;

        entryDiv.appendChild(keyDiv);
        entryDiv.appendChild(valueDiv);
    });

    outputDiv.appendChild(entryDiv);
});
