import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../css/TabsNavs.css'
import TabDoor from '../tabs_nav/TabDoor'
import TabDevices from '../tabs_nav/TabDevices'
import TabPrice from '../tabs_nav/TabPrice';
import TabContentOne from './TabContentOne';
import TabContentTwo from './TabContentTwo';
import TabContentThree from './TabContentThree';

export default class TabComponent extends Component {
    state ={
        tabIndex: 0
    }

    render() {
        return (
            <div>
                <Tabs className="tabs" selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({tabIndex})}>
                    <TabList style={ {'list-style' : 'none'} } className="tab-nav-container">
                        <Tab className={`${this.state.tabIndex === 0 ? 'tab-selected active' : null}`}>
                            <TabDoor />
                            <p className="lgScreen" style={{marginBottom: '1.875rem'}}>
                                <strong>No commitment <br /> Cancel online at anytime</strong>
                            </p> <br/>
                            <span className="mdScreen" style={{marginTop: '0.4rem'}}>Cancel</span>
                        </Tab>
                        <Tab className={`${this.state.tabIndex === 1 ? 'tab-selected active' : null}`}>
                            <TabDevices/>
                            <p className="lgScreen" style={ {marginTop: '-5.3125rem'} }>
                                <strong>Watch anywhere</strong>
                            </p>
                            <span className="mdScreen" style={{marginTop: '-5.3125rem'}}>Devices</span>
                        </Tab>
                        <Tab className={`${this.state.tabIndex === 2 ? 'tab-selected active' : null}`}>
                            <TabPrice/>
                            <p className="lgScreen">
                                <strong>Pick your price</strong>
                            </p>
                            <br/>
                            <span className="mdScreen">Price</span>
                        </Tab>
                    </TabList>

                    {/* Tabs Content */}
                    <TabPanel>
                        <TabContentOne /> 
                    </TabPanel>
                    <TabPanel>
                        <TabContentTwo />
                    </TabPanel>
                    <TabPanel>
                        <TabContentThree />
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}
