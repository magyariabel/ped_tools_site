'use client'

import { useEffect, useRef } from 'react'
import ForceGraph2D from 'react-force-graph-2d'

export default function GraphVisualization({ data }) {
  const graphRef = useRef()

  useEffect(() => {
    if (graphRef.current) {
      graphRef.current.d3Force('charge').strength(-100)
      graphRef.current.d3Force('link').distance(100)
    }
  }, [])

  return (
    <ForceGraph2D
      ref={graphRef}
      graphData={data}
      nodeLabel="id"
      nodeAutoColorBy="group"
      linkDirectionalArrowLength={3.5}
      linkDirectionalArrowRelPos={1}
    />
  )
}
