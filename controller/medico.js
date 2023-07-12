var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Transform } from 'class-transformer';
import { Validate, Length } from 'class-validator';
export class Medico {
    constructor(MAT_PRO, MED_NOM, MED_CONS, MED_ESP) {
        this.MAT_PRO = MAT_PRO;
        this.MED_NOM = MED_NOM;
        this.MED_CONS = MED_CONS;
        this.MED_ESP = MED_ESP;
    }
}
__decorate([
    Expose({ name: 'med_nroMatriculaProsional' }),
    Transform(({ value }) => parseInt(value)),
    Validate((value) => typeof value === 'number' && Math.floor(value), {
        message: 'El valor de la matrícula debe ser un número',
    }),
    __metadata("design:type", Number)
], Medico.prototype, "MAT_PRO", void 0);
__decorate([
    Expose({ name: 'med_nombreCompleto' }),
    Transform(({ value }) => String(value)),
    Validate((value) => /^[a-z A-Z]+$/.test(value), {
        message: 'El nombre contiene parametros incorrectos',
    }),
    Length(1, 255, { message: 'El nombre debe tener entre 1 y 255 caracteres' }),
    __metadata("design:type", String)
], Medico.prototype, "MED_NOM", void 0);
__decorate([
    Expose({ name: 'med_consultorio' }),
    Transform(({ value }) => parseInt(value)),
    Validate((value) => typeof value === 'number' && Math.floor(value), {
        message: 'El consultorio debe ser un numero',
    }),
    __metadata("design:type", Number)
], Medico.prototype, "MED_CONS", void 0);
__decorate([
    Expose({ name: 'med_especialidad' }),
    Transform(({ value }) => parseInt(value)),
    Validate((value) => typeof value === 'number' && Math.floor(value), {
        message: 'La especialidad debe ser un numero',
    }),
    __metadata("design:type", Number)
], Medico.prototype, "MED_ESP", void 0);
//# sourceMappingURL=medico.js.map