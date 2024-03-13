'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { doesEmailExist, subscribe } from '@/lib/firestore';
import { FeyFormat, Subscriber } from '@/types';
import toast, { Toaster } from 'react-hot-toast';

type ErrorState = {
  name?: string;
  email?: string;
  stocks?: string;
};

type SubscribeProps = {
  companies: FeyFormat[];
};

const topStocks = [
  {
    tickerName: 'AAPL',
    name: 'Apple'
  },
  {
    tickerName: 'GOOGL',
    name: 'Alphabet'
  },
  {
    tickerName: 'MSFT',
    name: 'Microsoft'
  },
  {
    tickerName: 'AMZN',
    name: 'Amazon'
  },
  {
    tickerName: 'TSLA',
    name: 'Tesla'
  }
];

export function Subscribe(props: SubscribeProps) {
  const [formData, setFormData] = useState<Subscriber>({
    name: '',
    email: '',
    stocks: []
  });
  const [errors, setErrors] = useState<ErrorState>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors: ErrorState = {};
    if (!formData.name) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters long';
    }

    if (!formData.stocks.length) {
      newErrors.stocks = 'Please select a stock';
    }
    return newErrors;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      setIsSubmitted(true);
      const isExistingSubscriber = await doesEmailExist(formData.email);
      console.log(isExistingSubscriber);
      if (isExistingSubscriber) {
        setErrors({
          email:
            "A user with the same email already exists! If you're trying to edit your watchlist, please use the link under the form."
        });
        return;
      }

      const successfulSignUp = await subscribe(formData);

      if (successfulSignUp) {
        toast.success('Welcome onboard! 🚀');
        return;
      }

      toast.error('Failed to subscribe! Please try again');
    } else {
      setErrors(formErrors);
    }
  };

  useEffect(() => {
    if (isSubmitted) {
      setFormData({
        name: '',
        email: '',
        stocks: []
      });
      setErrors({});
      setIsSubmitted(false);
    }
  }, [isSubmitted]);

  return (
    <div>
      <Toaster />
      <div className="container flex flex-col items-center space-y-4 px-4 md:px-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Subscribe to our Newsletter
          </h1>
          <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
            Sign up to get the latest stock market news and trends delivered to
            your inbox.
          </p>
        </div>
        <div className="w-full max-w-sm space-y-2">
          <form className="space-y-2" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Enter your name"
                required
                value={formData.name}
                onChange={handleChange}
                className="input-class"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="input-class"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="stocks">Stocks</Label>
              <div className="rounded-lg flex justify-between divide-y">
                {topStocks.map((stock, idx) => {
                  return (
                    <div
                      onClick={() =>
                        setFormData(prev => ({
                          ...prev,
                          stocks: [...prev.stocks, stock]
                        }))
                      }
                      key={stock.tickerName + idx}
                      className="p-2 rounded-md cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
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

              <Select
                companies={props.companies}
                stocks={formData.stocks}
                setStocks={setFormData}
              />
              {errors.stocks && (
                <p className="text-red-500 text-sm mt-1">{errors.stocks}</p>
              )}
            </div>
            <Button className="w-full" type="submit">
              Sign Up
            </Button>
          </form>

          <div className="flex justify-center items-center hover:underline text-sm">
            <Link href="/edit-watchlist">Edit watchlist</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
