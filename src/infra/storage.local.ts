export function setToken(token: string): void {
  localStorage.setItem('APP_ACESS_TOKEN', JSON.stringify(token));
}

export async function getToken(): Promise<string> {
  const tJsn = localStorage.getItem('APP_ACESS_TOKEN');
  return JSON.parse(tJsn);
}
