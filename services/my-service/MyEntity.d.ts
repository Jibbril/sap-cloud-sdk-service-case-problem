import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v4';
import type { MyEntityApi } from './MyEntityApi';
/**
 * This class represents the entity "MyEntity" of service "MyService".
 */
export declare class MyEntity<T extends DeSerializers = DefaultDeSerializers> extends Entity implements MyEntityType<T> {
    readonly _entityApi: MyEntityApi<T>;
    /**
     * Technical entity name for MyEntity.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * All key fields of the MyEntity entity
     */
    static _keys: string[];
    /**
     * Id.
     */
    id: DeserializedType<T, 'Edm.Int32'>;
    /**
     * Prop 1.
     * @nullable
     */
    prop1?: DeserializedType<T, 'Edm.String'> | null;
    constructor(_entityApi: MyEntityApi<T>);
}
export interface MyEntityType<T extends DeSerializers = DefaultDeSerializers> {
    id: DeserializedType<T, 'Edm.Int32'>;
    prop1?: DeserializedType<T, 'Edm.String'> | null;
}
//# sourceMappingURL=MyEntity.d.ts.map