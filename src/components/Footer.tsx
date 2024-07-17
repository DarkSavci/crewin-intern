import Link from 'next/link'
import Image from 'next/image';
import logo from '@/assets/logo.png';
import Button from "@/components/Button";

import twitter from '@/assets/twitter.png';
import instagram from '@/assets/instagram.png';
import facebook from '@/assets/facebook.png';
import linkedin from '@/assets/linkedin.png';

export default function Footer() {

    const links = [
        {
            title: 'Company',
            items: [
                {
                    label: 'Terms of Service',
                    href: '/tos'
                },
                {
                    label: 'Privacy Policy',
                    href: '/privacy'
                },
                {
                    label: 'FAQ',
                    href: '/faq'
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
        },
        {
            title: 'Platform',
            items: [
                {
                    label: 'Pricing Table',
                    href: '/pricing'
                },
                {
                    label: 'Seaferer',
                    href: '/seaferer'
                },
                {
                    label: 'Company',
                    href: '/company'
                },
                {
                    label: 'Career',
                    href: '/career'
                },
                {
                    label: 'Mobile Apps',
                    href: '/mobile'
                }
            ]
        }
    ]

    return <footer className="container mx-auto flex flex-col w-full divide-y divide-footer-border">
        <div className="flex flex-col-reverse gap-5 md:flex-row justify-between w-full pb-4">
            <div className="flex justify-center md:justify-left gap-16">
                {links.map((item) => <div key={item.title} className="flex flex-col gap-3">
                        <h4 className="font-semibold text-lg">{item.title}</h4>
                        <div className="flex flex-col gap-3">
                            {item.items.map((link) =>
                                <Link className="text-graytext" key={link.label} href={link.href}>{link.label}</Link>
                            )}
                        </div>
                    </div>
                )}
            </div>

            <div className="flex flex-col gap-4 justify-center items-center text-center md:items-end md:text-right">
                <Image  alt="Crewin Logo" src={logo}/>
                <span className="text-graytext">MARITIME WORKFORCE PLATFORM THAT MEETS <br/>
                    SHEFARERS & SEAFARERS WITH SHIPPING COMPANIES</span>
                <Button>Login</Button>
            </div>
        </div>

        <div className="flex justify-between items-center py-4 px-3">
            <span className="w-2/3">&copy; Copyright 2024 by CreWin. All Rights Reserved. </span>

            <div className="flex justify-end gap-2 w-1/3 ">
                <Link href="/twitter">
                    <Image className="min-h-6 aspect-auto" src={twitter} alt="Twitter"/>
                </Link>

                <Link href="/facebook">
                    <Image className="min-h-6 aspect-auto" src={facebook} alt="Facebook"/>
                </Link>

                <Link href="/instagram">
                    <Image className="min-h-6 aspect-auto" src={instagram} alt="Instagram"/>
                </Link>

                <Link href="/linkedin">
                    <Image className="min-h-6 aspect-auto" src={linkedin} alt="LinkedIn"/>
                </Link>
            </div>
        </div>
    </footer>
}