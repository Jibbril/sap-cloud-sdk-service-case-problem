/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v4';
import type { ServiceApi } from './ServiceApi';

/**
 * This class represents the entity "Service" of service "MyService".
 */
export class Service<T extends DeSerializers = DefaultDeSerializers> extends Entity implements ServiceType<T> {
  /**
   * Technical entity name for Service.
   */
  static _entityName = 'Service';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * All key fields of the Service entity
   */
  static _keys = ['ID'];
  /**
   * Id.
   */
  id!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Name.
   * @nullable
   */
  name?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: ServiceApi<T>) {
    super(_entityApi);
  }
}

export interface ServiceType<T extends DeSerializers = DefaultDeSerializers> {
  id: DeserializedType<T, 'Edm.Int32'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
}

