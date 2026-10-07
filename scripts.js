console.log("Ola Mundo! meu nome é...")

async function componente(
    arquivo,
    destino
) {
    const elemento =
        document.querySelector(destino);

    if (!elemento) {
        return;
    }

    const resposta =
        await fetch(arquivo);

    const html =
        await resposta.text();

    elemento.innerHTML =
        html;
}