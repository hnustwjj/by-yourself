class Request {
  baseURL = "localhost:3000/"
  async get(url) {
    const res = fetch(this.baseURL + url)
    const data = await res.json()
    return data
  }
  async post(url, data) {
    const res = fetch(this.baseURL + url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    const data = await res.json()
    return data
  }
}
