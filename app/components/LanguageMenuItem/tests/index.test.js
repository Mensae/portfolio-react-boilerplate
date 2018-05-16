import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import LanguageMenuItem from '../index';

describe('<LanguageMenuItem />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<LanguageMenuItem value={'nl'} />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should adopt the "onClickHandler" property', () => {
    const preventDefault = jest.fn();
    const onClickHandler = jest.fn();
    const renderedComponent = shallow(
      <LanguageMenuItem value={'en'} onClickHandler={onClickHandler} />
    );

    renderedComponent.simulate('Click', { preventDefault });
    expect(preventDefault).toHaveBeenCalledTimes(1);
    expect(onClickHandler).toHaveBeenCalledTimes(1);
    expect(onClickHandler).toHaveBeenCalledWith('en');
  });

  it('should adopt the "isSelected" property', () => {
    const PROPERTY_VALUE = true;
    const renderedComponent = shallow(<LanguageMenuItem value={'nl'} isSelected={PROPERTY_VALUE} />);

    expect(toJson(renderedComponent)).toMatchSnapshot();
  });
});