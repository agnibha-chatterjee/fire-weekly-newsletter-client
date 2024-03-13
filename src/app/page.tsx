import { Subscribe } from '@/components/subscribe';
import companies from '@/data/companies.json';

export default function Home() {
  return (
    <main className="w-full h-screen flex justify-center mt-20">
      <Subscribe companies={companies} />
    </main>
  );
}
