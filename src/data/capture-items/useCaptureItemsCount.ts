'use client';

import useCaptureItems from './useCaptureItems';

const useCaptureItemsCount = () => {
  const captureItems = useCaptureItems();
  return captureItems === null ? null : captureItems.length;
};

export default useCaptureItemsCount;
