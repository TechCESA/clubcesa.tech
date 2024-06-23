import * as jose from 'jose';
import { encodedJWTSecrete } from './encoded_JWT_secrete';

export async function verifyAdmin(token: string) {
  if (!token) throw new Error('Missing admin token');

  try {
    await jose.jwtVerify(token, encodedJWTSecrete());
  } catch (err) {
    throw new Error('Your token has expired.');
  }
}
