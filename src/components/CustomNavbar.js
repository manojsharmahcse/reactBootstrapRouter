import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class CustomNavbar extends Component {
	render() {
			return (

					<Navbar default collapseOnSelect>

						<Navbar.Header>
							<Navbar.Brand>
								<Link to="/">FrontEndLife</Link>
							</Navbar.Brand>
							<Navbar.Toggle />							
						</Navbar.Header>

						<Navbar.Collapse>
							<Nav pullRight>
								<NavItem eventKey={1} componentsClass={Link} href="/">
									Home
								</NavItem>
								<NavItem eventKey={2} componentsClass={Link} href="/about">
									About
								</NavItem>
								<NavItem eventKey={3} componentsClass={Link} href="/news">
									News
								</NavItem>
							</Nav>
						</Navbar.Collapse>

					</Navbar>
				)
	}

}