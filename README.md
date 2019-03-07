# email-mask
Mask email with keeping domain intact

## Install
`yarn install email-mask`

## Usage
```javascript
  import emailMask from 'email-mask';

  //mask with *
  console.log(emailMask('sample.email@domain.com'));
  //s**********l@domain.com

  //mask with customer char
  console.log(emailMask('sample.email@domain.com', '#'));
  //s##########l@domain.com
  
```
