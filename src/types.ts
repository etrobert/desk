type Timestamp = {
  seconds: number;
  nanoseconds: number;
};

type CaptureItem = {
  id: string;
  value: string;
  createdAt: Timestamp;
};

export type { CaptureItem };
