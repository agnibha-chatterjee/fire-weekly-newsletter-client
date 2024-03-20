import { EditWatchlist } from '@/components/edit-watchlist';
import companies from '@/data/companies.json';
import { Suspense } from 'react';

export default function EditWatchlistPage() {
  return (
    <main className="mt-20">
      <Suspense>
        <EditWatchlist companies={companies} />
      </Suspense>
    </main>
  );
}
