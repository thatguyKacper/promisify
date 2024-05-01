function loadJSON(url) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()

    request.addEventListener('load', (event) => {
      try {
        resolve(JSON.parse(event.target.responseText))
      } catch (error) {
        reject(error)
      }
    })

    request.addEventListener('error', (error) => {
      reject(error)
    })

    request.open('GET', url)
    request.send()
  })
}

const user = await loadJSON('/api/users/1')
console.log('Got user:', user)
