import ExpensesHeader from "./components/header"
import ExpensesTable from "./components/table"

export default function ExpensesPage() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <ExpensesHeader />
      <ExpensesTable />
    </div>
  )
}

