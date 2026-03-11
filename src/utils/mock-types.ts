/**
 * Mock types to replace Basehub fragments
 */

export interface MediaFragment {
  __typename: "BlockImage" | "BlockVideo";
  url: string;
  alt?: string;
  width?: number;
  height?: number;
  blurDataURL?: string;
}

export interface ProjectItemFragment {
  _slug: string;
  _title: string;
  category?: string[];
  media: {
    items: Array<{
      media: MediaFragment;
    }>;
  };
}

export interface InfoFragment {
  title: string;
  subtitle: string;
  socialLinks: {
    items: Array<{
      label: string;
      url: string;
    }>;
  };
}

export interface AboutFragment {
  title: string;
  content: string;
}

