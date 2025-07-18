import { jwtVerify } from 'jose'

// Use the same secret as your backend JWT_SECRET
const secretKey = process.env.JWT_SECRET
const encodedKey = new TextEncoder().encode(secretKey || '')

/**
 * Verifies and decodes a JWT session token from the backend.
 * @param session JWT string
 * @returns Decoded payload or null if invalid
 */
export async function verifySession(session: string | undefined = '') {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ['HS256'],
    })

    return payload
  } catch (error) {
    console.log('Failed to verify session')
    return null
  }
}