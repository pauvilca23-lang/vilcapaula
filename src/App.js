import "./App.css";
import emailjs from "@emailjs/browser"; //funcion enviar email
function App() {
  return (
    <div>
      <h1>Contacto UPATECO</h1>

      <form>
        <input
          type="text"
          placeholder="Nombre"
        />

        <input
          type="email"
          placeholder="Correo electrónico"
        />

        <textarea
          placeholder="Mensaje"
        ></textarea>

        <button type="submit">
          Enviar
        </button>
      </form>
       <iframe
        title="Mapa UPATECO"
        src="https://maps.google.com/maps?q=UPATecO%20Universidad%20Provincial%20de%20Administracion%20Tecnologia%20y%20Oficios&t=&z=16&ie=UTF8&iwloc=&output=embed"
        width="600"
        height="450"
        style={{ border: 1 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default App;

const enviarEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    "SERVICE_ID",
    "TEMPLATE_ID",
    e.target,
    "PUBLIC_KEY"
  )
  .then(() => {
    alert("Mensaje enviado");
  })
  .catch(() => {
    alert("Error al enviar");
  });
};
