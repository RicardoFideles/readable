import React from 'react';
import Sidebar from './Sidebar';

describe('<Sidebar />', () => {
  it('shallow renders correctly', () => {
    expect(shallow(<Sidebar categories={[]} />));
  });

  it('shallow renders correctly with categories', () => {
    expect(
      shallow(<Sidebar categories={[{ name: 'Redux' }, { name: 'React' }]} />)
    );
  });
});
