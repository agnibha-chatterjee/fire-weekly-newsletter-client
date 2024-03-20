import {
  Column,
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
    <Section
      style={{
        padding: '0px 10px 10px 10px',
        backgroundColor: '#f2f2f2',
        margin: '7.5px 0',
        borderRadius: 3
      }}
    >
      <Section
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: -10
        }}
      >
        <Row>
          <Column>
            <Img
              src={`https://fire-ai.s3.us-west-1.amazonaws.com/company-logos-jpg/${tickerName}.jpg`}
              alt="placeholder"
              width={25}
              height={25}
              style={{ marginRight: 10, borderRadius: 3 }}
            />
          </Column>
          <Column>
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
          </Column>
        </Row>
      </Section>
      <span style={{ fontSize: 14 }}>{news}</span>
    </Section>
  );
}

const NewsletterEmail = (props: any) => {
  const { user, news, links, test = true } = props;

  if (test) {
    return (
      <Html>
        <Section>
          <Text>
            <span style={{ fontWeight: 'bold' }}>The case for Apple</span>
            <Text>
              Apple is currently trading far below expectations and have
              remained mostly flat despite the recent tech run up due to AI. The
              main reason is probably because of the sentiment that Apple is
              struggling to keep up with the revolution. However, {"Apple's "}
              deliberate pace seems strategic, catering to its vast 2 billion
              users. With a track record of innovation, like the Vision Pro, and
              the{' '}
              <Link href="https://www.engadget.com/apple-releases-an-ai-model-that-can-edit-images-based-on-text-based-commands-081646262.html">
                recent introduction
              </Link>{' '}
              of a text-based AI for editing photos, Apple is clearly focused on
              creating real, everyday value distinguishing it from others that
              are building picks and shovels.
              <Text>Stay tuned 👀</Text>
            </Text>
          </Text>
          <Img
            src="https://fire-ai.s3.us-west-1.amazonaws.com/mar18-1.png"
            alt="placeholder"
            width={600}
            style={{ margin: '0 auto', borderRadius: 5, marginBottom: 20 }}
          />
          <Img
            src="https://fire-ai.s3.us-west-1.amazonaws.com/mar18-2.png"
            alt="placeholder"
            width={600}
            style={{ margin: '0 auto', borderRadius: 5 }}
          />
        </Section>
      </Html>
    );
  }

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
          minWidth: 650,
          padding: 20
        }}
      >
        <Section>
          <Section style={{ textAlign: 'center' }}>
            <Img
              src="https://fire-ai.s3.us-west-1.amazonaws.com/fireai-logo.png"
              alt="placeholder"
              width={80}
              height={80}
              style={{ margin: '0 auto', borderRadius: 5 }}
            />
            <Heading as="h2">Weekly Portfolio Insights</Heading>
          </Section>

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
        </Section>

        <Section>
          <Heading as="h4">Your watchlist</Heading>
          {news.map((n: any) => (
            <CompanyNews
              key={n.tickerName}
              companyName={n.stock_name}
              tickerName={n.tickerName}
              stockPrice={n.last_closing_price}
              percentChange={n.weekly_price_change}
              news={n.summary}
            />
          ))}
        </Section>
        <Section>
          <Heading as="h4">Links that {"don't"} suck</Heading>
          <ul>
            {links.links.map((link: any) => {
              return (
                <li key={link.url}>
                  <Link href={link.url}>{link.description}</Link>
                </li>
              );
            })}
          </ul>
        </Section>
        <Section>
          <Text>
            <span style={{ fontWeight: 'bold' }}>The case for Apple</span>
            <Text>
              Apple is currently trading far below expectations and have
              remained mostly flat despite the recent tech run up due to AI. The
              main reason is probably because of the sentiment that Apple is
              struggling to keep up with the revolution. However, {"Apple's"}
              deliberate pace seems strategic, catering to its vast 2 billion
              users. With a track record of innovation, like the Vision Pro, and
              the{' '}
              <Link href="https://www.engadget.com/apple-releases-an-ai-model-that-can-edit-images-based-on-text-based-commands-081646262.html">
                recent introduction
              </Link>{' '}
              of a text-based AI for editing photos, Apple is clearly focused on
              creating real, everyday value distinguishing it from others that
              are building picks and shovels.
              <Text>Stay tuned 👀</Text>
            </Text>
          </Text>
          <Img
            src="https://fire-ai.s3.us-west-1.amazonaws.com/mar18-1.png"
            alt="placeholder"
            width={600}
            style={{ margin: '0 auto', borderRadius: 5, marginBottom: 20 }}
          />
          <Img
            src="https://fire-ai.s3.us-west-1.amazonaws.com/mar18-2.png"
            alt="placeholder"
            width={600}
            style={{ margin: '0 auto', borderRadius: 5 }}
          />
        </Section>
      </Container>
    </Html>
  );
};

export default NewsletterEmail;
