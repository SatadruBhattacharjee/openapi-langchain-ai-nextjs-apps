import { render } from '@testing-library/react';

import Ui from './Ui';

describe('Ui', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui />);
    expect(baseElement).toBeTruthy();
  });
});
