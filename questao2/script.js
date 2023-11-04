        // Função para salvar uma nova anotação no localStorage
        function salvarAnotacao() {
            const nota = document.getElementById("nota").value;
            if (nota) {
                const anotacoes = JSON.parse(localStorage.getItem("anotacoes")) || [];
                anotacoes.push(nota);
                localStorage.setItem("anotacoes", JSON.stringify(anotacoes));
                exibirAnotacoes();
                document.getElementById("nota").value = "";
            }
        }
        
                // Função para exibir as anotações do localStorage
        function exibirAnotacoes() {
            const anotacoes = JSON.parse(localStorage.getItem("anotacao")) || [];
            const anotacoesDiv = document.getElementById("anotacoes");
            anotacoesDiv.innerHTML = "";
            anotacoes.forEach(function (nota) {
                    const p = document.createElement("p");
                    p.textContent = nota;
                    anotacoesDiv.appendChild(p);
            });
        }
        
                // Adicionar um evento de clique ao botão "Salvar Anotação"
        document.getElementById("salvar").addEventListener("click", salvarAnotacao);
        
                // Exibir anotações armazenadas no localStorage ao carregar a página
        exibirAnotacoes();
        
                // Botão para apagar o localStorage (usado apenas para fins de resolução do problema)
        document.getElementById("apagarLocalStorage").addEventListener("click", function () {
            localStorage.removeItem("anotacoes");
            exibirAnotacoes();
        });