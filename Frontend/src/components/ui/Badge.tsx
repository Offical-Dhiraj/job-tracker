export default function Badge({ text }: any) {
  return (
    <span className="px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded">
      {text}
    </span>
  );
}