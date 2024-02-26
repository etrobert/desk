'use client';

import { useContext } from 'react';
import { CaptureItemsContext } from './CaptureItemsContext';

const useCaptureItems = () => useContext(CaptureItemsContext);

export default useCaptureItems;
