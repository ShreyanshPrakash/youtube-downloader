import { APP_CONFIG } from "config";

export const isValidVideoUrl = (videoUrl: string): boolean => {
  const isValid = videoUrl.startsWith(
    APP_CONFIG.SUPPORTED_PLATFORMS.youtube.path
  );
  return isValid;
};
