const people=[
    {id:1, name:'pii', age: 12},
    {id:2, name:'kii', age: 18},
    {id:3, name:'oii', age: 17},
    {id:4, name:'uii', age: 15},
    {id:5, name:'rii', age: 13},        
]

// const newperson = people.find((p)=>{
//     return p.id == 1
// })
// console.log(newperson)

const newperson2 = people.filter((p)=>{
    return p.id == 1
})
console.log(newperson2[0].name)