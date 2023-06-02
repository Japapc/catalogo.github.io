const catalog = [
  {
    nome: "7810",
    descricao: "DESENGRIPANTE (ANTI-CORROSIVO) 300ml",
    grupo: "Abrasivos",
    localizacao: "21A13B01",
    imagem: "./images/Abrasivos/White Lub.jpg",
  },
  {
    nome: "35750",
    descricao: "LIMPA CONTATO 300 ml",
    grupo: "Abrasivos",
    localizacao: "21A13B01",
    imagem: "./images/Abrasivos/Limpa Contato.jpg",
  },
  {
    nome: "387964",
    descricao: "COLA SIKAFLEX 256 PRETA P/ FIXACAO DE PARABRISAS",
    grupo: "Abrasivos",
    localizacao: "21A13A01",
    imagem: "./images/Abrasivos/parabrisa.jpg",
  },
  {
    nome: "293805",
    descricao: "DESCARBONIZANTE CAR 80",
    grupo: "Abrasivos",
    localizacao: "21A13A01",
    imagem: "./images/Abrasivos/car80.jpg",
  },
  {
    nome: "553505",
    descricao: "ESTATOR ALTERNADOR BOSCH F00M130137",
    grupo: "Eletrica",
    localizacao: "21A11C01",
    imagem: "./images/Eletrica/estator.jpg",
  },
  {
    nome: "531601",
    descricao: "REG. VOLTAGEM ALTERNADOR COLHED. 12V",
    grupo: "Eletrica",
    localizacao: "21A11C01",
    imagem: "./images/Eletrica/regulador.jpg",
  },
  {
    nome: "401882",
    descricao: "INDUZIDO DO MOTOR DE PARTIDA JD 3520",
    grupo: "Eletrica",
    localizacao: "21A11C01",
    imagem: "./images/Eletrica/induzido.jpg",
  },
  {
    nome: "553529",
    descricao: "PLACA RETIF. ALTERNADOR BOSCH F00M133282 ORIGINAL",
    grupo: "Eletrica",
    localizacao: "21A11C01",
    imagem: "./images/Eletrica/placa retificadora.jpg",
  },
  {
    nome: "417361",
    descricao: "ALAVANCA JD AH206941",
    grupo: "Colhedora",
    localizacao: "21A11D02",
    imagem: "./images/Colhedora/macaneta.jpg",
  },
  {
    nome: "480885",
    descricao: "KIT DO BOCAL DZ100221 JOHN DEERE 3520",
    grupo: "Colhedora",
    localizacao: "21A11B01",
    imagem: "./images/Colhedora/solenoide.jpg",
  },
  
 
];

const tableBody = document.getElementById("table-body");
const navLinks = document.querySelectorAll("nav a");

function updateTable(grupo) {
  tableBody.innerHTML = "";
  catalog.forEach((peca) => {
    if (peca.grupo === grupo) {
      const row = `
        <tr>
          <td>${peca.nome}</td>
          <td>${peca.descricao}</td>
          <td>${peca.grupo}</td>
          <td>${peca.localizacao}</td>
          <td><img src="${peca.imagem}" alt="Imagem da peça ${peca.nome}" height="140" width="150" left"80"></td>
        </tr>
      `;
      tableBody.innerHTML += row;
    }
  });
}

updateTable("Carro"); // exibir as peças de carro por padrão

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    navLinks.forEach((link) => link.classList.remove("active"));
    link.classList.add("active");
    updateTable(link.innerText);
  });
});
