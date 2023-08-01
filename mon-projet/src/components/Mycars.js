import { Component } from "react";
import Cars from './Cars.js'

class Mycars extends Component {

    render() {

        const { title } = this.props;
        const { mb } = this.props;
        const { car } = this.props;

        return (
            <div>
                {/* <Header myStyle={this.props.color}>
                    {this.props.title}
                </Header> */}
                <h1>{this.props.title}</h1>

                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

                <Cars color='red'>{car[0]}</Cars>
                <Cars >{car[1]}</Cars>
                <Cars color="black">{car[2]}</Cars>

            </div>
        )
    }
}
export default Mycars;
