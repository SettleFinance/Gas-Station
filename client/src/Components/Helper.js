import React from 'react';

export default class Helper extends React.Component {
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
          <table className="table-outer table-helper">
            <tbody>
              <tr>
                <td className="alerts-title">Last block:</td>
                <td className="table-value">{this.props.data.blockNum}</td>
              </tr>
              <tr>
                <td className="alerts-title">Avg Wait Time (min)</td>
                <td className="table-value">{this.props.data.avgWait}</td>
              </tr>
            </tbody>
          </table>
          <table className="table-outer table-helper">
            <tbody>
              <tr>
                <th>Speed</th>
                <th>Gas Price (gwei)</th>
              </tr>
              <tr>
                <td className="alerts-title">SafeLow (&gt;30m)</td>
                <td className="table-value">{this.props.data.safeLow}</td>
              </tr>
              <tr>
                <td className="alerts-title">Standard (&gt;5m)</td>
                <td className="table-value">{this.props.data.standard}</td>
              </tr>
              <tr>
                <td className="alerts-title">Fast (&gt;2m)</td>
                <td className="table-value">{this.props.data.fast}</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
  }
