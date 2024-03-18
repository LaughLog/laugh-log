import {
  setDoc,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  collection
} from 'firebase/firestore';
import { format } from 'date-fns';

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

export const addBoard = async (organizationId: string) => {
  const docRef = await addDoc(collection(db, 'team', organizationId, 'board'), {
    name: 'Untitled',
    date: format(new Date(), 'yyyy.MM.dd')
  });
  return docRef.id;
};

export const renameBoard = async ({
  organizationId,
  boardId,
  boardName
}: {
  organizationId: string;
  boardId: string;
  boardName: string;
}) => {
  const docRef = doc(db, 'team', organizationId, 'board', boardId);
  await updateDoc(docRef, { name: boardName });
};
