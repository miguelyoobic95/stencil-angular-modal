import { render, flush } from '@stencil/core/testing';
import { YooButtonComponent } from './yoo-button';
//import * as domtoimage from 'dom-to-image';

describe('YooButtonComponent', () => {
    it('should build', () => {
        expect(new YooButtonComponent()).toBeTruthy();
    });

    describe('Snapshots', () => {
        it ('Should have text content', async () => {
            let element = await render({
               components: [YooButtonComponent],
               html: '<yoo-button title="Button accent" class="accent"></yoo-button>'
            });
            expect(element).toMatchSnapshot();
        });

        it ('Should have text content and icon', async () => {
            let element = await render({
               components: [YooButtonComponent],
               html: '<yoo-button title="Button accent" icon="yo-fire"></yoo-button>'
            });
            expect(element).toMatchSnapshot();
        });

        it ('Should have icon only', async () => {
            let element = await render({
               components: [YooButtonComponent],
               html: '<yoo-button title="Button loading" isLoading="true" class="icon-only"></yoo-button>'
            });
            expect(element).toMatchSnapshot();
        });

        it ('Should have loading icon and no title', async () => {
            let element = await render({
               components: [YooButtonComponent],
               html: '<yoo-button title="Button loading" isLoading="true" class="accent"></yoo-button>'
            });
            expect(element).toMatchSnapshot();
        });
    });

    describe('rendering', () => {
        it('Should re-render when isLoading is updated', async () => {
            let element = await render({
                components: [YooButtonComponent],
                html: '<yoo-button title="Button loading" class="accent"></yoo-button>'
             });
             expect(element.textContent).toEqual('Button loading');
             expect(element.querySelector('img')).toBeNull();
             element.isLoading = true;
             flush(element);
             expect(element.textContent).toEqual('');
             expect(element.querySelector('img').src).toMatch('loading.svg');
        });
    });
    
    describe('events', () => {

        it('should trigger click event', async () => {
            //let clicked = jest.fn();
            let element = await render({
                components: [YooButtonComponent],
                html: '<yoo-button title="Button loading" class="accent"></yoo-button>'
             });
             element.onclick = jest.fn();
             await element.click();
             expect(element.onclick).toBeCalled();
             
        });

        it('should not trigger click event when disabled', async () => {
            let clicked = jest.fn();
            let element = await render({
                components: [YooButtonComponent],
                html: '<yoo-button title="Button loading" disabled="true" class="accent"></yoo-button>'
             });
             let button = element.querySelector('button');
             button.addEventListener('click', clicked);
             await element.click();
             expect(clicked).not.toBeCalled();                         
             expect(element.disabled).toBeTruthy();
        });

    });
});