/**
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Injectable, Optional } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { Configuration } from '../configuration';


@Injectable({
    providedIn: 'root'
})
export class NetFxTokenService {

    private authTokenCookieName: string;
    private refreshTokenCookieName: string;


    constructor( @Optional() configuration: Configuration, protected cookies: CookieService) {
        const cookiePrefix = configuration.cookiePrefix || 'netfx';

        this.authTokenCookieName = cookiePrefix + '.token';
        this.refreshTokenCookieName = cookiePrefix + '.refresh.token';
    }

    public Get() {
        return this.cookies.get(this.authTokenCookieName);
    }

    public Set(token: string) {
        this.cookies.put(this.authTokenCookieName, token);
    }

    public Delete() {
        this.cookies.remove(this.authTokenCookieName);
    }

    public GetRefresh() {
        return this.cookies.get(this.refreshTokenCookieName);
    }

    public SetRefresh(token: string) {
        return this.cookies.put(this.refreshTokenCookieName, token);
    }
}
