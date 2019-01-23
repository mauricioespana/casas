import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CasaPage } from '../casa/casa';
import { FavPage } from '../fav/fav';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  casas = [
    {
      titulo: "Casa Valle Real",
      precio: "14,990/mes",
      ciudad: "Zapopan",
      colonia: "Valle Real",
      antiguedad: "3 años",
      dimterr: "128m2",
      recam: "3",
      bano: "3.5",
      lugares: "2",
      desc: "Bonita casa Coto Catania, casa club, alberca, seguridad 24/7, 3 recámaras, 3 y medio baños, área de servicio con baño, cajón 2 automóviles, aires acondicionado, calentador solar y de gas, terraza. Frente a Valle Real",
      vendedor: {
        nombre: "IGEA TIERRA Y ESPACIO",
        tel: "3320149095",
        correo: "contacto@corporativoigea.com.mx"
      },
      portada: "../assets/imgs/casa1.jpg",
    },
    {
      titulo: "Coto Armandina privado con seguridad",
      precio: "1,350,000",
      ciudad: "Tlajomulco",
      colonia: "Cortijo San Agustín",
      antiguedad: "1 año",
      dimterr: "5m x 16m",
      recam: "3",
      bano: "2",
      lugares: "2",
      desc: "Casa en esquina, dos plantas, 3 cuartos, 2 baños, rec principal con vestidor, closets integrados, cocina integral con estufa, persianas incluidas, barra y bodega bajo escaleras, patio con espacio lavadora y secadora, alberca y terraza.",
      vendedor: {
        nombre: "Sareth Briseño",
        tel: "331061557",
        correo: "sareth26@hotmail.com"
      },
      portada: "../assets/imgs/casa3.jpeg",
    },
    {
      titulo: "Casa Bosques de la Victoria",
      precio: "7,800,000",
      ciudad: "Guadalajara",
      colonia: "Bosques de la Victoria",
      antiguedad: "12 años",
      dimterr: "346m2",
      recam: "3",
      bano: "4",
      lugares: "4",
      desc: "3 niveles, 3 Hab. Amplia sala-comedor. Estudio con baño. Terraza. Fuentes. Cocina integral. Capilla. 4 cocheras, portón automatizado. Área de lavado, cuarto de servicio. Gimnasio con duchas. Preparación para elevador. Ideal para fines comerciales.",
      vendedor: {
        nombre: "Antonia Reveles Espino",
        tel: "3313327610",
        correo: "antonia_reveles@hotmail.com"
      },
      portada: "../assets/imgs/casa4.jpg",
    },
    {
      titulo: "Mansión Wayne",
      precio: "32,100,000 USD",
      ciudad: "Gotham City",
      colonia: "-",
      antiguedad: "100 años",
      dimterr: "4,227 m2",
      recam: "11",
      bano: "7",
      lugares: "-",
      desc: "La Mansión Wayne es la residencia de Bruce Wayne y sus aliados ubicada en terrenos fuera de Gotham City que albergó anteriormente a sus padres Thomas y Martha Wayne, así como muchas generaciones anteriores.",
      vendedor: {
        nombre: "Alfred Pennyworth",
        tel: "3315264895",
        correo: "alfredp@wayneenterprises.com"
      },
      portada: "../assets/imgs/casa5.jpeg",
    },
    {
      titulo: "Winterfell",
      precio: "45,000,000 USD",
      ciudad: "The North",
      colonia: "The North",
      antiguedad: "2500 años",
      dimterr: "-",
      recam: "48",
      bano: "15 Letrinas",
      lugares: "Alberga hasta 500 caballos",
      desc: "Hogar Ancestral de la Casa Stark por miles de años. Aquel que gobierne Winterfell será el Guardián del Norte.",
      vendedor: {
        nombre: "Cersei Lannister",
        tel: "-",
        correo: "-"
      },
      portada: "../assets/imgs/casa6.jpg",
    },
    {
      titulo: "Hogwarts",
      precio: "20,000,000 galeones",
      ciudad: "En algún lugar de Inglaterra",
      colonia: "-",
      antiguedad: "3000 años",
      dimterr: "-",
      recam: "60+",
      bano: "30",
      lugares: "-",
      desc: "Hogwarts School of Witchcraft and Wizardry es la escuela de magia más grande y reconocida de Inglaterra, haciéndola una de las más grandes de toda Europa.0",
      vendedor: {
        nombre: "Albus Dumbledore",
        tel: "-",
        correo: "-"
      },
      portada: "../assets/imgs/casa7.jpg",
    },
    {
      titulo: "Bag End",
      precio: "1,000,000,",
      ciudad: "La Comarca",
      colonia: "Hobbiton",
      antiguedad: "150 años",
      dimterr: "15m x 25m",
      recam: "4",
      bano: "3",
      lugares: "N/A",
      desc: "Cómoda casa de Hobbit tipo Smial. Llena de todas las comodidades básicas y una de las casas más costosas de la Comarca",
      vendedor: {
        nombre: "Samwise Gamgee",
        tel: "-",
        correo: "-"
      },
      portada: "../assets/imgs/casa8.jpg",
    },
    {
      titulo: "Estrella de la Muerte",
      precio: "423,000,000 creditos Imperiales",
      ciudad: "En una galaxia muy, muy lejana...",
      colonia: "Deep Space",
      antiguedad: "4 años",
      dimterr: "160km diámetro",
      recam: "-",
      bano: "-",
      lugares: "Alberga a más de 2000 Tie Fighters",
      desc: "La estación espacial más grande jamás construida. Puede destruir planetas, aunque su poder no se compara con el poder de la Fuerza. Casi no se ha usado, todavía huele a nueva.",
      vendedor: {
        nombre: "Darth Sidious",
        tel: "-",
        correo: "-"
      },
      portada: "../assets/imgs/casa9.jpeg",
    },
    {
      titulo: "Torre Stark",
      precio: "1,200,000,000 USD",
      ciudad: "Manhattan",
      colonia: "Fifth Avenue",
      antiguedad: "10 años",
      dimterr: "93 pisos",
      recam: "-",
      bano: "-",
      lugares: "-",
      desc: "Se vende torre corporativa. Fue residencia de Tony Stark antes de que este desapareciera en el espacio, y fue cuarto de control de los Vengadores antes de Thanos.",
      vendedor: {
        nombre: "Pepper Potts",
        tel: "7183654598",
        correo: "pepperpotts@starkindustries.com"
      },
      portada: "../assets/imgs/casa10.png",
    },
    {
      titulo: "Tlaxcala",
      precio: "10,000,000",
      ciudad: "País de Nunca Jamás",
      colonia: "-",
      antiguedad: "20 años",
      dimterr: "500m2",
      recam: "N/A",
      bano: "3",
      lugares: "-",
      desc: "Estado mítico mexicano.",
      vendedor: {
        nombre: "Marco Antonio Mena Rodríguez",
        tel: "3310803310",
        correo: "tlaxcala@live.com"
      },
      portada: "../assets/imgs/casa2.jpg",
    }
  ]

  cas = CasaPage;
  favs = FavPage;

  constructor(public navCtrl: NavController) {

  }
  clickCasa(c){
    this.navCtrl.push(this.cas, {casa:c});
  }

}
