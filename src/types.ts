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
  test?: boolean;
}

export interface LinkThatDoesntSuck {
  description: string;
  url: string;
}

export interface LinksThatDontSuck {
  date: number;
  links: LinkThatDoesntSuck[];
  id?: string;
}

export interface NewsSummary {
  id?: string;
  last_closing_price: number;
  relevance_score: number;
  sentiment_score: number;
  stock_name: string;
  summary: string;
  weekly_price_change: number;
}
