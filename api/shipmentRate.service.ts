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

import { ListShipmentRate } from '../model/listShipmentRate';
import { ListShipmentRateQuote } from '../model/listShipmentRateQuote';
import { ListShipmentRateQuoteLog } from '../model/listShipmentRateQuoteLog';
import { ShipmentRate } from '../model/shipmentRate';

import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';
import { NetFxTokenService } from './token.service';


@Injectable()
export class NetFxShipmentRateService {

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
     * @param customerId Customer id of the shipment rate.
     * @param rateId Rate id of the shipment rate.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public Delete(customerId: string, rateId: string, options?: { observe?: 'body', reportProgress?: boolean}): Observable<any>;
    public Delete(customerId: string, rateId: string, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<any>>;
    public Delete(customerId: string, rateId: string, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<any>>;
    public Delete(customerId: string, rateId: string, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
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
        if (rateId === null || rateId === undefined) {
            throw new Error('Required parameter rateId was null or undefined when calling _delete.');
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

        return this.httpClient.delete<any>(`${this.basePath}shipment/rate/${encodeURIComponent(String(customerId))}/${encodeURIComponent(String(rateId))}`,
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
     * @param customerId Customer id of the shipment rate.
     * @param rateId Rate id of the shipment rate.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public Get(customerId: string, rateId: string, options?: { observe?: 'body', reportProgress?: boolean}): Observable<ShipmentRate>;
    public Get(customerId: string, rateId: string, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<ShipmentRate>>;
    public Get(customerId: string, rateId: string, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<ShipmentRate>>;
    public Get(customerId: string, rateId: string, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
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
        if (rateId === null || rateId === undefined) {
            throw new Error('Required parameter rateId was null or undefined when calling get.');
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

        return this.httpClient.get<ShipmentRate>(`${this.basePath}shipment/rate/${encodeURIComponent(String(customerId))}/${encodeURIComponent(String(rateId))}`,
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
     * @param customerId Customer id of the shipment rate.
     * @param shipmentRate 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public GetQuote(customerId: string, shipmentRate: ShipmentRate, options?: { observe?: 'body', reportProgress?: boolean}): Observable<ListShipmentRateQuote>;
    public GetQuote(customerId: string, shipmentRate: ShipmentRate, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<ListShipmentRateQuote>>;
    public GetQuote(customerId: string, shipmentRate: ShipmentRate, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<ListShipmentRateQuote>>;
    public GetQuote(customerId: string, shipmentRate: ShipmentRate, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
		const opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }
        if (customerId === null || customerId === undefined) {
            throw new Error('Required parameter customerId was null or undefined when calling getQuote.');
        }
        if (shipmentRate === null || shipmentRate === undefined) {
            throw new Error('Required parameter shipmentRate was null or undefined when calling getQuote.');
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

        return this.httpClient.post<ListShipmentRateQuote>(`${this.basePath}shipment/rate/${encodeURIComponent(String(customerId))}/quote`,
            shipmentRate,
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
     * @param customerId Customer id of the shipment rate quote.
     * @param rateId Rate id of the shipment rate quote.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public GetQuoteByRate(customerId: string, rateId: string, options?: { observe?: 'body', reportProgress?: boolean}): Observable<ListShipmentRateQuote>;
    public GetQuoteByRate(customerId: string, rateId: string, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<ListShipmentRateQuote>>;
    public GetQuoteByRate(customerId: string, rateId: string, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<ListShipmentRateQuote>>;
    public GetQuoteByRate(customerId: string, rateId: string, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
		const opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }
        if (customerId === null || customerId === undefined) {
            throw new Error('Required parameter customerId was null or undefined when calling getQuoteByRate.');
        }
        if (rateId === null || rateId === undefined) {
            throw new Error('Required parameter rateId was null or undefined when calling getQuoteByRate.');
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

        return this.httpClient.get<ListShipmentRateQuote>(`${this.basePath}shipment/rate/${encodeURIComponent(String(customerId))}/${encodeURIComponent(String(rateId))}/quote`,
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
     * @param customerId Customer id of the shipment rate.
     * @param search Word or phrase to search for.
     * @param searchOn Comma-delimited list of fields to search on.
     * @param sortBy Comma-delimited list of fields to sort by.
     * @param page Page of results to return. Default: 1
     * @param pageSize Number of results to return per page. Default: 20, max: 100.
     * @param filters Any additional key/value pairs passed in the query string are interpreted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public List(customerId: string, options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: { [key: string]: string | Array<string>; }, observe?: 'body', reportProgress?: boolean}): Observable<ListShipmentRate>;
    public List(customerId: string, options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: { [key: string]: string | Array<string>; }, observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<ListShipmentRate>>;
    public List(customerId: string, options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: { [key: string]: string | Array<string>; }, observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<ListShipmentRate>>;
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

        return this.httpClient.get<ListShipmentRate>(`${this.basePath}shipment/rate/${encodeURIComponent(String(customerId))}`,
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
     * @param customerId Customer id of the shipment rate quote log.
     * @param search Word or phrase to search for.
     * @param searchOn Comma-delimited list of fields to search on.
     * @param sortBy Comma-delimited list of fields to sort by.
     * @param page Page of results to return. Default: 1
     * @param pageSize Number of results to return per page. Default: 20, max: 100.
     * @param filters Any additional key/value pairs passed in the query string are interpreted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public ListQuotes(customerId: string, options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: { [key: string]: string | Array<string>; }, observe?: 'body', reportProgress?: boolean}): Observable<ListShipmentRateQuoteLog>;
    public ListQuotes(customerId: string, options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: { [key: string]: string | Array<string>; }, observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<ListShipmentRateQuoteLog>>;
    public ListQuotes(customerId: string, options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: { [key: string]: string | Array<string>; }, observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<ListShipmentRateQuoteLog>>;
    public ListQuotes(customerId: string, options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: { [key: string]: string | Array<string>; }, observe?: any, reportProgress?: boolean}): Observable<any> {
		const opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }
        if (customerId === null || customerId === undefined) {
            throw new Error('Required parameter customerId was null or undefined when calling listQuotes.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (opts.search !== undefined && opts.search !== null) {
            queryParameters = queryParameters.set('search', <any>opts.search);
        }
		if (opts.search === null) {
            throw new Error('Parameter search was null when calling ListQuotes. Null values are not allowed');
        }														
        if (opts.searchOn !== undefined && opts.searchOn !== null) {
            queryParameters = queryParameters.set('searchOn', <any>opts.searchOn);
        }
		if (opts.searchOn === null) {
            throw new Error('Parameter searchOn was null when calling ListQuotes. Null values are not allowed');
        }														
        if (opts.sortBy !== undefined && opts.sortBy !== null) {
            queryParameters = queryParameters.set('sortBy', <any>opts.sortBy);
        }
		if (opts.sortBy === null) {
            throw new Error('Parameter sortBy was null when calling ListQuotes. Null values are not allowed');
        }														
        if (opts.page !== undefined && opts.page !== null) {
            queryParameters = queryParameters.set('page', <any>opts.page);
        }
		if (opts.page === null) {
            throw new Error('Parameter page was null when calling ListQuotes. Null values are not allowed');
        }														
        if (opts.pageSize !== undefined && opts.pageSize !== null) {
            queryParameters = queryParameters.set('pageSize', <any>opts.pageSize);
        }
		if (opts.pageSize === null) {
            throw new Error('Parameter pageSize was null when calling ListQuotes. Null values are not allowed');
        }														
        if (opts.filters !== undefined && opts.filters !== null) {
            queryParameters = this.configuration.unwrapFilters(opts.filters, queryParameters, 'ListQuotes');
        }
		if (opts.filters === null) {
            throw new Error('Parameter filters was null when calling ListQuotes. Null values are not allowed');
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

        return this.httpClient.get<ListShipmentRateQuoteLog>(`${this.basePath}shipment/ratequotes/${encodeURIComponent(String(customerId))}`,
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
     * @param customerId Customer id of the shipment rate.
     * @param shipmentRate 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public Post(customerId: string, shipmentRate: ShipmentRate, options?: { observe?: 'body', reportProgress?: boolean}): Observable<ShipmentRate>;
    public Post(customerId: string, shipmentRate: ShipmentRate, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<ShipmentRate>>;
    public Post(customerId: string, shipmentRate: ShipmentRate, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<ShipmentRate>>;
    public Post(customerId: string, shipmentRate: ShipmentRate, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
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
        if (shipmentRate === null || shipmentRate === undefined) {
            throw new Error('Required parameter shipmentRate was null or undefined when calling post.');
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

        return this.httpClient.post<ShipmentRate>(`${this.basePath}shipment/rate/${encodeURIComponent(String(customerId))}`,
            shipmentRate,
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
     * @param customerId Customer id of the shipment rate.
     * @param rateId Rate id of the shipment rate.
     * @param shipmentRate 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public Put(customerId: string, rateId: string, shipmentRate: ShipmentRate, options?: { observe?: 'body', reportProgress?: boolean}): Observable<ShipmentRate>;
    public Put(customerId: string, rateId: string, shipmentRate: ShipmentRate, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<ShipmentRate>>;
    public Put(customerId: string, rateId: string, shipmentRate: ShipmentRate, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<ShipmentRate>>;
    public Put(customerId: string, rateId: string, shipmentRate: ShipmentRate, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
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
        if (rateId === null || rateId === undefined) {
            throw new Error('Required parameter rateId was null or undefined when calling put.');
        }
        if (shipmentRate === null || shipmentRate === undefined) {
            throw new Error('Required parameter shipmentRate was null or undefined when calling put.');
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

        return this.httpClient.put<ShipmentRate>(`${this.basePath}shipment/rate/${encodeURIComponent(String(customerId))}/${encodeURIComponent(String(rateId))}`,
            shipmentRate,
            {
                headers: headers,
                observe: opts.observe,
                reportProgress: opts.reportProgress
            }
        );
    }

} 
