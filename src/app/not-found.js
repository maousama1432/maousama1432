import Link from "next/link"

export default function NotFound() {
    return(
        <div>
            <h1>Error!!</h1>
            <Link href="/">Retornar para Home</Link>
        </div>
    )
}