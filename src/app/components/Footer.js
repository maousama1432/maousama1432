import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return(
        <footer>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <Link href="https://ead.ifms.edu.br/">
                        <a>
                            <Image
                                width={100}
                                height={100}
                                src={"https://h5p.org/sites/default/files/moodle-icon-page_0.png"} />
                        </a>
                    </Link>
                    <p>Fotter</p>
                </div>
            </nav>
        </footer>
    );
}