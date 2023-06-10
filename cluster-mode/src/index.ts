import * as express from 'express'
// import cluster from 'cluster'

// if (cluster.isPrimary === true) {
//   cluster.fork()
//   cluster.fork()
//   cluster.fork()
//   cluster.fork()
// } else {
//   const app = express()

//   const doWork = (duration: number) => {
//     const start = Date.now()

//     while (Date.now() - start < duration) {}
//   }

//   app.get('/', (req, res) => {
//     doWork(5000)
//     res.send('Hi there!')
//   })

//   app.get('/fast', (req, res) => {
//     res.send('This was fast!')
//   })

//   app.listen(3000)
// }

const app = express()

const doWork = (duration: number) => {
  const start = Date.now()

  while (Date.now() - start < duration) {}
}

app.get('/', (req, res) => {
  doWork(5000)
  res.send('Hi there!')
})

app.get('/fast', (req, res) => {
  res.send('This was fast!')
})

app.listen(3000)
