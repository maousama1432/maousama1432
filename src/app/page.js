export default async function Home() {
  const url = "http://localhost:3000/api";

  const resposta = await fetch(url, {
    cache: "no-cache"
  });

  // Verifica se a resposta foi bem-sucedida (status 200)
  if (!resposta.ok) {
    throw new Error(`Erro ao carregar dados: ${resposta.status} - ${resposta.statusText}`);
  }

  // Verifica se a resposta não está vazia
  const json = await resposta.json();
  if (!json) {
    throw new Error("Resposta vazia ou inválida");
  }

  // Continua o processamento normal
  return (
    <main>
      <h1>Home</h1>
      {json.map((campi) =>
        <div key={campi.id}>
          <p>{campi.nome_campi}</p>
        </div>
      )}
    </main>
  );
}
