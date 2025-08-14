// Dinamik base path için utility fonksiyon
export const getAssetPath = (path: string): string => {
  // Eğer path zaten tam URL ise olduğu gibi döndür
  if (path.startsWith("http")) {
    return path;
  }

  // Development ortamında direkt path'i kullan
  if (import.meta.env.DEV) {
    return path;
  }

  // Production'da base path'i kontrol et
  const basePath = window.location.pathname;
  if (basePath.includes("/plesk-site-preview/")) {
    return `/plesk-site-preview/enesakmehmet.com.tr${path}`;
  }

  return path;
};
