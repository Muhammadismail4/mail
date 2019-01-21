import React, { Component } from "react";

class Counter extends Component {
    state = {
        count: 0
    };

    handleIncrement(){
        console.log('Increment Clicked');
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
