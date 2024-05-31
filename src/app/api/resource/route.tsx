// import { db } from '@/firebaseConfig';
// import { DocumentData, collection, getDocs } from '@firebase/firestore';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, res: NextResponse) {
  // const querySnapshot = await getDocs(collection(db, 'resources'));
  // const data: DocumentData[] = [];
  // querySnapshot.forEach((doc) => {
  //   if (doc.id === params.resource) {
  //     data.push(doc.data().data);
  //   }
  // });
  return Response.json({ message: 'Hello, World! ' });
}
