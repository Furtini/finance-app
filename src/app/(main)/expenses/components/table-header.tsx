const headers = ['Date', 'Reference Date', 'Expense', 'Category', 'Amount', 'Place', 'Tags'];

export default function TableHeader() {
  return (
    <thead>
      <tr>
        {headers.map((header) => (
          <th
            key={header}
            scope="col"
            className="px-1 py-2 text-left text-xs font-semibold uppercase text-gray-900"
          >
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
}
