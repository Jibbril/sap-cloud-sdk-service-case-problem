import { Service } from './Service';
import { ServiceRequestBuilder } from './ServiceRequestBuilder';
import { CustomField, DefaultDeSerializers, DeSerializers, AllFields, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField } from '@sap-cloud-sdk/odata-v4';
export declare class ServiceApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements EntityApi<Service<DeSerializersT>, DeSerializersT> {
    deSerializers: DeSerializersT;
    constructor(deSerializers?: DeSerializersT);
    private navigationPropertyFields;
    _addNavigationProperties(linkedApis: [
    ]): this;
    entityConstructor: typeof Service;
    requestBuilder(): ServiceRequestBuilder<DeSerializersT>;
    entityBuilder(): EntityBuilderType<Service<DeSerializersT>, DeSerializersT>;
    customField<NullableT extends boolean = false>(fieldName: string, isNullable?: NullableT): CustomField<Service<DeSerializersT>, DeSerializersT, NullableT>;
    private _fieldBuilder?;
    get fieldBuilder(): FieldBuilder<typeof Service, DeSerializersT>;
    private _schema?;
    get schema(): {
        ID: OrderableEdmTypeField<Service<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Int32", false, true>;
        NAME: OrderableEdmTypeField<Service<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ALL_FIELDS: AllFields<Service<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>>;
    };
}
//# sourceMappingURL=ServiceApi.d.ts.map