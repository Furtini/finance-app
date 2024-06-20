const headers = ["Date", "Reference Date", "Expense", "Category", "Subcategory", "Amount", "Place"]

export default function TableHeader() {
  return (
    <thead>
      <tr>
        {headers.map(header => (
          <th scope="col" className="px-1 py-2 text-left text-sm font-semibold text-gray-900">
            {header}
          </th>
        ))}
      </tr>
    </thead>
  )
}

