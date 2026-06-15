export function Logo({ small = false }: { small?: boolean }) {
  return (
    <img
      className="logo"
      src="/00_Logos/Gold_On_Black/logo.svg"
      alt="Hot Apple Gin"
      style={{ maxWidth: small ? 120 : 160 }}
    />
  );
}
