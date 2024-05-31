import { api } from '@/app/services/rest-client';
import { NextApiRequest, NextApiResponse } from 'next';

export async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  async function getHome() {
    try {
      const { data } = await api.get(`c6b1a48fbc86a778b977b0/home/7a581b0e16b559ff9a9957`);

      return data;
    } catch (err) {
      console.error(`Error to get url notifications`, { err });
      throw err;
    }
  }

  const homeData = await getHome();

  res.send({
    success: 1,
    data: homeData,
  });
}

export default handler;
