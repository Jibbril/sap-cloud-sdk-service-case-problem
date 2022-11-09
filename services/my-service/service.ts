/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MyEntityApi } from './MyEntityApi';
import { ServiceApi } from './ServiceApi';
import { BigNumber } from 'bignumber.js';
import { Moment, Duration } from 'moment';
import { defaultDeSerializers, DeSerializers, DefaultDeSerializers, mergeDefaultDeSerializersWith, Time } from '@sap-cloud-sdk/odata-v4';
import { batch, changeset } from './BatchRequest';
  
  export function myService<BinaryT = string,
BooleanT = boolean,
ByteT = number,
DecimalT = BigNumber,
DoubleT = number,
FloatT = number,
Int16T = number,
Int32T = number,
Int64T = BigNumber,
GuidT = string,
SByteT = number,
SingleT = number,
StringT = string,
AnyT = any,
DateTimeOffsetT = Moment,
DateT = Moment,
DurationT = Duration,
TimeOfDayT = Time,
EnumT = any>(
  deSerializers: Partial<DeSerializers<BinaryT,
BooleanT,
ByteT,
DecimalT,
DoubleT,
FloatT,
Int16T,
Int32T,
Int64T,
GuidT,
SByteT,
SingleT,
StringT,
AnyT,
DateTimeOffsetT,
DateT,
DurationT,
TimeOfDayT,
EnumT>> = defaultDeSerializers as any
  ):MyService<DeSerializers<BinaryT,
BooleanT,
ByteT,
DecimalT,
DoubleT,
FloatT,
Int16T,
Int32T,
Int64T,
GuidT,
SByteT,
SingleT,
StringT,
AnyT,
DateTimeOffsetT,
DateT,
DurationT,
TimeOfDayT,
EnumT>>  
  {
  return new MyService(mergeDefaultDeSerializersWith(deSerializers))
  } 
class MyService<DeSerializersT extends DeSerializers = DefaultDeSerializers> {
    private apis: Record<string, any> = {};
    private deSerializers: DeSerializersT;

    constructor(deSerializers: DeSerializersT) {
      this.deSerializers = deSerializers;
    }

    private initApi(key: string, ctor: new (...args: any[]) => any): any {
      if (!this.apis[key]) {
        this.apis[key] = new ctor(this.deSerializers);
      }
      return this.apis[key];
    }

    get myEntityApi(): MyEntityApi<DeSerializersT> { 
        return this.initApi('myEntityApi', MyEntityApi)    
      }
    
    get serviceApi(): ServiceApi<DeSerializersT> { 
        return this.initApi('serviceApi', ServiceApi)    
      }
    
    
    
    
    
      get batch(): typeof batch {
        return batch;
      }

      get changeset(): typeof changeset {
        return changeset;
      }
  }
