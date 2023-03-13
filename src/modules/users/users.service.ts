import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import * as bcrypt from 'bcrypt';

import { Product } from '@/modules/products/models/products.model';

import { CreateUserDTO, UpdateUserDTO } from './dto/index';
import { User } from './models/user.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private readonly userRepository: typeof User,
  ) {}

  async hashPassword(password: string): Promise<string> {
    try {
      return bcrypt.hash(password, 10);
    } catch (e) {
      throw new Error(e);
    }
  }

  async findUserByEmail(email: string): Promise<User> {
    try {
      return this.userRepository.findOne({
        where: { email: email },
        include: {
          model: Product,
          required: false,
        },
      });
    } catch (e) {
      throw new Error(e);
    }
  }

  async createUser(dto: CreateUserDTO): Promise<CreateUserDTO> {
    try {
      dto.password = await this.hashPassword(dto.password);
      await this.userRepository.create({
        email: dto.email,
        password: dto.password,
        fullName: dto.fullName,
        phoneNumber: dto.phoneNumber,
        address: dto.address,
        legalForm: dto.legalForm,
        kindOfActivity: dto.kindOfActivity,
      });
      return dto;
    } catch (e) {
      throw new Error(e);
    }
  }

  async publicUser(email: string): Promise<CreateUserDTO> {
    try {
      return this.userRepository.findOne({
        where: { email },
        attributes: { exclude: ['password'] },
        include: {
          model: Product,
          required: false,
        },
      });
    } catch (e) {
      throw new Error(e);
    }
  }

  async updateUser(email: string, dto: UpdateUserDTO): Promise<UpdateUserDTO> {
    try {
      await this.userRepository.update(dto, { where: { email } });
      return dto;
    } catch (e) {
      throw new Error(e);
    }
  }

  async deleteUser(email: string): Promise<boolean> {
    try {
      await this.userRepository.destroy({ where: { email } });
      return true;
    } catch (e) {
      throw new Error(e);
    }
  }
}
