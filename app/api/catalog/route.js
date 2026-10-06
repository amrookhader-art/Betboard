import {NextResponse} from 'next/server'; import {listGames} from '@/lib/catalog';
export async function GET(req){const u=new URL(req.url); return NextResponse.json(listGames({category:u.searchParams.get('category')||'all',provider:u.searchParams.get('provider')||'all',cursor:Number(u.searchParams.get('cursor')||0),limit:Number(u.searchParams.get('limit')||24)}));}
