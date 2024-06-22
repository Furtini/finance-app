import { getDayOfWeek } from '@/lib/utils';

import Label from './label';

type Props = {
  data: any[]; //TODO: add type
};

export default function TableBody({ data }: Props) {
  return (
    <tbody className="divide-y divide-gray-200 bg-white">
      {data.map((expense) => (
        <tr key={expense.id}>
          <TableItem value1={expense.date} value2={getDayOfWeek(expense.date)} />
          <TableItem value1={expense.interestDate} value2={getDayOfWeek(expense.interestDate)} />
          <TableItem value1={expense.expense} />
          <TableItem>
            <Label value={expense.category} />
          </TableItem>
          <TableItem>
            <Label value={expense.subcategory} />
          </TableItem>
          <TableItem value1={expense.amount} />
          <TableItem value1={expense.place} />
          <TableItem>
            <a href="#" className="text-indigo-600 hover:text-indigo-900">
              Edit<span className="sr-only">, {expense.expense}</span>
            </a>
          </TableItem>
        </tr>
      ))}
    </tbody>
  );
}

type TableItemProps = {
  value1?: string | number;
  value2?: string | number;
  children?: React.ReactNode;
};

function TableItem({ value1, value2, children }: TableItemProps) {
  return (
    <td className="whitespace-nowrap px-1 py-2 text-sm text-gray-500">
      {children ? (
        children
      ) : (
        <>
          <div className="font-medium text-gray-900">{value1}</div>
          {value2 && <div className="mt-0.5 text-xs text-gray-500">{value2}</div>}
        </>
      )}
    </td>
  );
}
