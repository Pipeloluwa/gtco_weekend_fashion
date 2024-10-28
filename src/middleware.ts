import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { redirectHomePageMiddleware } from './app/middlewares/redirectHomePageMiddleware'

export function middleware(request: NextRequest) {
    return redirectHomePageMiddleware(request);
  }
   
export const config = {
  matcher: '/',
}