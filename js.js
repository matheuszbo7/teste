let titulo = document.getElementById("titulopagina");
console.log(titulo);

document.getElementById("meup").textContent = "novo conteudo de texto";

document.querySelector("img").setAttribute("src", "imagem_nova.jpg");

document.getElementById("meue").style.backgroundColor = "green";

document.getElementById("meub").addEventListener("click", function(){
    document.body.style.backgroundColor = "black"
    alert("voce clicou no botao");
});


function addCard() {
    // Cria um novo elemento div para representar o card
    var card = document.createElement("div");
    card.className = "card";
    
    // Conteúdo do card (pode personalizar conforme necessário)
    card.innerHTML = `
    <div class="card card text-bg-dark mb-3" style="max-width: 18rem;" style="width: 18rem;">
    <img src="imagem_tbs.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h4><b>The boys</b></h2>
        <p class="card-text">Os super-heróis são frequentemente tão populares quanto as celebridades, tão influentes quanto os políticos e, às vezes, até tão reverenciados quanto os deuses. Mas é aí que eles usam seus poderes para o bem. O que acontece quando os heróis se tornam rebeldes e começam a abusar de seus poderes? Quando são os impotentes contra os superpoderosos, o Bo Eles partem em uma jornada heróica para expor a verdade sobre os Sete e Vought,
        o conglomerado multibilionário que gerencia os super-heróis e encobre seus segredos sujos.
         Baseado na série de quadrinhos de mesmo nome.
        </p>
    </div>
    `;
    
    // Adiciona o card à div container
    document.body.appendChild(card);
}



