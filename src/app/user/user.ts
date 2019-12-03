export interface User {
    id: number;
    username: string;
    email: string;
    password: string;
    birthdate: Date;
    registeredAt: Date;
    enabled: boolean;
  }
  
  export interface UserFormDTO {
  username: string;
  enabled: boolean;
  }
  