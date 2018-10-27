import React from 'react';
import ReactDOM from 'react-dom';
import TreeView from './TreeView';

it('TreeView renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TreeView data={[]} renderNode={() => <div></div>}/>, div);
});