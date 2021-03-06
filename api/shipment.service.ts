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

import { ListShipment } from '../model/listShipment';
import { Shipment } from '../model/shipment';
import { ShipmentDocuments } from '../model/shipmentDocuments';

import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';
import { NetFxTokenService } from './token.service';


@Injectable()
export class NetFxShipmentService {

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
     * @param customerId Customer id of the shipment.
     * @param shipmentId Shipment id of the shipment.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public Delete(customerId: string, shipmentId: string, options?: { observe?: 'body', reportProgress?: boolean}): Observable<any>;
    public Delete(customerId: string, shipmentId: string, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<any>>;
    public Delete(customerId: string, shipmentId: string, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<any>>;
    public Delete(customerId: string, shipmentId: string, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
		const opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }
        if (customerId === null || customerId === undefined) {
            throw new Error('Required parameter customerId was null or undefined when calling _delete.');
        }
        if (shipmentId === null || shipmentId === undefined) {
            throw new Error('Required parameter shipmentId was null or undefined when calling _delete.');
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

        return this.httpClient.delete<any>(`${this.basePath}shipment/${encodeURIComponent(String(customerId))}/${encodeURIComponent(String(shipmentId))}`,
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
     * @param customerId Customer id of the shipment.
     * @param shipmentId Shipment id of the shipment.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public Get(customerId: string, shipmentId: string, options?: { observe?: 'body', reportProgress?: boolean}): Observable<Shipment>;
    public Get(customerId: string, shipmentId: string, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<Shipment>>;
    public Get(customerId: string, shipmentId: string, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<Shipment>>;
    public Get(customerId: string, shipmentId: string, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
		const opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }
        if (customerId === null || customerId === undefined) {
            throw new Error('Required parameter customerId was null or undefined when calling get.');
        }
        if (shipmentId === null || shipmentId === undefined) {
            throw new Error('Required parameter shipmentId was null or undefined when calling get.');
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

        return this.httpClient.get<Shipment>(`${this.basePath}shipment/${encodeURIComponent(String(customerId))}/${encodeURIComponent(String(shipmentId))}`,
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
     * @param customerId Customer id of the shipment document.
     * @param shipmentId Shipment id of the shipment document.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public GetDocuments(customerId: string, shipmentId: string, options?: { observe?: 'body', reportProgress?: boolean}): Observable<ShipmentDocuments>;
    public GetDocuments(customerId: string, shipmentId: string, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<ShipmentDocuments>>;
    public GetDocuments(customerId: string, shipmentId: string, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<ShipmentDocuments>>;
    public GetDocuments(customerId: string, shipmentId: string, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
		const opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }
        if (customerId === null || customerId === undefined) {
            throw new Error('Required parameter customerId was null or undefined when calling getDocuments.');
        }
        if (shipmentId === null || shipmentId === undefined) {
            throw new Error('Required parameter shipmentId was null or undefined when calling getDocuments.');
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

        return this.httpClient.get<ShipmentDocuments>(`${this.basePath}shipment/${encodeURIComponent(String(customerId))}/${encodeURIComponent(String(shipmentId))}/docs`,
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
     * @param customerId Customer id of the shipment.
     * @param search Word or phrase to search for.
     * @param searchOn Comma-delimited list of fields to search on.
     * @param sortBy Comma-delimited list of fields to sort by.
     * @param page Page of results to return. Default: 1
     * @param pageSize Number of results to return per page. Default: 20, max: 100.
     * @param filters Any additional key/value pairs passed in the query string are interpreted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public List(customerId: string, options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: { [key: string]: string | Array<string>; }, observe?: 'body', reportProgress?: boolean}): Observable<ListShipment>;
    public List(customerId: string, options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: { [key: string]: string | Array<string>; }, observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<ListShipment>>;
    public List(customerId: string, options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: { [key: string]: string | Array<string>; }, observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<ListShipment>>;
    public List(customerId: string, options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: { [key: string]: string | Array<string>; }, observe?: any, reportProgress?: boolean}): Observable<any> {
		const opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }
        if (customerId === null || customerId === undefined) {
            throw new Error('Required parameter customerId was null or undefined when calling list.');
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

        return this.httpClient.get<ListShipment>(`${this.basePath}shipment/${encodeURIComponent(String(customerId))}`,
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
     * @param customerId Customer id of the shipment.
     * @param shipment 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public Post(customerId: string, shipment: Shipment, options?: { observe?: 'body', reportProgress?: boolean}): Observable<Shipment>;
    public Post(customerId: string, shipment: Shipment, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<Shipment>>;
    public Post(customerId: string, shipment: Shipment, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<Shipment>>;
    public Post(customerId: string, shipment: Shipment, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
		const opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }
        if (customerId === null || customerId === undefined) {
            throw new Error('Required parameter customerId was null or undefined when calling post.');
        }
        if (shipment === null || shipment === undefined) {
            throw new Error('Required parameter shipment was null or undefined when calling post.');
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

        return this.httpClient.post<Shipment>(`${this.basePath}shipment/${encodeURIComponent(String(customerId))}`,
            shipment,
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
     * @param customerId Customer id of the shipment.
     * @param shipmentId Shipment id of the shipment.
     * @param shipment 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public Put(customerId: string, shipmentId: string, shipment: Shipment, options?: { observe?: 'body', reportProgress?: boolean}): Observable<Shipment>;
    public Put(customerId: string, shipmentId: string, shipment: Shipment, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<Shipment>>;
    public Put(customerId: string, shipmentId: string, shipment: Shipment, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<Shipment>>;
    public Put(customerId: string, shipmentId: string, shipment: Shipment, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
		const opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }
        if (customerId === null || customerId === undefined) {
            throw new Error('Required parameter customerId was null or undefined when calling put.');
        }
        if (shipmentId === null || shipmentId === undefined) {
            throw new Error('Required parameter shipmentId was null or undefined when calling put.');
        }
        if (shipment === null || shipment === undefined) {
            throw new Error('Required parameter shipment was null or undefined when calling put.');
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

        return this.httpClient.put<Shipment>(`${this.basePath}shipment/${encodeURIComponent(String(customerId))}/${encodeURIComponent(String(shipmentId))}`,
            shipment,
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
     * @param customerId Customer id of the shipment.
     * @param shipmentId Shipment id of the shipment.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public SubmitShipment(customerId: string, shipmentId: string, options?: { observe?: 'body', reportProgress?: boolean}): Observable<Shipment>;
    public SubmitShipment(customerId: string, shipmentId: string, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<Shipment>>;
    public SubmitShipment(customerId: string, shipmentId: string, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<Shipment>>;
    public SubmitShipment(customerId: string, shipmentId: string, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
		const opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }
        if (customerId === null || customerId === undefined) {
            throw new Error('Required parameter customerId was null or undefined when calling submitShipment.');
        }
        if (shipmentId === null || shipmentId === undefined) {
            throw new Error('Required parameter shipmentId was null or undefined when calling submitShipment.');
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

        return this.httpClient.get<Shipment>(`${this.basePath}shipment/${encodeURIComponent(String(customerId))}/${encodeURIComponent(String(shipmentId))}/submit`,
            {
                headers: headers,
                observe: opts.observe,
                reportProgress: opts.reportProgress
            }
        );
    }

} 
