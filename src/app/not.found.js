const url = "https://back-end-ifms-five.vercel.app/campi";

export default async function Home() {

  const resposta = await fetch(url,{
    next: {
      revalidate: 1
    }
  });
  const campi = await resposta.json();
 
  return (
    <main className="text-center py-5 mb-5">
      <h3 className="pb-3">&lt;--  Página Home  --&gt;</h3>
      {campi.map((campus) =>
        <div>
             <p>{campus.nome_campus}</p>
        </div>
      )}
    </main>
  )
}