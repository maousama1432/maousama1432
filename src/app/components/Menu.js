import Link from "next/link";
import styles from "./menu.module.css";
import Image from "next/image";

export default function Menu(){
    return(
        <header className={styles.cabecalho}>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <Link href="/">
                            <a>
                                <Image
                                    width={100}
                                    height={100}
                                    src={"https://www.ifms.edu.br/marcaifms.png"} />
                            </a>
                        </Link>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link href="/" className="nav-link active">Home</Link>
                            <Link href="/registro" className="nav-link">Registrar</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}