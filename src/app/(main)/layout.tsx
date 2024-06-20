import Navigation from "@/components/nav";
import PageHeader from "@/components/page-header";

type Props = {
  children: React.ReactNode
}

export default function MainLayout({ children }: Readonly<Props>) {
  return (
    <div className="min-h-full">
      <Navigation />

      <div className="py-10">
        <PageHeader />

        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">{children}</div>
      </div>
    </div>

  );
}
