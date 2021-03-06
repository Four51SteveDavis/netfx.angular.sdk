/**
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


export interface ShipmentItem {
    id?: string;
    timeStamp?: Date;
    customerId?: string;
    IsFavorite?: boolean;
    ItemId?: number;
    Description?: string;
    NmfcClass?: string;
    NmfcNumber?: string;
    Weight?: number;
    PackageType?: string;
    PackageQuantity?: number;
    HandlingUnitType?: string;
    HandlingUnitQuantity?: number;
    HazardousMaterial?: boolean;
}
