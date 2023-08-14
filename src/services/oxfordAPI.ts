import { LexicalEntry } from '@src/model/LexicalEntry';
import { HTTPClient, HTTPClientInterface } from './HTTPClient';

type Headers = {
  app_id: string;
  app_key: string;
};
type Response = {
  id: string;
  lexicalEntries: {
    entries: Entry[];
  }[];
};

type Entry = {
  senses: Sense[];
};

type Sense = {
  definitions: string[];
  examples: {
    text: string;
  }[];
};

export class OxfordAPI {
  httpClient: HTTPClientInterface;
  headers: Headers;
  baseURL: string;

  constructor() {
    this.headers = {
      app_id: import.meta.env.VITE_APP_ID,
      app_key: import.meta.env.VITE_APP_KEY,
    };
    this.baseURL = 'https://od-api.oxforddictionaries.com/api/v2';
    this.httpClient = new HTTPClient(this.headers, this.baseURL);
  }

  async getLexicalEntry(word: string): Promise<LexicalEntry> {
    const response = await this.httpClient.get<Response[]>(word);
    const firstResponse = response[0];

    return {
      id: firstResponse.id,
      definition:
        firstResponse.lexicalEntries[0].entries[0].senses[0].definitions[0],
      examples: firstResponse.lexicalEntries[0].entries[0].senses[0].examples,
    };
  }
}
