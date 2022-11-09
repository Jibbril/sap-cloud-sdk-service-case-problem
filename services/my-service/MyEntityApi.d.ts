import { MyEntity } from './MyEntity';
import { MyEntityRequestBuilder } from './MyEntityRequestBuilder';
import { CustomField, DefaultDeSerializers, DeSerializers, AllFields, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField } from '@sap-cloud-sdk/odata-v4';
export declare class MyEntityApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements EntityApi<MyEntity<DeSerializersT>, DeSerializersT> {
    deSerializers: DeSerializersT;
    constructor(deSerializers?: DeSerializersT);
    private navigationPropertyFields;
    _addNavigationProperties(linkedApis: [
    ]): this;
    entityConstructor: typeof MyEntity;
    requestBuilder(): MyEntityRequestBuilder<DeSerializersT>;
    entityBuilder(): EntityBuilderType<MyEntity<DeSerializersT>, DeSerializersT>;
    customField<NullableT extends boolean = false>(fieldName: string, isNullable?: NullableT): CustomField<MyEntity<DeSerializersT>, DeSerializersT, NullableT>;
    private _fieldBuilder?;
    get fieldBuilder(): FieldBuilder<typeof MyEntity, DeSerializersT>;
    private _schema?;
    get schema(): {
        ID: OrderableEdmTypeField<MyEntity<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Int32", false, true>;
        PROP_1: OrderableEdmTypeField<MyEntity<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ALL_FIELDS: AllFields<MyEntity<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>>;
    };
}
//# sourceMappingURL=MyEntityApi.d.ts.map