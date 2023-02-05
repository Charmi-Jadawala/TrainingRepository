let num1 = 60
let num2 = 16

const greaterNumber = new Promise((resolve, reject) => {
  if (num1 > num2) {
    const result = 'Num-1 is greater than Num-2'
    resolve(result)
  } else {
    const reason = 'Oops! Num-1 is smaller than Num-2'
    reject(reason)
  }
})

const checkGreaterNumber = () => {
    greaterNumber
    .then(ok => {
      console.log(ok)
    })
    .catch(err => {
      console.error(err)
    })
}

checkGreaterNumber()