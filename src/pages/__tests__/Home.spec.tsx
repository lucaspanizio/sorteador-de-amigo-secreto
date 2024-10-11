import { RecoilRoot } from 'recoil';
import { render } from '@testing-library/react';
import { Home } from '@/pages/Home';

const mockNavigation = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => mockNavigation,
  };
});

describe('Home', () => {
  it('Shoud be render', () => {
    const { container } = render(
      <RecoilRoot>
        <Home />
      </RecoilRoot>,
    );

    expect(container).toMatchSnapshot();
  });
});
