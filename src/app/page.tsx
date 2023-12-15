"use client";
import { useState } from "react";
import axios from "axios";

const initialProdutos = [
  { id: 1, nome: "banana" },
  { id: 2, nome: "pera" },
];

export default function Home() {
  const [produtos, setProdutos] = useState(initialProdutos);

  async function handleClick() {
    try {
      const response = await axios.get("http://192.168.68.154:3000/produtos");
      const result = response.data;
      setProdutos([...produtos, ...result]);
      console.log(result);
    } catch (error) {
      console.error("Erro ao recuperar informações:", error.message);

    }
  }

  return (
    <main>
      <button onClick={handleClick}>Recuperar informações</button>
      <ul>
        {produtos.map((produto) => (
          <li key={produto.id}>{produto.nome}</li>
        ))}
      </ul>
    </main>
  );
}
