import { Expose, Transform } from 'class-transformer';

export class Cita {
    @Expose({ name: 'cit_codigo' })
    @Transform(({ value }) => {
        if  (Math.floor(value) && typeof value == 'number')  
            return Math.floor(value);
        else 
            console.log([]);   
            throw { status: 200, message: 'El codigo de cita contiene parametros incorrectos' };
        }, { toClassOnly: true })
    CIT_COD: number;

    @Expose({ name: "cit_fecha" })
    @Transform(({ value }) => {
        if (/^(?:0?[1-9]|1[1-2])([\-/.])(3[01]|[12][0-9]|0?[1-9])\1\d{4}$/.test(value))
            return value
        else
            throw { status: 200, message: 'La fecha contiene caracteres erroneos'}
    }, {toClassOnly: true})
    CIT_FEC: string;

    @Expose({ name: "cit_estadoCita" })
    @Transform(({ value }) => {
        if (Math.floor(value) && typeof value == 'number')
            return Math.floor(value)
        else
            throw { status: 200, message: 'El estado contiene parametros incorrectos'}
    }, {toClassOnly: true})
    CIT_EST_CIT: number;

    @Expose({ name: "cit_medico" })
    @Transform(({ value }) => {
        if (Math.floor(value) && typeof value == 'number')
            return Math.floor(value)
        else
            throw { status: 200, message: 'El medico contiene parametros incorrectos'}
    }, {toClassOnly: true})
    CIT_MED: number;

    @Expose({ name: "cit_datosUsuario" })
    @Transform(({ value }) => {
        if (Math.floor(value) && typeof value == 'number')
            return Math.floor(value)
        else
            throw { status: 200, message: 'los datos de usuario contienen parametros incorrectos'}
    }, {toClassOnly: true})
    CIT_DAT_USU: number;

   

    constructor(CIT_COD: number, CIT_FEC: string, CIT_EST_CIT: number, USU_APE: string, CIT_MED: number, CIT_DAT_USU: number) {
        this.CIT_COD = CIT_COD;
        this.CIT_FEC = CIT_FEC;
        this.CIT_EST_CIT = CIT_EST_CIT;
        this.CIT_MED = CIT_MED;
        this.CIT_DAT_USU = CIT_DAT_USU;

    }
}
