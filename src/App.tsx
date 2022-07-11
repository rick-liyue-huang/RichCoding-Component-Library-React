import React from 'react';
import { Button, ButtonSize, ButtonType } from './components/button/Button';

function App() {
  return (
    <div>
      <h3>Button Component</h3>
      <Button
        className={'custom'}
        onClick={(e) => {
          e.preventDefault();
          alert(123);
        }}
      >
        Default
      </Button>
      <Button disabled>Disabled Default</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
        Large Primary
      </Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>
        Small Danger
      </Button>
      <Button
        btnType={ButtonType.Link}
        href={'https://www.google.com.au'}
        target={'_blank'}
      >
        Link
      </Button>
      <Button
        btnType={ButtonType.Link}
        href={'https://www.reactjs.org'}
        disabled
      >
        Disabled Link
      </Button>
    </div>
  );
}

export default App;
