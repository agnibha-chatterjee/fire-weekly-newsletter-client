import NewsletterEmail from '../../../../emails/newsletter';
import { Resend } from 'resend';
import {
  getAllSubscriptions,
  getNewsSummaryForStock,
  getLinksThatDontSuck
} from '@/lib/firestore';
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  try {
    const users = await getAllSubscriptions();
    for (const user of users) {
      const news = [];
      for (const stocks of user.stocks) {
        const newsSummary = await getNewsSummaryForStock(stocks.tickerName);
        news.push(newsSummary);
      }
      const links = await getLinksThatDontSuck();

      await resend.emails.send({
        from: 'FireAI Weekly <weekly@fire-weekly.com>',
        to: user.email,
        subject: 'Weekly Portfolio Insights 🚀',
        react: NewsletterEmail({
          user: user,
          news,
          links,
          test: false
        }) as React.ReactElement
      });
    }

    return Response.json({ done: 'yes' });
  } catch (error) {
    return Response.json({ error });
  }
}
