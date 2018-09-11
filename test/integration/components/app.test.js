import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from '../../../lib/components/app';
import Button from '../../../lib/components/button';
import Input from '../../../lib/components/input';

jest.useFakeTimers();

describe('<App />', () => {
    let app = null;

    beforeEach(() => {
        app = shallow(<App />);
    });

    it('should match snapshot', () => {
        expect(toJson(app)).toMatchSnapshot();
    });

    xit('should render one input with AddButton and RemoveButton by default', () => {
        // eslint-disable-next-line no-magic-numbers
        expect(app.find(Button)).toHaveLength(2);
        expect(app.find(Input)).toHaveLength(1);
    });

    xit('should add another input in list on AddButton press', () => {
        app.find('.add').simulate('click');

        jest.runAllTimers();

        // eslint-disable-next-line no-magic-numbers
        expect(app.find(Input)).toHaveLength(2);
    });

    xit('should prevent double add on double-click', () => {
        app.find('.add').simulate('click');
        app.find('.add').simulate('click');
        // eslint-disable-next-line no-magic-numbers
        expect(app.find(Input)).toHaveLength(1);
    });

    xit('should remove last input from list on RemoveButton press', () => {
        // Add 2 inputs first
        app.find('.add').simulate('click');
        jest.runAllTimers();

        app.find('.add').simulate('click');
        jest.runAllTimers();

        app.find('.remove').simulate('click');
        jest.runAllTimers();

        // eslint-disable-next-line no-magic-numbers
        expect(app.find(Input)).toHaveLength(2);
    });

    xit('should always have at least one input', () => {
        app.find('.remove').simulate('click');

        jest.runAllTimers();

        // eslint-disable-next-line no-magic-numbers
        expect(app.find(Input)).toHaveLength(1);
    });

    xit('should display input validations if input value is wrong', () => {
        // If only one Input found, it doesn't return an array
        const input = app.find(Input).dive();

        expect(input.find('span').text()).toBeFalsy();

        input.find('input').simulate('change', { target: { value: '123' } });
        app.update();

        expect(input.find('span').text()).toBeTruthy();
    });
});
