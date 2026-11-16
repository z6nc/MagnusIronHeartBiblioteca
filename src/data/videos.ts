export type VideoAspectRatio = "9:16" | "16:9";

export interface Video {
  id: string;
  name: string;
  description: string;
  url: string;
  aspectRatio: VideoAspectRatio;
  category?: string;
  thumbnail?: string;
}

export const videos: Video[] = [
  {
    id: "video-barra-tareas",
    category: "YouTube",
    name: "Aprender a mover la barra de tareas en Windows 10 y 11",
    description:
      "Aprende a mover la barra de tareas en Windows 10 y 11 de manera facil.",
    url: "https://youtube.com/shorts/SAHgA5osy1g",
    aspectRatio: "16:9",
  },
  {
    id: "video-extensiones",
    category: "YouTube",
    name: "Cambia las extensiones de los archivos de manera sencilla",
    description:
      "Aprende a cambiar las extensiones de los archivos en Windows 10 y 11 de manera facil.",
    url: "https://youtube.com/shorts/3o7HTYr_ios",
    aspectRatio: "16:9",
  },
  {
    id: "video-apagar",
    category: "YouTube",
    name: "Cambia de suspender a apagar tu PC ",
    description:
      "Tu PC no se apaga de verdad: activa este ajuste para que se apague de manera correcta.",
    url: "https://youtube.com/shorts/aS5_Cf46z8E",
    aspectRatio: "16:9",
  },
  {
    id: "video-outlook",
    category: "YouTube",
    name: "Conoce las 3 versiones de Outlook ",
    description:
      "Conoce las ventajas y desventajas de las 3 versiones de Outlook y cuál es la mejor para ti.",
    url: "https://youtube.com/shorts/Gj-JAzRAfHM",
    aspectRatio: "16:9",
  },
  {
    id: "video-outlook",
    category: "YouTube",
    name: "Conoce las 3 versiones de Outlook ",
    description:
      "Conoce las ventajas y desventajas de las 3 versiones de Outlook y cuál es la mejor para ti.",
    url: "https://youtube.com/shorts/Gj-JAzRAfHM",
    aspectRatio: "16:9",
  },


];

export const getYouTubeVideoId = (url: string): string | undefined => {
  const parsedUrl = new URL(url);
  const hostname = parsedUrl.hostname.replace(/^www\./, "").toLowerCase();
  let videoId: string | null | undefined;

  if (hostname === "youtu.be") {
    videoId = parsedUrl.pathname.split("/").filter(Boolean)[0];
  } else if (
    hostname === "youtube.com" ||
    hostname === "m.youtube.com" ||
    hostname === "youtube-nocookie.com"
  ) {
    videoId =
      parsedUrl.searchParams.get("v") ??
      parsedUrl.pathname.match(/^\/(?:embed|shorts|live)\/([^/]+)/)?.[1];
  }

  return videoId && /^[\w-]{11}$/.test(videoId) ? videoId : undefined;
};
