import React, {Component} from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import { inject, observer } from 'mobx-react';


@inject('commonStore')
@observer
class Header extends Component {

  sidebarCollapsed(event){
      event.preventDefault();
      console.log(this.props);
      this.props.commonStore.collapseSidebar();
    }

    render() {
    return( 
        <Navbar color="light" light expand="md">
        <NavbarBrand href="/" className="brand-name">Reactstrap</NavbarBrand>
        <Nav  navbar>
          <NavItem>
              <NavLink href="/components/" className="fa fa-outdent close-menu" onClick={this.sidebarCollapsed.bind(this)}></NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                English
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                 Hindi
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            </Nav>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="https://github.com/navroop">GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Welcome
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                 My Profile
                </DropdownItem>
                <DropdownItem>
                  Settings
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  LogOut
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
      </Navbar>
    );
  }
}

export default Header;