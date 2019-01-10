# NetFx.io's Angular SDK

> The official client library for Angular (6.0.0+) NetFx.io platform

This SDK aims to greatly improve developer productivity and reduce errors by providing discoverable, strongly-typed wrappers for all public endpoints and request/response models.

All included methods are a 1:1 reflection of the API with the *addition* of the `NetFxAuthService` for authentication and the `NetFxTokenService` exposed as a convenience service for setting and getting authentication tokens

### Acknowledgement

This Angular SDK is made possible by leveraging [Swagger's](https://swagger.io/) open source tools with our Open API Specification: `https://netfx.io/swagger`

### Requirements
* angular 6.0.0+
* [ngx-cookie](https://github.com/salemdar/ngx-cookie) 4.0.0+

### Installation

From the npm registry:

```
npm install --save @netfx/angular2-typescript-netfx
```

### Configuration

In your root app module:

```typescript
import { NetFxModule, Configuration } from '@netfx/angular2-typescript-netfx';

export function apiConfigFactory() {
  return new Configuration({
    authPath: `https:\\api.netfx.io\oauth\token`,
    basePath: `https:\\api.netfx.io`,
    cookiePrefix: `netfx`,
  });
}

@NgModule({
  declarations: [...],
  imports: [
    NetFxModule.forRoot(apiConfigFactory),
     ...
  ],
  providers: [...]
  bootstrap: [AppComponent]
})
export class AppModule {}
```

### Example API call for OAuth authentication

```typescript
import { Component, OnInit, Input } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { TokenRequest } from './token-request';
import { NetFxAuthService, NetFxTokenService } from '@netfx/angular2-typescript-netfx';

@Component({
  selector: 'netfx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() credentials: TokenRequest = new TokenRequest();

  constructor(
    private toastr: ToastrService,
    private authService: NetFxAuthService,
    private tokenService: NetFxTokenService
  ) {
    this.credentials.username = 'example_username';
    this.credentials.password = 'XXXX';
    this.credentials.client_id = 'XXXX';
    this.credentials.grant_type = 'password';
    this.credentials.scope = ['FullAccess'];
  }

  ngOnInit() {
  }

  login(): void {
    this.authService.Get(this.credentials).subscribe(response => {
        this.tokenService.Set(response.access_token);
        this.toastr.success('Success', 'Login Attempt');
    });
  }

}
```