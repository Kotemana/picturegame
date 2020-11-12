import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { MemoryRouterProps } from 'react-router';
import { render, RenderOptions } from '@testing-library/react';

interface CustomRenderOptions extends Omit<RenderOptions, 'queries'> {
    routerProps?: MemoryRouterProps;
}

const customRender = (ui: React.ReactElement, options: CustomRenderOptions = {}) => {
    const { routerProps, ...rest } = options;
    return render(<MemoryRouter {...routerProps}>{ui}</MemoryRouter>, rest);
};

export default customRender;
