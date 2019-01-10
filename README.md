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
npm install --save @netfx/angular-sdk
```

### Configuration

In your root app module:

```typescript
import { NetFxModule, Configuration } from '@netfx/angular-sdk';

@NgModule({
  declarations: [...],
  imports: [
    NetFxModule.forRoot(() => new Configuration({})),
     ...
  ],
  providers: [...]
  bootstrap: [AppComponent]
})
export class AppModule {}
```

### Your First API Call

Now that your app is configured you can authenticate and make your
first api call!

```typescript
import { NetFxAuthService, NetFxTokenService, UserService } from '@netfx/angular-sdk';

@Component({
  selector: '...',
  templateUrl: '...',
  styleUrls: ['...']
})

export class LoginComponent {
  constructor(
    private authService: NetFxAuthService,
    private tokenService: NetFxTokenService,
    private userService: NetFxUserService
  ) { }

  login() {
    let username = 'myUsername';
    let password = 'myPassword123';
    let clientid = 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX';
    let scope = [ 'FullAccess' ];

    // login as this user
    return this.authService.Login(username, password, clientid, scope).subscribe(
        authResponse => {
          
          // set the access token in the cookies, now any subsequent calls to the api
          // will automatically have this token set in the headers
          this.ocTokenService.SetAccess(authResponse.access_token);

          // make call to get that user's details
          this.userService.Get().subscribe(
            currentUser => {

              // because we set that user's token a userService.Get will return details for that user
              console.log(currentUser)
            }
          )
        }
      );
  }
}
```