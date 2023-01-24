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
  tags: string[];
  status: Status;
  dependencies?: string[]; // TODO Make dependencies non-optional
  createdAt: Timestamp | null;
};

export type { CaptureItem, Task };
