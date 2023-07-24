

function grabData(){
  fetch('http://localhost:3001/api/v1/tricks')
  .then(response => {
    if(!response.ok) {
      throw new Error('Failed to fetch data')
    }
    return response.json
  })
  .then((data) => console.log(data))
  .catch(error => {
    console.log(error)
  })
}

export default grabData