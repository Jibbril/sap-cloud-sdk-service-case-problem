import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v4';
import type { ServiceApi } from './ServiceApi';
/**
 * This class represents the entity "Service" of service "MyService".
 */
export declare class Service<T extends DeSerializers = DefaultDeSerializers> extends Entity implements ServiceType<T> {
    readonly _entityApi: ServiceApi<T>;
    /**
     * Technical entity name for Service.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * All key fields of the Service entity
     */
    static _keys: string[];
    /**
     * Id.
     */
    id: DeserializedType<T, 'Edm.Int32'>;
    /**
     * Name.
     * @nullable
     */
    name?: DeserializedType<T, 'Edm.String'> | null;
    constructor(_entityApi: ServiceApi<T>);
}
export interface ServiceType<T extends DeSerializers = DefaultDeSerializers> {
    id: DeserializedType<T, 'Edm.Int32'>;
    name?: DeserializedType<T, 'Edm.String'> | null;
}
//# sourceMappingURL=Service.d.ts.map