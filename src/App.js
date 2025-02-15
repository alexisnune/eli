import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; 
import "./appi.css";

function Login() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const correctPassword = "26052002"; 

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      Swal.fire({
        title: "💖 ¡Bienvenida, mi amor! 💖",
        text: "Eres la persona más hermosa del mundo 🌎✨",
        icon: "success",
        confirmButtonText: "💘 Ir a la sorpresa 💘",
        background: "#fff0f5",
        color: "#d81b60",
        confirmButtonColor: "#ff4081",
        timer: 3000,
        timerProgressBar: true,
      }).then(() => {
        navigate("/te-amo");
      });
    } else {
      Swal.fire({
        title: "❌ ¡Oops!",
        text: "Esa no es la contraseña correcta. Inténtalo de nuevo 🥺",
        icon: "error",
        confirmButtonText: "💔 Reintentar 💔",
        background: "#fff0f5",
        color: "#d81b60",
        confirmButtonColor: "#ff4081",
      });
    }
  };

  return (
    <div className="login-container">
      <div className="magic-particles"></div>

      {/* 🌸 Mariposas flotando */}
      <div className="butterfly butterfly1"></div>
      <div className="butterfly butterfly2"></div>
      <div className="butterfly butterfly3"></div>
      <div className="butterfly butterfly4"></div>
      <div className="butterfly butterfly5"></div>

      <form onSubmit={handleLogin} className="login-form">
        <h2>💖 Iniciar Sesión 💖</h2>
        <input
          type="password"
          placeholder="🔑 Ingresa la contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="input-field"
        />
        <button type="submit" className="login-btn">✨ Entrar ✨</button>
      </form>
    </div>
  );
}

export default Login;
