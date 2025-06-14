export interface Language {
  code: string;
  name: string;
  flag: string;
}

export interface Wallpaper {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  preview: string;
  downloadUrl: string;
  category: 'static' | 'dynamic';
  deviceType: 'phone' | 'tablet' | 'desktop';
  tags: string[];
  resolution: string;
  fileSize: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  avatar: string;
  date: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Translation {
  [key: string]: {
    [key: string]: string;
  };
}