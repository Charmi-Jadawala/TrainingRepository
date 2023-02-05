const Hello = () => console.log('Hello')

const Hii = () => console.log('Hii')

const test = () => {
  console.log('test')
  setTimeout(Hello, 0)
  new Promise((resolve, reject) =>
    resolve('should be right after Hii, before Hello')
  ).then(resolve => console.log(resolve))
  Hii()
}

test()