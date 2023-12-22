function verificacao() {
        const nome = document.getElementById("name").value;
        const sobre = document.getElementById("sobre").value;
        const pais = document.getElementById("sle").value;

        if(nome == ""){
            document.getElementById("resposta").innerHTML ="<strong> Cadastro não realizado NOME INCORRETO </strong>";
        }else if(sobre == ""){
            document.getElementById("resposta").innerHTML ="<strong> Cadastro não realizado SOBRENOME INCORRETO </strong>";
        }else if(pais == "Selecionar"){
            document.getElementById("resposta").innerHTML ="<strong> Cadastro não realizado PAÍS INCORRETO </strong>";
        }else{
            document.getElementById("resposta").innerHTML ="<strong> Cadastro realizado com sucesso </strong>";
        }
}
