export interface HTTPClientInterface {
  get<T>(word: string): Promise<T>;
}

export class HTTPClient<T extends HeadersInit | undefined>
  implements HTTPClientInterface
{
  headers: T;
  baseURL: string;

  constructor(headers: T, baseURL: string) {
    this.headers = headers;
    this.baseURL = baseURL;
  }

  async get<T>(word: string): Promise<T> {
    try {
      const response = await fetch(`${this.baseURL}/entries/en/${word}`, {
        method: 'GET',
        headers: this.headers,
      });
      const result = await response.json();
      return result.results as T;
    } catch (error) {
      //TODO: error handling
      console.log(error);
      return [] as T;
    }
  }
}
