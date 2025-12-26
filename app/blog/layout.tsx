import Footer from "@/components/footer";
import Nav from "../nav";

export default function Layout({children}: {children: any}){
    return <div>
        <Nav/>
        {children}

        <Footer/>
    </div>
}