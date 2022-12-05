// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {PrismaClient} from '@prisma/client'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const prisma = new PrismaClient()
  if (req.method === 'GET') {
    const users = await prisma.user.findMany()
    return res.send(users)
  }
  else if (req.method === 'POST'){
    res.status(201).send('POST')
  }
}
