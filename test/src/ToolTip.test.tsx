import React from "react";
import { ToolTip } from '../../src';
import { render } from '@testing-library/react'


test(`render rjs tooltip`, () => {
	const Render = () => {
		return (
			<h1>Hello world</h1>
		)
	}
	const { getByText } = render(<ToolTip render="I am good"><Render /></ToolTip>);


})