import { deleteDoc, doc } from 'firebase/firestore';
import firestore from '../firestore';

const deleteTask = async (id: string) => {
  await deleteDoc(doc(firestore, 'tasks', id));
};

export default deleteTask;
