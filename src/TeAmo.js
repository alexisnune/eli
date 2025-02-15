import Swal from "sweetalert2";
import "./App.css";

function TeAmo() {
  const handleYesClick = () => {
    Swal.fire({
      title: "💖 ¡Yay, mi amorcito! 💖",
      text: "Sabía que dirías que sí, eres el amor de mi vida. 💕",
      icon: "success",
      confirmButtonText: "💘 Te amo 💘",
      background: "#fff0f5",
      color: "#d81b60",
      confirmButtonColor: "#ff4081",
    });
  };

  const handleNoClick = () => {
    Swal.fire({
      title: "🥰 ¡Sabía que dirías que sí! 🥰",
      text: "Eres mi mundo entero, gracias por aceptar. 💖✨",
      icon: "success",
      confirmButtonText: "Te amo infinitamente 💜",
      background: "#fff0f5",
      color: "#d81b60",
      confirmButtonColor: "#ff4081",
    });
  };

  return (
    <div className="love-container">
      <h1 className="love-text">💜 ¿Quieres ser mi San Valentín? 💜</h1>
      <p className="love-message">Eres mi persona favorita en todo el universo. 💜✨</p>

      <div className="heart-container">
        <div className="heart"></div>
      </div>

      <img
        src="https://i.pinimg.com/originals/0f/7c/ee/0f7cee86fc8fc9574be41f15f7204e03.gif"
        alt="BT21 Amor"
        className="bt21-gif"
      />

      <div className="buttons-container">
        <button className="yes-btn" onClick={handleYesClick}>💖 Sí 💖</button>
        <button className="no-btn" onClick={handleNoClick}>💔 No 💔</button>
      </div>
    </div>
  );
}

export default TeAmo;
