function ElementParametrisoitu(props) {
return(
  <div class="element">
      <h2>{ props.projekti }</h2>
      <img src={props.image} alt="project_image"/>
      <p>{props.text}</p>
      <a href={props.link} class="btn button_color">Linkki projektiin</a>
  </div>);
}

export default ElementParametrisoitu;
