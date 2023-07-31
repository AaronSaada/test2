import { Component } from "react";
import Cars from './Cars.js'
import Header from './Header.js'

class Mycars extends Component {

    render() {

        const { title } = this.props;
        const { mb } = this.props;
        const { car } = this.props;

        return (
            <div>
                <Header myStyle={this.props.color}>
                    {this.props.title}
                </Header>

                <p>Lorem</p>

                <Cars color='red'>{car[0]}</Cars>
                <Cars >{car[1]}</Cars>
                <Cars color="black">{car[2]}</Cars>

            </div>
        )
    }
}
export default Mycars;
