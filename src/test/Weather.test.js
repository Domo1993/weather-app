import React from 'react';
import Weather from '../Components/Weather';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
const tree = renderer
.create(<Weather/>)
.toJSON();
expect(tree).toMatchSnapshot();
});