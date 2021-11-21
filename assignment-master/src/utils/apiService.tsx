export async function getCountry() {
  try {
    const baseUrl = "http://localhost:8000/api/countries"
    const response = await fetch(baseUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",        
      },
    })
    return response.json()
  } catch (error:any) {
    throw new Error(error)
  }
}

export async function addQuote(data:any) {
  const baseUrl = "http://localhost:8000/api/quote"
  const response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",      
    },
    body: JSON.stringify(data),
  })  
  return response.ok ? await response.json() : Promise.reject(await response.json())
}

export async function addOrder(data:any) {
  const baseUrl = "http://localhost:8000/api/order"
  const response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",      
    },
    body: JSON.stringify(data),
  })  
  return response.ok ? await response.json() : Promise.reject(await response.json())
}