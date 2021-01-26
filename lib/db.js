import db from '@/lib/firebase';

export async function getSkills() {
  const snapshot = await db.ref('skills').once('value');
  const skills = snapshot.val();
  return { skills };
}
