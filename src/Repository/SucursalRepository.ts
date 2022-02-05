import { getManager, UpdateResult, DeleteResult } from 'typeorm';
import { Sucursal } from '../Models/Sucursal';

export class SucursalRepository {

    guardarSucursal (sucursal: Sucursal): Promise<Sucursal> {
        return getManager().getRepository(Sucursal).save(sucursal);
    }

    listarSucursales (id: number): Promise<Sucursal[]> {
        return getManager().getRepository(Sucursal)
            .createQueryBuilder('Sucursal')
            .where("Sucursal.codigoSucursal = :id", { id })
            .getMany();
    }

}
