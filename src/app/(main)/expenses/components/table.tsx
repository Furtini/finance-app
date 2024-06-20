import { getExpenses } from "@/lib/actions"
import TableBody from "./table-body"
import TableHeader from "./table-header"


export default async function ExpensesTable() {
  const expenses = await getExpenses()

  return (
    <div className="mt-8 flow-root">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table className="min-w-full divide-y divide-gray-300">
            <TableHeader />
            <TableBody data={expenses} />
          </table>
        </div>
      </div>
    </div>
  )
}

