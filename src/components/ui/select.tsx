import ReactSelect from 'react-select';
import { MenuList } from '@/components/ui/menulist';
import { FeyFormat, Stock, Subscriber } from '@/types';
import { Dispatch, SetStateAction, useMemo } from 'react';

interface SelectProps {
  stocks: Stock[];
  setStocks: Dispatch<SetStateAction<Subscriber>>;
  edit?: boolean;
  companies: FeyFormat[];
}

export const Select = (props: SelectProps) => {
  const { companies, stocks, setStocks, edit = false } = props;

  const options = companies.map((company: FeyFormat) => ({
    value: company.ticker,
    label: company.name + ` - ${company.ticker}`
  }));

  const values = useMemo(() => {
    return [...new Set(stocks.map(s => JSON.stringify(s)))].map(
      (type: string) => {
        const stock = JSON.parse(type);
        return {
          value: stock.tickerName,
          label: stock.name + ` - ${stock.tickerName}`
        };
      }
    );
  }, [stocks]);

  return (
    <ReactSelect
      value={values}
      placeholder="Select stocks that you want to track"
      className="rounded-md border border-gray-100 text-sm"
      options={options}
      components={{ MenuList }}
      onChange={selected => {
        const editedStocks = selected.map(
          (s: { label: string; value: string }) => {
            const split = s.label.split(' - ');
            return {
              tickerName: s.value,
              name: split[0]
            };
          }
        );

        setStocks((prevState: Subscriber) => ({
          ...prevState,
          stocks: editedStocks
        }));
      }}
      isSearchable
      isMulti
    />
  );
};
