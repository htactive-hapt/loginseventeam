import React from "react";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="row footer-row">
				<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
					<div className='row text-center'>
						<img className='logo-image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQMFvIPnA4DHKJObdlqC5c3eT_TVxPih56_w&usqp=CAU" alt="Seven Team" />
						<p>SEVEN TEAM</p>
						<p>See ya</p>
					</div>
				</div>
				<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
					<ul className="list-icons">
						<li className="infor-company">
							<i className="fa fa-map-marker pr-10" /> <span>101B Le Huu Trac<br /><span>Da Nang, Viet Nam</span></span></li>
						<li className="infor-company">
							<i className="fa fa-phone pr-10" /> (+84) 866 487 699</li>
						<li className="infor-company">
							<i className="fa fa-mobile pr-10" /> (+84) 523 456 789</li>
						<li className="infor-company">
							<i className="fa fa-envelope-o pr-10" />
							<a className="link" href="mailto:seventeam@seven.com">seventeam@seven.com</a>
						</li>
					</ul>
				</div>
				<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
					<ul className="list-icons">
						<li className="services">
							Booking
						</li>
						<li className="services">
							Help
						</li>
						<li className="services">
							Bla
						</li>
						<li className="services">
							Bla
						</li>
					</ul>
				</div>
			</div>
			<div className="row">
				<p className='text-center'>Copyright © 2019 by Me. All Rights Reserved.</p>
			</div>
		</footer>
	)
};

export { Footer };