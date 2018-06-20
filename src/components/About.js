import React, { Component } from 'react';
import { Grid, Col, Image } from 'react-bootstrap';



export default class About extends Component {
	render() {
		return (
			<div>
				<Image src="assets/manoj_sharma_aboutbanner.jpg" height="342" width="100%" className="header-image" />				
				<Grid><br /><br />
					<Col xs={12} sm={12}>
						<Col xs={6} sm={6}>
							<Image  src="assets/manojsharma_aboutus.jpg" height="100%" className="about-profile-pic" />
						</Col>
						<Col xs={6} sm={6}>
							<h3>Manoj Here </h3>
							<h6>live: http://manoj.reyanshpharma.in/</h6>
							<p>Hello. I'm Manoj Sharma Nice To Meet You. I Have 5 Years Excellent Experience In Advanced Knowledge And Experience With HTML5, CSS3, Bootstrap, Mobile Responsive, SASS, CSS, XML, JavaScript With JQuery, Photoshop, Illustrator, Wordpress, Wordpress Theming, Wordpress Plugin.</p>
							<h4>Now iam learn and increase my knowlege for Reactjs, Redux, React native</h4>
							<p> Angular/Veu/Ember js</p>
						</Col>
					</Col>
				</Grid>	<br /><br />				
			</div>
			);
	}
}