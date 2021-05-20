import React from 'react';
import './App.css';
import styled from 'styled-components'
import img from './img/imgbg.png';
import img2 from './img/imgbg2.png'
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
padding: 10px;
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
padding: 10px;
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
`
const Produtos = styled.div`
display: flex;
flex-direction: column;
border: 1px solid black;
flex-wrap: wrap;
align-items: center;

img {
    width:250px;
    height: 250px;
}
`

const ItemCarrinho = styled.div`
display: flex;
`

class App extends React.Component {
  state = {
    listaCarrinho: [],
    listaProdutos: [
      {
        id: 1,
        name: "Viagem para lua",
        value: 10000.0,
        imageUrl: "https://bioscopic.files.wordpress.com/2008/01/moon.jpg",
      },
      {
        id: 2,
        name: "Viagem para marte",
        value: 30000.0,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/800px-OSIRIS_Mars_true_color.jpg",
      },
      {
        id: 3,
        name: "Viagem para venus",
        value: 35000.0,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/85/Venus_globe.jpg",
      },
      {
        id: 4,
        name: "Viagem só de ida para sol",
        value: 50000.0,
        imageUrl: "https://stcotvfoco.com.br/2017/03/mira-el-antes-y-despues-del-sol-de-los-teletubbies-01.jpg",
      },
      {
        id: 5,
        name: "Tour em buraco negro",
        value: 900000.0,
        imageUrl: "https://ibcdn.canaltech.com.br/yuxagEBwKbCP_kyKwD17behqE-o=/660x0/smart/i360616.jpeg",
      },
      {
        id: 6,
        name: "Aos limites do universo",
        value: 9999999.0,
        imageUrl: "http://www.reactiongifs.com/wp-content/uploads/2013/10/tim-and-eric-mind-blown.gif",
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
    ],
    ordenacao: "CRESCENTE",
    filtroMin: "",
    filtroMax: "",
    filtroNome: ""
  }

  ordenaLista = (event) => {
    this.setState({ ordenacao: event.target.value })
  }

  filtraMinimo = (event) => {
    this.setState({ filtroMin: event.target.value })
  }

  filtraMaximo = (event) => {
    this.setState({ filtroMax: event.target.value })
  }

  filtraNome = (event) => {
    this.setState({ filtroNome: event.target.value })
  }

  adicionaCarrinho = (produto) => {
    const carrinhoTemp = this.state.listaCarrinho
    const resultadoFiltro = carrinhoTemp.filter((item) => { return item.id === produto.id })

    if (resultadoFiltro.length > 0) {
      const somaCarrinho = carrinhoTemp.map((item) => {
        if (resultadoFiltro[0].id === item.id) {
          item.quantidade++
          item.value += item.value
        }
        return item
      })
      this.setState({ listaCarrinho: somaCarrinho })
    } else if (resultadoFiltro.length === 0) {
      const itemCarrinho = {
        id: produto.id,
        name: produto.name,
        value: produto.value,
        quantidade: 1
      }

      const carrinho = [...this.state.listaCarrinho, itemCarrinho]
      this.setState({ listaCarrinho: carrinho })
    }
  }

  ordenaFiltro = () => {
    let valorMin
    let valorMax
    if (this.state.filtroMin != "") {
      valorMin = this.state.filtroMin
    } else { valorMin = -Infinity }

    if (this.state.filtroMax != "") {
      valorMax = this.state.filtroMax
    } else { valorMax = Infinity }

    return this.state.listaProdutos
      .filter(produto => produto.value >= valorMin)
      .filter(produto => produto.value <= valorMax)
      .filter(produto => produto.name.includes(this.state.filtroNome))
      .sort((a, b) => {
        switch (this.state.ordenacao) {
          case ("CRESCENTE"):
            return a.value - b.value;
          case ("DECRESCENTE"):
            return b.value - a.value;
          default: console.log("deu ruim")
        }
      })
  }

  removeItem = (id) => {
    const novoCarrinho = this.state.listaCarrinho.filter((item) => { return id !== item.id})
    this.setState({listaCarrinho: novoCarrinho})
  }

  // removeItem = (item) => {
  //   const Carrinho = this.state.listaCarrinho.map((produto) => {
  //     if (produto.id === item.id) {
  //       if (item.quantide > 1) {
  //         item.quantidade--
  //         item.value -= item.value
  //       } else if (item.quantide === 0) {
  //         item.splice(0, 1)
  //       }
  //     }
  //   })
  //   this.setState({ listaCarrinho: Carrinho })
  // }

  render() {
    const listaExibicao = this.ordenaFiltro().map((produto) => {
      return (
        <Produtos key={produto.name}>
          <img src={produto.imageUrl} />
          <h5>{produto.name}</h5>
          <h5> R$: {produto.value}</h5>
          <button onClick={() => this.adicionaCarrinho(produto)}>Adicionar ao Carrinho</button>
        </Produtos>
      );
    })

    const ListaExibicaoCarrinho = this.state.listaCarrinho
      .filter(function (a) {
        return !this[JSON.stringify(a)] && (this[JSON.stringify(a)] = true);
      }, Object.create(null))
      .map((produto) => {
        return (
          <ItemCarrinho key={produto.id}>
            <p>{produto.quantidade} X  </p>
            <p>{produto.name}</p>
            <button onClick={() => this.removeItem(produto.id)} >Remover</button>
          </ItemCarrinho>
        )
      })

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
            <p>Quantidade de produtos: {this.ordenaFiltro().length} </p>

            <label>Ordenação:
              <select onChange={this.ordenaLista} >
                <option value="CRESCENTE">Crescente</option>
                <option value="DECRESCENTE">Decrescente</option>
              </select>
            </label>

          </ContainerIndiceCentral>
          <ContainerProdutos>
            {listaExibicao}
          </ContainerProdutos>
        </ContainerCentral>

        <ContainerCarrinho>
          <h3>Carrinho:</h3>
          {ListaExibicaoCarrinho}
          <h3>Valor Total: R$ {this.state.listaCarrinho.reduce((a, b) => a + b.value, 0)}</h3>
        </ContainerCarrinho>
      </MainContainer >
    )
  };
}

export default App;
