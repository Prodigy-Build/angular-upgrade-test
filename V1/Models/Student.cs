import { Required } from '@angular/core';

export class Student {
  public Id: number;
  
  @Required()
  public Name: string;
  
  public Email: string;
  public Phone: string;
  
  @Required()
  public Gender: string;
  
  @Required()
  public BloodGroup: string;
  
  public Address: Address;
}

export class Address {
  // address properties here
}