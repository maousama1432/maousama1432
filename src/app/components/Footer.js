import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return(
        <footer>
            <nav class="navbar bg-body-tertiary">
                <div class="container-fluid">
                    <Link href="https://ead.ifms.edu.br/"><Image 
                        width={100}
                        height={100}
                        src={"https://h5p.org/sites/default/files/moodle-icon-page_0.png"} /></Link>
                        <p>Fotter</p>
                </div>
            </nav>
        </footer>
    );
};