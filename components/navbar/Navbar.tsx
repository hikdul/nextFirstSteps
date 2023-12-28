
import Link from "next/link"
import { HomeIcon } from "@primer/octicons-react"
import { navItems } from "./navItems"
import { ActiveLink } from ".."

//const temporalAsync = () =>{
    //    return new Promise ( (resolve)=>{
//        setTimeout(()=>{
//            resolve(true)
//            
//        },2000)
//    })
//}

export const Navbar =  () => {
    return(
        <nav className="flax bg-blue-800 bg-opacity-30 p-2 m-2 rounded">

            <Link href={'/'} className="flex items-center"><HomeIcon className="mr-2"/></Link>

            <div className="flex flex-1"></div>

            {navItems.map(x  => <ActiveLink key={x.path}  {...x}/> )}

        </nav>
    )
}