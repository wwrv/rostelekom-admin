// eslint-disable-next-line no-unused-vars
import React from 'react';
import {
  Show,
  SimpleShowLayout,
  TextField,
  RichTextField,
  ImageField,
} from 'react-admin';

export const ProductShow = () => {

  return (
    <Show>
      <SimpleShowLayout>
        <ImageField source="images" src="url" title="desc" />
        <TextField source="name" />
        <TextField source="category" />
        <RichTextField source="description" />
      </SimpleShowLayout>
    </Show>
  );
};