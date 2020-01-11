//membuat function untuk memvalidasi username
function usernameValidity(username)
{
    //regex untuk memvalidasi password
    let regex = /(^[a-z]{1}[a-zA-Z0-9\_]{5,12}$)/;

//untuk mengembalikan true/false
    return regex.test(username)
}
console.log(usernameValidity("friska_putri"))
console.log(usernameValidity("Friska-putri"))

//membuat function untuk memvalidasi password
function passwordValidity(password)
{
    //regex untuk memvalidasi passwword
    let regex = /([0-9]{1}[A-Z]{5}[-@!$%#^&*()_+|~=`{}\[\]:";'<>?,.\/]{1})/;

//untuk mengembalikan true/false
    return regex.test(password)
}
console.log(passwordValidity("JODYSd@"))
console.log(passwordValidity("1WORLD!"))