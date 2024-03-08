const name =['a','b','c','d']

// let newname=['e','f','g']
// let allname= name.concat(newname)
// console.log(name.length)
// console.log(allname)
// console.log(allname.reverse())
// console.log(name.unshift())
// console.log(name.unshift('z'))
// name.push('z')
// name.pop()
// console.log(name)
const newname =name.splice(0,3)
console.log(newname)
console.log(name)