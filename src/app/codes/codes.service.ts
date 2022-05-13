import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Code } from './code.model';

@Injectable()
export class CodesService {
  constructor(
    // user repository model
    @InjectModel('codes') private readonly codeModel: Model<Code>,

  ) {}

  async insertCode(name: string, type: string) {
    const newUser = new this.codeModel({
        name,
        type,
    });
    const result = await newUser.save();
    return result.id as string;
  }

  async getCodes() {
    const codes = await this.codeModel.find().exec();
    return codes.map(code => ({
      id: code.id,
      name: code.name,
      type: code.type,
      // created_at: code.createdAt
    }));
  }

  async getSingleCode(productId: string) {
    const user = await this.findCode(productId);
    return {
      id: user.id,
      name: user.name,
      type: user.type,
    };
  }

  async updateCode(
    id: string,
    name: string,
    type: string,
  ) {
    const updatedCode= await this.findCode(id);
    if (name) {
      updatedCode.name = name;
    }
    if (type) {
      updatedCode.type = type;
    }
   
    updatedCode.save();
  }

  async deleteCode(codeId: string) {
    const code = await this.findCode(codeId);
    code.remove();    
    return code;
  }

  /////////////////// Helper Method ////////////////
  private async findCode(id: string): Promise<Code> {
    let code;
    try {
      code = await this.codeModel.findById(id).exec();
      if (!code) {
        throw new NotFoundException('Could not find code.');
      }
    } catch (error) {
      throw new NotFoundException('Could not find code.');
    }
    
    return code;
  }
}
