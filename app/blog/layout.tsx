import Footer from "@/components/footer";
import Nav from "../nav";
import Footer2 from "../(marketing)/footer";

export default function Layout({children}: {children: any}){
    return <div>
        <Nav/>
        {children}

        <Footer2/>
    </div>
}