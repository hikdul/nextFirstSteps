import { Metadata } from "next"

export const metadata: Metadata = 
{
  title: 'pricing',
  description: 'pricing page',
  applicationName: 'first Steps',
  creator: 'hikdul',
  authors: {
        url: 'https://www.hikdul.dev',
        name: 'hikdul'
    },
  keywords:['nada', 'pruebas', 'bastante' ,'lento', 'al', 'inicio']

}

export default function PricingPage() 
{
    return(
        <>
            <span className="text-7xl">Pricing Page</span>
        </>
    )
}