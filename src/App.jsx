import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const dados = [
  {
    numero: 1,
    evento: "Cadastro de novo produto",
    modulo: "Produção",
    hierarquia: "Operacional",
    descricao: "Inclusão de item no catálogo.",
  },
  {
    numero: 2,
    evento: "Precificar novos produtos",
    modulo: "Produção",
    hierarquia: "Gerência",
    descricao: "Definir preço dos itens cadastrados.",
  },
  {
    numero: 3,
    evento: "Análise de tendência de mercado",
    modulo: "vendas e marketing",
    hierarquia: "Tático",
    descricao: "Fazer estudo sobre quantidade esperada de vendas.",
  },
  {
    numero: 4,
    evento: "Planejar produção",
    modulo: "Produção",
    hierarquia: "Gerência",
    descricao: "Decidir quantidade de produtos a serem fabricados de acordo com a análise de tendência de mercado.",
  },
  {
    numero: 5,
    evento: "Análise de mercado",
    modulo: "Vendas e marketing",
    hierarquia: "Conhecimento",
    descricao: "Fazer estudos sobre possíveis tipos de clientes para cada produto lançado.",
  },
  {
    numero: 6,
    evento: "Campanha de lançamento de produtos",
    modulo: "Vendas e marketing",
    hierarquia: "Tático",
    descricao: "Criação de campanha com cupons e segmentação.",
  },
  {
    numero: 7,
    evento: "Onboarding de colaborador",
    modulo: "Recursos humanos",
    hierarquia: "Operacional",
    descricao: "Processo de admissão e provisionamento de acessos.",
  },
  {
    numero: 8,
    evento: "Treinamento",
    modulo: "Recursos humanos",
    hierarquia: "Operacional",
    descricao: "Preparar colaborador para sua função específica.",
  },
  {
    numero: 9,
    evento: "Planejar recursos humanos",
    modulo: "Recursos humanos",
    hierarquia: "Estratégico",
    descricao: "Planejar a necessidade e tipo de mão de obra para os próximos anos.",
  },
  {
    numero: 10,
    evento: "Planejar orçamento",
    modulo: "Finanças e contabilidade",
    hierarquia: "Gerência",
    descricao: "Fazer um planejamento do quanto precisará ser orçado para mao de obra, produção e marketing no próximo ano.",
  },
  {
    numero: 11,
    evento: "Levantamentos sobre contas a pagar",
    modulo: "Finanças e contabilidade",
    hierarquia: "Operacional",
    descricao: "Apuração das contas a receber vindas do ano anterior.",
  },
  {
    numero: 12,
    evento: "Planejar lucros",
    modulo: "Finanças e contabilidade",
    hierarquia: "Estratégico",
    descricao: "Planejar um lucro aproximado baseado no orçamento, contas a pagar e quantidade apróximada de vendas.",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function App() {

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-6xl">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">
            Tabela de Eventos – E-didas
          </h1>
        </header>


        <div className="overflow-hidden rounded-2xl bg-white shadow">
          <div className="overflow-x-auto">
            <table className="min-w-full table-fixed border-separate border-spacing-0">
              <thead>
                <tr>
                  {[
                    "Número",
                    "Evento",
                    "Módulo",
                    "Hierarquia",
                    "Descrição",
                  ].map((col, idx) => (
                    <th
                      key={col}
                      className={classNames(
                        "bg-gray-100 px-4 py-3 text-center text-sm font-semibold text-gray-700",
                        idx === 0 ? "rounded-tl-2xl" : "",
                        idx === 12 ? "rounded-tr-2xl" : ""
                      )}
                      scope="col"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dados.map((item, idx) => (
                  <tr
                    key={item.numero}
                    className={classNames(
                      "text-sm text-gray-800",
                      idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                    )}
                  >
                    <td className="px-4 py-3 align-top font-medium text-gray-900 w-24">
                      {item.numero}
                    </td>
                    <td className="px-4 py-3 align-top w-80">{item.evento}</td>
                    <td className="px-4 py-3 align-top w-56">
                      <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-200">
                        {item.modulo}
                      </span>
                    </td>
                    <td className="px-4 py-3 align-top w-40">{item.hierarquia}</td>
                    <td className="px-4 py-3 align-top">{item.descricao}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
