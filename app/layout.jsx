import '@styles/globals.css'
import Navbar from "@/components/Navbar"

export const metadata = {
    title: 'Study Space',
    description: 'Unlocking the Power of Digital Learning Together!s'
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body suppressHydrationWarning={true} >
                <Navbar/>
                {children}
            </body>
        </html>
    )
}