// 'use client'

// import { User } from 'lucide-react'
// import { signIn } from 'next-auth/react'

// // Perfil, Register and Login
// export function SignIn() {
//   const handleClickGoogle = () => {
//     signIn('google')
//   }

//   const handleClickGithub = () => {
//     signIn('github')
//   }

//   const handleClickSignIn = () => {
//     signIn()
//   }

//   return (
//     <div className="mx-auto min-h-[200] rounded-xl border border-black/20 bg-white p-8 shadow-sm">
//       <button
//         onClick={handleClickGoogle}
//         className="flex w-full items-center justify-center rounded-md bg-gray-900 px-8 py-3 font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
//       >
//         {/* <Image src={''} alt="Google Logo" width={20} height={20} /> */}
//         <span className="ml-4">Sign in with Google</span>
//       </button>

//       <button
//         onClick={handleClickGithub}
//         className="mt-6 flex w-full items-center justify-center rounded-md bg-gray-900 px-8 py-3 font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
//       >
//         {/* <Image src={''} alt="Google Logo" width={20} height={20} /> */}
//         <span className="ml-4">Sign in with Github</span>
//       </button>

//       <button
//         onClick={handleClickSignIn}
//         className="mt-6 flex w-full items-center justify-center rounded-md bg-gray-900 px-8 py-3 font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
//       >
//         <span className="ml-4">Create your account</span>
//       </button>
//     </div>
//     // <div className="flex items-center gap-3 text-left">
//     //   <a href="#">
//     //     <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
//     //       <User className="h-5 w-5 text-gray-100" />
//     //     </div>
//     //   </a>

//     //   <p className="text-sm leading-snug">
//     //     <a
//     //       href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`}
//     //       className="underline hover:text-gray-50"
//     //     >
//     //       Register
//     //     </a>{' '}
//     //     or{' '}
//     //     <a href="#" className="underline hover:text-gray-50">
//     //       login
//     //     </a>{' '}
//     //     <br />
//     //     and starting saving your memories!
//     //   </p>
//     // </div>
//   )
// }
