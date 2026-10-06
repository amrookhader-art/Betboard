import {NextResponse} from 'next/server'; import {providers} from '@/lib/catalog'; export async function GET(){return NextResponse.json({providers});}
