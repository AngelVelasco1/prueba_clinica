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
import { Length } from 'class-validator';
export class Usuario {
    constructor(USU_ID, USU_NOM, USU_SEG_NOM, USU_APE, USU_SEG_APE, USU_TEL, USU_DIREC, USU_EM, USU_TIPDOC, USU_GEN, USU_ACUD) {
        this.USU_ID = USU_ID;
        this.USU_NOM = USU_NOM;
        this.USU_SEG_NOM = USU_SEG_NOM;
        this.USU_APE = USU_APE;
        this.USU_SEG_APE = USU_SEG_APE;
        this.USU_TEL = USU_TEL;
        this.USU_DIREC = USU_DIREC;
        this.USU_EM = USU_EM;
        this.USU_TIPDOC = USU_TIPDOC;
        this.USU_GEN = USU_GEN;
        this.USU_ACUD = USU_ACUD;
        this.USU_APE = USU_APE;
    }
}
__decorate([
    Expose({ name: 'usu_id' }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value == 'number')
            return Math.floor(value);
        else
            console.log([]);
        throw { status: 200, message: 'El id de usuario contiene parametros incorrectos' };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Usuario.prototype, "USU_ID", void 0);
__decorate([
    Expose({ name: "usu_nombre" }),
    Transform(({ value }) => {
        if (/^[a-z A-Z]+$/.test(value))
            return value;
        else
            throw { status: 200, message: 'El nombre contiene caracteres erroneos' };
    }, { toClassOnly: true }),
    Length(1, 50, { message: 'El nombre debe tener entre 1 y 50 caracteres' }),
    __metadata("design:type", String)
], Usuario.prototype, "USU_NOM", void 0);
__decorate([
    Expose({ name: "usu_segdo_nombre" }),
    Transform(({ value }) => {
        if (/^[a-z A-Z]+$/.test(value))
            return value;
        else
            throw { status: 200, message: 'El id contiene parametros incorrectos' };
    }, { toClassOnly: true }),
    Length(1, 45, { message: 'El segundo nombre debe tener entre 1 y 45 caracteres' }),
    __metadata("design:type", String)
], Usuario.prototype, "USU_SEG_NOM", void 0);
__decorate([
    Expose({ name: "usu_primer_apellido_usuar" }),
    Transform(({ value }) => {
        if (/^[a-z A-Z]+$/.test(value))
            return value;
        else
            throw { status: 200, message: 'El id contiene parametros incorrectos' };
    }, { toClassOnly: true }),
    Length(1, 50, { message: 'El apellido debe tener entre 1 y 50 caracteres' }),
    __metadata("design:type", String)
], Usuario.prototype, "USU_APE", void 0);
__decorate([
    Expose({ name: "usu_segdo_apellido_usuar" }),
    Transform(({ value }) => {
        if (/^[a-z A-Z]+$/.test(value))
            return value;
        else
            throw { status: 200, message: 'El id contiene parametros incorrectos' };
    }, { toClassOnly: true }),
    Length(1, 50, { message: 'El segundo nombre debe tener entre 1 y 50 caracteres' }),
    __metadata("design:type", String)
], Usuario.prototype, "USU_SEG_APE", void 0);
__decorate([
    Expose({ name: "usu_telefono" }),
    Transform(({ value }) => {
        if (/^\(? (\ d {2}) \)? [-]? (\ d {3}) [-]? (\ d {4}) $/.test(value))
            return value;
        else
            throw { status: 200, message: 'El telefono contiene parametros incorrectos' };
    }, { toClassOnly: true }),
    Length(1, 50, { message: 'El telefono debe tener entre 1 y 50 caracteres' }),
    __metadata("design:type", String)
], Usuario.prototype, "USU_TEL", void 0);
__decorate([
    Expose({ name: "usu_direccion" }),
    Transform(({ value }) => {
        if (/^(Calle|Carrera)\\s\\d{2}\\s#\\d{2}\s[a-zA-Z\\s]+$/.test(value))
            return value;
        else
            throw { status: 200, message: 'la direccion contiene parametros incorrectos' };
    }, { toClassOnly: true }),
    Length(1, 50, { message: 'La direccion debe tener entre 1 y 50 caracteres' }),
    __metadata("design:type", String)
], Usuario.prototype, "USU_DIREC", void 0);
__decorate([
    Expose({ name: "usu_email" }),
    Transform(({ value }) => {
        if (/\s+@\s+\.\s+/.test(value))
            return value;
        else
            throw { status: 200, message: 'El email contiene parametros incorrectos' };
    }, { toClassOnly: true }),
    Length(1, 100, { message: 'El email debe tener entre 1 y 100 caracteres' }),
    __metadata("design:type", String)
], Usuario.prototype, "USU_EM", void 0);
__decorate([
    Expose({ name: "usu_tipodoc" }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value == 'number')
            return Math.floor(value);
        else
            throw { status: 200, message: 'El tipo documento contiene parametros incorrectos' };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Usuario.prototype, "USU_TIPDOC", void 0);
__decorate([
    Expose({ name: "usu_genero" }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value == 'number')
            return Math.floor(value);
        else
            throw { status: 200, message: 'El genero contiene parametros incorrectos' };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Usuario.prototype, "USU_GEN", void 0);
__decorate([
    Expose({ name: "usu_acudiente" }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value == 'number')
            return Math.floor(value);
        else
            throw { status: 200, message: 'El acudiente contiene parametros incorrectos' };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Usuario.prototype, "USU_ACUD", void 0);
//# sourceMappingURL=usuario.js.map