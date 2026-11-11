// ──────────────────────────────────────────────────────────────
// Para agregar un comando: añade un objeto a `commands`.
//  - category: 'atajos-windows' | 'win-r' | 'cmd' | 'powershell'
//  - collections: (opcional) lo suma a una colección con su orden,
//      ej. { 'mas-usados': 1 } o { 'conocer-tu-pc': 3 }
//  - youtube: (opcional) URL del video; si falta, abre una búsqueda.
//  - images: (opcional) URLs de una o varias imágenes que muestran el comando.
// Para agregar una categoría: añade un objeto a `categories`.
// ──────────────────────────────────────────────────────────────
export interface Category {
  slug: string;
  title: string;
  nav: string;          // texto corto para el menú
  heading: string;      // usa *palabra* para resaltarla (al final)
  description: string;
  icon: string;
  prompt: string;
  tone?: 'green' | 'cyan';  // color de las colecciones destacadas
  layout?: 'cards' | 'rows';
}

export interface Command {
  id: string;
  category: string;
  name: string;
  description: string;
  code: string;
  images?: string[];
  youtube?: string;
  collections?: Record<string, number>;
}

export const categories: Category[] = [
  {
    slug: 'mas-usados', title: 'Comandos y Atajos más utilizados en Soporte TI', nav: 'Más usados',
    heading: 'Comandos y Atajos más utilizados en *Soporte TI*', description: 'Los que más se repiten en los tickets.',
    icon: 'TOP', prompt: '', tone: 'green'
  },
  {
    slug: 'conocer-tu-pc', title: 'Comandos para conocer tu PC', nav: 'Conocer tu PC',
    heading: 'Comandos para conocer *tu PC*', description: 'Modelo, serie, red y hardware en segundos.',
    icon: 'SYS', prompt: '', tone: 'cyan', layout: 'rows'
  },
  {
    slug: 'atajos-windows', title: 'Atajos de Windows', nav: 'Atajos de Windows',
    heading: 'Atajos de teclado para *Windows*', description: 'Teclas para moverte más rápido por Windows.',
    icon: '⌘', prompt: ''
  },
  {
    slug: 'win-r', title: 'Win\u00A0+\u00A0R', nav: 'Win\u00A0+\u00A0R',
    heading: 'Herramientas del sistema con *Win\u00A0+\u00A0R*', description: 'Abre consolas y utilidades desde Ejecutar.',
    icon: 'Win+R', prompt: 'Win+R'
  },
  {
    slug: 'cmd', title: 'CMD', nav: 'CMD',
    heading: 'Comandos esenciales de *CMD*', description: 'Reparación y diagnóstico clásico de Windows.',
    icon: '>_', prompt: 'C:\\>'
  },
  {
    slug: 'powershell', title: 'PowerShell', nav: 'PowerShell',
    heading: 'Comandos de *PowerShell*', description: 'Cmdlets para servicios, red y procesos.',
    icon: 'PS>', prompt: 'PS>'
  },
  {
    slug: 'regedit', title: 'Regedit', nav: 'Regedit',
    heading: 'Comandos de *Regedit*', description: 'Cmdlets para servicios, red y procesos.',
    icon: 'REG', prompt: ''
  },
];

export const commands: Command[] = [
  // ── Atajos de Windows ──────────────────────────────────────
  {
    id: 'win-A', category: 'atajos-windows', name: 'Centro de configuracion rapida',
    description: 'Abre el Centro de configuración rápida donde se encuentra las opciones de wifi , bluetooth y otras configuraciones.', code: 'Win + A',
    images: [
      '/public/atajosWin/centro-configuracion-rapida.png',
    ]
  },
  {
    id: 'win-v', category: 'atajos-windows', name: 'Historial del portapapeles',
    description: 'Pega elementos que copiaste antes.', code: 'Win + V',
    images: [
      '/public/atajosWin/portapapeles.png',
    ]
  },
  {
    id: 'win-E', category: 'atajos-windows', collections: { 'mas-usados': 6 }, name: 'Explorador de archivos',
    description: 'Abre el Explorador de archivos en la ubicación actual.', code: 'Win + E'
  },
  {
    id: 'win-l', category: 'atajos-windows', collections: { 'mas-usados': 9 }, name: 'Bloquear sesión',
    description: 'Bloquea el equipo al instante.', code: 'Win + L'
  },
  {
    id: 'win-D', category: 'atajos-windows', name: 'Mostrar escritorio', collections: { 'mas-usados': 10 },
    description: 'Oculta todas las ventanas y muestra el escritorio.', code: 'Win + D'
  },
  {
    id: 'win-x', category: 'atajos-windows', name: 'Menú de herramientas avanzadas',
    description: 'Acceso rápido a Dispositivos, Terminal, Red y más.', code: 'Win + X',
    images: [
      '/public/atajosWin/menu-herramientas.png',
    ]
  },
  {
    id: 'ctrl-shift-esc', category: 'atajos-windows', collections: { 'mas-usados': 4 }, name: 'Administrador de tareas',
    description: 'Ábrelo directo, sin pasar por Ctrl+Alt+Supr.', code: 'Ctrl + Shift + Esc'
  },
  {
    id: 'win-ctrl-shift-b', category: 'atajos-windows', name: 'Reiniciar el controlador de video',
    description: 'Útil cuando la pantalla queda negra o congelada.', code: 'Win + Ctrl + Shift + B'
  },


  // ── Win + R ────────────────────────────────────────────────
  {
    id: 'exe-msconfig', category: 'win-r', name: 'Configuración del sistema',
    description: 'Controla el arranque, los servicios y las herramientas.', code: 'msconfig',
    images: [
      '/public/winR/msconfig.png',
      '/public/winR/msconfig-01.png',
    ]
  },
  {
    id: 'exe-services', category: 'win-r', collections: { 'mas-usados': 7 }, name: 'Servicios',
    description: 'Inicia, detiene y configura servicios de Windows.', code: 'services.msc',
    images: [
      '/public/winR/servicios.png',
    ]
  },
  {
    id: 'exe-devmgmt', category: 'win-r', name: 'Administrador de dispositivos',
    description: 'Revisa controladores y dispositivos con errores.', code: 'devmgmt.msc',
    images: [
      '/public/winR/dispositivos.png',
    ]
  },
  {
    id: 'exe-eventvwr', category: 'win-r', name: 'Visor de eventos',
    description: 'Consulta los registros para diagnosticar fallos y reinicios.', code: 'eventvwr.msc',
    images: [
      '/public/winR/visor-eventos.png',
    ]
  },
  {
    id: 'exe-appwiz', category: 'win-r', name: 'Programas y características',
    description: 'Desinstala o repara aplicaciones.', code: 'appwiz.cpl',
    images: [
      '/public/winR/programas.png',
    ]
  },
  {
    id: 'exe-mstsc', category: 'win-r', name: 'Escritorio remoto',
    description: 'Abre el cliente RDP para conectarte a otro equipo.', code: 'mstsc',
    images: [
      '/public/winR/escritorio-remoto.png',
    ]
  },
  {
    id: 'pc-winver', category: 'win-r', collections: { 'conocer-tu-pc': 2 }, name: 'Versión de Windows',
    description: 'Muestra la edición y la compilación instalada.', code: 'winver', images: [
      '/public/winR/winver01.png',
      '/public/winR/winver02.png',
    ]
  },
  {
    id: 'pc-msinfo32', category: 'win-r', collections: { 'conocer-tu-pc': 5 }, name: 'Información del sistema',
    description: 'Ficha completa de hardware, drivers y recursos.', code: 'msinfo32', images: [
      '/public/winR/sisteminfo.png'
    ]
  },
  {
    id: 'pc-dxdiag', category: 'win-r', collections: { 'conocer-tu-pc': 8 }, name: 'Tarjeta de video y DirectX',
    description: 'Detalles de la GPU, la pantalla y el sonido.', code: 'dxdiag',
    images: [
      '/public/winR/tarjeta-video.png'
    ]
  },
  {
    id: 'pc-mmsys', category: 'win-r', name: 'Propiedades de sonido y pantalla',
    description: 'Configura las opciones de audio y visualización.', code: 'mmsys.cpl',
  },
  {
    id: 'pc-main', category: 'win-r', name: 'Propiedades de Mouse y teclado',
    description: 'Configura las opciones del mouse y el teclado.', code: 'main.cpl',
  },

  {
    id: 'pc-control-system', category: 'win-r', collections: { 'conocer-tu-pc': 2 }, name: 'Propiedades del sistema',
    description: 'Configura las opciones del sistema.', code: 'control /name Microsoft.System',
  },


  // ── CMD ────────────────────────────────────────────────────
  {
    id: 'pc-systeminfo', category: 'cmd', collections: { 'conocer-tu-pc': 1 }, name: 'Resumen del sistema',
    description: 'Sistema operativo, RAM, último arranque y más.', code: 'systeminfo', images: [
      '/public/cmd/systeminfo.png',
    ]
  },
  {
    id: 'cmd-ipconfig', category: 'cmd', collections: { 'mas-usados': 5 }, name: 'Ver IP, máscara y puerta de enlace',
    description: 'Útil cuando necesitas ver la configuración de red.', code: 'ipconfig '
  },
  {
    id: 'pc-ipconfig-all', category: 'cmd', name: 'IP, MAC y DNS',
    description: 'Configuración completa de cada adaptador de red.', code: 'ipconfig /all'
  },
  {
    id: 'cmd-nslookup', category: 'cmd', collections: { 'mas-usados': 3 }, name: 'Ver IP de un dominio o host',
    description: 'Muestra la dirección IP asociada a un nombre de dominio o host.', code: 'nslookup'
  },
  {
    id: 'cmd-ping', category: 'cmd', collections: { 'mas-usados': 4 }, name: 'Ping a un dominio o host',
    description: 'Verifica la conectividad con un servidor o host.', code: 'ping'
  },
  {
    id: 'cmd-driverquery', category: 'cmd', name: 'Ver información de controladores',
    description: 'Muestra información sobre los controladores instalados.', code: 'driverquery'
  },
  {
    id: 'cmd-flushdns', category: 'cmd', collections: { 'mas-usados': 1 }, name: 'Limpiar caché DNS',
    description: 'Útil cuando un sitio no carga o apunta al servidor viejo.', code: 'ipconfig /flushdns'
  },

  {
    id: 'cmd-netstat', category: 'cmd', name: 'Conexiones y puertos activos',
    description: 'Lista conexiones TCP con el PID de cada proceso.', code: 'netstat -ano'
  },
  {
    id: 'cmd-gpupdate', category: 'cmd', name: 'Forzar actualización de directivas',
    description: 'Aplica de inmediato las directivas de grupo (GPO).', code: 'gpupdate /force'
  },
  {
    id: 'cmd-netsh-profile', category: 'cmd', name: 'Mostrar perfiles de red WIFI',
    description: 'Muestra los perfiles de red guardados.', code: 'netsh wlan show profile'
  },
  {
    id: 'cmd-netsh-password', category: 'cmd', collections: { 'mas-usados': 1 }, name: 'Mostrar contraseñas de red WIFI',
    description: 'Muestra las contraseñas de los perfiles de red guardados.', code: 'netsh wlan show profile name="NOMBRE_DEL_PERFIL" key=clear'
  },
  {
    id: 'cmd-net-user', category: 'cmd', name: 'Mostrar información de usuario',
    description: 'Muestra información sobre un usuario específico.', code: 'net user [nombre usuario]'
  },


  // ── PowerShell ─────────────────────────────────────────────
  {
    id: 'ps-get-service', category: 'powershell', name: 'Listar servicios en ejecución',
    description: 'Servicios activos ordenados por nombre.',
    code: 'Get-Service | Where-Object Status -eq "Running" | Sort-Object Name',
    images: [
      '/public/powershell/servicios-ejecucion.png',
    ]
  },
  {
    id: 'ps-cls', category: 'powershell', name: 'Limpiar pantalla',
    description: 'Borra todo el contenido de la consola.', code: 'cls'
  },

  {
    id: 'ps-netconfig', category: 'powershell', name: 'Configuración de red',
    description: 'IP, puerta de enlace y DNS de cada adaptador.', code: 'Get-NetIPConfiguration'
  },

  {
    id: 'ps-hotfix', category: 'powershell', name: 'Actualizaciones instaladas',
    description: 'Parches instalados, del más reciente al más antiguo.', code: 'Get-HotFix | Sort-Object InstalledOn -Descending'
  },
  {
    id: 'ps-top-cpu', category: 'powershell', name: 'Procesos que más CPU consumen',
    description: 'Los 10 procesos con mayor uso de CPU.', code: 'Get-Process | Sort-Object CPU -Descending | Select-Object -First 10'
  },
  {
    id: 'pc-serial', category: 'powershell', collections: { 'conocer-tu-pc': 3 }, name: 'Número de serie del equipo',
    description: 'Imprescindible para garantías y tickets con el fabricante.', code: 'Get-CimInstance Win32_BIOS | Select-Object SerialNumber',
    images: [
      '/public/powershell/NumeroSerieEquipo.png',
    ]
  },
  {
    id: 'pc-cpu', category: 'powershell', collections: { 'conocer-tu-pc': 6 }, name: 'Procesador',
    description: 'Modelo y número de núcleos.', code: 'Get-CimInstance Win32_Processor | Select-Object Name, NumberOfCores'
  },
  {
    id: 'pc-disks', category: 'powershell', collections: { 'conocer-tu-pc': 7 }, name: 'Discos y tipo (SSD/HDD)',
    description: 'Modelo, tipo y tamaño de cada disco.', code: 'Get-PhysicalDisk | Select-Object FriendlyName, MediaType, Size',
    images: [
      '/public/powershell/disco-ssd.png',
    ]
  },
  {
    id: 'pc-ram', category: 'powershell', collections: { 'conocer-tu-pc': 4 }, name: 'Memoria RAM',
    description: 'Capacidad y velocidad de la memoria.', code: 'Get-CimInstance Win32_PhysicalMemory | Select-Object BankLabel, Manufacturer, PartNumber, Speed, @{Name="Capacity(GB)";Expression={[math]::Round($_.Capacity/1GB, 2)}} | Format-Table -AutoSize'
  },
  {
    id: 'pc-baseboard', category: 'powershell', collections: { 'conocer-tu-pc': 8 }, name: 'Placa base',
    description: 'Fabricante, producto, versión y número de serie.', code: 'Get-CimInstance Win32_BaseBoard | Select-Object Manufacturer, Product, Version, SerialNumber'
  },
  {
    id: 'pc-video', category: 'powershell', collections: { 'conocer-tu-pc': 8 }, name: 'Tarjeta gráfica',
    description: 'Modelo, memoria y versión del controlador.', code: 'Get-CimInstance Win32_VideoController | Select-Object Name, AdapterRAM, DriverVersion'
  },
  {
    id: 'pc-events', category: 'powershell', collections: { 'conocer-tu-pc': 8 }, name: 'Eventos del sistema',
    description: 'Muestra los errores del sistema  de un dia del equipo ', code: 'Get-WinEvent -FilterHashtable @{LogName="System"; Level=2; StartTime=(Get-Date).AddDays(-1)}'
  },


  // REGEDIT
  {
    id: 'reg-ruta', category: 'regedit', name: 'Carpetas del Usuario',
    description: 'Aquí Windows guarda las ubicaciones reales del Escritorio, Documentos, Descargas e Imágenes', code: 'HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\User Shell Folders',
    images: [
      '/public/regedit/carpetas-rutas.png',
    ]
  },
];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);

// Si el slug es una colección devuelve sus comandos ordenados; si no, los de esa categoría.
export const getCommandsByCategory = (slug: string) => {
  const inCollection = commands
    .filter((c) => c.collections?.[slug] !== undefined)
    .sort((a, b) => a.collections![slug] - b.collections![slug]);
  return inCollection.length ? inCollection : commands.filter((c) => c.category === slug);
};

export const youtubeUrl = (c: Command) =>
  c.youtube ?? `https://www.youtube.com/results?search_query=${encodeURIComponent(c.name + ' windows')}`;
