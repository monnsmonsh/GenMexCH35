/*


*/
create database ch35;

USE `ch35` ;

-

-- -----------------------------------------------------
-- Table `ch35`.`perfil_Cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ch35`.`perfil_Cliente` (
  `idperfil_Cliente` INT NOT NULL AUTO_INCREMENT,
  `fecha_registro` DATE NULL,
  `preferencias` MEDIUMTEXT NULL,
  PRIMARY KEY (`idperfil_Cliente`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ch35`.`Cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ch35`.`Cliente` (
  `id_Cliente` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  `apellido` VARCHAR(45) NULL,
  `correo` VARCHAR(100) NULL,
  `direccion` VARCHAR(255) NULL,
  `perfil_Cliente_idperfil_Cliente` INT NOT NULL,
  PRIMARY KEY (`id_Cliente`, `perfil_Cliente_idperfil_Cliente`),
  INDEX `fk_Cliente_perfil_Cliente1_idx` (`perfil_Cliente_idperfil_Cliente` ASC) VISIBLE,
  CONSTRAINT `fk_Cliente_perfil_Cliente1`
    FOREIGN KEY (`perfil_Cliente_idperfil_Cliente`)
    REFERENCES `ch35`.`perfil_Cliente` (`idperfil_Cliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ch35`.`Productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ch35`.`Productos` (
  `idProductos` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  `descripcion` TEXT(300) NULL,
  `precio` DECIMAL(10,2) NULL,
  `stock` INT NULL,
  PRIMARY KEY (`idProductos`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ch35`.`Pedidos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ch35`.`Pedidos` (
  `id_Pedidos` INT NOT NULL AUTO_INCREMENT,
  `fecha` DATE NULL,
  `estado_pedido` VARCHAR(45) NULL,
  `total` DECIMAL(10,2) NULL,
  `Cliente_id_Cliente` INT NOT NULL,
  PRIMARY KEY (`id_Pedidos`),
  INDEX `fk_Pedidos_Cliente_idx` (`Cliente_id_Cliente` ASC) VISIBLE,
  CONSTRAINT `fk_Pedidos_Cliente`
    FOREIGN KEY (`Cliente_id_Cliente`)
    REFERENCES `ch35`.`Cliente` (`id_Cliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ch35`.`detalles_Pedido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ch35`.`detalles_Pedido` (
  `id_detalles_Pedido` INT NOT NULL AUTO_INCREMENT,
  `cantidad` INT NULL,
  `precio_unitario` DECIMAL(10,2) NULL,
  `descuento` DECIMAL(10,2) NULL,
  `Pedidos_id_Pedidos` INT NOT NULL,
  `Productos_idProductos` INT NOT NULL,
  PRIMARY KEY (`id_detalles_Pedido`),
  INDEX `fk_detalles_Pedido_Pedidos1_idx` (`Pedidos_id_Pedidos` ASC) VISIBLE,
  INDEX `fk_detalles_Pedido_Productos1_idx` (`Productos_idProductos` ASC) VISIBLE,
  CONSTRAINT `fk_detalles_Pedido_Pedidos1`
    FOREIGN KEY (`Pedidos_id_Pedidos`)
    REFERENCES `ch35`.`Pedidos` (`id_Pedidos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_detalles_Pedido_Productos1`
    FOREIGN KEY (`Productos_idProductos`)
    REFERENCES `ch35`.`Productos` (`idProductos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ch35`.`Producto_favoritos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ch35`.`Producto_favoritos` (
  `id_Producto_favoritos` INT NOT NULL AUTO_INCREMENT,
  `Productos_idProductos` INT NOT NULL,
  PRIMARY KEY (`id_Producto_favoritos`, `Productos_idProductos`),
  INDEX `fk_Producto_favoritos_Productos1_idx` (`Productos_idProductos` ASC) VISIBLE,
  INDEX `fk_Producto_favoritos_Cliente1_idx` (`id_Producto_favoritos` ASC) VISIBLE,
  CONSTRAINT `fk_Producto_favoritos_Productos1`
    FOREIGN KEY (`Productos_idProductos`)
    REFERENCES `ch35`.`Productos` (`idProductos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Producto_favoritos_Cliente1`
    FOREIGN KEY (`id_Producto_favoritos`)
    REFERENCES `ch35`.`Cliente` (`id_Cliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- Insertar
insert into perfil_Cliente (idperfil_Cliente, fecha_registro, preferencias)
values(1, '2024-01-28', 'Tazas starbucks');

-- Insert tbl CLIENTE
insert into cliente (id_cliente, nombre, apellido, correo, direccion,perfil_Cliente_idperfil_Cliente)
values(1, 'martin', 'cortez', 'monse@ejemplo.com', 'aqui',1);

insert into cliente (id_cliente, nombre, apellido, correo, direccion,perfil_Cliente_idperfil_Cliente)
values(2, 'dani', 'maldonado', 'dani@ejemplo.com', 'cdex',1);

insert into cliente (id_cliente, nombre, apellido, correo, direccion,perfil_Cliente_idperfil_Cliente)
values(3, 'rey', 'Martinez', 'rey@ejemplo.com', 'veracru',1);

insert into cliente (id_cliente, nombre, apellido, correo, direccion,perfil_Cliente_idperfil_Cliente)
values(4, 'xime', 'munoz', 'xime@ejemplo.com', 'gdl',1);

insert into cliente (id_cliente, nombre, apellido, correo, direccion,perfil_Cliente_idperfil_Cliente)
values(5, 'diego', 'diego', 'diego@ejemplo.com', 'cdex',1);



