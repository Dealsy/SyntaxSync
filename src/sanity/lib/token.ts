import "server-only";

// token.ts
export const getSanityToken = (): string => {
  const token = process.env.SANITY_API_READ_TOKEN;

  if (!token) {
    throw new Error("Missing SANITY_API_READ_TOKEN");
  }

  return token;
};
