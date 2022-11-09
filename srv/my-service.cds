using { my } from '../db/schema';

service MyService {
    entity MyEntity as projection on my.MyClass;
    entity Service as projection on my.Service;
}