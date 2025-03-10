// THis interface is created based on current login response data.
// So, this response type may change when finalized the Authorization workflow with RBAC
export interface AuthResponse {

  email: string;
  name: string;
  id: number;
  status: number
  session: Session;
}

interface Session {
  accessToken: string;
  accessExpiresIn: number;
  refreshToken: string;
  refreshExpiresIn: number;
}
