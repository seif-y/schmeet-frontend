import React from "react";
import "../App.css";
import {
	Grid,
	CssBaseline,
	TextField,
	Typography,
	Button,
} from "@material-ui/core";
import BaseCalendar from "./BaseCalendar";
import InviteField from "./InviteField";
// import { ReactComponent } from "*.svg";

class NewMeeting extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isShowCalendar: false };
	}

	showCalendar() {
		this.setState({
			isShowCalendar: true,
		});
	}

	addMeeting(data) {
		console.log("hello");
		console.log(data);
		const newMeeting = {};
		window.location = "/";
	}

	render() {
		const isShowCalendar = this.state.isShowCalendar;

		return (
			<div>
				<CssBaseline />

				<Typography
					variant="h2"
					style={{
						marginTop: "30px",
					}}
					gutterBottom
				>
					New Meeting
				</Typography>

				<InviteField />

				<Grid container spacing={3} className="TextInput">
					<Grid item xs={12}>
						<TextField
							id="title"
							label="Title"
							className="TextInput"
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							id="description"
							label="Description"
							className="TextInput"
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							id="length"
							label="Length (in minutes)"
							className="TextInput"
						/>
					</Grid>
					<Grid item xs={12}>
						{isShowCalendar ? (
							<BaseCalendar onAddMeeting={this.addMeeting} />
						) : (
							<Button
								variant="contained"
								color="primary"
								size="large"
								onClick={() => {
									this.showCalendar();
								}}
							>
								Find Times
							</Button>
						)}
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default NewMeeting;
