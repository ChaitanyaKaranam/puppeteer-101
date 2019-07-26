import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import FormData from '../components/FormData';
import puppeteer from 'puppeteer';

let page = null;
let browser = null;

beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
});

describe('<FormData/>', () => {
    test('test if form is filled', async () => {

        const renderer = new ShallowRenderer();

        renderer.render(<FormData firstName="Krishna" lastName="Chaitanya" email="test@test.com" message="test"/>);

        const result = renderer.getRenderOutput();

        expect(result.props.children).toEqual([
            <h5>Form Data</h5>,
            <pre className="black white-text">
                {JSON.stringify({
                        firstName: 'Krishna',
                        lastName: 'Chaitanya',
                        email: 'test@test.com',
                        message: 'test'
                    }, null, 2)}
            </pre>,
            <br/>,
            <br/>
        ])
    })
})

afterAll(() => {
    browser.close();
});