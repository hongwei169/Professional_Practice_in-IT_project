import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "green",
				textAlign: "center",
				marginTop: "-50px" }}>
	 <h4>Informations</h4>

	</h1>
	<Container>
		<Row>
		<Column>
			<Heading>Services</Heading>
			<FooterLink href="https://renmore.kingfisherclub.com/">Kingfisher Membership</FooterLink>
			<FooterLink href="https://activefitness.ie/memberships/">Active Class Booking</FooterLink>
			<FooterLink href="https://galwaycitygym.ie/membership/">GCC Student Offers</FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="#">Dan Mukulupi</FooterLink>
			<FooterLink href="#">Phang Hong</FooterLink>
			<FooterLink href="https://www.atu.ie/">Atu</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
