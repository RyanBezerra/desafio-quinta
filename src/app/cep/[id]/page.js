'use client'
import { useState, useEffect } from "react"
import Link from 'next/link'

export default function Page({params}){
    console.log(params.id)
    const[data, setData] = useState({})

    useEffect(() => {
        fetch(`https://viacep.com.br/ws/${params.id}/json/`)
          .then((res) => res.json())
          .then((data) => setData(data))
          .catch((error) => {
            console.log("Erro na requisição:", error)
            setData({error: "CEP não valido"})
          })
      }, [params.id])

      console.log(data)

      if(data.erro || data.error) {
        return(
            <div className="flex flex-col justify-center h-screen bg-[#1f2937] text-white font-bold items-center gap-4">
                <h1>CEP não encontrado</h1>
                <Link href="/" className="bg-blue-700 px-8 py-3 rounded-lg font-bold text-white text-lg hover:bg-blue-800 transition-all duration-300 ease-in-out">Buscar outro CEP</Link>
            </div>
        )
      }

    return(
        <main className="flex flex-col justify-center items-center h-screen bg-[#1f2936] text-white font-bold">
            <div className="text-2xl py-10">
                <h1>CEP: {params.id}</h1>
                <p>Rua: {data.logradouro}</p>
                <p>Bairro: {data.bairro}</p>
                <p>Cidade: {data.localidade}</p>
                <p>Estado: {data.uf}</p>
            </div>
            <div>
                <Link href="/" className="bg-blue-700 px-8 py-3 rounded-lg font-bold text-white text-lg hover:bg-blue-800 transition-all duration-300 ease-in-out">Buscar outro CEP</Link>
            </div>
        </main>
    )
}