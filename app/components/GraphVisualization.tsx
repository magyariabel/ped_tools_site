'use client'

import { useRef, useEffect } from 'react'
import dynamic from 'next/dynamic'

const ForceGraph2D = dynamic(() => import('react-force-graph-2d'), { ssr: false })

export default function GraphVisualization({ data }) {
  const graphRef = useRef(null);

  useEffect(() => {
    if (graphRef.current) {
      const graph = graphRef.current;
      graph.d3Force('charge')?.strength(-100);
      graph.d3Force('link')?.distance(50);
    }
  }, [])

  return (
    <ForceGraph2D
      ref={graphRef}
      graphData={data}
      nodeLabel="name"
      nodeAutoColorBy="group"
      linkDirectionalArrowLength={3.5}
      linkDirectionalArrowRelPos={1}
      linkCurvature={0.25}
      width={600}
      height={400}
    />
  )
}
