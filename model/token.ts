export interface OAuthTokenRequest {
  grant_type: string;
  client_id: string;
  scope: Array<string>;
  username: string;
  password: string;
  client_secret: string;
}