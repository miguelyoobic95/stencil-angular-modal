import { render } from '@stencil/core/testing';
import { YooModalControllerComponent } from './yoo-modal-controller';

describe('YooModalControllerComponent', () => {
    it('should build', () => {
        expect(new YooModalControllerComponent()).toBeTruthy();
    });

    describe('Single modal controller', () => {
        fit ('should create a single modal with header and footer', async () => {
            let element = await render({
                components: [YooModalControllerComponent],
                html: '<div><yoo-modal-controller></yoo-modal-controller></div>'
            });
            const modalCtrl = element.querySelector('yoo-modal-controller');
            modalCtrl.generateModal({
                title: 'Gutten Morgen',
                hasFooter: true
            });
            //modalCtrl.show();
            expect(element).toMatchSnapshot();
            //expect(element.querySelector('yoo-modal')).toBeTruthy();
        });
        
    });

});