
function background(){

  
    document.body.style.backgroundColor = "#BECCC3";
  
}


function show(){


    let nome = document.getElementById("fname").value;
    let snome = document.getElementById("lname").value;

    let nome_completo = document.getElementById("result");

    nome_completo.textContent = (nome + " " + snome);


}

/**
 * Filtra o array de objetos (data) de acordo com os caracteres
 * digitados no campo de texto id='name'
 */
function search(){

    var data = [{name: "Rodrigo"}, {name: "Ricardo"}, {name: "Fabio"}, {name: "Alex"}, {name: "Sílvia"}];
   
    let pesquisa = document.getElementById("name").value;
    let resultado = document.getElementById("search");

    let mdata;
    let mdatalc;

    pesquisa = pesquisa.toUpperCase();

    console.log("DIGITADO: " + pesquisa);


    removeAllChildren(resultado);



        for(let i = 0 ; i < data.length ; i++)
            {
                console.log("ARRAY NA POSICAO i " + data[i].name);
                mdata = data[i].name;
                mdatalc = mdata.toUpperCase();

                for(let j = 0 ; j < mdata.length ; j++)
                    {
                        console.log("SUBSTRING: " + mdata.substring(0,j) );
                        if(mdatalc.substring(0,j) == pesquisa)
                            {
                                console.log("MATCH");
                                var ndiv = document.createElement("div");
                                ndiv.appendChild(document.createTextNode(mdata));
                                            
                                resultado.appendChild(ndiv);
                                
                                    }

                            }
                
                console.log("\n\n");
                    
                    }

            }


   


 *
 * @param {*} node Um objeto HTML Node
 */
function removeAllChildren(node){
    while (node.hasChildNodes()) {
        node.removeChild(node.firstChild);
    }
}