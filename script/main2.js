const form = document.getElementById('form');
const nom = document.getElementById('nom');
const prenom = document.getElementById('prenom');
const email = document.getElementById('email');
const sexe = document.getElementById('sexe');
const tel = document.getElementById('téléphone')
const message = document.getElementById('message')
const successContainer = document.querySelector('messagesuccess')

//Du coups, ceci est utiliser pour que ça ne s'envoie pas et rafraichie la page et que ça verifie en premier
form.addEventListener('submit', verif => {
    verif.preventDefault();
    console.log('envoie du form detecté')
    validateInputs();
});

const setError = (element, message) => {
    const formcontrol = element.parentElement;
    const errorDisplay = formcontrol.querySelector('.messageerreur');

    errorDisplay.innerText = message;
    formcontrol.classList.add('error');
    formcontrol.classList.remove('success')
}

const setSuccess = element => {
    const formcontrol = element.parentElement;
    const errorDisplay = formcontrol.querySelector('.messageerreur');

    errorDisplay.innerText = '';
    formcontrol.classList.add('success');
    formcontrol.classList.remove('error');
};

const validateInputs = () => {
    const nomValue = nom.value.trim();
    const prenomValue = prenom.value.trim();
    const emailValue = email.value.trim();
    const sexeValue = sexe.value.trim();
    const telValue = tel.value.trim();
    const messageValue = message.value.trim();

    if(nomValue === '') {
        setError(nom, 'Un nom est necessaire');
    } else {
        setSuccess(nom);
    }

    if(prenomValue === '') {
        setError(prenom, 'Un prenom est necessaire');
    } else {
        setSuccess(prenom);
    }

    if(emailValue === '') {
        setError(email, 'Un Email est necessaire!');
    } else {
        setSuccess(email);
    }

    if(telValue === '') { 
        setError(tel, 'Metter votre numéro de téléphone');
    } else if (telValue.length != 10 ){//C'est le nombre exact de chiffre pour un numéro de telehpone FYI
        setError(tel, 'Votre numéro de téléphone doit avoir 10 numéros, ni plus ni moins.')
    } else {
        setSuccess(tel);
    }

    if(sexeValue === 'null') { // Je sais pas pourquoi, mais ça montre toujours le border rouge avant la selection, je trouve ça bizarre
        setError(sexe, 'Choisisez un sexe');
    } else {
        setSuccess(sexe);
    }
    
    if(messageValue === '') {
        setError(message, 'Ecrivez votre message');
    } else if (messageValue.length < 5 ){//C'est le nombre exact de chiffre pour un numéro de telehpone FYI
        setError(message, 'Votre message doit contenir plus de 5 nombres.')
    } else {
        setSuccess(message);
    }
};

if(
    prenom.classList.contains('success') &&
    nom.classList.contains('success') &&
    email.classList.contains('success') &&
    tel.classList.contains('success') &&
    sexe.classList.contains('success') &&
    message.classList.contains('success')
    )
    {successContainer.innerText = 'Formulaire envoyer avec succéss'}
