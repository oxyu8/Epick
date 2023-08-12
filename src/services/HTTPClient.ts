interface HTTPClientInterface {
  get(): void;
}

export class HTTPClient implements HTTPClientInterface {
  async get() {
    const headers = {
      app_id: import.meta.env.VITE_APP_ID,
      app_key: import.meta.env.VITE_APP_KEY,
    };
    try {
      console.log(import.meta.env.VITE_APP_ID);
      console.log(import.meta.env.VITE_APP_KEY);
      const response = await fetch(
        'https://od-api.oxforddictionaries.com/api/v2/entries/en/test',
        {
          method: 'GET',
          headers,
        }
      );
      console.log(response);
    } catch (error) {
      console.log('error');
      console.log(error);
    }
  }
}
