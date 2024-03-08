const people=[
    {id:1, name:'pii', age: 12, salary: 100},
    {id:2, name:'kii', age: 18,  salary: 260},
    {id:3, name:'oii', age: 17,  salary: 150},
    {id:4, name:'uii', age: 15,  salary: 450},
    {id:5, name:'rii', age: 13,  salary: 500},        
]

const totalsalary = people.reduce((p,c)=>{
    const salary = c.salary
    const total  = p+salary
    return total

    // return p + c.salary  // dont write 3lines of codes above
},0)
console.log(totalsalary)

// const salary = [100,200,250,300]
// const total = salary.reduce((p,c)=>{
//     console.log(`Total: ${p}`)
//     console.log(`Current Value: ${c}`)
    
//     return p+c
// },0)
// console.log(total)

