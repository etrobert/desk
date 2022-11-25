import { statuses } from './constants';

import type { Timestamp } from 'firebase/firestore';

type CaptureItem = {
  id: string;
  value: string;
  createdAt: Timestamp | null;
};

type Status = typeof statuses[number];

type Task = {
  id: string;
  title: string;
  status: Status;
  createdAt: Timestamp | null;
};

export type { CaptureItem, Task };
