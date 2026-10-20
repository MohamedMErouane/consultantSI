// An image shown in a gallery (case studies, journey stories).
export type Media = {
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
  wide?: boolean; // spans the full gallery width (diagrams)
  thumb?: boolean; // used as the project card image
};
