import Link from "next/link";
import styles from "./menu.module.css";
import Image from "next/image";

export default function Menu(){
    return(
        <header className={styles.cabecalho}>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <Link href="/"><Image 
                            width={100}
                            height={75}
                            src={"https://www.ifms.edu.br/marcaifms.png"} /></Link>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link href="/" className="nav-link active">Home</Link>
                        <Link href="/registro" className="nav-link">Registrar</Link>
                        <Link href="/localizacao" className="nav-link">Localização</Link>
                    </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}