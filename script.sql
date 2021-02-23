CREATE database delilah;
use delilah;

CREATE TABLE clients (
                             id_client int NOT NULL PRIMARY KEY  AUTO_INCREMENT,
                             names varchar(100),
                             last_names varchar(100),
                             email  varchar(100),
                             direccion  varchar(100),
                    
)

    insert into clients (names, last_names, email, direccion)
values ("Juan Daniel", "Perez", "juan.perez@gmail.com", Gauss 4800)

    insert into clients (names, last_names, email, direccion)
values ("Claudio Ivan", "Llanes", "claudio.llanes@gmail.com", Roma 1500)

    insert into clients (names, last_names, email, direccion)
values ("Pilar Alejandra", "Mendoza", "pilar.mendoza@gmail.com", Recta Martinolli 1840)

CREATE TABLE menu (
                             id_menu int NOT NULL PRIMARY KEY  AUTO_INCREMENT,
                             name varchar(100),
                             ingredients  varchar(100),
                    
)

    insert into menu (menu_name, ingredients)
values ("Hamburguesa especial", "hamburguesa con papas fritas")

    insert into menu (menu_name, ingredientes)
values ("Empanadas arabes", "carne molida con cebolla")

    insert into menu (menu_name, ingredients)
values ("Milanesa con pure", "Carne de corte Cuadrada con papas")

CREATE TABLE orders (
                             id_order int NOT NULL PRIMARY KEY  AUTO_INCREMENT,
                             order_name varchar(100),
                             id_client int,
                    
)

-- update:  actualizacion

update  clientes  SET nombres= "Ifrain" WHERE id_cliente = 1;

UPDATE  estudiantes  set email='pilarm@gmail.com'
WHERE email = 'pilar.mendoza@gmail.com'



-- alter table :  modificacion de la tabla

alter table clients
    add column creation TIMESTAMP default CURRENT_TIMESTAMP

alter table clients
    add column  activo BOOL default true


--  indices : ayuda a mejorar las busquedas

CREATE UNIQUE INDEX indice_clients_email
ON clients (email) USING HASH;



--  fk : llaves foraneas   para agregar restricciones de insercion

ALTER TABLE menu
    ADD FOREIGN KEY (id_client) REFERENCES clients(id_client);


ALTER TABLE orders
    ADD FOREIGN KEY (id_order) REFERENCES orders(id_order);





















