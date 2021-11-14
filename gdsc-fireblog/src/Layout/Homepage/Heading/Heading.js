import React from 'react';
import {Navbar,NavbarBrand,Nav,NavItem,NavLink,UncontrolledDropdown, DropdownToggle,DropdownItem, DropdownMenu ,Collapse,Navbartoggler} from 'reactstrap';

class Heading extends Component{
    constructor(props){
        super(props);
        this.state = {
            isOpen:false
        }
    }

    toggle= ()=>{
        this.setState( state: {
            isOpen: !this.state.isOpen
        })
    }

    render (){ 
        return (
            <Navbar color='light' light expand='md'>
                <NavbarBrand href='#'>My Blog </NavbarBrand> 
                <Navbartoggler onClick={this.toggle}/>
                <Collapse isOpen= {this.state.isOpen} navbar>
                    <Nav className='mr-auto' navbar>
                        <NavItem>
                            <NavLink href='/'>New Article</NavLink>
                            </NavItem> 

                        </Nav>
                        <UncontrolledDropdown>
                            <DropdownToggle nav caret>
                                Options
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Login
                                </DropdownItem> 
                                <DropdownItem>
                                    Logout
                                </DropdownItem> 
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Collapse> 
            </Navbar>
            );
    }
}
export default Heading; 