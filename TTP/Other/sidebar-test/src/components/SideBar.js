import React, { Component } from 'react'
import { Checkbox, Grid, Header, Icon, Image, Menu, Segment, Sidebar, } from 'semantic-ui-react'
import { connect, useSelector, useDispatch } from 'react-redux'   // extracts the reducers, dispatch an action
import { hidden, visible } from '../actions/index'       // import command to add
import store from '../store/index'

class SideBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false
        }

        this.onClickCollapseSideBar = this.onClickCollapseSideBar.bind(this)

        store.subscribe(() => {
            let visible = store.getState().visible
            this.setState({ visible })
        })
    }

    // state = {
    //     visible: false
    // }

    onClickCollapseSideBar(event) {
        if (event === true) {
            this.props.dispatch(visible())
        } else {
            this.props.dispatch(hidden())
        }
    }

    componentDidMount() {
        console.log(store.getState())
    }

    render() {
        return (
            < Grid columns={1} >
                <Grid.Column>
                    <Checkbox
                        checked={this.state.visible}
                        label={{ children: <code>visible</code> }}
                        onChange={(e, data) => this.onClickCollapseSideBar(data.checked)}
                    />
                </Grid.Column>

                <Grid.Column>
                    <Sidebar
                        as={Menu}
                        animation='overlay'
                        icon='labeled'
                        inverted
                        onHide={() => this.onClickCollapseSideBar(false)}
                        vertical
                        visible={this.state.visible}
                        width='thin'
                    >
                        <Menu.Item as='a'>
                            <Icon name='home' />
                      Home
                    </Menu.Item>
                        <Menu.Item as='a'>
                            <Icon name='gamepad' />
                      Games
                    </Menu.Item>
                        <Menu.Item as='a'>
                            <Icon name='camera' />
                      Channels
                    </Menu.Item>
                    </Sidebar>
                </Grid.Column>

            </Grid >

        )
    }
}

export default connect()(SideBar)