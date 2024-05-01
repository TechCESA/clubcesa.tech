'use client';

import { Button } from './ui/button';

export function BackButton() {
  const goBackHandler = () => {
    window.history.back();
  };

  return (
    <Button
      type='submit'
      className='font-semibold'
      variant='outline'
      onClick={goBackHandler}
    >
      Back
    </Button>
  );
}
