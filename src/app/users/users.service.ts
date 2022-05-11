import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(
    // user repository model
    @InjectModel('users') private readonly userModel: Model<User>,

  ) {}

  async insertUser(name: string, wallet_address: string, is_active: boolean) {
    const newUser = new this.userModel({
        name,
        wallet_address,
        is_active,
    });
    const result = await newUser.save();
    return result.id as string;
  }

  async getUsers() {
    const products = await this.userModel.find().exec();
    return products.map(prod => ({
      id: prod.id,
      name: prod.name,
      wallet_address: prod.wallet_address,
      is_active: prod.is_active,
    }));
  }

//   async getSingleProduct(productId: string) {
//     const user = await this.findProduct(productId);
//     return {
//       id: user.id,
//       title: user.name,
//       description: user.wallet_address,
//       price: user.is_active,
//     };
//   }

//   async updateProduct(
//     productId: string,
//     title: string,
//     desc: string,
//     price: number,
//   ) {
//     const updatedProduct = await this.findProduct(productId);
//     if (title) {
//       updatedProduct.title = title;
//     }
//     if (desc) {
//       updatedProduct.description = desc;
//     }
//     if (price) {
//       updatedProduct.price = price;
//     }
//     updatedProduct.save();
//   }

//   async deleteProduct(prodId: string) {
//     const result = await this.productModel.deleteOne({_id: prodId}).exec();
//     if (result.n === 0) {
//       throw new NotFoundException('Could not find product.');
//     }
//   }

//   private async findProduct(id: string): Promise<User> {
//     let product;
//     try {
//       product = await this.productModel.findById(id).exec();
//     } catch (error) {
//       throw new NotFoundException('Could not find product.');
//     }
//     if (!product) {
//       throw new NotFoundException('Could not find product.');
//     }
//     return product;
//   }
}
