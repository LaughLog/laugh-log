import {
  setDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  collection
} from 'firebase/firestore';
import { format } from 'date-fns';

import { db } from '@/firebase/app';
import { MEETING_MINUTES_TYPE, NEW_BOARD_TYPE } from '@/constants/textEditor';
import { Block } from '@/types/textEditor';

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

export const addTextEditor = async (boardId: string, type: string) => {
  let initBlock: Block[] = [];

  switch (type) {
    case '회의록':
      initBlock = MEETING_MINUTES_TYPE;
      break;
    default:
      initBlock = NEW_BOARD_TYPE;
      break;
  }

  await setDoc(doc(db, 'text-editor', boardId), { updatedBlocks: initBlock });
};
