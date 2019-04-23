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

import { ListSupplier } from '../model/listSupplier';
import { Supplier } from '../model/supplier';

import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';
import { NetFxTokenService } from './token.service';


@Injectable()
export class NetFxSupplierService {

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
     * @param id Id of the supplier.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public Delete(id: string, options?: { observe?: 'body', reportProgress?: boolean}): Observable<any>;
    public Delete(id: string, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<any>>;
    public Delete(id: string, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<any>>;
    public Delete(id: string, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
		const opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }
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

        return this.httpClient.delete<any>(`${this.basePath}suppliers/${encodeURIComponent(String(id))}`,
            {
                headers: headers,
                observe: opts.observe,
                reportProgress: opts.reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param id Id of the supplier.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public Get(id: string, options?: { observe?: 'body', reportProgress?: boolean}): Observable<Supplier>;
    public Get(id: string, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<Supplier>>;
    public Get(id: string, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<Supplier>>;
    public Get(id: string, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
		const opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }
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

        return this.httpClient.get<Supplier>(`${this.basePath}suppliers/${encodeURIComponent(String(id))}`,
            {
                headers: headers,
                observe: opts.observe,
                reportProgress: opts.reportProgress
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
    public List(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: { [key: string]: string | Array<string>; }, observe?: 'body', reportProgress?: boolean}): Observable<ListSupplier>;
    public List(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: { [key: string]: string | Array<string>; }, observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<ListSupplier>>;
    public List(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: { [key: string]: string | Array<string>; }, observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<ListSupplier>>;
    public List(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: { [key: string]: string | Array<string>; }, observe?: any, reportProgress?: boolean}): Observable<any> {
		const opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (opts.search !== undefined && opts.search !== null) {
            queryParameters = queryParameters.set('search', <any>opts.search);
        }
		if (opts.search === null) {
            throw new Error('Parameter search was null when calling List. Null values are not allowed');
        }														
        if (opts.searchOn !== undefined && opts.searchOn !== null) {
            queryParameters = queryParameters.set('searchOn', <any>opts.searchOn);
        }
		if (opts.searchOn === null) {
            throw new Error('Parameter searchOn was null when calling List. Null values are not allowed');
        }														
        if (opts.sortBy !== undefined && opts.sortBy !== null) {
            queryParameters = queryParameters.set('sortBy', <any>opts.sortBy);
        }
		if (opts.sortBy === null) {
            throw new Error('Parameter sortBy was null when calling List. Null values are not allowed');
        }														
        if (opts.page !== undefined && opts.page !== null) {
            queryParameters = queryParameters.set('page', <any>opts.page);
        }
		if (opts.page === null) {
            throw new Error('Parameter page was null when calling List. Null values are not allowed');
        }														
        if (opts.pageSize !== undefined && opts.pageSize !== null) {
            queryParameters = queryParameters.set('pageSize', <any>opts.pageSize);
        }
		if (opts.pageSize === null) {
            throw new Error('Parameter pageSize was null when calling List. Null values are not allowed');
        }														
        if (opts.filters !== undefined && opts.filters !== null) {
            queryParameters = this.configuration.unwrapFilters(opts.filters, queryParameters, 'List');
        }
		if (opts.filters === null) {
            throw new Error('Parameter filters was null when calling List. Null values are not allowed');
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

        return this.httpClient.get<ListSupplier>(`${this.basePath}suppliers`,
            {
                params: queryParameters,
                headers: headers,
                observe: opts.observe,
                reportProgress: opts.reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param supplier 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public Post(supplier: Supplier, options?: { observe?: 'body', reportProgress?: boolean}): Observable<Supplier>;
    public Post(supplier: Supplier, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<Supplier>>;
    public Post(supplier: Supplier, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<Supplier>>;
    public Post(supplier: Supplier, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
		const opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }
        if (supplier === null || supplier === undefined) {
            throw new Error('Required parameter supplier was null or undefined when calling post.');
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

        return this.httpClient.post<Supplier>(`${this.basePath}suppliers`,
            supplier,
            {
                headers: headers,
                observe: opts.observe,
                reportProgress: opts.reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param id Id of the supplier.
     * @param supplier 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public Put(id: string, supplier: Supplier, options?: { observe?: 'body', reportProgress?: boolean}): Observable<Supplier>;
    public Put(id: string, supplier: Supplier, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<Supplier>>;
    public Put(id: string, supplier: Supplier, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<Supplier>>;
    public Put(id: string, supplier: Supplier, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
		const opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling put.');
        }
        if (supplier === null || supplier === undefined) {
            throw new Error('Required parameter supplier was null or undefined when calling put.');
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

        return this.httpClient.put<Supplier>(`${this.basePath}suppliers/${encodeURIComponent(String(id))}`,
            supplier,
            {
                headers: headers,
                observe: opts.observe,
                reportProgress: opts.reportProgress
            }
        );
    }

} 