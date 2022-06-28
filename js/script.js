// debugger;
firstName = prompt('What is your first name?');
secondName = prompt('What is your second name?');
email = prompt('Please write your email');
dateOfBirth = prompt('What your date of birth?');

firstName = firstName.trim();
secondName = secondName.trim();
email = email.replaceAll(' ', '');
email = email.toLowerCase();
dateOfBirth = dateOfBirth.replaceAll(' ', '');

if(email.indexOf(`@`) === -1){
    email = `not valid email <b>${email}</b> (symbol @ not exist)`;
} else if (!email.indexOf('@')) {
    email = `not valid email <b>${email}</b> (symbol @ find in first place)`;
} else if (email.indexOf('@') === email.length-1) {
    email = `not valid email <b>${email}</b> (symbol @ find in last place)`;
}

today = new Date();
curentYear = today.getFullYear();
age = curentYear - dateOfBirth;

document.write(`
    <ul>
        <li>Full name: <b>${firstName} ${secondName}</b></li>
        <li>Email: ${email} </li> 
        <li>Age: <b>${age}</b></li>
    </ul>
    `);


