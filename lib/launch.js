import sourceConfig from '@/config/source-config.json';
import {findGame} from './catalog';

export function buildLaunch(gameId,mode='real'){
 const game=findGame(gameId); if(!game) return {status:404,error:'Game not found'};
 const base=process.env.GAME_BASE_URL;
 const params={partnerId:Number(process.env.PARTNER_ID||sourceConfig.runtime.casino.partnerId),gameId:game.id,provider:game.providerId,language:'en',mode:mode==='fun'?'fun':'real',device:'desktop',platform:'web'};
 if(!base) return {status:409,game,mode,params,error:'GAME_BASE_URL is not configured'};
 const url=new URL(sourceConfig.runtime.casino.launch,base);
 Object.entries(params).forEach(([k,v])=>url.searchParams.set(k,String(v)));
 return {status:200,game,mode,url:url.toString(),params};
}
