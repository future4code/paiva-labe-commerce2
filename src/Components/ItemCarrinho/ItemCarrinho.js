import React from 'react';
import styled from 'styled-components'


const ItemCarrinho = styled.div`
display: flex;
flex-direction: column;

`


function ItemCarrinho(props) {
    return (
        <ItemCarrinho>
            <p>{props}X </p>
            <p>{props}</p>
            <button>Remover</button>
        </ItemCarrinho>
    );
}
export default ItemCarrinho;