const URL_API = 'https://api.giphy.com/v1'

class Api {
  
  async searchGif(q) {
    console.log('searchGif : ', q)
    const query = await fetch(`${URL_API}/gifs/search?api_key=x7dLiLrADHYCP7uVDwnNcLUEBXiIHUOZ&q=${q}&limit=25&offset=0&rating=G&lang=en`) 
    const { data } = await query.json()
    return data
  }

}

export default new Api()