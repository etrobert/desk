import { priorities } from './constants';

import type { Timestamp } from 'firebase/firestore';

type Priority = typeof priorities[number];

type CaptureItem = {
  id: string;
  value: string;
  createdAt: Timestamp;
};

type Task = {
  id: string;
  title: string;
  createdAt: Timestamp;
};

export type { Priority, CaptureItem, Task };
