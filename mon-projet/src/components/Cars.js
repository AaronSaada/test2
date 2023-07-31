
import Header from './Header';
import Wrapper from './Wrapper'

function Cars({ color, children }) {

  return ( 
    <Wrapper>
      <p>Marque: {children}</p>
      <p>Couleur: {color ? color : "Neant"} </p>
    </Wrapper>
  );
}

export default Cars;





/*
const Cars =()=>{
    <div className="contenaire">
        <p>Marque:</p>
        <p>Couleur:</p>
        </div>
}*/
/*
function Cars({children, color}){


    return children ? (
      <div style={ {
        backgroundColor: 'pink', width: '400px', padding: '10px', margin:'5px auto'
        } }>
        <p>Marque: { children ? children : "Indisponible" }</p>
        <p>Couleur: { color ? color : "Indisponible"}</p>
      </div>
    ) : <p>Informations indisponibles</p>
  }
  
  export default Cars*/
