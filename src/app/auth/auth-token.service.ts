// import jwt from 'jsonwebtoken';
// import { IAuthenticatedUserPayload } from './auth.types';
// import { ConfigService } from '../../config/config.service';

// const configService = new ConfigService();

// export const AuthTokenService = {
//   verify: (token: string): Promise<IAuthenticatedUserPayload> => {
//     return new Promise((resolve, reject) => {
//       jwt.verify(token, configService.getJWTSecretKey(), (err, decoded) => {
//         if (err) {
//           return reject(err);
//         }
//         return resolve(decoded as IAuthenticatedUserPayload);
//       });
//     });
//   },
//   sign: (payload: IAuthenticatedUserPayload): string => {
//     return jwt.sign(payload, configService.getJWTSecretKey(), {
//       expiresIn: configService.getJWTTokenExpiration(),
//     });
//   },
// };
