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
  | 'violet'
  | 'purple'
  | 'blue';

export type LabelSize = 'small' | 'large';

const colorMap: Record<LabelColor, string> = {
  gray: 'bg-gray-200 text-gray-800 ring-gray-600/20',
  cyan: 'bg-cyan-100 text-cyan-800 ring-cyan-600/20',
  sky: 'bg-sky-100 text-sky-800 ring-sky-600/20',
  indigo: 'bg-indigo-100 text-indigo-800 ring-indigo-600/20',
  green: 'bg-green-100 text-green-800 ring-green-600/20',
  emerald: 'bg-emerald-100 text-emerald-800 ring-emerald-600/20',
  rose: 'bg-rose-100 text-rose-800 ring-rose-600/20',
  red: 'bg-red-100 text-red-800 ring-red-600/20',
  amber: 'bg-amber-100 text-amber-800 ring-amber-600/20',
  blue: 'bg-blue-100 text-blue-800 ring-blue-600/20',
  violet: 'bg-violet-100 text-violet-800 ring-violet-600/20',
  purple: 'bg-purple-100 text-purple-800 ring-purple-600/20',
};

type Props = {
  value: string;
  color: LabelColor;
};

export default function Label({ value, color }: Props) {
  const colorValue = colorMap[color ?? 'gray'];

  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium capitalize leading-5 ring-1 ring-inset ${colorValue} `}
    >
      {value}
    </span>
  );
}
