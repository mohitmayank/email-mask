# await-global
Mask email with keeping domain intact

## Install
`yarn install mask-email`

## Usage
```javascript
  import maskEmail from 'mask-email';

  //mask with *
  console.log(maskEmail('sample.email@domain.com'));
  //s**********l@domain.com

  //mask with customer char
  console.log(maskEmail('sample.email@domain.com', '#'));
  //s##########l@domain.com
  
```
