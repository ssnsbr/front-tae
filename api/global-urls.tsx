export const root: string = "http://127.0.0.1:8000/";

export const products_list_url: string = root + "api/product/";
export const single_product_url: string = root + "api/product/";
export const product_media_url: string = root + "api/product/media/";
export const product_detail_url: string = root + "api/product/";
export const vendors_url: string = root + "api/vendor/";
export const vendor_detail_url: string = root + "api/vendor/";

const auth: string = root + "api/dj-rest-auth/";
export const user_url: string = root + "api/dj-rest-auth/user/";
export const login_url: string = auth + "login/";
export const logout_url: string = auth + "logout/";
export const register_url: string = auth + "registration/";

export const password_change_url: string = auth + "password/change/";
export const password_reset_url: string = auth + "password/reset/";
export const password_reset_confirm_url: string =
  auth + "password/reset/confirm/";

export const cart_item_url: string = root + "api/cart/cart-items/";

export const refresh_token_url: string =
  root + "api/dj-rest-auth/token/refresh/";
