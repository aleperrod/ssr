// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { normalizeConfig } from "next/dist/server/config-shared";

export default function handler(req, res) {
  res.status(200).json([
    {id: 1,nome: 'caneta', preco: 5.60},
    {id: 2,nome: 'lápis', preco: 4.60},
    {id: 3,nome: 'caderno', preco: 6.60},
    {id: 4,nome: 'borracha', preco: 3.60}
  ])
}
