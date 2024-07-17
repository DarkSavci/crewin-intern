import Image from "next/image";
import logo from '@/assets/logo.png';
import us from '@/assets/us.png'
import Link from "next/link";
import Button from "@/components/Button";

export default function Navbar() {
    
    const pages = [
        {
            label: "Homepage",
            href: '/'
        },
        {
            label: 'About',
            href: '/about'
        },
        {
            label: 'Contact',
            href: '/contact'
        }
    ]
    
    return <header className="w-full flex flex-col md:flex-row gap-2 items-center justify-between container mx-auto h-16 py-3">
        <Image src={logo} alt="Crewin Logo" className="h-full aspect-auto" />
        
        <div className="flex gap-5 items-center text-base">
            {pages.map((page) => <>
                <Link key={page.href} href={page.href}>
                    {page.label}
                </Link>
            </>)}
            
            <button className="px-5 border-x border-border">
                <Image src={us} alt="United States Flag" className="w-6 aspect-auto" />
            </button>
            
            <Button>Login</Button>
        </div>
    </header>
    
}