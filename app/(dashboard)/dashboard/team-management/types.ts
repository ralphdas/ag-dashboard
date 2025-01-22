export type User = {
  [key: string]: any;
  id?: number;
  username: string;
  fullName?: string;
  firstName?: string;
  emailAddress: string;
  avatarUrl: string;
  type: "ADMIN" | "NETWORK_MANAGER" | "CONTENT_EDITOR";
  status: "ACTIVE" | "INACTIVE";
};
