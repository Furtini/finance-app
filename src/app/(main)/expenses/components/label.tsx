export type LabelColor =
  | 'gray'
  | 'cyan'
  | 'sky'
  | 'indigo'
  | 'green'
  | 'emerald'
  | 'rose'
  | 'red'
  | 'amber'
  | 'blue';

export type LabelSize = 'small' | 'large';

const colorMap: Record<LabelColor, string> = {
  gray: 'bg-gray-200 text-gray-800',
  cyan: 'bg-cyan-100 text-cyan-800',
  sky: 'bg-sky-100 text-sky-800',
  indigo: 'bg-indigo-100 text-indigo-800',
  green: 'bg-green-100 text-green-800 ring-green-600/20',
  emerald: 'bg-emerald-100 text-emerald-800',
  rose: 'bg-rose-100 text-rose-800',
  red: 'bg-red-100 text-red-800',
  amber: 'bg-amber-100 text-amber-800',
  blue: 'bg-blue-100 text-blue-800',
};

type Props = {
  value: string;
  color: LabelColor;
};

export default function Label({ value, color }: Props) {
  const colorValue = colorMap[color ?? 'gray'];

  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium leading-5 ring-1 ring-inset ${colorValue} `}
    >
      {value}
    </span>
  );
}
