import { AlertFillIcon, FeedIssueDraftIcon, Icon, TerminalIcon } from "@primer/octicons-react"

// ? se puse directamente en la clase, ya que no se pueden pasar elementos de los componentes de servidor a los componentes clientes
export const navItems: navItemsProps[] = [
    {path: '/about', text: 'About', icon: AlertFillIcon },
    {path: '/pricing', text: 'Pricing', icon: TerminalIcon },
    {path: '/contact', text: 'Contact', icon: FeedIssueDraftIcon},
]


export interface navItemsProps {
    path: string,
    text: string,
    icon?: Icon 
}