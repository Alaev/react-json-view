import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import FetchUrl from './fetch-url';
import faker from 'faker';

describe('<FetchUrl>', () => {
  let props: any, setup: any;
  const leftClick = { button: 1 };
  beforeAll(() => {
    props = {
      label: faker.lorem.word(),
      onClick: jest.fn(),
      value: '',
      handleChange: jest.fn(),
    };

    setup = () => {
      const utils = render(<FetchUrl {...props} />);
      const input = utils.getByLabelText(props.label);
      return {
        input,
        ...utils,
      };
    };
  });

  it('renders input and trigger text type', () => {
    const { input } = setup();
    const randomUrl = faker.internet.url();

    // initial input should be empty
    expect(input.value).toBe('');

    // type url into input
    fireEvent.change(input, { target: { value: randomUrl } });
    // see that our change handler have been called
    expect(props.handleChange).toHaveBeenCalledWith(randomUrl);
  });

  it('should not fire on button click when input is empty', () => {
    const { getByText } = setup();
    const button = getByText('Send');

    expect(button).toBeDisabled();

    fireEvent.click(button, leftClick);
    expect(props.onClick).toHaveBeenCalledTimes(0);
  });

  it('should fire on button click when input is not empty', () => {
    const utils = render(<FetchUrl {...props} value={faker.internet.url()} />);

    const button = utils.getByText('Send');
    expect(button).not.toBeDisabled();

    fireEvent.click(button, leftClick);
    expect(props.onClick).toHaveBeenCalledTimes(1);
  });
});
