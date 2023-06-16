
fetch('https://api.api-onepiece.com/characters/').then(response => response.json())
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
                console.log("entrou")

            }
            else {
                primary.removeAttribute("class", "active")
                divMain.removeAttribute("Class", "active")
                botao.innerHTML = "Acessar a tripulação"
                console.log("entrou3")
            }

        })
    })


function elementos(data, divMain) {
    let count=1;
    data.map((item) => {
        if (item.id < 12) {
            const ul = document.createElement("ul")
            
            ul.style.transition="20s"
            
            const liImg = document.createElement("li")
            liImg.setAttribute("class","fotos")
            liImg.innerHTML='<img src="/img/images'+count+'.jpeg">'
            count++

            const liNome = document.createElement("li")
            liNome.textContent = "nome: " + item.french_name;

            const liCargo = document.createElement("li")
            liCargo.textContent = "Cargo: " + item.job;

            const liAltura = document.createElement("li")
            liAltura.textContent = "Altura: " + item.size;

            const liIdade = document.createElement("li")
            liIdade.textContent = "Altura: " + item.age;

            ul.appendChild(liImg);
            ul.appendChild(liNome);
            ul.appendChild(liCargo);
            ul.appendChild(liAltura);
            ul.appendChild(liIdade);

            divMain.appendChild(ul)
        }
    })


}