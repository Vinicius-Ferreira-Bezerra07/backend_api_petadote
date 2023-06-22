// importa o app para o server
const app = require("./app");

const PORT = 3333;

// função que inicia e faz o app ouvir uma porta especifica
app.listen(PORT, () => console.log(`Server running or port ${PORT}`));
// app.listen(PORT, () => console.log("Ok!"));

//inicializar: npm run start / npm run dev

// Links Auxiliares
// https://www.youtube.com/watch?v=Cdu0WJhI-d8&t=1802s
