/**
*
* Row
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import shortid from 'shortid';

// Styles
const RowWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  ${(props) => !props.first && `margin-left: ${props.nodeSize}px`};
`;

const FirstColumn = styled.div`
  width: ${(props) => props.nodeSize}px;
  display: flex;
  flex-direction: column;
`;

const VerticalLine = styled.div`
  width: ${(props) => (props.nodeSize / 2)}px;
  min-height: ${(props) => props.nodeSize}px;
  flex: 1;
  border-width: 0 ${(props) => props.lineWidth}px 0 0;
  border-style: ${(props) => props.lineStyle};
  border-color: ${(props) => props.lineColor};
  opacity: ${(props) => props.lineAlpha};
`;

const Separator = styled.div`
  width: ${(props) => props.nodeSize}px;
  height: ${(props) => props.nodeSize}px;
`;

const Square = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.nodeSize}px;
  height: ${(props) => props.nodeSize}px;
  border: 1px solid ${(props) => props.expandButtonColor};
  color: ${(props) => props.expandButtonColor};
  cursor: pointer;
  font-weight: bold;
`;

const NodeIcon = styled.img`
  width: ${(props) => props.nodeSize}px;
`;

const SecondColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const NodeWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Node = styled.div`
  margin-left: 5px;
`;

const Connector = styled.div`
  display: flex;
  flex-direction: column;
`;

const HorizontalLine = styled.div`
  height: ${(props) => (props.nodeSize / 2)}px;
  width: ${(props) => props.nodeSize}px;
  border-width: 0 0 ${(props) => props.lineWidth}px 0;
  border-style: ${(props) => props.lineStyle};
  border-color: ${(props) => props.lineColor};
  opacity: ${(props) => props.lineAlpha};
`;

const Junction = styled.div`
  width: ${(props) => ((props.nodeSize / 2) + (props.lineWidth * 2))}px;
  height: ${(props) => (props.nodeSize / 2)}px;
  margin-left: ${(props) => ((props.nodeSize / 2) - props.lineWidth)}px;
  border-width: 0 0 ${((props) => props.lineWidth)}px ${(props) => props.lineWidth}px;
  border-color: ${(props) => props.lineColor};
  border-style: ${(props) => props.lineStyle};
  opacity: ${(props) => props.lineAlpha};
`;

export default class Row extends React.Component {
    constructor() {
        super();

        this.renderJunction = this.renderJunction.bind(this);
    }

    renderJunction(hasChildren) {
        const {
            isExpanded,
            onNodeClick,
            element,
            isLastParent,
            expandButtonColor,
            nodeSize,
            lineWidth,
            lineColor,
            lineStyle,
            lineAlpha
        } = this.props;
        if (hasChildren) {
            return (
                <Square
                    expandButtonColor={expandButtonColor}
                    onClick={() => onNodeClick(element.id)}>
                    {isExpanded ? '-' : '+'}
                </Square>
            );
        } else if (!isLastParent) {
            return <Junction
                nodeSize={nodeSize}
                lineWidth={lineWidth}
                lineColor={lineColor}
                lineStyle={lineStyle}
                lineAlpha={lineAlpha}
            />;
        }
        return <Junction
            nodeSize={nodeSize}
            lineWidth={lineWidth}
            lineColor={lineColor}
            lineStyle={lineStyle}
            lineAlpha={lineAlpha}
        />;
    }

    render() {
        const {
            element,
            depth,
            isLastParent,
            isExpanded,
            expandedElements,
            onNodeClick,
            renderNode,
            lineColor,
            lineWidth,
            lineStyle,
            lineAlpha,
            expandButtonColor,
            nodeSize,
            nodeIcon,
        } = this.props;
        const showJunction = element.hasChildren
        const hasChildren = element && element.children && element.children.length > 0

        return (
            <RowWrapper
                first={depth === 0}
                nodeSize={nodeSize}
            >
                <FirstColumn nodeSize={nodeSize}>
                    {this.renderJunction(showJunction)}
                    {!isLastParent &&
                        <VerticalLine
                            nodeSize={nodeSize}
                            lineWidth={lineWidth}
                            lineColor={lineColor}
                            lineStyle={lineStyle}
                            lineAlpha={lineAlpha}
                        />}
                </FirstColumn>
                <SecondColumn>
                    <NodeWrapper>
                        <HorizontalLine
                            nodeSize={nodeSize}
                            lineWidth={lineWidth}
                            lineStyle={lineStyle}
                            lineColor={lineColor}
                            lineAlpha={lineAlpha}
                        />
                        <Connector>
                            <NodeIcon
                                alt="node icon"
                                src={nodeIcon}
                                nodeSize={nodeSize}
                            />
                            {hasChildren && isExpanded ?
                                <VerticalLine
                                    nodeSize={nodeSize}
                                    lineWidth={lineWidth}
                                    lineColor={lineColor}
                                    lineStyle={lineStyle}
                                    lineAlpha={lineAlpha}
                                />
                                :
                                <Separator nodeSize={nodeSize} />}
                        </Connector>
                        <Node>{renderNode(element)}</Node>
                    </NodeWrapper>
                    {hasChildren && isExpanded && element.children.map((child, i) =>
                        (
                            <Row
                                key={shortid.generate()}
                                element={child}
                                depth={depth + 1}
                                isLastParent={i === element.children.length - 1}
                                isExpanded={expandedElements.has(child.id)}
                                expandedElements={expandedElements}
                                onNodeClick={onNodeClick}
                                renderNode={renderNode}
                                lineColor={lineColor}
                                lineWidth={lineWidth}
                                lineStyle={lineStyle}
                                lineAlpha={lineAlpha}
                                expandButtonColor={expandButtonColor}
                                nodeSize={nodeSize}
                                nodeIcon={nodeIcon}
                            />
                        )
                    )}
                </SecondColumn>
            </RowWrapper>
        );
    }
}

Row.propTypes = {
    element: PropTypes.object,
    depth: PropTypes.number,
    isLastParent: PropTypes.bool,
    isExpanded: PropTypes.bool,
    expandedElements: PropTypes.object,
    onNodeClick: PropTypes.func,
    renderNode: PropTypes.func,
    lineColor: PropTypes.string,
    lineWidth: PropTypes.number,
    lineStyle: PropTypes.string,
    lineAlpha: PropTypes.number,
    expandButtonColor: PropTypes.string,
    nodeSize: PropTypes.number,
    nodeIcon: PropTypes.string,
};
