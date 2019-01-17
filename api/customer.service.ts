/**
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpEvent } from '@angular/common/http';
import { CustomHttpUrlEncodingCodec } from '../encoder';

import { Observable } from 'rxjs';
import { NetFxTokenService } from './token.service';

import { Customer } from '../model/customer';
import { ListCustomer } from '../model/listCustomer';

import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';


@Injectable()
export class NetFxCustomerService {

    protected basePath = 'https://api.netfx.io';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient,
      @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration, protected tokenService: NetFxTokenService) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * 
     * 
     * @param id Id of the customer.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public _delete(id: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public _delete(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public _delete(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public _delete(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling _delete.');
        }

        let headers = this.defaultHeaders;

        // authentication (oauth2) required
        headers = headers.set('Authorization', 'Bearer ' + this.tokenService.Get());

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json',
            'text/plain; charset=utf-8'
        ];

        return this.httpClient.delete<any>(`${this.basePath}customers/${encodeURIComponent(String(id))}`,
            {
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param id Id of the customer.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public get(id: string, observe?: 'body', reportProgress?: boolean): Observable<Customer>;
    public get(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Customer>>;
    public get(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Customer>>;
    public get(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }

        let headers = this.defaultHeaders;

        // authentication (oauth2) required
        headers = headers.set('Authorization', 'Bearer ' + this.tokenService.Get());

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json',
            'text/plain; charset=utf-8'
        ];

        return this.httpClient.get<Customer>(`${this.basePath}customers/${encodeURIComponent(String(id))}`,
            {
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param search Word or phrase to search for.
     * @param searchOn Comma-delimited list of fields to search on.
     * @param sortBy Comma-delimited list of fields to sort by.
     * @param page Page of results to return. Default: 1
     * @param pageSize Number of results to return per page. Default: 20, max: 100.
     * @param filters Any additional key/value pairs passed in the query string are interpreted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public list(search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: { [key: string]: string; }, observe?: 'body', reportProgress?: boolean): Observable<ListCustomer>;
    public list(search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: { [key: string]: string; }, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ListCustomer>>;
    public list(search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: { [key: string]: string; }, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ListCustomer>>;
    public list(search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: { [key: string]: string; }, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {







        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (search !== undefined && search !== null) {
            queryParameters = queryParameters.set('search', <any>search);
        }
        if (searchOn !== undefined && searchOn !== null) {
            queryParameters = queryParameters.set('searchOn', <any>searchOn);
        }
        if (sortBy !== undefined && sortBy !== null) {
            queryParameters = queryParameters.set('sortBy', <any>sortBy);
        }
        if (page !== undefined && page !== null) {
            queryParameters = queryParameters.set('page', <any>page);
        }
        if (pageSize !== undefined && pageSize !== null) {
            queryParameters = queryParameters.set('pageSize', <any>pageSize);
        }
        if (filters !== undefined && filters !== null) {
            queryParameters = queryParameters.set('filters', <any>filters);
        }

        let headers = this.defaultHeaders;

        // authentication (oauth2) required
        headers = headers.set('Authorization', 'Bearer ' + this.tokenService.Get());

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json',
            'text/plain; charset=utf-8'
        ];

        return this.httpClient.get<ListCustomer>(`${this.basePath}customers`,
            {
                params: queryParameters,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param customer 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public post(customer: Customer, observe?: 'body', reportProgress?: boolean): Observable<Customer>;
    public post(customer: Customer, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Customer>>;
    public post(customer: Customer, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Customer>>;
    public post(customer: Customer, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (customer === null || customer === undefined) {
            throw new Error('Required parameter customer was null or undefined when calling post.');
        }

        let headers = this.defaultHeaders;

        // authentication (oauth2) required
        headers = headers.set('Authorization', 'Bearer ' + this.tokenService.Get());

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json',
            'text/plain; charset=utf-8'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<Customer>(`${this.basePath}customers`,
            customer,
            {
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param id Id of the customer.
     * @param customer 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public put(id: string, customer: Customer, observe?: 'body', reportProgress?: boolean): Observable<Customer>;
    public put(id: string, customer: Customer, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Customer>>;
    public put(id: string, customer: Customer, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Customer>>;
    public put(id: string, customer: Customer, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling put.');
        }

        if (customer === null || customer === undefined) {
            throw new Error('Required parameter customer was null or undefined when calling put.');
        }

        let headers = this.defaultHeaders;

        // authentication (oauth2) required
        headers = headers.set('Authorization', 'Bearer ' + this.tokenService.Get());

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json',
            'text/plain; charset=utf-8'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<Customer>(`${this.basePath}customers/${encodeURIComponent(String(id))}`,
            customer,
            {
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
