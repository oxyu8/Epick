interface HTTPClientInterface {
  get(word: string): void;
}

type Headers = {
  app_id: string;
  app_key: string;
};

export class HTTPClient implements HTTPClientInterface {
  headers: Headers;
  baseURL: string;

  constructor() {
    this.headers = {
      app_id: import.meta.env.VITE_APP_ID,
      app_key: import.meta.env.VITE_APP_KEY,
    };
    this.baseURL = 'https://od-api.oxforddictionaries.com/api/v2';
  }

  async get(word: string) {
    try {
      const response = await fetch(`${this.baseURL}/entries/en/${word}`, {
        method: 'GET',
        headers: this.headers,
      });
    } catch (error) {
      //TODO: error handling
      console.log(error);
    }
  }
}
