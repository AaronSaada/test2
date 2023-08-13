import { Component } from 'react'
import Car from './Cars'
import Welcome from './Welcome'

class Mycars extends Component {

    state = {
        voitures: [
            {name: 'Ford', color: 'red', year: 2000},
            {name: 'Mercedes', color: 'blue', year: 2022},
            {name: 'Peugeot', color: 'black', year: 2023},
        ],
        titre: 'Mon Catalogue Voitures 2'
    }

    addTenYears = () => {

        const updatedState = this.state.voitures.map((param) => {
            return param.year -= 10;
        })

        this.setState({
            updatedState
        })
    }

    getAge = year =>{
        const now = new Date().getFullYear();
        const age = now - year;

        // ans, an
        let frenchYearStr = "";
        if(age === 1) {
            frenchYearStr = "an";
        }else if(age > 1){
            frenchYearStr = "ans";
        }
        return `${age} ${frenchYearStr}` 
    }

    render() {

        

        return (
            <div>
                <Welcome />
                <h1>{this.state.titre}</h1>

                <button onClick={this.addTenYears}> + 10 ans </button>
                    
            
                
                    {this.state.voitures.map(({name, color, year}, index) => {
                        return(
                            <div key={index}>
                                <Car 
                                    color={color} 
                                    year={this.getAge(year)} 
                                >
                                    {name} 
                                </Car>
                            </div>
                        )
                    })
                }
            </div>
           
        )
    }
}

export default Mycars