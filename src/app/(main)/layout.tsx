import Navigation from '@/components/nav';

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Readonly<Props>) {
  return (
    <div className="min-h-full">
      <Navigation />

      <div className="py-10">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="rounded-md border bg-white py-4 shadow-sm">{children}</div>
        </div>
      </div>
    </div>
  );
}
