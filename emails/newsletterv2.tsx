import {
  Container,
  Text,
  Head,
  Html,
  Body,
  Tailwind,
  Section,
  Img,
  Heading,
  Link,
  Row,
  Column,
} from "@react-email/components";

function CompanyNews(props: any) {
  const {
    companyName,
    tickerName,
    stockPrice,
    percentChange,
    news,
    sentimentScore,
    splitSummary,
  } = props;
  const isPositive = percentChange > 0;

  const sentimentColor = [1, 2, 3].includes(sentimentScore)
    ? "bg-rose-900"
    : [4, 5, 6].includes(sentimentScore)
    ? "bg-amber-900"
    : "bg-green-700";

  return (
    <Section
      style={{
        padding: "0px 10px 10px 10px",
        margin: "12.5px 0",
        borderRadius: 3,
        border: "1px solid #e2e8f0",
      }}
    >
      <Section>
        <Row
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: -10,
          }}
        >
          <Column>
            <Img
              src={`https://fire-ai.s3.us-west-1.amazonaws.com/company-logos-jpg/${tickerName}.jpg`}
              alt="placeholder"
              className="responsive-logo"
              style={{ marginRight: 10, borderRadius: 3 }}
            />
          </Column>
          <Column>
            <Text className="text-base md:text-md">
              <span style={{ fontWeight: "bold" }}>{companyName}</span>{" "}
              <span>${stockPrice} (</span>
              {isPositive ? (
                <span style={{ color: "green" }}>+{percentChange}%</span>
              ) : (
                <span style={{ color: "red" }}>{percentChange}%</span>
              )}
              <span>)</span>
            </Text>
          </Column>
        </Row>
      </Section>
      {splitSummary.length > 1 ? (
        <>
          {splitSummary.map((s: string, i: number) => (
            <Text key={i} className="text-base md:text-md">
              {s.trim()}
            </Text>
          ))}
        </>
      ) : (
        <Text className="text-base md:text-md">{news}</Text>
      )}
      <Text className="text-sm">
        <span className={`text-white rounded-md p-2 ${sentimentColor}`}>
          Sentiment <span>{sentimentScore}</span>
        </span>
      </Text>
    </Section>
  );
}

const NewsLetterV2 = (props: any) => {
  const { user = { name: "User" }, news = [] } = props;
  const firstName = user.name.split(" ")[0];
  const newss = [
    {
      tickerName: "AAPL",
      stock_name: "Apple Inc.",
      last_closing_price: 120.53,
      weekly_price_change: 0.5,
      summary:
        "Apple is currently trading far below expectations and have remained mostly flat despite the recent tech run up due to AI. The main reason is probably because of the sentiment that Apple is struggling to keep up with the revolution. However, Apple's deliberate pace seems strategic, catering to its vast 2 billion users. With a track record of innovation, like the Vision Pro, and the recent introduction of a LargerText-based AI for editing photos, Apple is clearly focused on creating real, everyday value distinguishing it from others that are building picks and shovels.",
      sentiment_score: 1,
      splitSummary: [],
    },
    {
      tickerName: "MSFT",
      stock_name: "Microsoft Inc.",
      last_closing_price: 230.53,
      weekly_price_change: -0.5,
      summary:
        "Microsoft is currently trading far below expectations and have remained mostly flat despite the recent tech run up due to AI. The main reason is probably because of the sentiment that Microsoft is struggling to keep up with the revolution. However, Microsoft's deliberate pace seems strategic, catering to its vast 2 billion users. With a track record of innovation, like the Vision Pro, and the recent introduction of a LargerText-based AI for editing photos, Microsoft is clearly focused on creating real, everyday value distinguishing it from others that are building picks and shovels.",
      sentiment_score: 5,
      splitSummary: [],
    },
  ];

  return (
    <Html>
      <Tailwind>
        <Head>
          <style>
            {`           
                .responsive-logo {
                    width: 30px;
                    height: 30px;
                }

                @media screen and (max-width: 600px) {
                .responsive-logo {
                        width: 40px;
                        height: 40px;
                    }

                }

                @media screen and (max-width: 400px) {

                .responsive-logo {
                        width: 40px;
                        height: 40px;
                    }
                }
            `}
          </style>
        </Head>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container>
            <Section className="text-center">
              <Img
                src="https://fire-ai.s3.us-west-1.amazonaws.com/fireai-logo.png"
                alt="placeholder"
                width={120}
                height={120}
                className="mx-auto"
              />
            </Section>
            <Section>
              <Heading as="h2" className="text-md sm:text-xl">
                Hello {firstName}, {"here's"} your weekly insights!
              </Heading>

              <Text className="text-base sm:text-md">
                You can edit your watchlist for next week{" "}
                <Link
                  href={`https://fireai.vercel.app/edit-watchlist?email=${user.email}`}
                  className="text-base underline sm:text-md"
                >
                  here
                </Link>
              </Text>
            </Section>
            <Section>
              {news.map((n: any) => (
                <CompanyNews
                  key={n.tickerName}
                  companyName={n.stock_name}
                  tickerName={n.tickerName}
                  stockPrice={n.last_closing_price}
                  percentChange={n.weekly_price_change}
                  news={n.summary}
                  sentimentScore={n.sentiment_score}
                  splitSummary={n.splitSummary}
                />
              ))}
            </Section>
            <Section>
              <Heading as="h2" className="text-md sm:text-xl">
                Stock Highlight: ARM
              </Heading>
              <Text className="text-base sm:text-md">
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
            </Section>
            <Section>
              <Text className="text-base sm:text-md text-center">
                See you next Monday! 👋
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default NewsLetterV2;
