'use client';

import { Suspense } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { SetStateAction, useEffect, useRef, useState } from 'react';
import { useDebouncedValue } from '@/hooks/useDebouncedValue';
import { getSubscription } from '@/lib/firestore';
import { Button } from './ui/button';
import { AddStock } from './add-stock';
import Image from 'next/image';
import Link from 'next/link';
import { FeyFormat, Stock, Subscriber } from '@/types';
import { Toaster } from 'react-hot-toast';
import { useSearchParams } from 'next/navigation';

interface EditWatchlistProps {
  companies: FeyFormat[];
}

export function EditWatchlist(props: EditWatchlistProps) {
  const { companies } = props;

  const searchParams = useSearchParams();

  const emailFromUrl = searchParams.get('email') ?? '';

  const [_email, setEmail] = useState(() => emailFromUrl);

  const [subscriber, setSubscriber] = useState<Subscriber | undefined>(
    undefined
  );
  const [loading, setLoading] = useState(!!emailFromUrl);
  const [showAddStock, setShowAddStock] = useState(false);
  const [email] = useDebouncedValue(_email, 500);
  const stocksRef = useRef<Stock[]>([]);

  useEffect(() => {
    const fetchSubscription = async () => {
      const subscription = await getSubscription(email);
      setSubscriber(subscription);
      stocksRef.current = subscription?.stocks ?? [];
      setLoading(false);
    };

    if (email) {
      setLoading(true);
      fetchSubscription();
    }
  }, [email]);

  return (
    <Suspense>
      <Toaster />
      <div className="flex flex-col">
        <main className="flex-1 grid w-full min-h-0 p-4 gap-4 md:p-6 md:gap-6">
          <div className="mx-auto w-full max-w-sm space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Edit Watchlist
            </h2>

            <div className="flex flex-col space-y-2">
              <Label className="text-base" htmlFor="email">
                Email
              </Label>
              <Input
                id="email"
                placeholder="Enter your email"
                value={_email}
                onChange={e => setEmail(e.target.value)}
              />
              {email && !subscriber && !loading && (
                <p className="text-red-500 text-sm mt-1">
                  User with email: <span className="text-bold">{email}</span>{' '}
                  does not exist
                </p>
              )}
            </div>
            <div
              className={`rounded-lg divide-y ${!!subscriber ? 'border' : ''}`}
            >
              {subscriber &&
                subscriber.stocks.map((stock, idx) => {
                  const company = companies.find(c => c.ticker === stock.name);
                  return (
                    <div
                      key={stock.name + idx}
                      className="flex items-center justify-between p-2"
                    >
                      <div className="flex items-center gap-2">
                        <div className="font-semibold">{stock.tickerName}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {stock.name}
                        </div>
                      </div>
                      <Image
                        className="rounded-md"
                        src={`/logo/${stock.tickerName}.svg`}
                        alt={stock.name}
                        width={32}
                        height={32}
                      />
                    </div>
                  );
                })}
            </div>
            {subscriber && !showAddStock && (
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                <Button
                  className="w-full min:[200px]"
                  variant="outline"
                  onClick={() => setShowAddStock(true)}
                >
                  Modify watchlist
                </Button>
              </div>
            )}
            {showAddStock && (
              <AddStock
                prevStocksRef={stocksRef}
                companies={props.companies}
                subscriber={subscriber}
                setSubscriber={
                  setSubscriber as React.Dispatch<SetStateAction<Subscriber>>
                }
              />
            )}
            {!subscriber && (
              <div className="flex justify-center items-center hover:underline text-sm hover:underline text-sm">
                <Link href="/">New user? Sign up to our newsletter</Link>
              </div>
            )}
          </div>
        </main>
      </div>
    </Suspense>
  );
}
