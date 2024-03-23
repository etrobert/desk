import { useMemo } from 'react';
import estimateNodeSize from './estimateNodeSize';
import { Dependency, Task } from '@/db/schema';

const useCytoscapeElements = (tasks: Task[], dependencies: Dependency[]) =>
  useMemo(() => {
    const nodes = tasks.map((task) => ({
      data: { ...task, id: task.id.toString(), ...estimateNodeSize(task) },
    }));

    // This is useful when dealing with optimistic deletion of tasks
    const filteredDependencies = dependencies.filter(
      (dependency) =>
        tasks.some((task) => task.id === dependency.taskId) &&
        tasks.some((task) => task.id === dependency.dependencyId),
    );

    const edges = filteredDependencies.map((dependency) => ({
      data: {
        source: dependency.dependencyId.toString(),
        target: dependency.taskId.toString(),
      },
    }));

    return [...nodes, ...edges];
  }, [dependencies, tasks]);

export default useCytoscapeElements;
