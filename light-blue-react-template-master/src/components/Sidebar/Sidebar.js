import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Progress, Alert} from 'reactstrap';
import {withRouter} from 'react-router-dom';
import {dismissAlert} from '../../actions/alerts';
import s from './Sidebar.module.scss';
import LinksGroup from './LinksGroup';

import {changeActiveSidebarItem} from '../../actions/navigation';
import {logoutUser} from '../../actions/user';

class Sidebar extends React.Component {
    static propTypes = {
        sidebarStatic: PropTypes.bool,
        sidebarOpened: PropTypes.bool,
        dispatch: PropTypes.func.isRequired,
        activeItem: PropTypes.string,
        location: PropTypes.shape({
            pathname: PropTypes.string,
        }).isRequired,
    };

    static defaultProps = {
        sidebarStatic: false,
        activeItem: '',
    };

    constructor(props) {
        super(props);

        this.doLogout = this.doLogout.bind(this);
    }

    componentDidMount() {
        this.element.addEventListener('transitionend', () => {
            if (this.props.sidebarOpened) {
                this.element.classList.add(s.sidebarOpen);
            }
        }, false);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.sidebarOpened !== this.props.sidebarOpened) {
            if (nextProps.sidebarOpened) {
                this.element.style.height = `${this.element.scrollHeight}px`;
            } else {
                this.element.classList.remove(s.sidebarOpen);
                setTimeout(() => {
                    this.element.style.height = '';
                }, 0);
            }
        }
    }

    dismissAlert(id) {
        this.props.dispatch(dismissAlert(id));
    }

    doLogout() {
        this.props.dispatch(logoutUser());
    }

    render() {
        return (
            <nav
                className={cx(s.root)}
                ref={(nav) => {
                    this.element = nav;
                }}
            >
                <header className={s.logo}>
                    <a href="https://demo.flatlogic.com/light-blue-react/">Name <span
                        className="fw-bold">here</span></a>
                </header>
                <ul className={s.nav}>
                    <LinksGroup
                        onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
                        activeItem={this.props.activeItem}
                        header="Dashboard Map"
                        isHeader
                        iconName="flaticon-home"
                        link="/app/main"
                        index="main"
                    />

                    <LinksGroup
                        onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
                        activeItem={this.props.activeItem}
                        header="Typography"
                        isHeader
                        iconName="flaticon-network"
                        link="/app/typography"
                        index="core"
                    />
                    <LinksGroup
                        onActiveSidebarItemChange={t => this.props.dispatch(changeActiveSidebarItem(t))}
                        activeItem={this.props.activeItem}
                        header="Tables Basic"
                        isHeader
                        iconName="flaticon-map-location"
                        link="/app/tables"
                        index="tables"
                    />
                    <LinksGroup
                        onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
                        activeItem={this.props.activeItem}
                        header="Notifications"
                        isHeader
                        iconName="flaticon-layers"
                        link="/app/notifications"
                        index="ui"
                    />
                    <LinksGroup
                        onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
                        activeItem={this.props.activeItem}
                        header="Components"
                        isHeader
                        iconName="flaticon-list"
                        link="/app/forms"
                        index="forms"
                        childrenLinks={[
                            {
                                header: 'Charts', link: '/app/charts',
                            },
                            {
                                header: 'Icons', link: '/app/icons',
                            },
                            {
                                header: 'Maps', link: '/app/maps',
                            },
                        ]}
                    />
                </ul>
                
            </nav>
        );
    }
}

function mapStateToProps(store) {
    return {
        sidebarOpened: store.navigation.sidebarOpened,
        sidebarStatic: store.navigation.sidebarStatic,
        alertsList: store.alerts.alertsList,
        activeItem: store.navigation.activeItem,
    };
}

export default withRouter(connect(mapStateToProps)(Sidebar));
