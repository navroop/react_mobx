import React, {Component} from 'react';
import * as d3 from 'd3';

class D3 extends Component {
    
        componentDidMount() {
            const context = this.setContext();
            this.createBars(context);
        }

        setContext() {
            return d3.select(this.refs.arc).append('svg')
                .attr('height','500px')
                .attr('width','100%');
        }

        createBars(context) {
            return context.selectAll('rect')
            .data(this.props.chartdata)
            .enter().append('rect')
                .attr('class', 'bar')
                .attr('height', (d, i) => (d * 10))
                .attr('width','40')
                .attr('x', (d, i) => (i * 60) + 25)
                .attr('y', (d, i) => 400 - (d * 10));
        }

        render() {
            return (
                <div ref="arc"></div>
            )
        }
}

export default D3;