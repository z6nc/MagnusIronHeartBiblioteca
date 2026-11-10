// ──────────────────────────────────────────────────────────────
// CASOS REALES (storytelling). Para agregar uno, copia un objeto de `cases`.
// Las imágenes se agregan SOLO con enlaces (src). Usa URLs directas a la imagen
// (Imgur, GitHub raw, Cloudinary, tu hosting…). Los casos de abajo son EJEMPLOS:
// reemplázalos por los tuyos.
// ──────────────────────────────────────────────────────────────
export interface CaseImg {
  src: string;
  alt: string;
  caption?: string;
}

export interface CaseStep {
  title: string;
  text: string;
  images?: CaseImg[]; // 0, 1 o varias imágenes por enlace
  command?: string; // comando(s) usados en este paso (se puede copiar)
}

export interface Case {
  slug: string; // va en la URL: /casos/<slug>
  title: string;
  summary: string; // una frase para la tarjeta
  date?: string;
  tags?: string[];
  cover?: CaseImg; // imagen de portada (opcional)
  problem: string;
  story: CaseStep[];
  result: string;
  commands?: string[]; // ids de commands.ts relacionados
}

const img = (text: string) =>
  `https://placehold.co/1200x675/0f0f11/00ff9d/png?text=${encodeURIComponent(text)}`;

export const cases: Case[] = [
  {
    slug: "configuracion-impresora-lexmark-ip",
    title: "Configuración de impresora Lexmark por red",
    summary:
      "Un usuario reportó que sus documentos salían sin el formato correcto. Lo resolví instalando el controlador adecuado por dirección de red.",
    date: "Octubre 2026",
    tags: ["Impresión", "Red", "Soporte"],
    cover: {
      src: "https://lexmark.scene7.com/is/image/lexmark/CX331adwe_one-person-scan?fmt=webp&resMode=sharp2&qlt=85,0&op_usm=1.75,0.3,2,0",
      alt: "Impresora Lexmark configurada por red",
    },

    problem:
      "Un usuario indicó que al intentar imprimir, las impresiones salían con el formato alterado o incorrecto.",
    story: [
      {
        title: "Validé la conexión de red",
        text: "Primero comprobé que la computadora y la impresora se encontraran en la misma red y ejecuté un ping a la dirección IP de la impresora para validar la conectividad.",
        command: "ping 192.168.1.50",
        images: [
          {
            src: "https://http2.mlstatic.com/D_NQ_NP_787324-MPE112702913313_062026-O.webp",
            alt: "Validación de red mediante comando",
            caption: "IP de la impresora .",
          },
          {
            src: "https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots_2019/ping-befehl-EN-4.jpg",
            alt: "Validación de red mediante comando",
            caption: "Prueba de conectividad mediante ping.",
          },
        ],
      },
      {
        title: "Descargué el controlador oficial",
        text: "Con la dirección IP y la marca del equipo, ingresé al sitio web oficial para buscar y descargar los controladores correspondientes al modelo exacto de la impresora.",
        images: [
          {
            src: "/public/Lexmark.png",
            alt: "Sitio web de descarga de controladores",
            caption: "https://support.lexmark.com/es_es/drivers-downloads.html",
          },
        ],
        command: "https://support.lexmark.com/es_es/drivers-downloads.html",
      },
      {
        title: "Instalé el equipo por dirección de red",
        text: "Ejecuté el archivo descargado y entre las opciones de configuración seleccioné la instalación mediante protocolo TCP/IP, donde ingresé la dirección IP de la impresora.",
        images: [
          {
            src: "https://publications.lexmark.com/media/library/LEXMARK/COLOR_HARDWARE/SO7820/LPCUP%201.png",
            alt: "Configuración de IP de la impresora",
            caption: "Ingreso de la dirección IP.",
          },
          {
            src: "https://soloelectronicos.com/wp-content/uploads/2016/09/agregar.png",
            alt: "Configuración de IP de la impresora",
            caption: "Ingreso de la dirección IP.",
          },
          {
            src: "https://soloelectronicos.com/wp-content/uploads/2016/09/ip.png",
            alt: "Configuración de IP de la impresora",
            caption: "Ingreso de la dirección IP.",
          },
          {
            src: "https://soloelectronicos.com/wp-content/uploads/2016/09/4900.png",
            alt: "Configuración de IP de la impresora",
            caption: "Ingreso de la dirección IP.",
          },
        ],
      },
      {
        title: 'Predeterminé el dispositivo y probé impresión',
        text: 'Una vez completada la instalación, me dirigí al panel de Dispositivos e impresoras para establecer la impresora Lexmark como predeterminada y realicé una prueba para confirmar que el usuario podía imprimir con normalidad.',
        images: [
          {
            src: "https://www.solvetic.com/uploads/monthly_10_2016/tutorials-9832-0-46396400-1475684087.jpg",
            alt: "Impresora configurada y lista",
            caption: "Dispositivo agregado correctamente.",
          },
        ],
        command: "control printers",
      },
    ],
    result:
      "El equipo quedó configurado correctamente, el formato de impresión se imprimió de manera adecuada y el usuario pudo continuar con sus labores.",
    commands: ['cmd-ping', 'cmd-control-printers'],
  },

];
