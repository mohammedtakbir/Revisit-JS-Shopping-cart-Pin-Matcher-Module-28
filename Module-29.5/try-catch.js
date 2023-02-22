
// console.log('after error');
// console.log('after error');
// console.log('after error');
// console.log('after error');
// console.log(test)
// console.log('before error')

try {
    console.log('inside try');
    console.log(test)
    console.log('after error')
} catch (error) {
    console.log('inside catch')
    console.log(error.name, ':', error.message)
} finally {
    console.log('inside finally')
}