// Create the mxGraph instance
const graph = new mxGraph(document.getElementById('graph-container'))

// Add cells to the mxGraph
const parent = graph.getDefaultParent()
graph.getModel().beginUpdate()
try {
  const v1 = graph.insertVertex(parent, null, 'Hello,', 20, 20, 80, 30)
  const v2 = graph.insertVertex(parent, null, 'World!', 200, 150, 80, 30)
  graph.insertEdge(parent, null, '', v1, v2)
} finally {
  graph.getModel().endUpdate()
}