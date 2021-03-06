/**
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


export interface ShipmentDestinationAddress {
    Accessorial?: Array<string>;
    BolNumber?: string;
    ReferenceNumber?: string;
    id?: string;
    timeStamp?: Date;
    customerId?: string;
    IsDefault?: boolean;
    IsFavorite?: boolean;
    LocationType?: string;
    LocationName?: string;
    AddressLine1?: string;
    AddressLine2?: string;
    City?: string;
    StateProvince?: string;
    PostalCode?: string;
    CountryCode?: string;
    ContactName?: string;
    ContactPhone?: string;
    PickupDeliveryNumber?: string;
}
