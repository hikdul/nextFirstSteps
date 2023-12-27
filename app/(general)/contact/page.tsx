import { Metadata } from "next"

export const metadata: Metadata = 
{
  title: 'contact',
  description: 'contact page',
  applicationName: 'first Steps',
  creator: 'hikdul',
  authors: {
        url: 'https://www.hikdul.dev',
        name: 'hikdul'
    },
  keywords:['nada', 'pruebas', 'bastante' ,'lento', 'al', 'inicio']

}

export default function ContactPage()
{
    return(
        <>
            <span className="text-7xl">Contact Page</span>
        </>
    )
}