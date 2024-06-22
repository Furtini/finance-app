type Props = {
  value1?: string | number;
  value2?: string | number;
  children?: React.ReactNode;
};

export default function TableItem({ value1, value2, children }: Props) {
  return (
    <td className="whitespace-nowrap px-1 py-2 text-xs text-gray-500">
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
