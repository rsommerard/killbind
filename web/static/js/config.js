const Config = {
  load: (path) => {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest()

      req.onreadystatechange = (event) => {
        if (req.readyState === XMLHttpRequest.DONE) {
          if (req.status === 200) {
            return resolve(JSON.parse(req.response))
          } else {
              return reject()
          }
        }
      }

      req.open('GET', path, true)
      req.send(null)
    })
  }
}

export default Config