import {NextResponse} from 'next/server'; export async function GET(){return NextResponse.json({ok:true,time:new Date().toISOString(),mode:process.env.APP_MODE||'demo'});}
