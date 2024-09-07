export type VendorType = {
  id: string;
  store_name: string;
  store_address: string;
  store_bio: string;
  contact_number: string;
  owner: number;
};

export interface iProps {
  params: { id: string };
}
