import NewsletterEmail from "../../../../emails/newsletter";
import { Resend } from "resend";
import {
  getAllSubscriptions,
  getNewsSummaryForStock,
  getLinksThatDontSuck,
} from "@/lib/firestore";
import React from "react";
import NewsLetterV2 from "../../../../emails/newsletterv2";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  try {
    const users = await getAllSubscriptions();
    // const testUser = users.filter((user) => user.test)[0];
    // const news = [];
    // for (const stocks of testUser.stocks) {
    //   const newsSummary = await getNewsSummaryForStock(stocks.tickerName);
    //   news.push({
    //     ...newsSummary,
    //     tickerName: stocks.tickerName,
    //     splitSummary: newsSummary.summary.split("|"),
    //   });
    // }

    // const a = await resend.emails.send({
    //   from: "FireAI Weekly <weekly@fire-weekly.com>",
    //   to: testUser.email,
    //   subject: "Weekly Portfolio Insights 🚀",
    //   react: NewsLetterV2({ news, user: testUser }) as React.ReactElement,
    // });

    for (const user of users) {
      const news = [];
      for (const stocks of user.stocks) {
        const newsSummary = await getNewsSummaryForStock(stocks.tickerName);
        news.push({
          ...newsSummary,
          tickerName: stocks.tickerName,
          splitSummary: newsSummary.summary.split("|"),
        });
      }

      await resend.emails.send({
        from: "FireAI Weekly <weekly@fire-weekly.com>",
        to: user.email,
        subject: "Weekly Portfolio Insights 🚀",
        react: NewsLetterV2({
          user: user,
          news,
        }) as React.ReactElement,
      });
    }

    return Response.json({ done: "yes", a: 1 });
  } catch (error) {
    return Response.json({ error });
  }
}
