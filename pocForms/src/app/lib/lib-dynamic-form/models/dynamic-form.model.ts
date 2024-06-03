import { FieldSize, FormTypes } from '../enums';
import { DropDownModel } from './dropdown.model';

export interface DynamicFormModel {
  type: FormTypes;
  label: string;
  formControlName: string;
  value: string | number | null | Date | boolean | any[];
  size?: FieldSize;
  secondarySize?: FieldSize;
  required?: boolean;
  readonly?: boolean;
  disabled?: boolean;
  minValue?: number;
  maxValue?: number;
  placeholder?: string;
  calendarTime?: boolean;
  dropDownOptions?: DropDownModel[]
}
