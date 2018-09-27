import React from 'react';

export default class Alerts extends React.Component {
    constructor(props) {
      super(props);
      this.state = {

      };
    }
    componentDidMount() {
    }
    render() {
      return (
        <div>
          <table className="table-outer">
            <tbody>
              <tr>
                <th>Speed</th>
                <th>Gas Price (gwei)</th>
              </tr>
              <tr>
                <td className="alerts-title">SafeLow (&gt;30m)</td>
                <td className="alerts-value">{this.props.data.safeLow}</td>
              </tr>
              <tr>
                <td className="alerts-title">Standard (&gt;5m)</td>
                <td className="alerts-value">{this.props.data.standard}</td>
              </tr>
              <tr>
                <td className="alerts-title">Fast (&gt;2m)</td>
                <td className="alerts-value">{this.props.data.fast}</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
  }
