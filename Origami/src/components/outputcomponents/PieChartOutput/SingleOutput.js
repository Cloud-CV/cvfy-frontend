/*eslint-disable react/forbid-prop-types */
import React from "react";
import { PropTypes } from "prop-types";
import Dialog from "material-ui/Dialog";
import { VictoryPie, VictoryChart } from "victory";

class singleOutput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      data: []
    };
    this.showGraphFull = this.showGraphFull.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentWillMount() {
    if (this.props.data instanceof Array && this.props.data.length > 0) {
      const dataToPlot = [];
      this.props.data.map(dataPoint => {
        const pointToPut = Object.assign({}, dataPoint);
        pointToPut.y = parseInt(dataPoint.y, 10);
        dataToPlot.push(pointToPut);
      });

      this.setState({ data: dataToPlot });
    }
  }

  showGraphFull() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  render() {
    return (
      <div
        className="ui card centered"
        id={`output-text-${this.props.index}`}
        style={{ cursor: "pointer" }}
        onClick={this.showGraphFull}
      >
        <div className="content">
          <div className="header">{this.props.header["label"]}</div>
        </div>
        <div className="content">
          <div className="ui small feed">
            <div className="event">
              <div className="content">
                <div className="ui very padded text summary">
                  <VictoryPie
                    style={{
                      labels: {
                        fontSize: 20
                      }
                    }}
                    data={this.state.data}
                    x={"x"}
                    y={"y"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Dialog
          title={this.props.header["label"]}
          modal={false}
          open={this.state.open}
          autoScrollBodyContent
          onRequestClose={this.handleClose}
        >
          <div className="ui row">
            <VictoryPie
              style={{
                labels: {
                  fontSize: 20
                }
              }}
              data={this.state.data}
              x={"x"}
              y={"y"}
            />
          </div>
        </Dialog>

      </div>
    );
  }
}

singleOutput.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.any,
  index: PropTypes.number.isRequired
};

export default singleOutput;
