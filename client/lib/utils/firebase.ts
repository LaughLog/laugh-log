import {
  setDoc,
  getDocs,
  addDoc,
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

export const addBoard = async (organizationId: string) => {
  const docRef = await addDoc(collection(db, 'team', organizationId, 'board'), {
    name: format(new Date(), 'yyyy.MM.dd  hh:mm') + ' 회의록',
    date: format(new Date(), 'yyyy.MM.dd  hh:mm')
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

export const deleteBoard = async ({
  organizationId,
  boardId
}: {
  organizationId: string;
  boardId: string;
}) => {
  await deleteDoc(doc(db, 'team', organizationId, 'board', boardId));
  await deleteDoc(doc(db, 'text-editor', boardId));
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
