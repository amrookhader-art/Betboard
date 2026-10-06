import './globals.css';
import {AppShell} from '@/components/AppShell';
export const metadata={title:'COOL Rebuild',description:'Responsive provider-ready gaming frontend'};
export default function RootLayout({children}){return <html lang="en"><body><AppShell>{children}</AppShell></body></html>}
