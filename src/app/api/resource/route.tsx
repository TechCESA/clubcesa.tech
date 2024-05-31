import { db } from '@/firebaseConfig';
import { DocumentData, collection, getDocs } from '@firebase/firestore';
import { NextRequest } from 'next/server';

export async function GET() {
  try {
    const querySnapshot = await getDocs(collection(db, 'resources'));
    const data: string[] = [];
    querySnapshot.forEach((doc) => {
      data.push(doc.id);
    });
    return Response.json(data);
  } catch (error) {
    return Response.json({ error: 'Internal Server Error' });
  }
}

export async function POST(req: NextRequest) {
  const { resource } = await req.json();
  try {
    if (!resource || typeof resource !== 'string' || resource.length === 0) {
      return Response.json({ error: 'Resource not found' });
    }
    const querySnapshot = await getDocs(collection(db, 'resources'));
    const data: DocumentData[] = [];
    querySnapshot.forEach((doc) => {
      if (doc.id === resource) {
        data.push(doc.data().data);
      }
    });
    return Response.json(data[0]);
  } catch (error) {
    return Response.json({ error: 'Internal Server Error' });
  }
}
