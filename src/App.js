import React from 'react';
import './App.css';
import styled from 'styled-components'
import Produtos from './Components/Produtos/Produtos'
import ItemCarrinho from './Components/ItemCarrinho/ItemCarrinho'

const MainContainer = styled.div`
 display: flex;
 gap: 10px;
 justify-content: space-between;
 width: 100%;
`

const ContainerFiltros = styled.div`
display: flex;
flex-direction: column;
border: 1px solid black;
width: 20%;
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



class App extends React.Component {
  state = {
    listaProdutos: [
      {
        id: 1,
        name: "viagem para lua",
        value: 10000.0,
        imageUrl: "https://picsum.photos/200/200",
      },
      {
        id: 2,
        name: "viagem para marte",
        value: 30000.0,
        imageUrl: "https://picsum.photos/200/200",
      },
      {
        id: 3,
        name: "viagem para venus",
        value: 35000.0,
        imageUrl: "https://picsum.photos/200/200",
      },
      {
        id: 4,
        name: "viagem só de ida para sol",
        value: 50000.0,
        imageUrl: "https://picsum.photos/200/200",
      },
      {
        id: 5,
        name: "visitação em buraco negro",
        value: 900000.0,
        imageUrl: "https://picsum.photos/200/200",
      },
      {
        id: 6,
        name: "pacote plus - aos limites do universo",
        value: 9999999.0,
        imageUrl: "https://picsum.photos/200/200",
      }
    ],
    ordenacao: "",
    filtroMin: "",
    filtroMax: "",
    filtroNome: ""

  }

  ordenaLista = (event) => {
    // console.log(this.state.ordenacao)
    this.setState({ ordenacao: event.target.value })
    // console.log(this.state.ordenacao)
    let novaLista = []
    switch (this.state.ordenacao) {
      case ("DECRESCENTE"):
        novaLista = [...this.state.listaProdutos]
        this.setState({ listaProdutos: novaLista.sort((a, b) => { return a.value - b.value; }) })
      break;
      case ("DECRESCENTE"):
         novaLista = [...this.state.listaProdutos]
        this.setState({ listaProdutos: novaLista.sort((a, b) => { return b.value - a.value; }) })
      break;

    }
  }

  filtraMinimo = (event) => {
    console.log(this.state.filtroMin)
    this.setState({ filtroMin: event.target.value })
    console.log(this.state.filtroMin)
    // const listaFiltrada = [this.state.listaProdutos]
    // listaFiltrada.filter((produto) =>{ return produto.valor > this.state.filtroMin}) 
    // this.setState({listaProdutos: listaFiltrada})
  }


  
  filtraMaximo = (event) => {
    this.setState({ filtroMax: event.target.value })
  }

  filtraNome = (event) => {
    this.setState({filtroNome: event.target.value })
    console.log(this.state.filtroNome)
  }

  render() {
    return (
      <MainContainer>
        
        <ContainerFiltros>
          <h3>Filtros</h3>

          <label>Valor mínimo:
            <input onChange={this.filtraMinimo} value={this.state.filtroMin} ></input>
          </label>

          <label>Valor maxímo:
            <input onChange={this.filtraMaximo}></input>
          </label>

          <label>Busca por nome:
            <input onChange={this.filtraNome} value={this.state.nome}></input>
          </label>
        </ContainerFiltros>


        <ContainerCentral>

          <ContainerIndiceCentral>
            <p>Quantidade de produtos: {this.state.listaProdutos.length} </p>

            <label>Ordenação:
              <select onChange={this.ordenaLista} >
                <option value="CRESCENTE">Crescente</option>
                <option value="DECRESCENTE">Decrescente</option>
              </select>
            </label>

          </ContainerIndiceCentral>
          <ContainerProdutos>
            {this.state.listaProdutos.map((produto) => {
              return <Produtos
                key={produto.id}
                nome={produto.name}
                valor={produto.value}
                imagem={produto.imageUrl}
              />
            })}



          </ContainerProdutos>

        </ContainerCentral>


        <ContainerCarrinho>
          <h3>Carrinho:</h3>
          <ItemCarrinho  />
          <h3>Valor Total:</h3>
          


        </ContainerCarrinho>


      </MainContainer>
    )
  };
}

export default App;
