import type { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.method) {
    res.status(400).json({ error: 'John Doe' });
    return false;
  }

  return true;
};

export default handler;
