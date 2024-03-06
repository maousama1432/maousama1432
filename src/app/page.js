import Link from "next/link"

export default function NotFound() {
    return(
        <div>
            <h1>algo de errado, não está certo</h1>
            <Link href="/">Retornar para Home</Link>
        </div>
    )
}