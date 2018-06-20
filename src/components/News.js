import React, { Component } from 'react';
import { Grid, Col, Row, Image } from 'react-bootstrap';

export default class News extends Component {
	render() {
		return (
			<div>
				<Image src="assets/manoj_sharma_aboutbanner.jpg" height="342" width="100%" className="header-image" />				
				<Grid>
					<Row>
						<Col xs={12} sm={8} className="main-section">
							<h3>News</h3>
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
							<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
							<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
						<Row>
							<Col xs={3} sm={3} className="main-section">
								<Image  src="assets/manojsharma_news1.jpg" width="100%" height="100%" className="about-profile-pic" />
							</Col>
							<Col xs={3} sm={3} className="main-section">
								<Image  src="assets/manojsharma_news2.jpg"  width="100%" height="100%" className="about-profile-pic" />
							</Col>
							<Col xs={3} sm={3} className="main-section">
								<Image  src="assets/manojsharma_news3.jpg"  width="100%" height="100%" className="about-profile-pic" />
							</Col>
							<Col xs={3} sm={3} className="main-section">
								<Image  src="assets/manojsharma_news4.jpg"  width="100%" height="100%" className="about-profile-pic" />
							</Col>
						</Row><br/>

						<Row>
							<Col xs={3} sm={3} className="main-section">
								<Image  src="assets/manojsharma_news5.jpg" width="100%" height="100%" className="about-profile-pic" />
							</Col>
							<Col xs={3} sm={3} className="main-section">
								<Image  src="assets/manojsharma_news6.jpg"  width="100%" height="100%" className="about-profile-pic" />
							</Col>
							<Col xs={3} sm={3} className="main-section">
								<Image  src="assets/manojsharma_news7.jpg"  width="100%" height="100%" className="about-profile-pic" />
							</Col>
							<Col xs={3} sm={3} className="main-section">
								<Image  src="assets/manojsharma_news8.jpg"  width="100%" height="100%" className="about-profile-pic" />
							</Col>
						</Row>

						</Col>
						<Col xs={12} sm={4} className="main-section">
							<br/>
							<h4>Latest News</h4><br/>
							<Image  src="assets/latest-news.jpg"  width="100%" height="100%" className="about-profile-pic" /><br/><br/>
							<p>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
							<br/>
							<Image  src="assets/latest-news2.jpg"  width="100%" height="100%" className="about-profile-pic" /><br/>
						</Col>
					</Row><br/>
				</Grid>				
			</div>
			);
	}
}