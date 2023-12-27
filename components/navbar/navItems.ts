import { AlertFillIcon, FeedIssueDraftIcon, Icon, TerminalIcon } from "@primer/octicons-react"

export const navItems: navItemsProps[] = [
    {path: '/about', text: 'About', icon: AlertFillIcon },
    {path: '/pricing', text: 'Pricing', icon: TerminalIcon },
    {path: '/contact', text: 'Contact', icon: FeedIssueDraftIcon},
]


interface navItemsProps {
    path: string,
    text: string,
    icon?: Icon 
}