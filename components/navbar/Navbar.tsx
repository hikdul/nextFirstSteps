
import Link from "next/link"
import {  HomeIcon } from "@primer/octicons-react" 
import { ActiveLink } from ".."
// ? tampoco puedo llamar a este listado desde otro archivo.
    // ! Verificar y entender bien eso del lado del cliente y del servidor
//import { navItems } from "./navItems" // ! se coloca aca por el rollo del paso de elementos entre comoponentes de servidor y cliente
import { navItemsProps } from "./navItems"

//const temporalAsync = () =>{
    //    return new Promise ( (resolve)=>{
//        setTimeout(()=>{
//            resolve(true)
//            
//        },2000)
//    })
//}

// ? hay algun problema con el uso de iconos.
    // -- parece que estos estan del lado del servidor y no es posible pasarselos a un componente de tipo client

export const navItems: navItemsProps[] = [
    {path: '/about', text: 'About'  },
    {path: '/pricing', text: 'Pricing' },
    {path: '/contact', text: 'Contact' },
]

export const Navbar =  () => {
    return(
        <nav className="flax bg-blue-800 bg-opacity-30 p-2 m-2 rounded">

            <Link href={'/'} className="flex items-center"><HomeIcon className="mr-2"/></Link>

            <div className="flex flex-1"></div>

            {navItems.map(x  => <ActiveLink key={x.path}  {...x}/> )}

        </nav>
    )
}