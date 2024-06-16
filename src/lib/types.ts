export enum FormField {
  Button = 'button',
  Title = 'title',
  Description = 'description',
  Link = 'link',
  Tags = 'tags',
}

export type ErrorType = {
  field: FormField;
  message: string;
};

export type TAGType = Record<'value' | 'label', string>;

export type FormState = {
  error: ErrorType | null;
};
