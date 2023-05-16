const Mensaje = (props) => {
    const msj = props.message
    return <h1 style={{color:props.color }}>{msj}</h1>
  }

  export default Mensaje