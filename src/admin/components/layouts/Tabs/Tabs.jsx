import React from 'react';

import './Tabs.scss';

export default class Tabs extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            tabs: []
        };

        this.addTab = this.addTab.bind(this);
        this.activateTab = this.activateTab.bind(this);
        this.isActiveTab = this.isActiveTab.bind(this);
    }

    addTab = (tabIndex, tabName) => {
        let tabs = this.state.tabs;
        tabs.push({
            id: tabIndex,
            name: tabName,
            isActive: !tabs.length
        });
        this.setState(_ => ({
            tabs: tabs
        }));
    };

    activateTab = (e, tabIndex) => {
        this.setState(_ => ({
            tabs: _.tabs.map(_ => {
                _.isActive = _.id == tabIndex;
                return _;
            })
        }));

        e.preventDefault();
    };

    isActiveTab = (tabIndex) =>
        this.state.tabs.find(_ => {
            return _.id == tabIndex;
        }).isActive;

    render = () => {
        const childrenWithProps = React.Children.map(this.props.children,
            (child) => React.cloneElement(child, {
                addTab: this.addTab,
                isActiveTab: this.isActiveTab
            })
        );

        return (
            <div className="TabsLayout">
                <div className="tabsLayout">
                    <div className="tabsLayout__header">
                        {this.state.tabs.map((item, index) =>
                            <a className={item.isActive ? 'tabHeader tabHeader_active' : 'tabHeader'}
                               href="#" key={index} onClick={_ => this.activateTab(_, item.id)}>{item.name}</a>
                        )}
                    </div>
                    {childrenWithProps}
                </div>
            </div>
        );
    }
}
