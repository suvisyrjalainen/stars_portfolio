import logo from './logo192.png';

function Element() {
return(
  <div class="element">
      <h2>Elementti</h2>
      <img src={logo} alt="react logo"/>
      <p>Tälläisen projektin olen esim tehnyt</p>
      <a href="#" class="btn button_color">Linkki projektiin</a>
  </div>);
}

export default Element;
