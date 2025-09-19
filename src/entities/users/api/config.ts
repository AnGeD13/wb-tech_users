const PERSONAL_TOKEN: string = import.meta.env.VITE_PERSONAL_TOKEN as string;
export const BASE_URL: string = (
  import.meta.env.VITE_API_BASE_URL as string
).replace('__TOKEN__', PERSONAL_TOKEN);
