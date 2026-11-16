# MAGNUSIRONHEART | Soporte TI

Una biblioteca personal de consulta donde recopilo lo que he aprendido en el
área de soporte técnico. Aquí reúno comandos, atajos, apuntes y soluciones a
problemas que pueden aparecer en el trabajo diario de TI.

## ¿Qué encontrarás?

- **CMD y PowerShell:** comandos para diagnosticar y resolver tareas comunes en
  Windows.
- **Atajos de Windows y Win + R:** accesos rápidos a funciones y herramientas
  del sistema.
- **Información del equipo:** referencias para consultar datos del hardware,
  sistema y red.
- **Regedit:** notas relacionadas con el Editor del Registro.
- **Casos reales:** ejemplos de problemas de soporte, el proceso que seguí y
  los resultados obtenidos.
- **Comandos frecuentes:** una selección de accesos y consultas útiles para
  tener a mano.

## Propósito

Este sitio es mi espacio para documentar, organizar y compartir conocimientos
de soporte TI. La idea es que la información sea fácil de consultar y sirva
como referencia para estudiantes, personas que comienzan en soporte técnico y
cualquier persona interesada en aprender más sobre Windows.

Los casos y apuntes reflejan experiencias y aprendizajes personales. Cada
equipo y entorno puede ser distinto: revisa los comandos antes de ejecutarlos
y asegúrate de comprender sus efectos, especialmente si requieren permisos de
administrador o modifican la configuración del sistema.

## Tecnologías

El sitio está creado con [Astro](https://astro.build/) y [Tailwind CSS](https://tailwindcss.com/).

## Agregar videos

Añade cada video al arreglo `videos` en `src/data/videos.ts`:

```ts
{
  id: "cmd-net-user-video",
  category: "CMD",
  name: "Mostrar información de usuario",
  description: "Muestra información sobre un usuario específico.",
  url: "https://www.youtube.com/watch?v=ID_DEL_VIDEO",
  aspectRatio: "16:9",
}
```

Usa `aspectRatio: "9:16"` para videos verticales. La miniatura se obtiene de la URL de YouTube; si necesitas una portada distinta, puedes indicar `thumbnail` con su URL. Los videos no se incrustan: la tarjeta abre YouTube y las miniaturas solo se solicitan en la página `/videos`.

<img width="1254" height="1254" alt="logo" src="https://github.com/user-attachments/assets/ff657e12-efb2-4193-a113-c8509f596519" />


