
fetch('https://api.api-onepiece.com/v2/characters/en/').then(response => response.json())
    .then(data => {
        const botao = document.querySelector("#acessar")
        const primary = document.querySelector("#primary")
        const divMain = document.createElement("div")

        divMain.setAttribute("id", "user")
        document.body.appendChild(divMain)
        elementos(data, divMain)
        botao.addEventListener("click", () => {
    

            if (primary.className !== "active") {
                botao.innerHTML = "Sair da tripulação"
                primary.setAttribute("class", "active")
                divMain.setAttribute("class", "active")
            }
            else {
                primary.removeAttribute("class", "active")
                divMain.removeAttribute("Class", "active")
                botao.innerHTML = "Acessar a tripulação"
            }

        })
    })


function elementos(data, divMain) {
    
    data.map((item) => {
        if (item.id < 12) {
            const ul = document.createElement("ul")
            
           
            const liImg = document.createElement("li")
            liImg.setAttribute("class","fotos")
            liImg.innerHTML='<img src="img/images'+item.id+'.jpeg">'
           
            const liNome = document.createElement("li")
            liNome.textContent = "nome: " + item.name;

            const liCargo = document.createElement("li")
            liCargo.textContent = "Cargo: " + item.job;

            const liAltura = document.createElement("li")
            liAltura.textContent = "Altura: " + item.size;

            const liIdade = document.createElement("li")
            liIdade.textContent = "idade: " + item.age;
            
            const liReward=document.createElement("li")
            liReward.textContent="Recompenssa: "+item.bounty;

            ul.appendChild(liImg);
            ul.appendChild(liNome);
            ul.appendChild(liCargo);
            ul.appendChild(liAltura);
            ul.appendChild(liIdade);
            ul.appendChild(liReward);

            
            divMain.appendChild(ul)
                    }
    })


}
