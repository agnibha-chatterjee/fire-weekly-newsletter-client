import {
  Button,
  Column,
  Container,
  Font,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

type CompanyNewsProps = {
  companyName: string;
  tickerName: string;
  stockPrice: number;
  percentChange: number;
  news: string;
  sentiment_score?: number;
};

function LargerText(props: any) {
  return (
    <Text
      style={{
        fontSize: 20,
      }}
    >
      {props.children}
    </Text>
  );
}

function LargerLink(props: any) {
  return (
    <Link
      href={props.href}
      style={{
        fontSize: 32,
      }}
    >
      {props.children}
    </Link>
  );
}

function CompanyNews(props: CompanyNewsProps) {
  const {
    companyName,
    tickerName,
    stockPrice,
    percentChange,
    news,
    sentiment_score = 10,
  } = props;
  const isPositive = percentChange > 0;

  const colorOfSentiment = [1, 2, 3].includes(sentiment_score)
    ? "#4F1515"
    : [8, 9, 10].includes(sentiment_score)
    ? "#157535"
    : "#905107";

  return (
    <Section
      style={{
        padding: "0px 10px 10px 10px",
        borderRadius: 3,
        fontFamily: "Inter",
        width: "100%",
      }}
    >
      <Section>
        <Row>
          <Column>
            <Img
              src={`https://fire-ai.s3.us-west-1.amazonaws.com/company-logos-jpg/${tickerName}.jpg`}
              alt="placeholder"
              width={37.5}
              height={37.5}
              style={{ borderRadius: 3, marginRight: -7.5 }}
            />
          </Column>
          <Column>
            <Text style={{ marginBottom: -22.5 }}>
              <span style={{ fontWeight: "bold", fontSize: 18 }}>
                {tickerName}
              </span>
            </Text>
            <Text>
              <span style={{ fontSize: 14 }}>{companyName}</span>
            </Text>
          </Column>
          <Column style={{ float: "right", margin: "0 25px 0 20px" }}>
            <Text
              style={{
                padding: 7.5,
                backgroundColor: colorOfSentiment,
                borderRadius: 25,
                color: "white",
                fontSize: 13,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ marginRight: 5 }}>Sentiment </span>
              <span
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "50%",
                  padding: 4,
                  color: "black",
                  width: 12.5,
                  height: 12.5,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {sentiment_score}
              </span>
            </Text>
          </Column>
          <Column
            style={{
              float: "right",
              textAlign: "center",
            }}
          >
            <Text style={{ marginBottom: -22.5 }}>
              <span style={{ fontWeight: "bold", fontSize: 18 }}>
                ${stockPrice}
              </span>
            </Text>
            <Text>
              <span style={{ fontSize: 14 }}>
                {isPositive ? (
                  <span style={{ color: "green" }}>+{percentChange}%</span>
                ) : (
                  <span style={{ color: "red" }}>{percentChange}%</span>
                )}
              </span>
            </Text>
          </Column>
        </Row>
      </Section>
      <Text style={{ marginTop: -10 }}>{news}</Text>
    </Section>
  );
}

const NewsletterEmail = (props: any) => {
  const { user, news, links, test = true } = props;

  if (test) {
    const user = {
      email: "kanav2garg@gmail.com",
    };

    // const linksThatDontSuck = [
    //   {
    //     url: "https://www.bloomberg.com/news/articles/2021-03-18/tesla-s-elon-musk-says-he-s-a-supporter-of-bitcoin",
    //     description: "OMG APPLE IS MAKING iCAR",
    //   },
    //   {
    //     url: "https://www.bloomberg.com/news/articles/2021-03-18/tesla-s-elon-musk-says-he-s-a-supporter-of-bitcoin",
    //     description: "Some gigantic news",
    //   },
    //   {
    //     url: "https://www.bloomberg.com/news/articles/2021-03-18/tesla-s-elon-musk-says-he-s-a-supporter-of-bitcoin",
    //     description: "Some other breaking news",
    //   },
    //   {
    //     url: "https://www.bloomberg.com/news/articles/2021-03-18/tesla-s-elon-musk-says-he-s-a-supporter-of-bitcoin",
    //     description: "Some other breaking news",
    //   },
    //   {
    //     url: "https://www.bloomberg.com/news/articles/2021-03-18/tesla-s-elon-musk-says-he-s-a-supporter-of-bitcoin",
    //     description: "Some other breaking news 222",
    //   },
    // ];

    const newss = [
      {
        tickerName: "AAPL",
        stock_name: "Apple Inc.",
        last_closing_price: 120.53,
        weekly_price_change: 0.5,
        summary:
          "Apple agreed to a $490M settlement in a lawsuit accusing CEO Tim Cook of downplaying iPhone sales drop in China. The sum is less than two days’ net income for Apple.",
        sentiment_score: 5,
      },
      {
        tickerName: "MSFT",
        stock_name: "Microsoft Inc.",
        last_closing_price: 230.53,
        weekly_price_change: -0.5,
        summary:
          "Apple agreed to a $490M settlement in a lawsuit accusing CEO Tim Cook of downplaying iPhone sales drop in China. The sum is less than two days’ net income for Apple.",
        sentiment_score: 1,
      },
      {
        tickerName: "GOOGL",
        stock_name: "Alphabet Inc.",
        last_closing_price: 130.53,
        weekly_price_change: 0.5,
        summary:
          "Apple agreed to a $490M settlement in a lawsuit accusing CEO Tim Cook of downplaying iPhone sales drop in China. The sum is less than two days’ net income for Apple.",
        sentiment_score: 10,
      },
      {
        tickerName: "AMZN",
        stock_name: "Amazon Inc.",
        last_closing_price: 320.53,
        weekly_price_change: 0.5,
        summary:
          "Apple agreed to a $490M settlement in a lawsuit accusing CEO Tim Cook of downplaying iPhone sales drop in China. The sum is less than two days’ net income for Apple.",
        sentiment_score: 9,
      },
    ];

    return (
      <Html style={{ backgroundColor: "#F1F1F1" }}>
        <Head>
          <Font
            fontFamily="Inter"
            fallbackFontFamily="Verdana"
            webFont={{
              url: "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap",
              format: "woff2",
            }}
            fontWeight={400}
            fontStyle="normal"
          />
          <Font
            fontFamily="IBM Plex Sans"
            fallbackFontFamily="Verdana"
            webFont={{
              url: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap",
              format: "woff2",
            }}
            fontWeight={400}
            fontStyle="normal"
          />
        </Head>
        <Container
          style={{
            padding: 5,
            backgroundColor: "white",
            paddingLeft: 22.5,
          }}
        >
          <Section>
            <Section
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: -10,
              }}
            >
              <Row>
                <Column>
                  <Img
                    src="https://fire-ai.s3.us-west-1.amazonaws.com/fireai-logo.png"
                    alt="placeholder"
                    width={60}
                    height={60}
                    style={{ borderRadius: 5 }}
                  />
                </Column>
                <Column>
                  <Text
                    style={{
                      fontFamily: "IBM Plex Sans",
                      fontSize: 32,
                    }}
                  >
                    fire ai
                  </Text>
                </Column>
              </Row>
            </Section>

            <Heading
              as="h2"
              style={{ fontSize: 45, fontFamily: "IBM Plex Sans" }}
            >
              Hey Kanav, {"here's"} your weekly insights
            </Heading>
          </Section>

          <Section>
            {newss.map((n: any) => (
              <CompanyNews
                key={n.tickerName}
                companyName={n.stock_name}
                tickerName={n.tickerName}
                stockPrice={n.last_closing_price}
                percentChange={n.weekly_price_change}
                news={n.summary}
                sentiment_score={n.sentiment_score}
              />
            ))}
          </Section>
          {/* <Section>
            <Heading as="h2" style={{ fontSize: 34 }}>
              Links that {"don't"} suck
            </Heading>
            <ul>
              {linksThatDontSuck.map((link: any) => {
                return (
                  <li key={link.url}>
                    <LargerLink href={link.url}>{link.description}</LargerLink>
                  </li>
                );
              })}
            </ul>
          </Section> */}
          <Section>
            <Text>
              <Heading as="h2" style={{ fontFamily: "IBM Plex Sans" }}>
                Stock Highlight: ARM
              </Heading>
              <Text>
                {"Nvidia's"} latest revelation at the GTC event has taken the AI
                world by storm. 💥 The {"company's"} groundbreaking Blackwell
                architecture, powered by the GB200 superchip with an integrated
                Arm-based Grace CPU, is set to revolutionize AI processing. This
                development highlights Arm {"Holdings'"} crucial role in driving
                the AI revolution forward. 🚀
                <br />
                <br />
                What sets Arm apart is its unique licensing model, where it
                gives out their chip designs like sharing toy blueprints, so
                companies can build fun new AI computers! This flexibility has
                sparked innovation in AI hardware, with {"Arm's"} designs
                becoming prevalent in cloud computing and data centers. By
                working in tandem with {"Nvidia's "}
                powerful GPUs, {"Arm's "} CPUs are helping unlock AI{" "}
                {"processing's "}
                full potential. To put into simple terms, if the AI industry is
                the rocket, ARM has licensing rights over the {"fuel's "}
                composition.
                <br />
                <br />
                Industry giants are taking notice of {"Arm's"}
                capabilities. 👀 {"Nvidia's"} GH200 Grace Hopper Superchip and
                {" Microsoft's "} AI servers both rely on {"Arm's"}{" "}
                high-performance V9 CPU cores to deliver cutting-edge
                performance. As businesses capitalize on {"AI's"}
                multi-trillion-dollar potential, Arm finds itself in a prime
                position to benefit from this growth.
                <br />
                <br />
                🌱 Wait for a good buying opportunity 📉 to get in on the
                action!
              </Text>
            </Text>
          </Section>
        </Container>
        <Container>
          <Section
            style={{
              marginTop: 15,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Button
              style={{
                padding: "10px",
                backgroundColor: "white",
                marginRight: 5,
                borderRadius: 15,
              }}
            >
              Share
            </Button>
            <Button
              style={{
                padding: "10px",
                backgroundColor: "white",
                marginLeft: 5,
                borderRadius: 15,
              }}
            >
              Edit Watchlist
            </Button>
          </Section>
        </Container>
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
            url: "https://fonts.googleapis.com/css2?family=Carlito:ital,wght@0,400;0,700;1,400;1,700&display=swap",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Container
        style={{
          minWidth: 650,
          padding: 20,
        }}
      >
        <Section>
          <Section style={{ textAlign: "center" }}>
            <Img
              src="https://fire-ai.s3.us-west-1.amazonaws.com/fireai-logo.png"
              alt="placeholder"
              width={120}
              height={120}
              style={{ margin: "0 auto", borderRadius: 5 }}
            />
            <Heading as="h1" style={{ fontSize: 40 }}>
              Weekly Portfolio Insights
            </Heading>
          </Section>

          <Heading as="h2" style={{ fontSize: 34 }}>
            Hello!
          </Heading>
          <LargerText>Thanks for subscribing!</LargerText>
          <LargerText>
            Fire AI delivers curated news and insights tailored to your
            watchlist directly to your inbox, ensuring you get a clear view
            without the clutter or hassle.
          </LargerText>
          <LargerText>
            You can edit your watchlist for next week{" "}
            <LargerLink
              href={`https://fireai.vercel.app/edit-watchlist?email=${user.email}`}
            >
              here
            </LargerLink>
          </LargerText>
        </Section>

        <Section>
          <Heading as="h2" style={{ fontSize: 34 }}>
            Your Watchlist
          </Heading>
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
          <Heading as="h2" style={{ fontSize: 34 }}>
            Links that {"don't"} suck
          </Heading>
          <ul>
            {links.links.map((link: any) => {
              return (
                <li key={link.url}>
                  <LargerLink href={link.url}>{link.description}</LargerLink>
                </li>
              );
            })}
          </ul>
        </Section>
        <Section>
          <LargerText>
            <Heading as="h2" style={{ fontSize: 34 }}>
              The case for Apple
            </Heading>
            <LargerText>
              Apple is currently trading far below expectations and have
              remained mostly flat despite the recent tech run up due to AI. The
              main reason is probably because of the sentiment that Apple is
              struggling to keep up with the revolution. However, {"Apple's"}
              deliberate pace seems strategic, catering to its vast 2 billion
              users. With a track record of innovation, like the Vision Pro, and
              the{" "}
              <LargerLink href="https://www.engadget.com/apple-releases-an-ai-model-that-can-edit-images-based-on-LargerText-based-commands-081646262.html">
                recent introduction
              </LargerLink>{" "}
              of a LargerText-based AI for editing photos, Apple is clearly
              focused on creating real, everyday value distinguishing it from
              others that are building picks and shovels.
              <LargerText>Stay tuned 👀</LargerText>
            </LargerText>
          </LargerText>
          <Img
            src="https://fire-ai.s3.us-west-1.amazonaws.com/mar18-1.png"
            alt="placeholder"
            width={600}
            style={{ margin: "0 auto", borderRadius: 5, marginBottom: 20 }}
          />
          <Img
            src="https://fire-ai.s3.us-west-1.amazonaws.com/mar18-2.png"
            alt="placeholder"
            width={600}
            style={{ margin: "0 auto", borderRadius: 5 }}
          />
        </Section>
      </Container>
    </Html>
  );
};

export default NewsletterEmail;
