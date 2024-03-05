import { setDoc, getDocs, doc, collection } from 'firebase/firestore';

import { db } from '@/firebase/app';

export const addOrganization = async (organizationId: string) => {
  const teamRef = doc(db, 'team', organizationId);
  await setDoc(teamRef, {}, { merge: true });
};

export const getBoardList = async (organizationId: string) => {
  const querySnapshot = await getDocs(
    collection(db, 'team', organizationId, 'board')
  );
  return querySnapshot.docs.map(doc => {
    return {
      id: doc.id,
      name: doc.data().name,
      date: doc.data().date
    };
  });
};
