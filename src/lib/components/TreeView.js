/**
*
* TreeView
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import Row from './Row';

// Images
import defaultNodeIcon from '../images/node.png';

class TreeView extends React.Component {
    constructor() {
        super();
        
        this.state = {
            expandedElements: new Set(),
        };

        this.handleNodeClick = this.handleNodeClick.bind(this);
    }

    handleNodeClick(id) {
        const { expandedElements } = this.state;

        if (!expandedElements.has(id)) {
            expandedElements.add(id);
        } else {
            expandedElements.delete(id);
        }

        this.setState({
            expandedElements,
        });
    }

    render() {
        const {
            data,
            renderNode,
            lineColor,
            lineWidth,
            lineStyle,
            lineAlpha,
            expandButtonColor,
            nodeSize,
            nodeIcon,
            collapsedIcon,
            expandedIcon,
        } = this.props;
        const { expandedElements } = this.state;
        return (
            <div>
                {data && data.map((element, i) => (
                    <Row
                        key={shortid.generate()}
                        element={element}
                        depth={0}
                        isLastParent={i === data.length - 1}
                        isExpanded={expandedElements.has(element.id)}
                        expandedElements={this.state.expandedElements}
                        onNodeClick={this.handleNodeClick}
                        renderNode={renderNode}
                        lineColor={lineColor}
                        lineWidth={lineWidth}
                        lineStyle={lineStyle}
                        lineAlpha={lineAlpha}
                        expandButtonColor={expandButtonColor}
                        nodeSize={nodeSize}
                        nodeIcon={nodeIcon}
                        collapsedIcon={collapsedIcon}
                        expandedIcon={expandedIcon}
                    />
                ))}
            </div>
        );
    }
}

TreeView.propTypes = {
    data: PropTypes.array.isRequired,
    renderNode: PropTypes.func.isRequired,
    lineColor: PropTypes.string,
    lineWidth: PropTypes.number,
    lineStyle: PropTypes.string,
    lineAlpha: PropTypes.number,
    expandButtonColor: PropTypes.string,
    nodeSize: PropTypes.number,
    nodeIcon: PropTypes.string,
    collapsedIcon: PropTypes.string,
    expandedIcon: PropTypes.string,
};

TreeView.defaultProps = {
    lineColor: '#4B6DAA',
    lineWidth: 0.5,
    lineStyle: 'solid',
    lineAlpha: 0.4,
    expandButtonColor: '#4B6DAA',
    nodeSize: 20,
    nodeIcon: defaultNodeIcon,
}

export default TreeView;
