import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata={
  title:"Weather_Dashboard",
  description:"A simple weather forecast application"
};







export default function LayOut({children}){
  return(
    <html>
      <body>
        <Navbar/>
<main>{children}</main>
<Footer/>

      </body>
    </html>
  )
}