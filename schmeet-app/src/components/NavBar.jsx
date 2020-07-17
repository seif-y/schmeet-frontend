import React from "react";
import "../App.css";
import { AppBar, Avatar, Button, Grid, Toolbar } from "@material-ui/core";
import logoLight from "../images/schmeet-light.png";
import logoDark from "../images/schmeet-dark.png";
import { Link } from "react-router-dom";

function NavBar() {
	return (
		<div className="NavBar">
			<AppBar className="TopNavbar" position="static" color="white">
				<Toolbar>
					<Grid container justify="space-between">
						<Grid item xs={6} component={Link} to="/">
							<img
								className="NavBarItem"
								src={logoLight}
								style={{ float: "left" }}
							/>
						</Grid>
						<Grid item xs={6}>
							<Avatar
								className="NavBarItem"
								style={{
									float: "right",
									marginLeft: "30px",
								}}
							/>
							<Button
								className="NavBarItem"
								variant="contained"
								color="primary"
								style={{ float: "right" }}
								component={Link}
								to="/NewMeeting"
							>
								New Meeting
							</Button>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default NavBar;
