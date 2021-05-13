import React from 'react';
import './App.css';
import styled from 'styled-components'
import Produtos from './Components/Produtos/Produtos'
// import ItemCarrinho from './Components/ItemCarrinho/ItemCarrinho'

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
    listaCompleta: [],
    listaProdutos: [
      {
        id: 1,
        name: "viagem para lua",
        value: 10000.0,
        imageUrl: "https://bioscopic.files.wordpress.com/2008/01/moon.jpg",
      },
      {
        id: 2,
        name: "viagem para marte",
        value: 30000.0,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/800px-OSIRIS_Mars_true_color.jpg",
      },
      {
        id: 3,
        name: "viagem para venus",
        value: 35000.0,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/85/Venus_globe.jpg",
      },
      {
        id: 4,
        name: "viagem só de ida para sol",
        value: 50000.0,
        imageUrl: "https://stcotvfoco.com.br/2017/03/mira-el-antes-y-despues-del-sol-de-los-teletubbies-01.jpg",
      },
      {
        id: 5,
        name: "visitação em buraco negro",
        value: 900000.0,
        imageUrl: "https://ibcdn.canaltech.com.br/yuxagEBwKbCP_kyKwD17behqE-o=/660x0/smart/i360616.jpeg",
      },
      {
        id: 6,
        name: "pacote plus - aos limites do universo",
        value: 9999999.0,
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
    const listaFiltrada = []
    this.state.listaCompleta.filter((produto) => { 
      if (produto.value >= this.state.filtroMin){
        listaFiltrada.push(produto)
      }
      return listaFiltrada
    })
    this.state.filtroMin != 0 ? this.setState({listaProdutos: listaFiltrada}) : this.setState({listaProdutos: [...this.state.listaCompleta]})    
  }

  filtraMaximo = (event) => {
    this.setState({ filtroMax: event.target.value })
    const listaFiltrada = []
    this.state.listaCompleta.filter((produto) => { 
      if (produto.value <= this.state.filtroMax){
        listaFiltrada.push(produto)
      }
      return listaFiltrada
    })
    this.state.filtroMax != 0 ? this.setState({listaProdutos: listaFiltrada}) : this.setState({listaProdutos: [...this.state.listaCompleta]}) 
  }

  filtraNome = (event) => {
    this.setState({ filtroNome: event.target.value })
    console.log(this.state.filtroNome)
  }

  componentDidMount() {
    const listaCompleta = [...this.state.listaProdutos]
    this.setState({ listaCompleta: listaCompleta })
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
            <input onChange={this.filtraMaximo} value={this.state.filtroMax}></input>
          </label>

          <label>Busca por nome:
            <input onChange={this.filtraNome} value={this.state.filtroNome}></input>
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
          {/* <ItemCarrinho  /> */}
          <h3>Valor Total:</h3>



        </ContainerCarrinho>


      </MainContainer>
    )
  };
}

export default App;
