import { ChangeEvent } from 'react';

export const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
  const file = event.target.files?.[0];
  console.log(file?.size);

  let base64String = '';

  const reader = new FileReader();

  if (file) {
    reader.onload = function () {
      base64String = (reader.result as string)
        ?.replace('data:', '')
        .replace(/^.+,/, '');
      console.log(base64String);
    };

    reader.readAsDataURL(file);
  } else {
    console.error('File is undefined');
  }
};
