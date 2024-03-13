import { Dispatch, MutableRefObject, SetStateAction, useState } from 'react';
import { Button } from './ui/button';
import { Select } from './ui/select';
import { FeyFormat, Stock, Subscriber } from '@/types';
import { updateSubscription } from '@/lib/firestore';
import toast from 'react-hot-toast';

interface AddStockProps {
  prevStocksRef: MutableRefObject<Stock[]>;
  companies: FeyFormat[];
  subscriber: Subscriber | undefined;
  setSubscriber: Dispatch<SetStateAction<Subscriber>>;
}

export const AddStock = (props: AddStockProps) => {
  const { subscriber, setSubscriber, prevStocksRef } = props;

  const handleSave = async () => {
    if (
      JSON.stringify(subscriber?.stocks) ===
      JSON.stringify(prevStocksRef.current)
    ) {
      toast.error('No changes made');
      return;
    }

    const updated = await updateSubscription(
      subscriber?.id!,
      subscriber?.stocks!
    );

    if (updated) {
      toast.success('Watchlist updated');
      prevStocksRef.current = subscriber?.stocks!;
      return;
    }

    toast.error('Failed to update watchlist! Please try again');
  };

  return (
    <>
      <Select
        companies={props.companies}
        stocks={subscriber?.stocks!}
        setStocks={setSubscriber}
      />
      <div className="flex items-center justify-center gap-2 p-4 border-t dark:border-gray-800">
        <Button className="w-full" onClick={handleSave}>
          Save
        </Button>
      </div>
    </>
  );
};
