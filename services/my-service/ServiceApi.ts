/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Service } from './Service';
import { ServiceRequestBuilder } from './ServiceRequestBuilder';
import { CustomField, defaultDeSerializers, DefaultDeSerializers, DeSerializers, AllFields, entityBuilder, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField } from '@sap-cloud-sdk/odata-v4';
export class ServiceApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements 
    EntityApi<
      Service<
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
  
  entityConstructor = Service;
  
  requestBuilder(): ServiceRequestBuilder<
    DeSerializersT
  > {
    return new ServiceRequestBuilder<DeSerializersT>(this);
  }
  
  entityBuilder(): EntityBuilderType<
    Service<
      DeSerializersT
    >,
    DeSerializersT
  > {
    return entityBuilder<Service<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
  Service<
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

  private _fieldBuilder?: FieldBuilder<typeof Service, DeSerializersT>;
  get fieldBuilder() {
    if(!this._fieldBuilder){
      this._fieldBuilder = new FieldBuilder(Service, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<Service<DeSerializers>, DeSerializersT, 'Edm.Int32', false, true>,
NAME: OrderableEdmTypeField<Service<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
ALL_FIELDS: AllFields<Service<DeSerializers>>
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
 * Static representation of the {@link name} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
NAME: fieldBuilder.buildEdmTypeField('name', 'Edm.String', true),
...this.navigationPropertyFields,
/**
 * 
 * All fields selector.
 */
ALL_FIELDS: new AllFields('*', Service) 
  };
    }
  
    return this._schema;
  }
}
