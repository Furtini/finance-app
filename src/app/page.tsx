import DashboardPage from "./dashboard/page";

export default function Example() {
  const personName = 'lucas';

  sayName(personName)

  return (
    <main>
      <DashboardPage />
    </main>
  )
}


function sayName(personName: string) {
  console.log('Hello, ', personName)
}
