// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}



export default function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  response.status(200).json({ 
    message: 'Hello World',
  });
}