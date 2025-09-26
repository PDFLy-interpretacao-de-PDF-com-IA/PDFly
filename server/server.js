import { app } from './app.js';
import { analyseText } from './routes.js';

app.post('/uploads', analyseText);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`aplicação rodando na porta http://localhost:${PORT}`));