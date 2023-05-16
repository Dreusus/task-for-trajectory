class CarsApi {
  private _baseUrl: string;

  constructor({ baseUrl }: { baseUrl: string }) {
    this._baseUrl = baseUrl;
  }

  private _checkResponse(res: Response) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.statusText}`)
  }

  _request(url: string, options: RequestInit) {
    return fetch(url, options).then(this._checkResponse)
  }

  getCarsList() {
    return this._request(`${this._baseUrl}/vehicles`, {
      headers: {
        'Content-type': 'application/json',
      }
    })
  }


}

const carsApi = new CarsApi({
  baseUrl: 'https://test.tspb.su/test-task'
})

export default carsApi;