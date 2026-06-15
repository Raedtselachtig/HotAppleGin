export function Placeholder({ name, ratio = '4/5' }: { name: string; ratio?: string }) {
  return <div className="placeholder" style={{ ['--ratio' as string]: ratio }}>{name}</div>;
}
