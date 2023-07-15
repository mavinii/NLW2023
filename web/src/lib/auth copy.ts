// import jwtDecode from 'jwt-decode'
// import { cookies } from 'next/headers'

// interface UserInfo {
//   sub: string
//   name: string
//   avatarUrl: string
// }

// export function getUserInfo(): UserInfo {
//   const token = cookies().get('token')?.value

//   if (!token) {
//     throw new Error('No token found')
//   }

//   const user = jwtDecode(token) as UserInfo

//   return user
// }
