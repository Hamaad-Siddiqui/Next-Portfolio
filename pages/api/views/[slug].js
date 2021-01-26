import db from '@/lib/firebase';

export default async (req, res) => {
  const snapshot = await db.ref('views').child(req.query.slug).once('value');
  const views = snapshot.val();
  const newViews = views + 1;
  await db.ref('views').child('Portfolio').set(newViews);

  return res.status(200).json({ total: newViews });
};
