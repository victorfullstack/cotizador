import React, {useState} from 'react'
import Header from './componentes/header'
import Formulario from './componentes/Formulario'
import Resultado from './componentes/Resultado'
import Mensaje from './componentes/Mensaje'
import './App.css'

function App() {
  const [cantidad, setCantidad] = useState(0);
  const[plazo, setPlazo] = useState("");
  const[total, setTotal] = useState(0);
 
  let componente;
  if (total === 0) {
    componente = <Mensaje />
    
  } else{
    componente = <Resultado total={total} cantidad={cantidad} plazo={plazo}/>
  }

  return (
    <>
    <h1>Main Componet</h1>
    <Header titulo="Cotizador de prestamos..." />
    <div className="container">
    <Formulario cantidad={cantidad}
     setCantidad={setCantidad}
      plazo={plazo} 
      setPlazo={setPlazo}
      setTotal={setTotal}/>
     
    </div>
    <div className="mensaje">
      {componente}
       
    </div>
    </>

  )
}

export default App
