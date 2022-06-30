export type TConfig = {
  provider?: string;
  url?: string;
  qrcode_image_url?: string;
  email?: string;
};

export type TContentBlocks = {
  title: string;
  type: string;
  type_label: string;
  config: TConfig;
};
