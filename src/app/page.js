export default async function Home() {
  const url = "http://localhost:3000/api";

  const resposta = await fetch("https://back-end-ifms.vercel.app/campi", {
    next: {
      revalidate: 1
    }
  });
  const campus = await resposta.json();

  return (
    <main>
      <h1>Home</h1>
      {campus.map((campi) =>
        <div>
          <p>{campi.nome_campi}</p>
        </div>
      )}
    </main>
  );
}
