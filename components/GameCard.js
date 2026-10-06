'use client';
export function GameCard({game,onPlay}){return <article className="card"><img src={game.image} alt="" loading="lazy"/><div className="cardbody"><b>{game.name}</b><span>{game.provider}</span><button className="primary small" onClick={()=>onPlay(game)}>Play</button></div></article>}
