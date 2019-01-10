export * from './user.service';
import { UserService } from './user.service';
export * from './auth.service';
import { NetFxAuthService } from './auth.service';
export * from './token.service';
import { NetFxTokenService } from './token.service';
export const APIS = [UserService, NetFxAuthService, NetFxTokenService];
