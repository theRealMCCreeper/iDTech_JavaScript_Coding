function greet(name) { 
    let uppercaseName = name
    if (name.length > 1 && Array.isArray(name) == true) {
        return 'Hello, ' + name
    } else if (uppercaseName.toUpperCase() == name) {
        return 'HELLO ' + name + '!'
    } else if (name == null) {
        return 'Hello there!'
    }
}
let names = ['Bob',' Pedro ', ' Mary']
console.log(greet(names))