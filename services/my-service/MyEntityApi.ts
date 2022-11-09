/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MyEntity } from './MyEntity';
import { MyEntityRequestBuilder } from './MyEntityRequestBuilder';
import { CustomField, defaultDeSerializers, DefaultDeSerializers, DeSerializers, AllFields, entityBuilder, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField } from '@sap-cloud-sdk/odata-v4';
export class MyEntityApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements 
    EntityApi<
      MyEntity<
        DeSerializersT
      >, 
      DeSerializersT
    > {
  public deSerializers: DeSerializersT;

  constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any) {
    this.deSerializers = deSerializers;
  }

  private navigationPropertyFields!: {
      
    };

  _addNavigationProperties(
      linkedApis: [
        
      ]): this {
        this.navigationPropertyFields = {
          
        };
        return this;
      }
  
  entityConstructor = MyEntity;
  
  requestBuilder(): MyEntityRequestBuilder<
    DeSerializersT
  > {
    return new MyEntityRequestBuilder<DeSerializersT>(this);
  }
  
  entityBuilder(): EntityBuilderType<
    MyEntity<
      DeSerializersT
    >,
    DeSerializersT
  > {
    return entityBuilder<MyEntity<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
  MyEntity<
      DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof MyEntity, DeSerializersT>;
  get fieldBuilder() {
    if(!this._fieldBuilder){
      this._fieldBuilder = new FieldBuilder(MyEntity, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<MyEntity<DeSerializers>, DeSerializersT, 'Edm.Int32', false, true>,
PROP_1: OrderableEdmTypeField<MyEntity<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
ALL_FIELDS: AllFields<MyEntity<DeSerializers>>
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = { 
    /**
 * Static representation of the {@link id} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
ID: fieldBuilder.buildEdmTypeField('ID', 'Edm.Int32', false),
/**
 * Static representation of the {@link prop1} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
PROP_1: fieldBuilder.buildEdmTypeField('prop1', 'Edm.String', true),
...this.navigationPropertyFields,
/**
 * 
 * All fields selector.
 */
ALL_FIELDS: new AllFields('*', MyEntity) 
  };
    }
  
    return this._schema;
  }
}
