declare module 'heic2any' {
  interface HeicOptions {
    blob: Blob;
    toType?: string;
    quality?: number;
  }
  
  function heic2any(options: HeicOptions): Promise<Blob | Blob[]>;
  
  export default heic2any;
} 