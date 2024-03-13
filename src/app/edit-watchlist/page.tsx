import { EditWatchlist } from '@/components/edit-watchlist';
import companies from '@/data/companies.json';

export default function EditWatchlistPage() {
  return (
    <main className="mt-20">
      <EditWatchlist companies={companies} />
    </main>
  );
}
