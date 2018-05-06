import React, { Component } from "react";

class FilterString extends Component {
  constructor() {
    super();
    // this.state = {
    //   names:['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
    //   userInput: "",
    //   filteredNames = []
    // }
    this.state = {
      names: [
        "James",
        "Jessica",
        "Melody",
        "Tyler",
        "Blake",
        "Jennifer",
        "Mark",
        "Maddy"
      ],
      userInput: "",
      filteredNames: []
    };
    this.filterNames = this.filterNames.bind(this);
  }
  handleChange(val) {
    this.setState({ userInput: val });
    console.log(this.state.userInput);
  }
  filterNames() {
    let names = this.state.names;

    let filteredNames = [];
    for (let i = 0; i < names.length; i++) {
      if (names[i].includes(this.state.userInput)) {
        filteredNames.push(names[i]);
      }
    }

    this.setState({ filteredNames: filteredNames });
  }

  render() {
    console.log(this.state.names, this.state.userInput);
    return (
      <div className="puzzleBox filterStringPB">
        <h4> Filter String </h4>
        <span className="puzzleText">
          {" "}
          Names: {JSON.stringify(this.state.names, null, 10)}{" "}
        </span>

        <input
          className="inputLine"
          onChange={e => this.handleChange(e.target.value)}
        />

        <button
          className="confirmationButton"
          onClick={() => this.filterNames(this.state.userIput)}
        >
          {" "}
          Filter{" "}
        </button>
        <span className="resultsBox filterStringRB">
          Filtered Names:{JSON.stringify(this.state.filteredNames, null, 10)}{" "}
        </span>
      </div>
    );
  }
}

//   render() {
//     return (
//       <div className="puzzleBox filterStringPB">
//         <h4> Filter String </h4>
//         <span className="puzzleText">
//           {" "}
//           Names: {JSON.stringify(this.state.names, null, 10)}{" "}
//         </span>
//         <input
//           className="inputLine"
//           onChange={e => this.handleChange(e.target.value)}
//         />
//         <button
//           className="confirmationButton"
//           onClick={() => this.filterNames(this.state.userInput)}
//         >
//           {" "}
//           Filter{" "}
//         </button>
//         <span className="resultsBox filterStringRB">
//           {" "}
//           Filtered Names: {JSON.stringify(
//             this.state.filteredNames,
//             null,
//             10
//           )}{" "}
//         </span>
//       </div>
//     );
//   }
// }

export default FilterString;

// <span className="puzzleText">
//   {" "}
//   Names: {JSON.stringigy(this.state.names, null, 10)}{" "}
// </span>
