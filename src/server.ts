import * as express from 'express';
import { createConnection } from 'typeorm';
import { SucursalRepository } from './Repository/SucursalRepository';

const PORT = 3000;
const sucursalRepo = new SucursalRepository ()

createConnection().then(connection => {}).catch(error => console.log(error));

const app = express();
app.use(express.json);

app.get('/api/sucursales/:id', (req, res) => {
    sucursalRepo.listarSucursales(Number(req.params.id)).then((resultado) => res.send(resultado));
})

app.post('/api/sucursales', (req, res) => {
    sucursalRepo.guardarSucursal(req.body).then((resultado) => res.send(resultado));
})

app.listen(PORT, () => {
    console.log(`Aplicación corriendo en el puerto ${PORT}`);
});
