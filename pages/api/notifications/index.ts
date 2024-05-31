import { api } from '@/app/services/rest-client';
import { NextApiRequest, NextApiResponse } from 'next';

export async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  async function getNotifications() {
    try {
      const { data } = await api.get(`/c6b1a48fbc86a778b977b0/notifications`);

      return data;
    } catch (err) {
      console.error(`Error to get url notifications`, { err });
      throw err;
    }
  }

  const notifications = await getNotifications();

  res.send({
    success: 1,
    data: notifications,
  });
}

export default handler;
