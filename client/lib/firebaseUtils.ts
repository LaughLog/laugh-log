import { setDoc, doc } from 'firebase/firestore';

import { db } from '@/firebase/app';

export const addOrganization = async (organizationId: string) => {
  const teamRef = doc(db, 'team', organizationId);
  await setDoc(teamRef, {}, { merge: true });
};
