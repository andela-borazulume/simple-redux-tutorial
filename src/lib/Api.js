export const Api = {
    getRepos: (data) => {
    const url = "https://www.googleapis.com/books/v1/volumes?q=" + data;

    return fetch(url).then(response => {
      return response.json()
    }).then(data => {
     

    })
  }
}