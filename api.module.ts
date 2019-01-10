import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Configuration } from './configuration';

@NgModule({
  imports:      [ CommonModule, HttpClientModule ]
})
export class NetFxModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: NetFxModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        }
    }

    constructor( @Optional() @SkipSelf() parentModule: NetFxModule) {
        if (parentModule) {
            throw new Error('NetFxModule is already loaded. Import your base AppModule only.');
        }
    }
}
