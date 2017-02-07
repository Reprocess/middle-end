const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  createServer((req, res) => {
    const { pathname } = parse(req.url)
    if (/^\/\d{4}\/.+\/$/.test(pathname)) {
      res.writeHead(301, {
        Location: pathname.substr(0, pathname.length - 1)
      })
      res.end()
      return
    }

    handle(req, res)
  })
  .listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
