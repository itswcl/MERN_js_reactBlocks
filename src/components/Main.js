import React, { Component } from "react";

class Main extends Component {

    render() {
        return (
            <div style={{backgroundColor: "#e06666"}} className="mx-auto">
                <h1>Main</h1>
                {this.props.children}
            </div>
        );
    }
}

export default Main;