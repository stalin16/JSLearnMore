// callback function , hgiher order function

const hello=(name)=>{
    return `Hello ${name}. Do you remember me?`
}

const greeting=(f)=>{
    const myname ='lina'
    return `${f(myname)} My name is Tom`
}
console.log(greeting(hello))