
//first make the function generate password and set the length to 12 because we want the password to be 12 characters
function generatePassword(length = 12) {
    //Next set a variable with all letters and numbers so we can shuffle throughout the whole alphabet and get any number 0-9 so it is random

    let characters = ["a", "b","c", "d","e", "f","g", "h","i", "j","k", "l","m", "n","o", "p","q", "r","s", "t","u", "v","w", "x","y", "z" + "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "_", "A", "B","C", "D","E", "F","G", "H","I", "J","K", "L","M", "N","O", "P","Q", "R","S", "T","U", "V","W", "X","Y", "Z"]
    let password = ''
    //Next create a for loop so that we let i equal 0 then for everytime that the length is greater than i we add on one to i 
    for (let i = 0; i <length; i++){
        //Next make the password = characters and randomly choose them
        password += characters[Math.floor(Math.random() * characters.length)];
    }
    //lastly we return the password
    return password
}

module.exports = generatePassword;