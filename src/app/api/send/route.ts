import { Resend } from "resend";
import { getAllSubscriptions, getNewsSummaryForStock } from "@/lib/firestore";
import React from "react";
import NewsletterV4 from "../../../../emails/newsletterv4";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  try {
    const users = await getAllSubscriptions();
    // const testUser = users.filter((user) => user.test)[0];

    for (const user of users) {
      const news = [];
      for (const stocks of user.stocks) {
        const newsSummary = await getNewsSummaryForStock(stocks.tickerName);
        news.push({
          ...newsSummary,
          tickerName: stocks.tickerName,
          // @ts-ignore
          splitSummary: newsSummary.summary.split("|"),
        });
      }

      await resend.emails.send({
        from: "FireAI Weekly <weekly@fire-weekly.com>",
        to: user.email,
        subject: "Weekly Portfolio Insights 🚀",
        react: NewsletterV4({
          newsData: news,
          user: user,
        }) as React.ReactElement,
      });
    }

    // const news = [];
    // for (const stocks of testUser.stocks) {
    //   const newsSummary = await getNewsSummaryForStock(stocks.tickerName);
    //   news.push({
    //     ...newsSummary,
    //     tickerName: stocks.tickerName,
    //     splitSummary: newsSummary.summary.split("|"),
    //   });
    // }

    // for (const user of users) {
    //   const news = [];
    // for (const stocks of user.stocks) {
    //   const newsSummary = await getNewsSummaryForStock(stocks.tickerName);
    //   news.push({
    //     ...newsSummary,
    //     tickerName: stocks.tickerName,
    //     splitSummary: newsSummary.summary.split("|"),
    //   });
    // }

    //   await resend.emails.send({
    //     from: "FireAI Weekly <weekly@fire-weekly.com>",
    //     to: user.email,
    //     subject: "Weekly Portfolio Insights 🚀",
    //     react: NewsLetterV2({
    //       user: user,
    //       news,
    //     }) as React.ReactElement,
    //   });
    // }

    return Response.json({ done: "yes" });
  } catch (error) {
    return Response.json({ error });
  }
}
