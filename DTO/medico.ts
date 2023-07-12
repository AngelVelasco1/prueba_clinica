import { Expose, Transform } from 'class-transformer';
import { Validate, Length } from 'class-validator';

export class Medico {
    @Expose({ name: 'med_nroMatriculaProsional' })
    @Transform(({ value }) => parseInt(value))
    @Validate((value) => typeof value === 'number' && Math.floor(value), {
        message: 'El valor de la matrícula debe ser un número',
    })
    MAT_PRO: number;

    @Expose({ name: 'med_nombreCompleto' })
    @Transform(({ value }) => String(value))
    @Validate((value) => /^[a-z A-Z]+$/.test(value), {
        message: 'El nombre contiene parametros incorrectos',
    })
    @Length(1, 255, { message: 'El nombre debe tener entre 1 y 255 caracteres' })
    MED_NOM: string;

    
    @Expose({ name: 'med_consultorio' })
    @Transform(({ value }) => parseInt(value))
    @Validate((value) => typeof value === 'number' && Math.floor(value), {
        message: 'El consultorio debe ser un numero',
    })
    MED_CONS: number;

    @Expose({ name: 'med_especialidad' })
    @Transform(({ value }) => parseInt(value))
    @Validate((value) => typeof value === 'number' && Math.floor(value), {
        message: 'La especialidad debe ser un numero',
    })
    MED_ESP: number;

    constructor(
        MAT_PRO: number,
        MED_NOM: string,
        MED_CONS: number,
        MED_ESP: number
    ) {
        this.MAT_PRO = MAT_PRO;
        this.MED_NOM = MED_NOM;
        this.MED_CONS = MED_CONS;
        this.MED_ESP = MED_ESP;
    }
}
