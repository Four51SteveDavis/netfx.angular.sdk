export * from './adminUser.service';
import { NetFxAdminUserService } from './adminUser.service';
export * from './user.service';
import { NetFxUserService } from './user.service';
export * from './auth.service';
import { NetFxAuthService } from './auth.service';
export * from './token.service';
import { NetFxTokenService } from './token.service';
export const APIS = [NetFxAdminUserService, NetFxUserService, NetFxAuthService, NetFxTokenService];
