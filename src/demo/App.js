import React from 'react';
import TreeView from '../lib';
import testData from './testData';

export default class App extends React.Component {
  renderNode(node) {
    return <span>{node.name}</span>;
  }

  render() {
    return (
      <div style={{ padding: 20 }}>
      <h1>The <i>Felidae</i> family</h1>
        <TreeView 
          data={testData}
          renderNode={this.renderNode}
          onNodeClick={(element) => console.log(element)}
          />
      </div>
    )
  }
}
