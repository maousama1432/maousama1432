import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.css"

export default function Footer() {
    return(
        <footer className={styles.footer}>
            <nav class="navbar">
                <div class="container-fluid justify-content-center">
                    <Link href="https://ead.ifms.edu.br/"><Image 
                        width={50}
                        height={50}
                        src={"https://h5p.org/sites/default/files/moodle-icon-page_0.png"} /></Link>
                </div>
            </nav>
        </footer>
    );
};