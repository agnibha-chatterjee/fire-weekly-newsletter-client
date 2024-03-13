export interface FeyFormat {
  name: string;
  displayCode: string;
  ticker: string;
  logo: string;
  type: string;
  about: string | null;
}

export interface Stock {
  tickerName: string;
  name: string;
}

export interface Subscriber {
  id?: string;
  name: string;
  email: string;
  stocks: Stock[];
}
