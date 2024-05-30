"use client";
// import { BackButton } from '@/components/back-button';
import { db } from "@/firebaseConfig";
import { collection , addDoc } from 'firebase/firestore';
// import { useState } from 'react';

async function addData() {
  const docRef = await addDoc(collection(db, "users"), {
    first: "Ada",
    last: "Lovelace",
    born: Math.floor(Math.random() * 100),
  });
  console.log("Document written with ID: ", docRef.id);
}

export default function Page() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center gap-4'>
      <h1 onClick={addData}>Add data to firestore</h1>
    </div>
  );
}
