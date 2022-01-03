import React from "react";
import ReactDOM from "react-dom";

class Collapse extends React.Component {
  constructor() {
    super();
    this.state = {
      showContent: false,
      p1: "true",
      p2: "false",
    };
  }

  showMore = () => {
    this.setState({ showContent: !this.state.showContent });
  };

  componentDidMount()
  {
    console.log("component oluşturuldu");
  }
  componentDidUpdate()
  {
    console.log("component update edildi");
  }
  componentWillUnmount()
  {
    console.log("component silindi");   
  }

  render() {
    return (
      <div>
        <button className="btn btn-primary w-100" onClick={this.showMore}>
          {this.props.children.props.cardTitle}
        </button>
        {this.state.showContent ? (
          <div className="collapse show" id={this.props.href}>
            {this.props.children}
          </div>
        ) : null}
      </div>
    );
  }
}

export default Collapse;
