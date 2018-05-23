import * as React from 'react';
import { TextField, IconButton, CommandButton, DefaultButton, PrimaryButton } from 'office-ui-fabric-react';
import '../styles.scss';

const siteInfoTemplateRight: any = require('../assets/siteInfoTemplateRight.png');

export default class CustomFooter extends React.Component<any, any> {
    private node: any;
    public context: any;

    constructor(props) {
        super(props);
        this.state = {
            showPanel: false
        };

        this.showHideFooter = this.showHideFooter.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
    }

    private showHideFooter() {
        if (!this.state.showPanel) {
            // attach/remove event handler
            document.addEventListener('click', this.handleOutsideClick, false);
        } else {
            document.removeEventListener('click', this.handleOutsideClick, false);
        }

        this.setState(prevState => ({
            showPanel: !prevState.showPanel,
        }));
    }

    private handleOutsideClick(e) {
        // ignore clicks on the component itself
        if (this.node.contains(e.target)) {
            return;
        }

        this.showHideFooter();
    }

    public render(): React.ReactElement<{}> {
        return (
            <div className={`customFooterContainer`} ref={node => { this.node = node; }}>
                <div className={`ms-Grid`}>
                    <div className="ms-Grid-row">
                        <div className="footerButton">
                            <DefaultButton
                                description='Opens the Sample Panel'
                                className='ms-bgColor-neutralLight'
                                onClick={this.showHideFooter}
                                text='Open Panel'
                            />
                        </div>
                    </div>
                    <div style={{ height: 0 }} className={"ms-Grid-row ms-bgColor-neutralLight ms-fontColor-white customFooterRow " + (this.state.showPanel ? 'showFooter' : 'hideFooter')}>
                        <div className="ms-Grid-col col-md-2 imageTemplateWrapper">
                            <span className='helper'></span>
                            <img src={siteInfoTemplateRight} width={80} />
                        </div>
                        <div className="ms-Grid-col col-md-2 textWrapper">
                            <TextField
                                label='Applied template'
                                disabled={true}
                                value="Site Template"
                            />
                        </div>
                        <div className="ms-Grid-col col-md-2 textWrapper">
                            <TextField
                                label='Department'
                                value="Software Engineering"
                            />
                        </div>
                        <div className="ms-Grid-col col-md-2 textWrapper">
                            <TextField
                                label='Project ID'
                                value="TST19786532"
                            />
                        </div>
                        <div className="ms-Grid-col col-md-2 buttonWrapper">
                            <PrimaryButton
                                primary={true}
                                title='Archive'
                                ariaLabel='Archive'
                                text='Archive site'
                                iconProps={{ iconName: 'Archive' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}