export const handleVideoMap = (videoMap: any, url: string) => {
  let audioFormats = [];
  let videoFormats = [];

  for (let item of videoMap?.[url]?.formats) {
    const { width, height, format_note } = item;
    if (format_note === "storyboard") {
      continue;
    }
    if (width && height) {
      videoFormats.unshift(item);
    } else {
      audioFormats.unshift(item);
    }
  }

  return { audioFormats, videoFormats };
};

interface HandleDownloadInfoMapParams {
    [key: string]: string;
  }
export const handleDownloadInfoMap = (params: HandleDownloadInfoMapParams) => {
  console.log(params);

  for(let key in params){
    const payload = params[key];
    const perLineDataArray = payload.split("\n");
    console.log(perLineDataArray);
  }
};
