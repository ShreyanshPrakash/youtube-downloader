interface NavConfig {
  label: string;
  link: string;
}
const HEADER_NAV_CONFIG: Array<NavConfig> = [
  {
    label: "Download",
    link: "/download",
  },
  {
    label: "Help",
    link: "/help",
  },
];


interface SupportedPlatforms {
  [key: string]: Platform;
}
interface Platform {
  name: string;
  path: string;
}
const SUPPORTED_PLATFORMS: SupportedPlatforms = {
  "youtube": {
    name: "youtube",
    path: "https://www.youtube.com/",
  }
}

export const APP_CONFIG = {
  rootPath: "/home",
  HEADER_NAV_CONFIG,
  SUPPORTED_PLATFORMS,
};