import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

function DetalleEntreno(props) {
  const Entreno = (type) => {
    return (
      <div>
        <h2>{type}</h2>
        <h3>Ritmo</h3>
        <ProgressBar variant="success" animated now={props.rith} />
        <h2>{props.rith} %</h2>
        <br></br>
        <h3>Velocidad</h3>
        <ProgressBar
          variant="warning"
          animated
          now={props.values.velocidadImpulso}
        />
        <h2>{props.values.velocidadImpulso} salto/minuto.</h2>
        <br></br>
        <h3>Peso</h3>
        <ProgressBar animated now={props.values.peso} />
        <h2>{props.values.peso} lb.</h2>
        <br></br>
        <h3>Fuerza Inicial</h3>
        <ProgressBar
          variant="info"
          animated
          now={props.values.fuerzaImpulsoInicial}
        />
        <h2>{props.values.fuerzaImpulsoInicial} N.</h2>
        <br></br>
        <h3>Fuerza Llegada</h3>
        <ProgressBar
          variant="warning"
          animated
          now={props.values.fuerzaImpulsoFinal}
        />
        <h2>{props.values.fuerzaImpulsoFinal} N.</h2>
        <br></br>
        <h3>Calorias quemadas</h3>
        <ProgressBar variant="danger" animated now={props.values.calorias} />
        <h2>{props.values.calorias} calorias</h2>
        <br></br>
      </div>
    );
  };

  if (props.entreno === 1) {
    return Entreno("Entreno JumpOver");
  } else if (props.entreno === 2) {
    return Entreno("Entreno BoxJump");
  } else if (props.entreno === 3) {
    return Entreno("Entreno StepUp");
  }
}

export { DetalleEntreno };
