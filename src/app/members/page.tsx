'use client';
// import { BackButton } from '@/components/back-button';
import { db } from '@/firebaseConfig';
import { collection, getDocs } from '@firebase/firestore';
// import { useState } from 'react';

async function getResourses() {
  const querySnapshot = await getDocs(collection(db, 'resources'));
  querySnapshot.forEach((doc) => {
    console.log(doc.id, ' => ', doc.data().data);
  });
}

export default function Page() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center gap-4'>
      <h1 onClick={getResourses}>get resourses</h1>
    </div>
  );
}
