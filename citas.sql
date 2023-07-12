-- Active: 1689076122584@@localhost@3306@citas
use citas;

CREATE TABLE usuario (
    usu_id INT PRIMARY KEY,
    usu_nombre VARCHAR(50),
    usu_segdo_nombre VARCHAR(45),
    usu_primer_apellido_usuar VARCHAR(50),
    usu_segdo_apellido_usuar VARCHAR(50),
    usu_telefono VARCHAR(50),
    usu_direccion VARCHAR(50),
    usu_email VARCHAR(100),
    usu_tipodoc INT,
    usu_genero INT,
    usu_acudiente INT
);

CREATE TABLE tipo_documento (
    tipdoc_id INT PRIMARY KEY,
    tipdoc_nombre VARCHAR(20),
    tipdoc_abreviatura VARCHAR(20)
);

CREATE TABLE genero (
    gen_id INT PRIMARY KEY,
    gen_nombre VARCHAR(20),
    gen_abreviatura VARCHAR(20)
);


CREATE TABLE acudiente (
    acu_codigo INT PRIMARY KEY,
    acu_nombreCompleto VARCHAR(100),
    acu_telefono VARCHAR(100),
    acu_direccion VARCHAR(100)
);

CREATE TABLE cita (
    cit_codigo INT PRIMARY KEY,
    cit_fecha DATE,
    cit_estadoCita INT,
    cit_medico INT,
    cit_datosUsuario INT
);

CREATE TABLE estado_cita (
    estcita_id INT PRIMARY KEY,
    estcita_nombre VARCHAR(20)
);

CREATE TABLE medico (
    med_nroMatriculaProsional INT PRIMARY KEY,
    med_nombreCompleto DATE,
    med_consultorio INT,
    med_especialidad INT
);

CREATE TABLE especialidad (
    esp_id INT PRIMARY KEY,
    esp_nombre VARCHAR(20)
);

CREATE TABLE consultorio (
    cons_codigo INT PRIMARY KEY,
    cons_nombre VARCHAR(50)
);

ALTER TABLE tipo_documento
ADD CONSTRAINT fk_usu_id
FOREIGN KEY (tipdoc_id)
REFERENCES usuario(usu_id);

ALTER TABLE genero
ADD CONSTRAINT fk_gen_id
FOREIGN KEY (gen_id)
REFERENCES usuario(usu_id);

ALTER TABLE acudiente
ADD CONSTRAINT fk_acu_codigo
FOREIGN KEY (acu_codigo)
REFERENCES usuario(usu_id);

ALTER TABLE cita
ADD CONSTRAINT fk_cit_codigo
FOREIGN KEY (cit_codigo)
REFERENCES usuario(usu_id);

ALTER TABLE estado_cita
ADD CONSTRAINT fk_estcita_id
FOREIGN KEY (estcita_id)
REFERENCES cita(cit_codigo);

ALTER TABLE medico
ADD CONSTRAINT fk_med_nroMatriculaProsional
FOREIGN KEY (med_nroMatriculaProsional)
REFERENCES cita(cit_codigo);
ALTER TABLE especialidad
ADD CONSTRAINT fk_esp_id
FOREIGN KEY (esp_id)
REFERENCES medico(med_nroMatriculaProsional);

ALTER TABLE consultorio
ADD CONSTRAINT fk_cons_codigo
FOREIGN KEY (cons_codigo)
REFERENCES medico(med_nroMatriculaProsional);
