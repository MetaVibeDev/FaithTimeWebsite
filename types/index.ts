import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface FaithTimeItem {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  'content-title': {
    value: string;
    rendered: string;
  };
  'content-subtitle': {
    value: string;
    rendered: string;
  };
  'content-text': {
    value: string;
    rendered: string;
  };
  'content-image': {
    value: {
      ID: string;
      guid: string;
      // 其他图片字段...
    };
    rendered: string;
  };
  // 其他字段...
}
