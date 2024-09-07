import { ReactNode } from "react";

// Type of button
export type ChildrenProps = {
  children: React.ReactNode;
  bgColor?: string;
  textColor?: string;
  bgHoverColor?: string;
  textHoverColor?: string;
  uppercase?: string;
  width?: string;
};

export interface IStatProp {
  id: number;
  statNumber: string;
  statDesc?: string;
  title: string;
}

export interface ISectHeadProps {
  sectionHead: string;
  sectionDesc?: string;
}
export interface IListItem {
  id: number | string;
  title: string;
  icon: string;
}
export interface IListProps {
  data: IListItem[];
  listTitle?: string;
}
export interface IBtnProps {
  children: ReactNode;
}
export interface ISmallCardProps {
  id?: string | number;
  bgImg: string;
  order: string;
}

export type smallCardImgProps = {
  id: string | number;
  image: string;
};
