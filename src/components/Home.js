import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
	render() {
		return (

			<Grid>

				<Jumbotron>
					<h2>Welcome to FrontEndLife</h2>
					<p>this is how to build a web site with React React bootstap Router and more</p>
					<Link to="/about">
						<Button bsStyle="primary">About</Button>
					</Link>
				</Jumbotron>

				<Row className="show-grid text-center">

					<Col xs={12} sm={4} className="pwerson-wrapper">
						<Image  src="assets/manoj_sharma_graphices.jpg" width="250" height="250" circle className="profile-pic" />
						<h3>Graphices & Web Designer</h3>
						<p>Graphic & web design is the process of visual communication and problem-solving using one or more of typography, photography, and illustration. The field is considered a subset of visual communication and communication design.</p>
					</Col>

					<Col xs={12} sm={4} className="pwerson-wrapper">
						<Image  src="assets/manoj_sharma_frontenddeveloper.jpg" width="250" height="250" circle className="profile-pic" />
						<h3>Front End Developer</h3>
						<p>Front-end web development is the practice of converting data to graphical interface for user to view and interact with data through digital interaction using HTML, CSS and Javascript.</p>
					</Col>

					<Col xs={12} sm={4} className="pwerson-wrapper">
						<Image  src="assets/manoj_sharma_fullstack.jpg" width="250" height="250" circle className="profile-pic" />
						<h3>Full Stack Developer</h3>
						<p>Understanding, creating, manipulating, and querying databases API / back-end code in one or more languages, e.g. Ruby, Java, Python, etc</p>
					</Col>

				</Row>
			</Grid>
		);
	}
}