var React = require('react');
var DefaultLayout = require('./layouts/default');

class HelloMessage extends React.Component {
  render() {
    return (
      <DefaultLayout title={this.props.title}>
        <div className="container">
          <div className="row py-2">
            <div className="col-sm">
              Weather
            </div>
            <div className="col-sm">
              Traffic
            </div>
          </div>
          <div className="row py-2">
            <div className="col-sm">
              Water level
            </div>
            <div className="col-sm">
              idk
            </div>
            <div className="col-sm">
              Devices
            </div>
          </div>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = HelloMessage;
