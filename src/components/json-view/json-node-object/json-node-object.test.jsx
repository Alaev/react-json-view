import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import JsonNodeObject from './json-node-object';
import faker from 'faker';

describe('<FetchUrl>', () => {
  let children;
  const leftClick = { button: 1 };
  beforeAll(() => {
    children = {
      string_value: 'some random string',
      null_value: null,
      object_value: {
        id: faker.random.number(),
        user_name: 'random user name',
      },
      number_value: faker.random.number(),
      array_value: [
        faker.lorem.word(),
        ['string_in_nested_array'],
        { id: 14, user_name: 'inside array' },
      ],
    };
  });

  it('jsonView render nodes and on click should render childs node value', () => {
    const { getByText, queryByText } = render(
      <JsonNodeObject>{children}</JsonNodeObject>,
    );
    const stringElement = getByText('string_value');

    // child node should not be in the dom first
    expect(stringElement).toBeInTheDocument();
    const hiddenElement = queryByText(children.string_value);
    expect(hiddenElement).toBeNull();
    // click on string node to show child
    fireEvent.click(stringElement, leftClick);
    // see that our change handler have been called
    expect(queryByText(/some random string/i)).toBeInTheDocument();
  });

  it('jsonView render nodes and on click should render nested json', () => {
    const { debug, getByText, queryByText } = render(
      <JsonNodeObject>{children}</JsonNodeObject>,
    );
    const objectNode = getByText('object_value');

    // child node should not be in the dom first
    expect(objectNode).toBeInTheDocument();

    // click on string node to show child
    fireEvent.click(objectNode, leftClick);

    // see that our change handler have been called
    const elementWithIdKey = queryByText(/id/i);
    expect(elementWithIdKey).toBeInTheDocument();

    fireEvent.click(elementWithIdKey, leftClick);
    expect(queryByText(/random user name/i)).toBeNull();

    // nested object value
    const userName = queryByText(/user_name/i);
    fireEvent.click(userName, leftClick);
    expect(getByText(/random user name/i)).toBeInTheDocument();
  });

  it('jsonView render nodes and on click should render nested array', () => {
    const { debug, getByText, queryByText, queryAllByText } = render(
      <JsonNodeObject>{children}</JsonNodeObject>,
    );
    const arrayNode = getByText('array_value');
    expect(arrayNode).toBeInTheDocument();

    fireEvent.click(arrayNode, leftClick);
    const nestedArrayKey = queryByText(/1/i);

    // second element in array click
    fireEvent.click(nestedArrayKey, leftClick);
    const arrayNodes = queryAllByText(/0/i);

    expect(arrayNodes).toHaveLength(2);

    fireEvent.click(arrayNodes[1], leftClick);
    expect(getByText(/string_in_nested_array/i)).toBeInTheDocument();
  });
});
