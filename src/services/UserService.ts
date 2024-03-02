// src/services/UserService.ts
import User, { IUser } from '../models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export class UserService {
  static async createUser(username: string, email: string, password: string): Promise<IUser> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      username,
      email,
      password: hashedPassword,
    });
    return user.save();
  }

  static async findUserByEmail(email: string): Promise<IUser | null> {
    return User.findOne({ email });
  }

  static async comparePasswords(candidatePassword: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(candidatePassword, hashedPassword);
  }
  static async generateAuthToken(user: IUser): Promise<string> {
    const payload = {
      user: {
        id: user._id,
      },
    };

    const options = {
      expiresIn: '720h', // Token expiration time (adjust as needed)
    };

    return jwt.sign(payload, process.env.JWT_SECRET!, options);
  }
  
}
