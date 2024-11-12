export type VendorType = {
  id: string;
  store_name: string;
  store_address: string;
  store_bio: string;
  contact_number: string;
  owner: number;
  avatar_url: string;
};

export interface iProps {
  params: { id: string };
}
