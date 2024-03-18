import {
  Container,
  Font,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Row,
  Section,
  Text
} from '@react-email/components';
import * as React from 'react';
import '../src/lib/firebase';
import { getCompanyLogo } from '../src/lib/storage';

type CompanyNewsProps = {
  companyName: string;
  tickerName: string;
  stockPrice: number;
  percentChange: number;
  news: string;
};

function CompanyNews(props: CompanyNewsProps) {
  const { companyName, tickerName, stockPrice, percentChange, news } = props;
  const isPositive = percentChange > 0;

  return (
    <div
      style={{
        padding: 10,
        backgroundColor: '#f2f2f2',
        margin: '7.5px 0',
        borderRadius: 3
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: -20
        }}
      >
        <Img
          src={`https://fire-ai.s3.us-west-1.amazonaws.com/company-logos-jpg/${tickerName}.jpg`}
          alt="placeholder"
          width={25}
          height={25}
          style={{ marginRight: 10, borderRadius: 3 }}
        />
        <Text>
          <span style={{ fontWeight: 'bold' }}>{companyName}</span>: $
          {stockPrice} (
          {isPositive ? (
            <span style={{ color: 'green' }}>+{percentChange}%</span>
          ) : (
            <span style={{ color: 'red' }}>{percentChange}%</span>
          )}
          )
        </Text>
      </div>
      <Text>{news}</Text>
    </div>
  );
}

const NewsletterEmail = () => {
  return (
    <Html>
      <Head>
        <Font
          fontFamily="Carlito"
          fallbackFontFamily="Verdana"
          webFont={{
            url: 'https://fonts.googleapis.com/css2?family=Carlito:ital,wght@0,400;0,700;1,400;1,700&display=swap',
            format: 'woff2'
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Container
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px',
          border: '1px solid #e5e7eb'
        }}
      >
        <Section>
          <Img
            src="https://fire-ai.s3.us-west-1.amazonaws.com/fireai-logo.png"
            alt="placeholder"
            width={80}
            height={80}
          />
          <Heading as="h2">Weekly Portfolio Insights</Heading>
          <Row>
            <Heading as="h4">Hello!</Heading>
            <Text>Thanks for subscribing!</Text>
            <Text>
              Fire AI delivers curated news and insights tailored to your
              watchlist directly to your inbox, ensuring you get a clear view
              without the clutter or hassle.
            </Text>
            <Text>
              You can edit your watchlist for next week{' '}
              <Link href="https://fireai.vercel.app/edit-watchlist">here</Link>
            </Text>
          </Row>
        </Section>

        <Section>
          {/* <div
            style={{
              border: '1px solid #D8D8D8',
              padding: '20px 10px',
              backgroundColor: 'white',
              borderRadius: 4
            }}
          > */}
          <Heading as="h4">Your watchlist</Heading>
          <CompanyNews
            companyName="Apple"
            tickerName="AAPL"
            percentChange={-2.86}
            stockPrice={100}
            news="Apple Inc reported a quarterly revenue of $89.5 billion in Q4 2023, which is a 1% decrease year-over-year. However, their earnings per diluted share increased by 13% year-over-year to $1.46. iPhone revenue set a September quarter record, and Services revenue reached a new all-time high. The company returned nearly $25 billion to shareholders during this period"
          />
          <CompanyNews
            companyName="Microsoft"
            tickerName="MSFT"
            percentChange={1.99}
            stockPrice={200}
            news="Microsoft and Oracle have expanded their partnership to satisfy the global demand for Oracle Database on Azure"
          />
          {/* </div> */}
        </Section>
        <Section style={{ display: 'flex' }}>
          <Heading as="h4">Links that {"don't"} suck</Heading>
          <ul>
            <li>
              <Link>Link 1</Link>
            </li>
            <li>
              <Link>Link 2</Link>
            </li>
            <li>
              <Link>Link 3</Link>
            </li>
            <li>
              <Link>Link 4</Link>
            </li>
            <li>
              <Link>Link 5</Link>
            </li>
          </ul>
        </Section>
      </Container>
    </Html>
  );
};

export default NewsletterEmail;
