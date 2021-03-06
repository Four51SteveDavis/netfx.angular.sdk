/**
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { ImageRef } from './imageRef';
import { Inventory } from './inventory';


export interface Product {
    DefaultPriceScheduleID?: string;
    ID?: string;
    Name?: string;
    Description?: string;
    QuantityMultiplier?: number;
    ShipWeight?: number;
    ShipHeight?: number;
    ShipWidth?: number;
    ShipLength?: number;
    Active?: boolean;
    SpecCount?: number;
    ShipFromAddressID?: string;
    Inventory?: Inventory;
    DefaultSupplierID?: string;
    SupplierId?: string;
    NetFxId?: string;
    Images?: Array<ImageRef>;
}
