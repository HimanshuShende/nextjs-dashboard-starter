import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import { NextRequest, NextResponse } from 'next/server';
import { NextApiRequest } from 'next';

// export function middleware(request: NextRequest) {
//     if (request.nextUrl.pathname === ('/dashboard')) {
//         console.log("Dashboard opened");

//     }

//     if (request.nextUrl.pathname === ('/dashboard/invoices')) {
//         console.log("Invoices page opened");
//     }

//     return NextResponse.next({})
// }

// export default NextAuth(authConfig).auth((req) => {
//     console.log("Auth req : ", req);
    
// });
export default NextAuth(authConfig).auth


// middleware.ts
// import { stackMiddlewares } from "@/middlewares/stackMiddlewares";
// import { withHeaders } from "@/middlewares/withHeaders";
// import { withLogging } from "@/middlewares/withLogging";


// const middlewares = [withLogging, withHeaders];
// export default stackMiddlewares(middlewares);


export const config = {
    // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};