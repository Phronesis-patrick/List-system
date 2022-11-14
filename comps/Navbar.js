import Link from "next/link"
import Image from "next/image";
const Navbar = () => {
    return ( 
        
        <nav>
        <div className="logo">
        <>
      
      <Image
        src="/download.jpg"
        alt="Picture of the author"
        width={128}
        height={77}
      />
        </>
        </div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/Ninjas">Ninja list</Link>
        </nav>
        
     );
}
 
export default Navbar;