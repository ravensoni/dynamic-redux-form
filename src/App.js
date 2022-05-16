/* eslint-disable */
import React from 'react';
import { useSelector } from 'react-redux';
// mui
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// 
// import logo from './logo.svg';
import './App.css';
// 
import { Listing } from "./features/Listing/Listing"
import { Elements } from "./features/Elements/Elements"
import { handleChangeSelect, handleChangeCustomRadio } from './features/counter/counterSlice';
 

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
			style={{ width:"100%" }}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					{children}
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

function App() {
	const [value, setValue] = React.useState(0);
	const [ subtabval, setSubTabVal ] = React.useState(0)

	const fetchState = useSelector((state) => state.counter.options_data)
	// console.log(fetchState);

	const handleChangeTab = (event, newValue) => {
		setValue(newValue);
		setSubTabVal(0)
	};

	const handleChangeSubTab = (event, newValue) => {
		// console.log(event.target);
		setSubTabVal(newValue)
	}

	return (
		<div className='App'>

			<Box 
				sx={{ flexGrow: 1, display: 'flex', }}
			>
				<Tabs 
					value={value} 
					onChange={handleChangeTab} 
					aria-label="basic tabs example"
					orientation='vertical'
					sx={{ borderRight: 1, borderColor: 'divider', height:"100%" }}
					style={{ position:"fixed", }}
				>
					{fetchState.map((valued, index) => {
						return (
							<Tab label={valued.page_label} {...a11yProps(index)} key={index} />
						)
					})}
					<Tab label={'List'} {...a11yProps(fetchState.length)} />
				</Tabs>
				{fetchState.map((valued, index) => {
					return (
						<TabPanel 
							value={value} 
							index={index} 
							key={index}
						>
							{valued.tab_arr !== undefined ? (
								<div style={{marginLeft:"150px",width:"500px"}}>
									<Tabs 
										value={subtabval} 
										onChange={handleChangeSubTab} 
										aria-label="SUB TAB"
										orientation='horizontal'
										variant='scrollable'
									>
										{valued.tab_arr.map((tabvalue, index) => {
											return (
												<Tab label={tabvalue} {...a11yProps(index)} key={index} />
											)
										})}
									</Tabs>

									{valued.tab_arr.map((tabvalue, index) => {
										return (
											<React.Fragment key={index}>
												<TabPanel value={subtabval} index={index}>
													<div style={{ width:"350px",}}>
														<Typography>
															{valued.page_info}
														</Typography>
														<br/>
														{valued.fields ? valued.fields.map((value1, index1) => {
															return(
																<React.Fragment key={index1}>
																	{value1.tab_name === tabvalue ? (
																		<>
																			<Elements field={value1} key={index1} />
																		</>
																	) : (
																		<></>
																	)}
																</React.Fragment>
															)
														}): null}
														
													</div>
												</TabPanel>
											</React.Fragment>
										)
									})}
								</div>
							) : (
								<div style={{marginLeft:"150px",width:"500px"}}>
									<Typography>
										{valued.page_info}
									</Typography>
									<br/>
									{valued.fields ? valued.fields.map((field, i) => <Elements field={field} key={i} />) : null}
								</div>
							)}
						</TabPanel>
					)
				})}
				<TabPanel value={value} index={fetchState.length}>
					<div
						style={{
							marginLeft:"150px",
							width:"500px"
						}}
					>
						<Typography>
							The Ducati of your dreams has been configured!
						</Typography>
						<br/>
						<Listing />
					</div>
				</TabPanel>
			</Box>

			{/* <div
				className='otherdiv'
			>
			</div> */}

		</div>
	);
}

export default App;
