import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { NetFxAdminUserService } from './api/adminUser.service';
import { NetFxBillingAddressService } from './api/billingAddress.service';
import { NetFxCustomerService } from './api/customer.service';
import { NetFxCustomerUserService } from './api/customerUser.service';
import { NetFxShipmentService } from './api/shipment.service';
import { NetFxShipmentBlindAddressService } from './api/shipmentBlindAddress.service';
import { NetFxShipmentDestinationAddressService } from './api/shipmentDestinationAddress.service';
import { NetFxShipmentItemService } from './api/shipmentItem.service';
import { NetFxShipmentOriginAddressService } from './api/shipmentOriginAddress.service';
import { NetFxShipmentRateService } from './api/shipmentRate.service';
import { NetFxShippingAddressService } from './api/shippingAddress.service';
import { NetFxUserService } from './api/user.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    NetFxAdminUserService,
    NetFxBillingAddressService,
    NetFxCustomerService,
    NetFxCustomerUserService,
    NetFxShipmentService,
    NetFxShipmentBlindAddressService,
    NetFxShipmentDestinationAddressService,
    NetFxShipmentItemService,
    NetFxShipmentOriginAddressService,
    NetFxShipmentRateService,
    NetFxShippingAddressService,
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
