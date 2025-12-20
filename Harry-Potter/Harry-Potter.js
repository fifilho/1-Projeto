const foto_mudar = document.getElementById("foto-grande").children[0];
const fotos = document.querySelectorAll(".foto img");
const titulo = document.getElementById("titulo-sinp");
const sinopse = document.getElementById("sinp");

const precos = document.querySelector(".precos-lojas");
const botao = document.querySelector("#veja-mais")

const preco_bahia = document.querySelectorAll(".link-bahia-item"); //Sao <a>
const preco_amazon = document.querySelectorAll(".link-amazon-item");
const preco_mercado_livre = document.querySelectorAll(".link-mercado_livre-item");
const pdf = document.querySelector(".link-pdf")
const pdf_img = document.querySelector(".pdf-img")

const audio = document.querySelector(".audio-mp3")
const botao_audio = document.querySelector("#audio-section")

let audio_rodando = false

function rodar_audio(){
    if (audio_rodando==false){
        audio.play();
    }
    else{
        audio.pause();
    }
    audio_rodando = !audio_rodando;
}

function primeira_vez(){
    audio.play();
    audio_rodando = !audio_rodando;
    document.removeEventListener("click",primeira_vez);
}
document.addEventListener("click",primeira_vez);

botao_audio.addEventListener("click",rodar_audio)

botao.addEventListener("click", () => {
    if (precos.style.opacity === "1"){
        precos.style.opacity = "0";
        setTimeout(()=>{precos.style.visibility = "hidden";},500)
        
    }
    else{
        precos.style.visibility = "visible";
        precos.style.opacity = "1";}
});

obras = {//sinopses e nomes
    0:["Harry Potter e a Pedra Filosofal","Harry Potter é um garoto órfão de 10 anos que vive infeliz com seus tios, os Dursley. Até que, repentinamente, ele recebe uma carta contendo um convite para ingressar em Hogwarts, uma famosa escola especializada em formar jovens bruxos."],
    1:["Harry Potter e a Câmera Secreta","Harry Potter retorna para seu segundo ano em Hogwarts. No entanto, o mal se espalha pela escola quando a Câmara Secreta é aberta. Muitos começam a suspeitar de Harry injustamente enquanto um monstro chamado Basilisco está a solta tentando matar os bruxos nascidos trouxas."],
    2:["Harry Potter e o Prisioneiro de Azkaban","O 3º ano de ensino na Escola de Magia e Bruxaria de Hogwarts se aproxima. Porém um grande perigo ronda a escola: o assassino Sirius Black fugiu da prisão de Azkaban, considerada até então como à prova de fugas. Para proteger a escola são enviados os Dementadores, estranhos seres que sugam a energia vital de quem se aproxima deles, que tanto podem defender a escola como piorar ainda mais a situação."],
    3:["Harry Potter e o Cálice de Fogo","Em seu 4º ano na Escola de Magia e Bruxaria de Hogwarts, Harry Potter é misteriosamente selecionado para participar do Torneio Tribruxo, uma competição internacional em que precisará enfrentar alunos mais velhos e experientes de Hogwarts e também de outras escolas de magia."],
    4:["Harry Potter e a Ordem da Fênix","Harry Potter retorna à Escola de Magia e Bruxaria de Hogwarts, para cursar o 5º ano letivo. Logo ele descobre que boa parte da comunidade bruxa foi levada a acreditar que o retorno de ********* foi uma mentira inventada por Harry, o que põe sua credibilidade em dúvida. Além disto, o Ministro da Magia Cornélio Fudge impõe à escola a presença de Dolores Umbridge, que torna-se a nova professora de Defesa Contra as Artes das Trevas"]
}
precos_livros ={ //os que tem 2 e pq tem 2 links
    0:{"bahia":["R$48,68"],"amazon":["R$64,90"],"mercado_livre":["R$64,90","R$60,33"]},
    1:{"bahia":["R$67,43"],"amazon":["R$89,90"],"mercado_livre":["R$89,90","R$43,29"]},
    2:{"bahia":["R$67,12"],"amazon":["R$74,90"],"mercado_livre":["R$74,90","R$58,47"]},
    3:{"bahia":["R$104,90"],"amazon":["R$104,90"],"mercado_livre":["R$104,90","R$76,65"]},
    4:{"bahia":["R$129,90","$97,43"],"amazon":["R$129,90"],"mercado_livre":["R$129,90"]},
}

links_livros = {//complicado dms pra falar mas aqui tao os linkss *-*
    0:{"bahia":["https://www.casasbahia.com.br/harry-potter-e-a-pedra-filosofal-capa-dura/p/1546120835"],
        "amazon":["https://www.amazon.com.br/Harry-Potter-Pedra-Filosofal-Rowling/dp/8532530788/ref=pd_sbs_d_sccl_2_1/146-9344537-1657949?pd_rd_w=TIMR6&content-id=amzn1.sym.53b2f13e-ab3a-40f2-aab9-7e4b988d3762&pf_rd_p=53b2f13e-ab3a-40f2-aab9-7e4b988d3762&pf_rd_r=KXFEX68GTQ0RJ72PPHJ7&pd_rd_wg=kcxkW&pd_rd_r=ebbac871-d331-4343-aac8-b4b275bb457d&pd_rd_i=8532530788&psc=1"],
        "mercado_livre":["https://www.mercadolivre.com.br/livro-harry-potter-e-a-pedra-filosofal-de-jk-rowling-capa-dura-2017-rocco/p/MLB19296006#polycard_client=search-nordic&search_layout=grid&position=1&type=product&tracking_id=a0c613e4-0ccf-41ef-9e9b-84f660bbeabd&wid=MLB5067180054&sid=search","https://www.mercadolivre.com.br/harry-potter-e-a-pedra-filosofal/p/MLB22490516#polycard_client=search-nordic&search_layout=grid&position=9&type=product&tracking_id=e3e759ec-2a64-4da9-a243-931992b8c4de&wid=MLB3588622799&sid=search"],
        "pdf":"https://drive.google.com/file/d/1pObpUn4jPLvGSGgD6jMSfbUonGEHTImk/view?usp=sharing"
    },
    1:{"bahia":
        ["https://www.casasbahia.com.br/harry-potter-e-a-camara-secreta-capa-dura/p/1546113094"],
        "amazon":["https://www.amazon.com.br/Harry-Potter-C%C3%A2mara-Secreta-Rowling/dp/8532530796/ref=pd_sbs_d_sccl_2_2/146-9344537-1657949?pd_rd_w=TIMR6&content-id=amzn1.sym.53b2f13e-ab3a-40f2-aab9-7e4b988d3762&pf_rd_p=53b2f13e-ab3a-40f2-aab9-7e4b988d3762&pf_rd_r=KXFEX68GTQ0RJ72PPHJ7&pd_rd_wg=kcxkW&pd_rd_r=ebbac871-d331-4343-aac8-b4b275bb457d&pd_rd_i=8532530796&psc=1"],
        "mercado_livre":["https://www.mercadolivre.com.br/livro-harry-potter-e-a-cmara-secreta-de-rowling-j-k-vol-2-editora-rocco-ltda-capa-dura-2017/p/MLB19295764?pdp_filters=seller_id%3A480263032#polycard_client=recommendations_pdp-seller_items-above&reco_backend=ranker-retsys-same-seller&reco_model=rk_entity_sameseller&reco_client=pdp-seller_items-above&reco_item_pos=0&reco_backend_type=low_level&reco_id=8dfa955f-26b3-4d2f-aad4-292a221684dd&wid=MLB3853851911&sid=recos","https://www.mercadolivre.com.br/livro-harry-potter-e-a-camara-secreta/up/MLBU1962895879#polycard_client=search-nordic&search_layout=grid&position=15&type=product&tracking_id=651ae6f0-f674-4cf9-86d4-01e5e481d9e5&wid=MLB1807159380&sid=search"],
        "pdf":"https://drive.google.com/file/d/12CYBBnfQRLXYkXQKIq-jkWD4qZR93SHX/view?usp=sharing"
    },
    2:{"bahia":
        ["https://www.casasbahia.com.br/harry-potter-e-o-prisioneiro-de-azkaban/p/1527792478"],
        "amazon":["https://www.amazon.com.br/Harry-Potter-Prisioneiro-Azkaban-Rowling/dp/853253080X/ref=pd_bxgy_thbs_d_sccl_1/146-9344537-1657949?pd_rd_w=oEMbu&content-id=amzn1.sym.ea5263f5-901f-4a74-9b73-3fc0e530788d&pf_rd_p=ea5263f5-901f-4a74-9b73-3fc0e530788d&pf_rd_r=KXFEX68GTQ0RJ72PPHJ7&pd_rd_wg=kcxkW&pd_rd_r=ebbac871-d331-4343-aac8-b4b275bb457d&pd_rd_i=853253080X&psc=1"],
        "mercado_livre":["https://www.mercadolivre.com.br/harry-potter-e-o-prisioneiro-de-azkaban-de-rowling-j-k-hp-premium-vol-3-editorial-editora-rocco-ltda-capa-dura-em-portugus-2017/p/MLB19295876?pdp_filters=seller_id%3A480263032#polycard_client=recommendations_pdp-seller_items-above&reco_backend=ranker-retsys-same-seller&reco_model=rk_entity_sameseller&reco_client=pdp-seller_items-above&reco_item_pos=1&reco_backend_type=low_level&reco_id=8dfa955f-26b3-4d2f-aad4-292a221684dd&wid=MLB3853075177&sid=recos","https://www.mercadolivre.com.br/livro-harry-potter-e-o-prisioneiro-de-azkaban/up/MLBU1967508056#polycard_client=search-nordic&search_layout=grid&position=20&type=product&tracking_id=46e0b97f-bd12-49ce-ba52-7b83dac23f34&wid=MLB1807158407&sid=search"],
        "pdf":"https://drive.google.com/file/d/1A9usazR55srq-dInhZcvgaYhUzQ3soVe/view?usp=sharing"
    },
    3:{"bahia":
        ["https://www.casasbahia.com.br/harry-potter-e-o-calice-de-fogo-capa-dura/p/1576349887"],
        "amazon":["https://www.amazon.com.br/Harry-Potter-C%C3%A1lice-Fogo-Rowling/dp/8532530818/ref=pd_bxgy_thbs_d_sccl_2/146-9344537-1657949?pd_rd_w=oEMbu&content-id=amzn1.sym.ea5263f5-901f-4a74-9b73-3fc0e530788d&pf_rd_p=ea5263f5-901f-4a74-9b73-3fc0e530788d&pf_rd_r=KXFEX68GTQ0RJ72PPHJ7&pd_rd_wg=kcxkW&pd_rd_r=ebbac871-d331-4343-aac8-b4b275bb457d&pd_rd_i=8532530818&psc=1"],
        "mercado_livre":["https://www.mercadolivre.com.br/harry-potter-e-o-calice-de-fogo-de-j-k-rowling-editora-rocco-capa-dura-em-portugus-2019/p/MLB19295963?pdp_filters=seller_id%3A480263032#polycard_client=recommendations_pdp-seller_items-above&reco_backend=ranker-retsys-same-seller&reco_model=rk_entity_sameseller&reco_client=pdp-seller_items-above&reco_item_pos=2&reco_backend_type=low_level&reco_id=b24f56b3-312a-4b66-b29b-dba18d0794e4&wid=MLB5137440924&sid=recos","https://www.mercadolivre.com.br/harry-potter-e-o-calice-de-fogo---rocco/up/MLBU1417682608#polycard_client=search-nordic&search_layout=grid&position=12&type=product&tracking_id=df36007f-92fb-445f-809c-6d5b722763ae&wid=MLB1580771206&sid=search"],
        "pdf":"https://drive.google.com/file/d/1gQTUuUKSgI37auZtOU1-H7C9rUT2Okto/view?usp=sharing"
    },
    4:{"bahia":
        ["https://www.casasbahia.com.br/harry-potter-e-a-ordem-da-fenix-capa-dura/p/1576071489","https://www.casasbahia.com.br/harry-potter-e-a-ordem-da-fenix-capa-dura/p/1546120870"],
        "amazon":["https://www.amazon.com.br/Harry-Potter-Ordem-F%C3%AAnix-Rowling/dp/8532530826/ref=sr_1_16?crid=3Q9Q5501QZWJ0&dib=eyJ2IjoiMSJ9.LXtYRJnKoJJ7lKmE-zJ7xZ96LtAFWQEAqU6k9v6_REgCs3r0UYUukaMQ6r_GuziMwx30DapzzsBnPL8-8a30ZLfB_iJ27VNtMJrUlenxVfeL54aSp1Nm8X6fnxXPtA4UBQqYCT0vxXXHEkRZwTdKL9hyz_Ipq6b9lbuMQvw6DIHsyFTNSpOIM72GvKqoq87sPD8gAuuV67ZI6FcbINGV5WbgNQ-Dt2og6gMd_8fKgUc.fx-jdCkvW2KKgvrL-WhnPO4xKxkgh_Iv6gAsp2EL1Lc&dib_tag=se&keywords=harry+potter+e+a+pedra+filosofal&qid=1764425740&s=books&sprefix=harry+potte%2Cstripbooks%2C170&sr=1-16"],
        "mercado_livre":["https://www.mercadolivre.com.br/livro-harry-potter-e-a-ordem-da-fnix-de-j-k-rowling-editora-rocco-ltda-capa-dura-2017/p/MLB19296072?pdp_filters=seller_id%3A480263032#polycard_client=recommendations_pdp-seller_items-above&reco_backend=ranker-retsys-same-seller&reco_model=rk_entity_sameseller&reco_client=pdp-seller_items-above&reco_item_pos=11&reco_backend_type=low_level&reco_id=b24f56b3-312a-4b66-b29b-dba18d0794e4&wid=MLB5068863566&sid=recos"],
        "pdf":"https://drive.google.com/file/d/1ZNVySpU3ITc_gm2ZsZKg7Mzj-wP6EfqQ/view?usp=sharing"
    },
}

titulo.textContent = obras["0"][0];
sinopse.textContent = obras["0"][1];

function visivel(i){
    let links_bahia = links_livros[i]["bahia"].length;
    let links_mercado_livre = links_livros[i]["mercado_livre"].length;

    if (links_bahia!==1){
        document.querySelectorAll(".bahia")[1].style.display = "flex";
    }
    else{
        document.querySelectorAll(".bahia")[1].style.display = "none";
    }
    if (links_mercado_livre!==1){
        document.querySelectorAll(".mercado_livre")[1].style.display = "flex";
    }
    else{
        document.querySelectorAll(".mercado_livre")[1].style.display = "none";
    }
}

function atualizarPrecos(i){
    foto_mudar.src = fotos[i].src;
    titulo.textContent = obras[i][0];
    sinopse.textContent = obras[i][1];

    visivel(i)
    
    preco_bahia.forEach((a_bahia,index) => { 
        a_bahia.href = links_livros[i]["bahia"][index];
        a_bahia.children[0].textContent = precos_livros[i]["bahia"][index]; 
    }); 
    preco_amazon.forEach((a_amazon,index) => { 
        a_amazon.href = links_livros[i]["amazon"][index];
        a_amazon.children[0].textContent = precos_livros[i]["amazon"][index];
    });
    preco_mercado_livre.forEach((a_mercado_livre,index) => { 
        a_mercado_livre.href = links_livros[i]["mercado_livre"][index];
        a_mercado_livre.children[0].textContent = precos_livros[i]["mercado_livre"][index];
    });
    pdf.href = links_livros[i]["pdf"];
    pdf_img.href = links_livros[i]["pdf"];
}

atualizarPrecos(0);

for (let i=0; i < fotos.length; i++) {
    fotos[i].addEventListener("click", () => atualizarPrecos(i))
};