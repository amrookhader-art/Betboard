import sourceConfig from '@/config/source-config.json';

export const providers=[
 {id:'demo-pragmatic',name:'Pragmatic Play',categories:['slots','casino']},
 {id:'demo-evolution',name:'Evolution',categories:['live-casino']},
 {id:'demo-hacksaw',name:'Hacksaw Gaming',categories:['slots']},
 {id:'demo-playtech',name:'Playtech',categories:['casino','live-casino']},
 {id:'demo-esports',name:'Esports Arena',categories:['esports','tournaments']}
];

const labels={slots:'Slot',casino:'Casino', 'live-casino':'Live Casino',esports:'Esports'};
export const games=Array.from({length:360},(_,i)=>{
 const cats=['slots','slots','slots','live-casino','casino','esports']; const category=cats[i%cats.length];
 const provider=providers[i%providers.length];
 return {id:`demo-${i+1}`,name:`${provider.name} ${labels[category]||'Game'} ${i+1}`,providerId:provider.id,provider:provider.name,category,image:`https://placehold.co/800x450?text=${encodeURIComponent(provider.name+' '+(i+1))}`,external:sourceConfig.runtime.casino.newWindowExternalIds.includes(String(i+1))};
});

export function findGame(id){return games.find(g=>g.id===id)}
export function listGames({category='all',provider='all',cursor=0,limit=24}){
 const filtered=games.filter(g=>(category==='all'||g.category===category)&&(provider==='all'||g.providerId===provider));
 const page=filtered.slice(cursor,cursor+limit); return {items:page,nextCursor:cursor+page.length<filtered.length?cursor+page.length:null,total:filtered.length};
}
