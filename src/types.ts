import { priorities, statuses } from './constants';

import type { Timestamp } from 'firebase/firestore';

type Priority = typeof priorities[number];

type CaptureItem = {
  id: string;
  value: string;
  createdAt: Timestamp;
};

type Status = typeof statuses[number];

type Task = {
  id: string;
  title: string;
  status: Status;
  createdAt: Timestamp;
};

export type { Priority, CaptureItem, Task };
