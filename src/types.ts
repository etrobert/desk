import { priorities } from './constants';

type Priority = typeof priorities[number];

type Timestamp = {
  seconds: number;
  nanoseconds: number;
};

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
