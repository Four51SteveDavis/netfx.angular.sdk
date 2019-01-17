import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { NetFxAdminUserService } from './api/adminUser.service';
import { NetFxCustomerService } from './api/customer.service';
import { NetFxUserService } from './api/user.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    NetFxAdminUserService,
    NetFxCustomerService,
    NetFxUserService ]
})
export class NetFxModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: NetFxModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: NetFxModule,
	  @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('NetFxModule is already loaded. Import your base AppModule only.');
        }
		if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
