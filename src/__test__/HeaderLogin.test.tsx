import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import store from '../redux/configStore';
import App from '../App';

describe('click login button that can open login modal', () => {
	test('After opening modal, is there a login button?', () => {
		render(
			<MemoryRouter>
				<Provider store={store}>
					<App />
				</Provider>
			</MemoryRouter>,
		);

		const loginButton = screen.getByText('로그인');
		userEvent.click(loginButton);

		screen.debug();

		expect(!!screen.getAllByText('로그아웃')).toBe(false);
	});
});
