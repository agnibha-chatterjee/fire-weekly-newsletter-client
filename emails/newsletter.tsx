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
  Text,
} from "@react-email/components";
import * as React from "react";

type CompanyNewsProps = {
  companyName: string;
  tickerName: string;
  stockPrice: number;
  percentChange: number;
  news: string;
};

function LargerText(props: any) {
  return <Text className="responsive-text">{props.children}</Text>;
}

function LargerLink(props: any) {
  return (
    <Link href={props.href} className="responsive-text">
      {props.children}
    </Link>
  );
}

function CompanyNews(props: CompanyNewsProps) {
  const { companyName, tickerName, stockPrice, percentChange, news } = props;
  const isPositive = percentChange > 0;

  return (
    <Section
      style={{
        padding: "0px 10px 10px 10px",
        backgroundColor: "#f2f2f2",
        margin: "12.5px 0",
        borderRadius: 3,
      }}
    >
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
              src={`https://fire-ai.s3.us-west-1.amazonaws.com/company-logos-jpg/${tickerName}.jpg`}
              alt="placeholder"
              className="responsive-logo"
              style={{ marginRight: 10, borderRadius: 3 }}
            />
          </Column>
          <Column>
            <Text>
              <span className="responsive-text">
                <span style={{ fontWeight: "bold" }}>{companyName}</span>{" "}
                <span>${stockPrice} (</span>
                {isPositive ? (
                  <span style={{ color: "green" }}>+{percentChange}%</span>
                ) : (
                  <span style={{ color: "red" }}>{percentChange}%</span>
                )}
                <span>)</span>
              </span>
            </Text>
          </Column>
        </Row>
      </Section>
      <LargerText>{news}</LargerText>
    </Section>
  );
}

const NewsletterEmail = (props: any) => {
  const { user, news, links, test = true } = props;

  if (test) {
    const user = {
      email: "kanav2garg@gmail.com",
    };

    const linksThatDontSuck = [
      {
        url: "https://www.bloomberg.com/news/articles/2021-03-18/tesla-s-elon-musk-says-he-s-a-supporter-of-bitcoin",
        description: "OMG APPLE IS MAKING iCAR",
      },
      {
        url: "https://www.bloomberg.com/news/articles/2021-03-18/tesla-s-elon-musk-says-he-s-a-supporter-of-bitcoin",
        description: "Some gigantic news",
      },
      {
        url: "https://www.bloomberg.com/news/articles/2021-03-18/tesla-s-elon-musk-says-he-s-a-supporter-of-bitcoin",
        description: "Some other breaking news",
      },
      {
        url: "https://www.bloomberg.com/news/articles/2021-03-18/tesla-s-elon-musk-says-he-s-a-supporter-of-bitcoin",
        description: "Some other breaking news",
      },
      {
        url: "https://www.bloomberg.com/news/articles/2021-03-18/tesla-s-elon-musk-says-he-s-a-supporter-of-bitcoin",
        description: "Some other breaking news 222",
      },
    ];

    const newss = [
      {
        tickerName: "AAPL",
        stock_name: "Apple Inc.",
        last_closing_price: 120.53,
        weekly_price_change: 0.5,
        summary:
          "Apple is currently trading far below expectations and have remained mostly flat despite the recent tech run up due to AI. The main reason is probably because of the sentiment that Apple is struggling to keep up with the revolution. However, Apple's deliberate pace seems strategic, catering to its vast 2 billion users. With a track record of innovation, like the Vision Pro, and the recent introduction of a LargerText-based AI for editing photos, Apple is clearly focused on creating real, everyday value distinguishing it from others that are building picks and shovels.",
      },
      {
        tickerName: "MSFT",
        stock_name: "Microsoft Inc.",
        last_closing_price: 230.53,
        weekly_price_change: -0.5,
        summary:
          "Microsoft is currently trading far below expectations and have remained mostly flat despite the recent tech run up due to AI. The main reason is probably because of the sentiment that Microsoft is struggling to keep up with the revolution. However, Microsoft's deliberate pace seems strategic, catering to its vast 2 billion users. With a track record of innovation, like the Vision Pro, and the recent introduction of a LargerText-based AI for editing photos, Microsoft is clearly focused on creating real, everyday value distinguishing it from others that are building picks and shovels.",
      },
      {
        tickerName: "GOOGL",
        stock_name: "Alphabet Inc.",
        last_closing_price: 130.53,
        weekly_price_change: 0.5,
        summary:
          "Alphabet is currently trading far below expectations and have remained mostly flat despite the recent tech run up due to AI. The main reason is probably because of the sentiment that Alphabet is struggling to keep up with the revolution. However, Alphabet's deliberate pace seems strategic, catering to its vast 2 billion users. With a track record of innovation, like the Vision Pro, and the recent introduction of a LargerText-based AI for editing photos, Alphabet is clearly focused on creating real, everyday value distinguishing it from others that are building picks and shovels.",
      },
      {
        tickerName: "AMZN",
        stock_name: "Amazon Inc.",
        last_closing_price: 320.53,
        weekly_price_change: 0.5,
        summary:
          "Amazon is currently trading far below expectations and have remained mostly flat despite the recent tech run up due to AI. The main reason is probably because of the sentiment that Amazon is struggling to keep up with the revolution. However, Amazon's deliberate pace seems strategic, catering to its vast 2 billion users. With a track record of innovation, like the Vision Pro, and the recent introduction of a LargerText-based AI for editing photos, Amazon is clearly focused on creating real, everyday value distinguishing it from others that are building picks and shovels.",
      },
      {
        tickerName: "TSLA",
        stock_name: "Tesla Inc.",
        last_closing_price: 420.53,
        weekly_price_change: 0.5,
        summary:
          "Tesla is currently trading far below expectations and have remained mostly flat despite the recent tech run up due to AI. The main reason is probably because of the sentiment that Tesla is struggling to keep up with the revolution. However, Tesla's deliberate pace seems strategic, catering to its vast 2 billion users. With a track record of innovation, like the Vision Pro, and the recent introduction of a LargerText-based AI for editing photos, Tesla is clearly focused on creating real, everyday value distinguishing it from others that are building picks and shovels.",
      },
      {
        tickerName: "META",
        stock_name: "Facebook Inc.",
        last_closing_price: 520.53,
        weekly_price_change: 0.5,
        summary:
          "Facebook is currently trading far below expectations and have remained mostly flat despite the recent tech run up due to AI. The main reason is probably because of the sentiment that Facebook is struggling to keep up with the revolution. However, Facebook's deliberate pace seems strategic, catering to its vast 2 billion users. With a track record of innovation, like the Vision Pro, and the recent introduction of a LargerText-based AI for editing photos, Facebook is clearly focused on creating real, everyday value distinguishing it from others that are building picks and shovels.",
      },
    ];

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
          <style>
            {`
            .responsive-text {
               font-size: 16px;
            }

            .responsive-heading {
                font-size: 24px;
            }

            .responsive-logo {
                width: 30px;
                height: 30px;
            }

            @media screen and (max-width: 600px) {
                .responsive-text {
                    font-size: 24px;
                }


                .responsive-heading {
                    font-size: 32px;
                }

                .responsive-logo {
                width: 40px;
                height: 40px;
                }

            }

            @media screen and (max-width: 400px) {

                .responsive-heading {
                    font-size: 40px;
                }

                .responsive-text {
                    font-size: 32px;
                }

                .responsive-logo {
                width: 40px;
                height: 40px;
                }
            }
          `}
          </style>
        </Head>
        <Container
          style={{
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
              <Heading as="h1">Weekly Portfolio Insights</Heading>
            </Section>

            <Heading as="h2" className="responsive-heading">
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
                href={`http://localhost:3000/edit-watchlist?email=${user.email}`}
              >
                here
              </LargerLink>
            </LargerText>
          </Section>

          <Section>
            <Heading as="h2" className="responsive-heading">
              Your Watchlist
            </Heading>
            {newss.map((n: any) => (
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
          {/* <Section>
            <Heading as="h2">
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
              <Heading
                as="h2"
                style={{ fontFamily: "IBM Plex Sans" }}
                className="responsive-heading"
              >
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
      <Container>
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

          <Heading as="h2">Hello!</Heading>
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
          <Heading as="h2">Your Watchlist</Heading>
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
          <Heading as="h2">Links that {"don't"} suck</Heading>
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
          <Heading
            as="h2"
            style={{ fontFamily: "IBM Plex Sans" }}
            className="responsive-heading"
          >
            Stock Highlight: ARM
          </Heading>
          <LargerText className="responsive-text">
            {"Nvidia's"} latest revelation at the GTC event has taken the AI
            world by storm. 💥 The {"company's"} groundbreaking Blackwell
            architecture, powered by the GB200 superchip with an integrated
            Arm-based Grace CPU, is set to revolutionize AI processing. This
            development highlights Arm {"Holdings'"} crucial role in driving the
            AI revolution forward. 🚀
            <br />
            <br />
            What sets Arm apart is its unique licensing model, where it gives
            out their chip designs like sharing toy blueprints, so companies can
            build fun new AI computers! This flexibility has sparked innovation
            in AI hardware, with {"Arm's"} designs becoming prevalent in cloud
            computing and data centers. By working in tandem with {"Nvidia's "}
            powerful GPUs, {"Arm's "} CPUs are helping unlock AI{" "}
            {"processing's "}
            full potential. To put into simple terms, if the AI industry is the
            rocket, ARM has licensing rights over the {"fuel's "}
            composition.
            <br />
            <br />
            Industry giants are taking notice of {"Arm's"}
            capabilities. 👀 {"Nvidia's"} GH200 Grace Hopper Superchip and
            {" Microsoft's "} AI servers both rely on {"Arm's"} high-performance
            V9 CPU cores to deliver cutting-edge performance. As businesses
            capitalize on {"AI's"}
            multi-trillion-dollar potential, Arm finds itself in a prime
            position to benefit from this growth.
            <br />
            <br />
            🌱 Wait for a good buying opportunity 📉 to get in on the action!
          </LargerText>
        </Section>
      </Container>
    </Html>
  );
};

export default NewsletterEmail;
