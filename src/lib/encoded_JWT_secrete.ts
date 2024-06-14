export const encodedJWTSecrete = () => {
  return new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRETE);
};
