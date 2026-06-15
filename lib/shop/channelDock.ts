export type StockStatus = 'available' | 'sold-out' | 'pre-season';
export async function getStockStatus(sku: string): Promise<StockStatus> {
  if (new Date() < new Date('2026-10-01T00:00:00.000Z')) return 'pre-season';
  const key = process.env.CHANNELDOCK_API_KEY;
  if (!key) return 'sold-out';
  const response = await fetch(`https://api.channeldock.com/v1/stock/${sku}`, { headers: { Authorization: `Bearer ${key}` }, cache: 'no-store' });
  if (!response.ok) return 'sold-out';
  const data = await response.json();
  return Number(data.stock || 0) > 0 ? 'available' : 'sold-out';
}
