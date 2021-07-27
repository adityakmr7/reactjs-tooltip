import { node, string, oneOfType } from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';

class ToolTip extends React.Component {
    constructor(props) {
        super(props);
        const id = `react-tooltip`;
        this.domNode = document.querySelector(`#${id}`);
        if (!this.domNode) {
            this.domNode = document.createElement('div');
            this.domNode.setAttribute('id', id);
            document.body.appendChild(this.domNode);
        }
        this.state = {
            active: false,
        };
        this.sourceRef = React.createRef();
    }
    showToolTip = () => {
        this.setState({
            active: true,
        });
    };
    hideToolTip = () => {
        this.setState({
            active: false,
        });
    };
    renderId = `react-tooltip-content`;
    renderTooltip = () => {
        const { render } = this.props;

        if (this.state.active) {
            const { top, left, width } = this.sourceRef.current.getBoundingClientRect();
            return ReactDOM.createPortal(
                <div
                    style={{
                        position: 'absolute',
                        bottom: window.innerHeight - top + 23 - window.screenY,
                        left: left + width / 2 + window.screenX,
                    }}
                >
                    <div
                        id={this.renderId}
                        style={{
                            position: 'relative',
                            background: this.props.color,
                            color: this.props.textColor,
                            padding: '8px 16px',
                            borderRadius: '5px',
                            left: '-50%',
                        }}
                    >
                        {render}
                        <span
                            style={{
                                position: 'absolute',
                                bottom: -10,
                                left: 'calc(50% - 5px)',
                                borderWidth: 5,
                                borderStyle: 'solid',
                                borderColor: `${this.props.color} transparent transparent transparent`,
                            }}
                        />
                    </div>
                </div>,
                this.domNode,
            );
        }
        return null;
    };
    render() {
        const { children } = this.props;
        const source = (
            <span
                key="0"
                onMouseEnter={this.showToolTip}
                onMouseLeave={this.hideToolTip}
                onFocus={this.showToolTip}
                onBlur={this.hideToolTip}
                ref={this.sourceRef}
                tabIndex="0"
                role="button"
                aria-describedby={this.renderId}
            >
                {children}
            </span>
        );
        return [source, this.renderTooltip()];
    }
}

ToolTip.propTypes = {
    /** Wrapped content */
    children: node.isRequired,
    render: oneOfType([node, string]).isRequired,
    color: string,
    textColor: string,
};
ToolTip.defaultProps = {
    color: '#424242',
    textColor: '#ffffff',
};

export default ToolTip;
