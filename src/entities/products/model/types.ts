/* eslint-disable no-unused-vars */

export type TResolution = [number, number];

export interface IIcon {
  resolutions: TResolution[];
  id: string;
}

export interface ILine {
  name: string;
  id: string;
}

export interface IProduct {
  abbrev: string;
  name: string;
}

export interface IDevice {
  id: string;
  line: ILine;
  icon: IIcon;
  product: IProduct;
  shortnames: string[];
}

export interface QueryDataProps {
  version: string;
  devices: IDevice[];
}

export enum ProductsViewMode {
  List = 'list',
  Grid = 'grid',
}
