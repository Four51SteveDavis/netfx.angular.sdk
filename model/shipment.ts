/**
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { ShipmentDestinationAddress } from './shipmentDestinationAddress';
import { ShipmentItem } from './shipmentItem';
import { ShipmentOriginAddress } from './shipmentOriginAddress';
import { ShipmentOriginBlindAddress } from './shipmentOriginBlindAddress';
import { ShipmentRateQuote } from './shipmentRateQuote';
import { ShipmentStatus } from './shipmentStatus';
import { ShipmentTracking } from './shipmentTracking';


export interface Shipment {
    id?: string;
    timeStamp?: Date;
    customerId?: string;
    ShipmentId?: number;
    ShipmentMode?: string;
    Status?: ShipmentStatus;
    Tracking?: ShipmentTracking;
    Origin?: ShipmentOriginAddress;
    Destination?: ShipmentDestinationAddress;
    BlindOrigin?: ShipmentOriginBlindAddress;
    Items?: Array<ShipmentItem>;
    Rate?: ShipmentRateQuote;
    PalletQuantity?: number;
    PalletType?: string;
    PalletStackable?: boolean;
    SkidSpotQuantity?: number;
    UnitOfWeight?: string;
    CustomerNotes?: string;
    ShipmentNotes?: string;
    BolNumber?: string;
    OrderNumber?: string;
    PoNumber?: string;
    ProNumber?: string;
    PodSignature?: string;
    GlCode?: string;
    AckNotification?: string;
    AsnNotification?: string;
    References?: Array<any>;
}
