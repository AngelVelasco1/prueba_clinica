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

ALTER TABLE medico MODIFY COLUMN med_nombreCompleto VARCHAR(255);
INSERT INTO especialidad (esp_id, esp_nombre) VALUES (1, 'Cardiología');
INSERT INTO especialidad (esp_id, esp_nombre) VALUES (2, 'Dermatología');
INSERT INTO especialidad (esp_id, esp_nombre) VALUES (3, 'Pediatría');
INSERT INTO especialidad (esp_id, esp_nombre) VALUES (4, 'Oftalmología');
INSERT INTO especialidad (esp_id, esp_nombre) VALUES (5, 'Gastroenterología');



INSERT INTO consultorio (cons_codigo, cons_nombre) VALUES (1, 'Consultorio A');
INSERT INTO consultorio (cons_codigo, cons_nombre) VALUES (2, 'Consultorio B');
INSERT INTO consultorio (cons_codigo, cons_nombre) VALUES (3, 'Consultorio C');
INSERT INTO consultorio (cons_codigo, cons_nombre) VALUES (4, 'Consultorio D');
INSERT INTO consultorio (cons_codigo, cons_nombre) VALUES (5, 'Consultorio E');



INSERT INTO medico (med_nroMatriculaProsional, med_nombreCompleto, med_consultorio, med_especialidad) VALUES (123456, 'D.r JuanPérez', 1, 1);
INSERT INTO medico (med_nroMatriculaProsional, med_nombreCompleto, med_consultorio, med_especialidad) VALUES (234567, 'Dra. Ana Rodríguez', 2, 2);
INSERT INTO medico (med_nroMatriculaProsional, med_nombreCompleto, med_consultorio, med_especialidad) VALUES (345678, 'Dr. Luis Martínez', 3, 3);
INSERT INTO medico (med_nroMatriculaProsional, med_nombreCompleto, med_consultorio, med_especialidad) VALUES (456789, 'Dra. Laura Gómez', 4, 4);
INSERT INTO medico (med_nroMatriculaProsional, med_nombreCompleto, med_consultorio, med_especialidad) VALUES (567890, 'Dr. Carlos Sánchez', 5, 5);

INSERT INTO estado_cita (estcita_id, estcita_nombre) VALUES (1, 'Pendiente');
INSERT INTO estado_cita (estcita_id, estcita_nombre) VALUES (2, 'Confirmada');
INSERT INTO estado_cita (estcita_id, estcita_nombre) VALUES (3, 'Cancelada');
INSERT INTO estado_cita (estcita_id, estcita_nombre) VALUES (4, 'Realizada');
INSERT INTO estado_cita (estcita_id, estcita_nombre) VALUES (5, 'Ausente');



INSERT INTO tipo_documento (tipdoc_id, tipdoc_nombre, tipdoc_abreviatura) VALUES (1, 'Cédula de Ciudadanía', 'CC');
INSERT INTO tipo_documento (tipdoc_id, tipdoc_nombre, tipdoc_abreviatura) VALUES (2, 'Tarjeta de Identidad', 'TI');
INSERT INTO tipo_documento (tipdoc_id, tipdoc_nombre, tipdoc_abreviatura) VALUES (3, 'Cédula Extranjera', 'CE');
INSERT INTO tipo_documento (tipdoc_id, tipdoc_nombre, tipdoc_abreviatura) VALUES (4, 'Pasaporte', 'PAS');
INSERT INTO tipo_documento (tipdoc_id, tipdoc_nombre, tipdoc_abreviatura) VALUES (5, 'Registro Civil', 'RC');



INSERT INTO genero (gen_id, gen_nombre, gen_abreviatura) VALUES (1, 'Masculino', 'M');
INSERT INTO genero (gen_id, gen_nombre, gen_abreviatura) VALUES (2, 'Femenino', 'F');
INSERT INTO genero (gen_id, gen_nombre, gen_abreviatura) VALUES (3, 'Otro', 'O');
INSERT INTO genero (gen_id, gen_nombre, gen_abreviatura) VALUES (4, 'No especificado', 'NE');
INSERT INTO genero (gen_id, gen_nombre, gen_abreviatura) VALUES (5, 'Prefiero no decirlo', 'PND');



INSERT INTO acudiente (acu_codigo, acu_nombreCompleto, acu_telefono, acu_direccion) VALUES (1, 'Luisa Pérez', '1234567890', 'Calle 123, Ciudad');
INSERT INTO acudiente (acu_codigo, acu_nombreCompleto, acu_telefono, acu_direccion) VALUES (2, 'Pedro Gómez', '9876543210', 'Avenida 456, Ciudad');
INSERT INTO acudiente (acu_codigo, acu_nombreCompleto, acu_telefono, acu_direccion) VALUES (3, 'María Rodríguez', '5555555555', 'Carrera 789, Ciudad');
INSERT INTO acudiente (acu_codigo, acu_nombreCompleto, acu_telefono, acu_direccion) VALUES (4, 'Andrés Torres', '9999999999', 'Calle Principal, Ciudad');
INSERT INTO acudiente (acu_codigo, acu_nombreCompleto, acu_telefono, acu_direccion) VALUES (5, 'Laura Sánchez', '1111111111', 'Avenida Central, Ciudad');



INSERT INTO usuario (usu_id, usu_nombre, usu_segdo_nombre, usu_primer_apellido_usuar, usu_segdo_apellido_usuar, usu_telefono, usu_direccion, usu_email, usu_tipodoc, usu_genero, usu_acudiente) VALUES (10, 'Juan', 'David', 'Pérez', 'Gómez', '1234567890', 'Calle 123, Ciudad', 'juan@example.com', 1, 1, 1);
INSERT INTO usuario (usu_id, usu_nombre, usu_segdo_nombre, usu_primer_apellido_usuar, usu_segdo_apellido_usuar, usu_telefono, usu_direccion, usu_email, usu_tipodoc, usu_genero, usu_acudiente) VALUES (11, 'María', 'Fernanda', 'Rodríguez', 'García', '9876543210', 'Avenida 456, Ciudad', 'maria@example.com', 2, 2, 2);
INSERT INTO usuario (usu_id, usu_nombre, usu_segdo_nombre, usu_primer_apellido_usuar, usu_segdo_apellido_usuar, usu_telefono, usu_direccion, usu_email, usu_tipodoc, usu_genero, usu_acudiente) VALUES (12, 'Carlos', '', 'González', 'Sánchez', '5555555555', 'Carrera 789, Ciudad', 'carlos@example.com', 1, 1, 3);
INSERT INTO usuario (usu_id, usu_nombre, usu_segdo_nombre, usu_primer_apellido_usuar, usu_segdo_apellido_usuar, usu_telefono, usu_direccion, usu_email, usu_tipodoc, usu_genero, usu_acudiente) VALUES (13, 'Ana', 'María', 'López', 'Torres', '9999999999', 'Calle Principal, Ciudad', 'ana@example.com', 3, 2, 4);
INSERT INTO usuario (usu_id, usu_nombre, usu_segdo_nombre, usu_primer_apellido_usuar, usu_segdo_apellido_usuar, usu_telefono, usu_direccion, usu_email, usu_tipodoc, usu_genero, usu_acudiente) VALUES (14, 'Pedro', '', 'Ramírez', 'Sánchez', '1111111111', 'Avenida Central, Ciudad', 'pedro@example.com', 4, 3, 5);



INSERT INTO cita (cit_codigo, cit_fecha, cit_estadoCita, cit_medico, cit_datosUsuario) VALUES (10, '2023-07-13', 2, 123456, 3);
INSERT INTO cita (cit_codigo, cit_fecha, cit_estadoCita, cit_medico, cit_datosUsuario) VALUES (11, '2023-07-14', 2, 234567, 2);
INSERT INTO cita (cit_codigo, cit_fecha, cit_estadoCita, cit_medico, cit_datosUsuario) VALUES (12, '2023-07-15', 3, 345678, 3);
INSERT INTO cita (cit_codigo, cit_fecha, cit_estadoCita, cit_medico, cit_datosUsuario) VALUES (13, '2023-07-16', 4, 456789, 4);
INSERT INTO cita (cit_codigo, cit_fecha, cit_estadoCita, cit_medico, cit_datosUsuario) VALUES (14, '2023-07-17', 5, 567890, 5);
