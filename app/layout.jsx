import Footer from "@/components/Footer";

export const metadata={
  title:"Weather_Dashboard",
  description:"A simple weather forecast application"
};







export default function LayOut({children}){
  return(
    <html>
      <body>
<main>{children}</main>
<Footer/>

      </body>
    </html>
  )
}