export function Logo({ small = false }: { small?: boolean }) {
  return (
    <img
      className={small ? 'logo logo--small' : 'logo'}
      src="/logo.png"
      alt="Hot Apple Gin — Family Co."
    />
  );
}
