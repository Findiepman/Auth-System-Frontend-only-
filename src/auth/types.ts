export interface User {
  id: string;
  username: string;
  password: string; // plain text ok voor demo
}

export interface Session {
  userId: string;
  createdAt: number;
}
