import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configStore';
import App from '../App';
import 'jest-styled-components';

describe('테스트코드 테스트', () => {
	test('렌더링 테스트', () => {
		render(
			<MemoryRouter>
				<Provider store={store}>
					<App />
				</Provider>
			</MemoryRouter>,
		).debug();
	});
});
