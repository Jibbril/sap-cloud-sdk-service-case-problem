/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v4';
import type { MyEntityApi } from './MyEntityApi';

/**
 * This class represents the entity "MyEntity" of service "MyService".
 */
export class MyEntity<T extends DeSerializers = DefaultDeSerializers> extends Entity implements MyEntityType<T> {
  /**
   * Technical entity name for MyEntity.
   */
  static _entityName = 'MyEntity';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * All key fields of the MyEntity entity
   */
  static _keys = ['ID'];
  /**
   * Id.
   */
  id!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Prop 1.
   * @nullable
   */
  prop1?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: MyEntityApi<T>) {
    super(_entityApi);
  }
}

export interface MyEntityType<T extends DeSerializers = DefaultDeSerializers> {
  id: DeserializedType<T, 'Edm.Int32'>;
  prop1?: DeserializedType<T, 'Edm.String'> | null;
}

