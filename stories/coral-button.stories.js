import './coral-button.scss';
import buttonHtml from './coral-button.html?raw';
import './coral-button-icon.scss';
import buttonWithIconHtml from './coral-button-icon.html?raw';

export default {
	title: 'Кнопка'
};

export const Primary = () => buttonHtml;

export const PrimaryWithIcon = () => buttonWithIconHtml;

