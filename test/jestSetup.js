import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16.3';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

const MOCKED_DATE = '2017-01-05T12:00:00+01:00';
const NativeDate = global.Date;

window.matchMedia = window.matchMedia || function() {
    return {
        matches: false,
        addListener() {},
        removeListener() {}
    };
};

global.Date = jest.fn((...date) => (date.length > 0 ? new NativeDate(...date) : new NativeDate(MOCKED_DATE)));
global.Date.UTC = NativeDate.UTC;
global.Date.parse = NativeDate.parse;
global.Date.now = NativeDate.now;
