'use client';

import useCaptureItems from './useCaptureItems';

const useLatestCaptureItem = () => {
  const captureItems = useCaptureItems();

  const isLoading = captureItems === null;
  const latestCaptureItem =
    captureItems === null || captureItems.length === 0 ? null : captureItems[0];

  return { isLoading, latestCaptureItem };
};

export default useLatestCaptureItem;
