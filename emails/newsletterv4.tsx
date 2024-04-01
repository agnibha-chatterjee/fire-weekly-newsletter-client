import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Row,
  Section,
  Tailwind,
  Text,
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

  return (
    <Section className="my-3">
      <span className="flex items-center">
        <Img
          src={`https://fire-ai.s3.us-west-1.amazonaws.com/company-logos-jpg/${tickerName}.jpg`}
          alt="placeholder"
          width={45}
          height={45}
          className="rounded-md mr-3"
        />
        <span className="mr-auto">
          <span className="text-lg font-bold">{tickerName}</span>
          <br />
          <span className="text-sm">{companyName}</span>
        </span>
        <span className="mr-6 text-center">
          <span className="text-lg font-bold">${stockPrice}</span>
          <br />
          <span
            className={`text-sm ${
              isPositive ? "text-green-600" : "text-red-700"
            }`}
          >
            {isPositive ? `+${percentChange}` : percentChange}%
          </span>
        </span>
      </span>
      <Text className="text-base sm:text-md">
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
      </Text>
    </Section>
  );
}

export default function NewsletterV4(props: any) {
  const {
    user = { name: "Agnibha Chatterjee", email: "agni.bhaaa@gmail.com" },
    newsData = [],
  } = props;

  const newss = [
    {
      relevance_score: 5,
      stock_name: "CleanSpark",
      weekly_price_change: 14.82,
      references: "",
      last_closing_price: 19.52,
      sentiment_score: 8,
      summary:
        "Opportunity 💪: CleanSpark announced plans to acquire data center operations, expanding its bitcoin mining capabilities. | Partnerships 🤝: CleanSpark entered into a partnership with Waha CHERR Solutions for carbon credit development.",
      id: "LSbHGuP2o0j98J84vZSw",
      tickerName: "CLSK",
      splitSummary: [
        "Opportunity 💪: CleanSpark announced plans to acquire data center operations, expanding its bitcoin mining capabilities. ",
        " Partnerships 🤝: CleanSpark entered into a partnership with Waha CHERR Solutions for carbon credit development.",
      ],
    },
    {
      references: "",
      summary:
        "Partnerships 🤝: Apple is reportedly in talks with Google to integrate Gemini AI models into iOS 18, potentially bringing AI features like improved Siri. Apple is also developing its own AI models. | Risk ⚠️: A class-action lawsuit against Apple over AirTag stalking is allowed to proceed on claims of negligence and strict liability. The DOJ filed an antitrust lawsuit accusing Apple of monopolistic practices. | Products 📱: New iPad Pro and iPad Air models with OLED displays and redesigned cameras are rumored for March 26 launch. Apple may cancel plans for a microLED Apple Watch due to cost concerns.",
      weekly_price_change: -1.87,
      relevance_score: 5,
      stock_name: "Apple",
      sentiment_score: 6,
      last_closing_price: 172.28,
      id: "Vt73c522sgJA8DOkg81x",
      tickerName: "AAPL",
      splitSummary: [
        "Partnerships 🤝: Apple is reportedly in talks with Google to integrate Gemini AI models into iOS 18, potentially bringing AI features like improved Siri. Apple is also developing its own AI models. ",
        " Risk ⚠️: A class-action lawsuit against Apple over AirTag stalking is allowed to proceed on claims of negligence and strict liability. The DOJ filed an antitrust lawsuit accusing Apple of monopolistic practices. ",
        " Products 📱: New iPad Pro and iPad Air models with OLED displays and redesigned cameras are rumored for March 26 launch. Apple may cancel plans for a microLED Apple Watch due to cost concerns.",
      ],
    },
    {
      references: "",
      weekly_price_change: 3.5,
      relevance_score: 4,
      sentiment_score: 8,
      last_closing_price: 428.74,
      stock_name: "Microsoft",
      summary:
        "Opportunity 💪: Microsoft is aggressively expanding its AI capabilities, hiring top talent like Mustafa Suleyman and acquiring AI startups like Inflection AI. The company aims to integrate AI into consumer products like Copilot, Bing, and Edge. Microsoft is introducing paid versions of its AI tools like Copilot Pro, providing a new revenue stream. | Risk ⚠️: Microsoft faces regulatory scrutiny over its partnership with OpenAI and antitrust concerns related to its practices, similar to past issues faced by the tech giants.",
      id: "74zd2dn1KUSVLgoyiBr9",
      tickerName: "MSFT",
      splitSummary: [
        "Opportunity 💪: Microsoft is aggressively expanding its AI capabilities, hiring top talent like Mustafa Suleyman and acquiring AI startups like Inflection AI. The company aims to integrate AI into consumer products like Copilot, Bing, and Edge. Microsoft is introducing paid versions of its AI tools like Copilot Pro, providing a new revenue stream. ",
        " Risk ⚠️: Microsoft faces regulatory scrutiny over its partnership with OpenAI and antitrust concerns related to its practices, similar to past issues faced by the tech giants.",
      ],
    },
    {
      weekly_price_change: 1.45,
      sentiment_score: 7,
      summary:
        "Partnerships 🤝: Reports suggest a potential deal with Apple to integrate Google's AI. Google partnered with the Indian Election Commission to combat misinformation.DoorDash is collaborating with Google's Wing for drone food delivery.| Risk ⚠️: Google faces regulatory scrutiny, with India ordering an antitrust probe into its app store practices and a fine from France over copyright issues with its AI tool. ",
      stock_name: "Alphabet",
      last_closing_price: 150.77,
      relevance_score: 4,
      references: "",
      id: "SFRtub2vszQlYGO6saCS",
      tickerName: "GOOGL",
      splitSummary: [
        "Partnerships 🤝: Reports suggest a potential deal with Apple to integrate Google's AI. Google partnered with the Indian Election Commission to combat misinformation.DoorDash is collaborating with Google's Wing for drone food delivery.",
        " Risk ⚠️: Google faces regulatory scrutiny, with India ordering an antitrust probe into its app store practices and a fine from France over copyright issues with its AI tool. ",
      ],
    },
    {
      summary:
        "Risk ⚠️: SoundHound AI's stock is trading at a premium valuation, with potential volatility as a speculative bet. The company has shown high growth potential despite losses in 2023.",
      relevance_score: 4,
      weekly_price_change: -32.23,
      last_closing_price: 6.14,
      references: "",
      stock_name: "SoundHound AI",
      sentiment_score: 7,
      id: "jD6mxvjCeeNwDglqclgm",
      tickerName: "SOUN",
      splitSummary: [
        "Risk ⚠️: SoundHound AI's stock is trading at a premium valuation, with potential volatility as a speculative bet. The company has shown high growth potential despite losses in 2023.",
      ],
    },
    {
      references: "",
      sentiment_score: 6,
      stock_name: "ARK Innovation ETF",
      last_closing_price: 49.41,
      summary:
        "Opportunity 💪: Cathie Wood's Ark Innovation ETF bought about a half-million dollars worth of Reddit shares, which rallied 48% in their debut.",
      relevance_score: 4,
      weekly_price_change: 1.04,
      id: "5n2aLuou3IhdDe64MQJI",
      tickerName: "ARKK",
      splitSummary: [
        "Opportunity 💪: Cathie Wood's Ark Innovation ETF bought about a half-million dollars worth of Reddit shares, which rallied 48% in their debut.",
      ],
    },
  ];

  const firstName = user.name.split(" ")[0];

  return (
    <Html>
      <Tailwind>
        <Head />
        <Body
          className="my-auto mx-auto font-sans"
          style={{
            maxWidth: 475,
            backgroundColor: "#F1F1F1",
          }}
        >
          <Container className="bg-white mx-auto mt-5 pt-2 pr-3 pl-5">
            <Img
              src="https://fire-ai.s3.us-west-1.amazonaws.com/logo-with-text.png"
              alt="placeholder"
              className="rounded-lg mx-auto mb-6"
              width={190}
            />
            <Heading as="h1" className="text-2xl sm:text-3xl mt-8 mb-6">
              Hey {firstName}, {"here's"} your weekly insights
            </Heading>
            {newsData.map((n: any) => (
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
            <Section>
              <Heading as="h2" className="text-md sm:text-xl">
                BYD: The Rising EV Star You Need to Watch 🌟
              </Heading>
              <Text className="text-base sm:text-md">
                If {"you're"} looking to invest in the booming electric vehicle
                (EV) industry, BYD should be on your radar. This Chinese
                powerhouse has overtaken Tesla as the {"world's"} largest EV
                seller, delivering over 3 million EVs in 2023.
                <br />
                <br />
                😲 What sets BYD apart? Its vertically integrated business
                model, allowing in-house production of key components like
                batteries, gives it a competitive edge. This translates to lower
                costs and higher profit margins (22% gross margin) compared to
                Tesla. 💰
                <br />
                <br />
                But {"that's"} not all! BYD caters to diverse markets with
                affordable options like the $10,000 Seagull, making EVs
                accessible worldwide. 🌍 As it expands globally, {"BYD's "}
                growth potential is electrifying. 🔋
                <br />
                <br />
                With the Chinese market at historic lows, the {
                  "government's"
                }{" "}
                knack for fueling markets to improve sentiments could provide a
                tailwind for BYD. 📈 Moreover, {"BYD's"} efficient production,
                diverse product range, and focus on vertical integration give it
                an edge over other EV players. With a price-to-earnings ratio at
                historic lows, now could be the perfect time to charge up your
                portfolio with BYD stock. 🏆
              </Text>
            </Section>
          </Container>
          <Container className="text-center mt-6">
            <Section>
              {/* <Link
                href="/"
                className="py-2 px-6 text-black bg-white mr-1 rounded-full"
              >
                &nbsp; &nbsp; &nbsp; &nbsp; Share &nbsp; &nbsp; &nbsp; &nbsp;
              </Link> */}
              <Link
                href={`https://fireai.vercel.app/edit-watchlist?email=${user.email}`}
                className="py-2 px-6 text-black bg-white ml-1 rounded-full"
              >
                &nbsp; Edit Watchlist &nbsp;
              </Link>
              <Text className="text-base sm:text-md">
                Loving our newsletter? Share this{" "}
                <Link href="https://fireai.vercel.app">link</Link> with friends!
              </Text>
            </Section>
            <Section>
              <Text className="font-bold text-base sm:text-md">
                See you next Monday! 👋
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
