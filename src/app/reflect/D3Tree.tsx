import * as d3 from 'd3';
import { useRef, useEffect } from 'react';

const D3Tree = ({ data }) => {
  const d3Container = useRef(null);

  useEffect(() => {
    if (data && d3Container.current) {
      const margin = { top: 20, right: 90, bottom: 30, left: 90 };
      const width = 960 - margin.left - margin.right;
      const height = 500 - margin.top - margin.bottom;

      const svg = d3
        .select(d3Container.current)
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

      const root = d3.hierarchy(data);
      const treeLayout = d3.tree().size([height, width]);
      treeLayout(root);

      // Links
      svg
        .selectAll('.link')
        .data(root.links())
        .enter()
        .append('path')
        .attr('class', 'link')
        .attr('fill', 'none')
        .attr('stroke', '#555')
        .attr('stroke-opacity', 0.4)
        .attr('stroke-width', 1.5)
        .attr(
          'd',
          d3
            .linkHorizontal()
            .x((d) => d.y)
            .y((d) => d.x)
        );

      // Nodes
      const node = svg
        .selectAll('.node')
        .data(root.descendants())
        .enter()
        .append('g')
        .attr('class', 'node')
        .attr('transform', (d) => `translate(${d.y},${d.x})`);

      node.append('circle').attr('r', 10).style('fill', 'lightsteelblue');

      node
        .append('text')
        .attr('dy', '.35em')
        .attr('x', (d) => (d.children ? -13 : 13))
        .style('text-anchor', (d) => (d.children ? 'end' : 'start'))
        .text((d) => d.data.name);
    }
  }, [data]);

  return <svg ref={d3Container} />;
};

export default D3Tree;
