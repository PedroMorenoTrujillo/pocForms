import { FormTypes } from '@lib/lib-dynamic-form/enums';
import { DynamicFormModel } from '@lib/lib-dynamic-form/models';
import { FieldSize } from '@lib/lib-dynamic-form/enums/field-size.enum';

export const profileForm: DynamicFormModel[] = [
  {
    type: FormTypes.TEXT,
    label: 'text',
    formControlName: 'text',
    value: null,
    size: FieldSize.w_50,
    required: true
  },
  {
    type: FormTypes.NUMBER,
    label: 'number',
    formControlName: 'number',
    value: 123,
    size: FieldSize.w_25,
  },
  {
    type: FormTypes.EMAIL,
    label: 'email',
    formControlName: 'email',
    value: 'test',
    size: FieldSize.w_50,
  },
  {
    type: FormTypes.PASSWORD,
    label: 'password',
    formControlName: 'password',
    value: null,
    size: FieldSize.w_50,
  },
  {
    type: FormTypes.SINGLE_SELECT,
    label: 'single select',
    formControlName: 'singleSelect',
    value: 'test',
    size: FieldSize.w_50,
    dropDownOptions: [
      {
        label: 'TEST',
        value: 'test'
      },{
        label: 'TEST2',
        value: 'test2'
      }
    ]
  },
  {
    type: FormTypes.MULTI_SELECT,
    label: 'multi select',
    formControlName: 'multiSelect',
    value: ['test', 'test3'],
    size: FieldSize.w_100,
    secondarySize: FieldSize.w_50,
    dropDownOptions: [
      {
        label: 'TEST',
        value: 'test'
      },{
        label: 'TEST2',
        value: 'test2'
      },
      {
        label: 'TEST3',
        value: 'test3'
      },{
        label: 'TEST4',
        value: 'test4'
      }
    ]
  },
  {
    type: FormTypes.DATE,
    label: 'date',
    formControlName: 'date',
    value: '14/03/2024',
    //value: null,
    size: FieldSize.w_100,
  },
  {
    type: FormTypes.TEXTAREA,
    label: 'textarea',
    formControlName: 'textarea',
    value: 'test',
    size: FieldSize.w_100,
  },
  {
    type: FormTypes.SWITCH,
    label: 'switch',
    formControlName: 'switch',
    value: false,
    size: FieldSize.w_100,
  },
  {
    type: FormTypes.CHECKBOX,
    label: 'checkbox',
    formControlName: 'checkbox',
    value: true,
    size: FieldSize.w_100,
  },
  {
    type: FormTypes.EDITOR,
    label: 'editor',
    formControlName: 'editor',
    value: 'editor testtttttt',
    size: FieldSize.w_100,
  },
];
