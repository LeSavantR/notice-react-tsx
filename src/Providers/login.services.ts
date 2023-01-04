const loginService = async ({ username, password}: any) => {
  const req = await fetch('http://localhost:8000/api/token/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, password})
    })

    const data = await req.json()
    if (req.status === 200) {
      return data
    } else {
      console.log('Something went Wrong')
    }
}


export { loginService }
