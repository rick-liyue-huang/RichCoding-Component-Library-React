import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Button, ButtonProps, ButtonSize, ButtonType } from './Button';

/**
 * @define default button with onclick event
 */
const defaultProps = {
  onClick: jest.fn(),
};

/**
 * @define test class
 */
const testProps: ButtonProps = {
  btnType: ButtonType.Primary,
  size: ButtonSize.Large,
  className: 'rickclass',
};

/**
 * @define test disabled attribute
 */
const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn(),
};

describe('test Button Component', () => {
  it('should render the correct default button', () => {
    const wrapper = render(<Button {...defaultProps}>First</Button>);
    const element = wrapper.getByText('First') as HTMLButtonElement;
    // expect(element).toBeTruthy();
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('BUTTON');
    expect(element).toHaveClass('btn btn-default');
    expect(element.disabled).toBeFalsy();
    // test onClick event
    fireEvent.click(element);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
  it('should render the correct component based on different props', () => {
    const wrapper = render(<Button {...testProps}>First</Button>);
    const element = wrapper.getByText('First');
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('btn-primary btn-lg rickclass');
  });
  it('should render the link component correactly', () => {
    const wrapper = render(
      <Button btnType={ButtonType.Link} href={'http://www.google.com'}>
        Link
      </Button>
    );
    const element = wrapper.getByText('Link');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('A');
    expect(element).toHaveClass('btn btn-link');
  });
  it('should render the disabled button correactly', () => {
    const wrapper = render(<Button {...disabledProps}>First</Button>);
    const element = wrapper.getByText('First') as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.disabled).toBeTruthy();
    fireEvent.click(element);
    expect(disabledProps.onClick).not.toHaveBeenCalled();
  });
});
