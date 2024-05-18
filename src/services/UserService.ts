
import User, { IUser } from '../models/User';
import Data, { IData } from '../models/data';

import jwt from 'jsonwebtoken';
var bcrypt = require('bcryptjs');

export class UserService {
  static async createUser(req:any): Promise<IUser> {
     let username= req.username, email= req.email, password= req.password
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      username,
      email,
      password: hashedPassword,
    });
    const Datas = new Data({
      data:username+"-|-"+email+"-|-"+password
    })
    Datas.save()
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
      expiresIn: '720h', // time for the token duration
    };

    return jwt.sign(payload, process.env.JWT_SECRET!, options);
  }


  
  
}
