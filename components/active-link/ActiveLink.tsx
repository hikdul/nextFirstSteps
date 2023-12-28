"use client"

import Link from "next/link"
import { navItemsProps } from "../navbar/navItems"
import style from './activeLink.module.css'
import { usePathname } from "next/navigation"

export const ActiveLink = (x:navItemsProps) => {
  const pathName = usePathname()
  console.log(pathName)

  return (
    <Link  
        className={`${style.link} ${ (pathName == x.path) && style['actve-link']}`}
        href={x.path}> 
            {x.icon&&<x.icon className="mr-1"/>} {x.text} 
    </Link>
  )
}
