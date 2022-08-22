import { JwtPayload } from 'jsonwebtoken';

export default interface IPayload extends JwtPayload {
  data: {
    email: string;
  }
}
