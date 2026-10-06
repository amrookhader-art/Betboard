'use client';
import {useState} from 'react';
import Link from 'next/link';
import {LoginModal} from './LoginModal';
const links=[['/','Home'],['/slots','Slots'],['/live-casino','Live Casino'],['/casino','Casino'],['/sports','Sports'],['/live-sports','Live Sports'],['/esports','E-sports'],['/tournaments','Tournaments']];
export function AppShell({children}){const [login,setLogin]=useState(false);return <><header className="top"><Link href="/" className="logo">COOL</Link><nav>{links.map(([href,label])=><Link key={href} href={href}>{label}</Link>)}</nav><button className="login" onClick={()=>setLogin(true)}>Login / Register</button></header><aside className="side">{links.map(([href,label])=><Link key={href} href={href}>{label}</Link>)}</aside><main className="content">{children}</main>{login&&<LoginModal onClose={()=>setLogin(false)}/>}</>}
