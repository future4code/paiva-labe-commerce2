import React from 'react';
import './App.css';
import styled from 'styled-components';
import img from './Imagens/Background.png';
import img2 from './Imagens/Background2.png'
// import Produtos from './Components/Produtos/Produtos'
// import ItemCarrinho from './Components/ItemCarrinho/ItemCarrinho'

const MainContainer = styled.div`
 display: flex;
 gap: 10px;
 justify-content: space-between;
 width: 100%;
 background-color: lightgrey;
`

const ContainerFiltros = styled.div`
display: flex;
flex-direction: column;
border: 1px solid black;
width: 20%;
height: 100vh;
background-image: url(${img});
height: 100vh;
color: white;
padding: 10px
`

const ContainerCentral = styled.div`
display: flex;
flex-direction: column;
width: 60%;
`

const ContainerCarrinho = styled.div`
display: flex;
flex-direction: column;
border: 1px solid black;
width: 20%;
background-image: url(${img2});
color: white;
padding: 10px
`
const ContainerIndiceCentral = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
const ContainerProdutos = styled.div`
display: flex;
flex-wrap:wrap;
gap: 5px;
justify-content: space-between;
`
const Produtos = styled.div`
display: flex;
flex-direction: column;
border: 1px solid black;
flex-wrap: wrap;
align-items: center;

/* width: 25%; */

img {
    width:200px;
    height: 200px;
}
`


class App extends React.Component {
  state = {
    listaCompleta: [],
    listaProdutos: [
      {
        id: 1,
        name: "Viagem colônia Lunar",
        value: 250000.0,
        imageUrl: "https://i.pinimg.com/564x/08/72/dc/0872dc1108d6bd8a82f56a52c20fffaf.jpg",
      },
      {
        id: 2,
        name: "Viagem colônia em Marte",
        value: 375000.0,
        imageUrl: "https://i.pinimg.com/564x/6c/ac/bb/6cacbb5e5aad0a31f58272881c4b0e8a.jpg",
      },
      {
        id: 3,
        name: "Viagem colônia flutuante Vênus",
        value: 450000.0,
        imageUrl: "https://i.pinimg.com/564x/d4/50/59/d45059ce55c038dee6af059f38b10fcf.jpg",
      },
      {
        id: 4,
        name: "Viagem de ida para o Sol",
        value: 650500.0,
        imageUrl: "https://i.pinimg.com/564x/53/97/4c/53974cc2fcf2d0008f293a1fefdf026c.jpg",
      },
      {
        id: 5,
        name: "Expedição para Buraco Negro",
        value: 870000.0,
        imageUrl: "https://i.pinimg.com/564x/8a/17/78/8a1778090c871a078d0add0498058d76.jpg",
      },
      {
        id: 6,
        name: "Viagem para colônia Espacial",
        value: 300000.0,
        imageUrl: "https://i.pinimg.com/564x/1a/6b/f9/1a6bf99078f9f472a57629ac28f72fa9.jpg",
      },
      {
        id: 7,
        name: "Férias no Hotel Intergaláctico",
        value: 475000.0,
        imageUrl: "https://i.pinimg.com/564x/8e/a3/18/8ea318461bdb245c07500b29d6f3b7e5.jpg",
      },
      {
        id: 8,
        name: "Férias na Colônia Espacial",
        value: 660000.0,
        imageUrl: "https://i.pinimg.com/564x/7f/e2/94/7fe29480e5fd7991413b00d0d94bc54d.jpg",
      },
      {
        id: 9,
        name: "Tour pelo Sistema Solar",
        value: 900500.0,
        imageUrl: "https://i.pinimg.com/564x/db/80/58/db8058b2a7a337933c8819741d1f3961.jpg",
      },
      {
        id: 10,
        name: "Pacote - aos Limites do Universo",
        value: 999999.0,
        imageUrl: "http://www.reactiongifs.com/wp-content/uploads/2013/10/tim-and-eric-mind-blown.gif",
      }
    ],
    listaCarrinho: [],
    ordenacao: "CRESCENTE",
    filtroMin: 0,
    filtroMax: Infinity,
    filtroNome: ""
  }

  ordenaLista = (event) => {
    this.setState({ ordenacao: event.target.value })
    let novaLista = []
    switch (this.state.ordenacao) {
      case ("DECRESCENTE"):
        novaLista = [...this.state.listaProdutos]
        this.setState({ listaProdutos: novaLista.sort((a, b) => { return a.value - b.value; }) })
        break;
      case ("CRESCENTE"):
        novaLista = [...this.state.listaProdutos]
        this.setState({ listaProdutos: novaLista.sort((a, b) => { return b.value - a.value; }) })
        break;
      default: console.log("deu ruim")
    }
  }

  filtraMinimo = (event) => {
    this.setState({ filtroMin: event.target.value })
  }

  filtraMaximo = (event) => {
    this.setState({ filtroMax: event.target.value })
    
  }

  filtraNome = (event) => {
    this.setState({ filtroNome: event.target.value })
    console.log(this.state.filtroNome)
  }

  // adicionaCarrinho = (produto) => {
  //   const listaCarrinho = []
  //   this.

  // }

  componentDidMount() {
    const listaCompleta = [...this.state.listaProdutos]
    this.setState({ listaCompleta: listaCompleta })
  }

  render() {
    const listaExibição = this.state.listaProdutos.map((produto) => {
      return (
        <Produtos key={produto.nome}>
          <img src={produto.imageUrl} />
          <h5>{produto.name}</h5>
          <h5> R$: {produto.value}</h5>
          {/* <button onClick={() => adicionaCarrinho(produto)}>Adicionar ao Carrinho</button> */}
        </Produtos>
      );
    })

    // let listaFiltrada = []
    // this.state.listaCompleta.filter((produto) => {
    //   if (produto.value >= this.state.filtroMin) {
    //     listaFiltrada.push(produto)
    //   }
    //   return listaFiltrada
    // })
    // this.state.filtroMin != 0 ? this.setState({ listaProdutos: listaFiltrada }) : this.setState({ listaProdutos: [...this.state.listaCompleta] })

    // this.state.listaCompleta.filter((produto) => {
    //   if (produto.value <= this.state.filtroMax) {
    //     listaFiltrada.push(produto)
    //   }
    //   return listaFiltrada
    // })
    // this.state.filtroMax != 0 ? this.setState({ listaProdutos: listaFiltrada }) : this.setState({ listaProdutos: [...this.state.listaCompleta] })

    return (
      <MainContainer>

        <ContainerFiltros>
          <h3>Filtros</h3>

          <label>Valor mínimo:
            <input onChange={this.filtraMinimo} value={this.state.filtroMin} ></input>
          </label>

          <label>Valor maxímo:
            <input onChange={this.filtraMaximo} value={this.state.filtroMax}></input>
          </label>

          <label>Busca por nome:
            <input onChange={this.filtraNome} value={this.state.filtroNome}></input>
          </label>
        </ContainerFiltros>

        <ContainerCentral>
          <ContainerIndiceCentral>
            <h4>Quantidade de produtos: {this.state.listaProdutos.length} </h4>

            <label>Ordenação:
              <select onChange={this.ordenaLista} >
                <option value="CRESCENTE">Crescente</option>
                <option value="DECRESCENTE">Decrescente</option>
              </select>
            </label>

          </ContainerIndiceCentral>
          <ContainerProdutos>
            {listaExibição}
          </ContainerProdutos>
        </ContainerCentral>


        <ContainerCarrinho>
          <h3>Carrinho:</h3>
          {/* <ItemCarrinho  /> */}
          <h3>Valor Total:</h3>



        </ContainerCarrinho>


      </MainContainer>
    )
  };
}

export default App;
