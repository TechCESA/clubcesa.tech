export const encodedJWTSecrete = () => {
  return new TextEncoder().encode(process.env.JWT_SECRET);
};
