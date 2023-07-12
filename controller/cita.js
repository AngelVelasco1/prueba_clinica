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
export class Cita {
    constructor(CIT_COD, CIT_FEC, CIT_EST_CIT, USU_APE, CIT_MED, CIT_DAT_USU) {
        this.CIT_COD = CIT_COD;
        this.CIT_FEC = CIT_FEC;
        this.CIT_EST_CIT = CIT_EST_CIT;
        this.CIT_MED = CIT_MED;
        this.CIT_DAT_USU = CIT_DAT_USU;
    }
}
__decorate([
    Expose({ name: 'cit_codigo' }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value == 'number')
            return Math.floor(value);
        else
            throw { status: 200, message: 'El codigo de cita contiene parametros incorrectos' };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Cita.prototype, "CIT_COD", void 0);
__decorate([
    Expose({ name: "cit_fecha" }),
    Transform(({ value }) => {
        if (/^(?:0?[1-9]|1[1-2])([\-/.])(3[01]|[12][0-9]|0?[1-9])\1\d{4}$/.test(value))
            return value;
        else
            throw { status: 200, message: 'La fecha contiene caracteres erroneos' };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], Cita.prototype, "CIT_FEC", void 0);
__decorate([
    Expose({ name: "cit_estadoCita" }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value == 'number')
            return Math.floor(value);
        else
            throw { status: 200, message: 'El estado contiene parametros incorrectos' };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Cita.prototype, "CIT_EST_CIT", void 0);
__decorate([
    Expose({ name: "cit_medico" }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value == 'number')
            return Math.floor(value);
        else
            throw { status: 200, message: 'El medico contiene parametros incorrectos' };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Cita.prototype, "CIT_MED", void 0);
__decorate([
    Expose({ name: "cit_datosUsuario" }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value == 'number')
            return Math.floor(value);
        else
            throw { status: 200, message: 'los datos de usuario contienen parametros incorrectos' };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Cita.prototype, "CIT_DAT_USU", void 0);
//# sourceMappingURL=cita.js.map