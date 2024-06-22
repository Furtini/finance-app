import { Categories, Expense } from '@/lib/db/schemas';
import { date, getDayOfWeek } from '@/lib/utils';

import Label, { LabelColor } from './label';
import TableItem from './table-item';

type Props = {
  data: Expense[];
};

export default function TableBody({ data }: Props) {
  return (
    <tbody className="divide-y divide-gray-200 bg-white">
      {data.map((expense) => (
        <tr key={expense.id}>
          <TableItem value1={date(expense.date)} value2={getDayOfWeek(expense.date)} />
          <TableItem
            value1={date(expense.interestDate)}
            value2={getDayOfWeek(expense.interestDate)}
          />
          <TableItem value1={expense.expense} />
          <TableItem>
            <Label value={expense.category} color={getLabelColor(expense.category)} />
          </TableItem>
          <TableItem>
            <Label value={expense.subcategory} color="gray" />
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

function getLabelColor(value: Categories): LabelColor {
  switch (value) {
    case 'needs':
      return 'red';
    case 'free':
      return 'indigo';
    case 'house':
      return 'amber';
    case 'leisure':
      return 'violet';
    case 'travels':
      return 'sky';
    case 'education':
      return 'emerald';
    default:
      return 'gray';
  }
}
