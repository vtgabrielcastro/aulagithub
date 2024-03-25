let lista = document.getElementById("lista");
let btn = document.getElementById("btn");
let valor = document.getElementById("valor");
btn.onclick = function(){
    let itens = document.getElementsByTagName("li");
    if(itens.length > 0){
        let v = 0;
        for(i = 0; i <= itens.length; i++){
            v++;
            if(itens[i].innerHTML == valor.value){
                console.log(`caractere(s) "${valor.value}" já foi registrado`);
                break;
            }else if(v == itens.length){
                let item = document.createElement("li");
                item.innerHTML = valor.value;
                lista.appendChild(item);
                break;   
            }else{
                console.log("Registrado!");
            }
        }
    }else{
        let item = document.createElement("li");
        item.innerHTML = valor.value;
        lista.appendChild(item);
    }
}
