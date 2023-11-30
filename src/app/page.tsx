"use client";
import { useState } from "react";

const initialProdutos = [
 { id: 1, nome: "banana"},
 {id: 2, nome: "pera"},
];

//pra mostrar as informações na tela
export default function Home() {
  const [produtos, setProdutos] = useState(initialProdutos);

  //botão pra puxar as informações
  async function handleClick() {
    const response = await fetch("http://192.168.68.154:3000/produtos");
    const result = await response.json();
    setProdutos([... produtos, ...result]); //juntou os produtos antigos com os novos
     console.log(result);
    }

//retornar um htlm
  return (
  <main> 
    <button onClick={handleClick}>recuperar informações</button>
    <ul>
      {produtos.map((produtos) => (
        <li> {produtos.nome} </li>
      ))}
    </ul>


  </main>)
}
