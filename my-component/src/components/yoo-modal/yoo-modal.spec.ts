import { render, flush } from '@stencil/core/testing';
import { YooModalComponent, setModalProps } from './yoo-modal';

describe('YooModalComponent', () => {
    it('should build', () => {
        expect(new YooModalComponent()).toBeTruthy();
    });

    describe('Snapshots', () => {
        it ('Should have a title and a header', async () => {
            let element = await render ({
                components: [YooModalComponent],
                html: '<yoo-modal title="this is text"></yoo-modal>'
            });
            expect(element).toMatchSnapshot();
        });

        it ('Should have no header', async () => {
            let element = await render ({
                components: [YooModalComponent],
                html: '<yoo-modal has-header="false"></yoo-modal>'
            });
            expect(element).toMatchSnapshot();
        });

        it ('Should have a title icon', async () => {
            let element = await render ({
                components: [YooModalComponent],
                html: '<yoo-modal title="this is text" title-icon="yo-fire"></yoo-modal>'
            });
            expect(element).toMatchSnapshot();
        });

        it ('Should have a footer', async () => {
            let element = await render ({
                components: [YooModalComponent],
                html: '<yoo-modal has-footer="true"></yoo-modal>'
            });
            expect(element).toMatchSnapshot();
        });

        it ('Should have content', async () => {
            let element = await render ({
                components: [YooModalComponent],
                html: `<yoo-modal>
                        <div slot="modal-content">Test content</div>
                        </yoo-modal>`
            });
            expect(element).toMatchSnapshot();
        });

        it ('Should have custom primary button text', async () => {
            let element = await render ({
                components: [YooModalComponent],
                html: `<yoo-modal primary-button-text="Hello"></yoo-modal>`
            });
            expect(element).toMatchSnapshot();
        });

        it ('Should have custom secondary button text', async () => {
            let element = await render ({
                components: [YooModalComponent],
                html: `<yoo-modal secondary-button-text="Hello"></yoo-modal>`
            });
            expect(element).toMatchSnapshot();
        });

        it ('Should be a full screen modal', async () => {
            let element = await render ({
                components: [YooModalComponent],
                html: `<yoo-modal css-class="fullscreen"></yoo-modal>`
            });
            expect(element).toMatchSnapshot();
        });

        it ('Should be a drawer modal', async () => {
            let element = await render ({
                components: [YooModalComponent],
                html: `<yoo-modal css-class="drawer"></yoo-modal>`
            });
            expect(element).toMatchSnapshot();
        });

        it('should close modal', async () => {
            jest.useFakeTimers();
            let element = await render ({
                components: [YooModalComponent],
                html: `<div><yoo-modal></yoo-modal></div>`
            });
            expect(element.querySelector('.out')).toBeNull();
            element.querySelector('yoo-modal').close();
            expect(element.querySelector('.out')).toBeTruthy();
            jest.runAllTimers();
            expect(element.querySelector('.out')).toBeNull();
            //ToDo yoo-modal should not exist? 
            //expect(element.querySelector('yoo-modal')).toBeNull();
        });

    });


    describe('rendering', () => {
        it ('Should render no title if hasHeader equals false', async () => {
            let element = await render ({
                components: [YooModalComponent],
                html: '<yoo-modal has-header="false" title="I should not exist"></yoo-modal>'
            });
            expect(element.getElementsByClassName('modal-header')).toHaveLength(0);
            expect(element.getElementsByClassName('modal-title')).toHaveLength(0);
        });

        it ('Should render no footer by default', async () => {
            let element = await render ({
                components: [YooModalComponent],
                html: '<yoo-modal></yoo-modal>'
            });
            expect(element.getElementsByClassName('modal-footer')).toHaveLength(0);
        });

        // TO DO: fix modal entry tests
        describe('modal-entry-rendering', () => {
            it ('Should render content', async () => {
                let element = await render ({
                    components: [YooModalComponent],
                    html: '<yoo-modal></yoo-modal>'
                });
                let htmlElement = document.createElement('div');
                htmlElement.innerHTML = `<div class="test">This is the test text</div>`;
                let modalProps = {content: htmlElement};
                element = await setModalProps(element, modalProps);
                flush(element);
                //expect(element.querySelector('div.test')).toBeTruthy();
                //expect(element.querySelector('div.test').innerHTML).toEqual('This is the test text');
            });

            it ('Should render title', async () => {
                let element = await render ({
                    components: [YooModalComponent],
                    html: '<yoo-modal></yoo-modal>'
                });
                let modalProps = {title: 'Arigato'};
                setModalProps(element, modalProps);
                expect(element.title).toEqual('Arigato');
                flush(element);
                // expect(element.getElementsByClassName('modal-title')).toHaveLength(1);
                // expect(element.getElementsByClassName('modal-title')[0].innerHTML).toEqual('Arigato');
            });
        });
        
    });
});