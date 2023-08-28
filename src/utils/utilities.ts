import { APP_CONFIG, FILE_SIZE_UNIT_MULTIPLIER } from "config";

export const isValidVideoUrl = (videoUrl: string): boolean => {
  const isValid = videoUrl.startsWith(
    APP_CONFIG.SUPPORTED_PLATFORMS.youtube.path
  );
  return isValid;
};

type FileSizeUnit = "KB" | "MB";
export const getFormatedFileSize = (filesize: number, unit: FileSizeUnit, decimalPlaces: number = 2): number => {
  if(!filesize){
    return 0;
  }
  const divisor = FILE_SIZE_UNIT_MULTIPLIER[unit];
  const result = (filesize/divisor).toFixed(decimalPlaces);
  return Number(result);
}
