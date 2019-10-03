import React from 'react';
import TreeView from '../lib';
import testData from './testData';
import collapsed from './images/right.png';
import expanded from './images/down.png';
import nodeIcon from './images/github.png';

export default class App extends React.Component {
  renderNode(node) {
    return <span>{node.name}</span>;
  }

  render() {
    return (
      <div style={{ padding: 20 }}>
        <h1>The <i>Felidae</i> family</h1>
        <div style={{ display: 'flex' }}>
          <div style={{ width: '50%' }}>
            <h3>Basic sample</h3>
            <TreeView
              data={testData}
              renderNode={this.renderNode}
            />
          </div>
          <div style={{ width: '50%' }}>
            <h3>Custom sample</h3>
            <TreeView
              data={testData}
              collapsedIcon={collapsed}
              expandedIcon={expanded}
              nodeIcon={nodeIcon}
              nodeSize={20}
              lineColor="crimson"
              lineWidth={1}
              lineAlpha={1}
              expandButtonColor="transparent"
              renderNode={this.renderNode}
            />
          </div>

        </div>
      </div>
    );
  }
}
