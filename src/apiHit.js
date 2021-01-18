// Gets data from testData database
let response = await fetch(process.env.REACT_APP_GET_API_ENDPOINT)
let data = await response.json()
console.log(data[0].firstName)

// Pulls data from testData database

const exampleObj = { firstName: 'final', lastName: 'testPerson' }
fetch(process.env.REACT_APP_PUSH_API_ENDPOINT, {
  method: 'POST', // or 'PUT','
  mode: 'cors',
  body: JSON.stringify(exampleObj),
})
.then(response => { return response.json()})
.then(json => console.log(json))