import React, { Component } from "react";

class Counter extends Component {
    state = {
        count: 0
    };

    constructor() {
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    }
    handleIncrement(){
        console.log("Increment Clicked", this);
    }


    render() {
        return (
          <div>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button 
               onClick={this.handleIncrement}
               className="bgn btn-secondary btn-sm"
            >
               Increment
            </button>
          </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
    }
}

export default Counter;
