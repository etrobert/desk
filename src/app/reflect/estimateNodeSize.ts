import type { Task } from '../../types';
import { textMaxWidth } from './cytoscapeStylesheet';

const averageCharacterWidth = 8;
const paddingWidth = 10;
const paddingHeight = 10;
const lineHeight = 25;

// Function to estimate size based on label
function estimateNodeSize(task: Task) {
  const totalLabelLength = task.title.length * averageCharacterWidth;
  const estimatedWidth =
    Math.min(textMaxWidth, totalLabelLength) + 2 * paddingWidth;
  const estimatedNumberOfLines = Math.floor(totalLabelLength / textMaxWidth);
  const estimatedHeight =
    estimatedNumberOfLines * lineHeight + 2 * paddingHeight;
  return { width: estimatedWidth, height: estimatedHeight };
}

export default estimateNodeSize;
