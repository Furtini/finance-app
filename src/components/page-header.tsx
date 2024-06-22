'use client';

import { usePathname } from 'next/navigation';

const HEADERS: Record<string, string> = {
  '/dashboard': 'Dashboard',
  '/expenses': 'Expenses',
  '/incomes': 'Incomes',
} as const;

export default function PageHeader() {
  const path = usePathname();

  return (
    <header>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
          {HEADERS[path]}
        </h1>
      </div>
    </header>
  );
}
