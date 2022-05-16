/* eslint-disable */ 
import React, { useContext } from 'react'
import { useDispatch } from 'react-redux';
// mui
import Tooltip from '@mui/material/Tooltip';
import MuiRadio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { styled } from '@mui/material/styles';
// 
import { handleChangeSelect } from '../counter/counterSlice';

const BpIcon = styled('span')(({ theme }) => ({
	borderRadius: '50%',
	width: 16,
	height: 16,
	boxShadow:
		theme.palette.mode === 'dark'
			? '0 0 0 1px rgb(16 22 26 / 40%)'
			: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
	backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
	backgroundImage:
		theme.palette.mode === 'dark'
			? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
			: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
	'.Mui-focusVisible &': {
		outline: '2px auto rgba(19,124,189,.6)',
		outlineOffset: 2,
	},
	'input:hover ~ &': {
		backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
	},
	'input:disabled ~ &': {
		boxShadow: 'none',
		background:
			theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
	},
}));

const BpCheckedIcon = styled(BpIcon)({
	backgroundColor: '#137cbd',
	backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
	'&:before': {
		display: 'block',
		width: 16,
		height: 16,
		backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
		content: '""',
	},
	'input:hover ~ &': {
		backgroundColor: '#106ba3',
	},
});

// Inspired by blueprintjs
function CustomRadio(props) {
	return (
		<MuiRadio
			sx={{
				'&:hover': {
					bgcolor: 'transparent',
				},
			}}
			disableRipple
			color="default"
			checkedIcon={<BpCheckedIcon />}
			icon={<BpIcon />}
			{...props}
		/>
	);
}

const BgRadio = ({ field_id, field_label, field_placeholder, field_value, field_options, option_hex_code }) => {

	const dispatch = useDispatch()

	return (
		<div 
			style={{
				// marginLeft:"100px"
			}}
		>
			<br/>
			<FormLabel id={field_id}>
				{field_label}
			</FormLabel>
			<br/>


			{field_options.length > 0 && field_options.map((option, i) =>
				<label key={i}>
					<Tooltip title={option.option_label} placement="top" arrow>
						<div
							className={field_value === option.option_label ? "style_prevu_kit_2" : "style_prevu_kit2" }
							style={{ backgroundColor: `#${option.option_hex_code}`, }}
						>
						</div>
					</Tooltip>
					<input
						className="form-check-input"
						type="radio"
						name={field_id}
						value={field_value}
						onChange={(event) => dispatch(handleChangeSelect({
							event:event,
							option_label: option.option_label
						}))}
					/>
				</label>
			)}

			
		
			<br/><br/>
		</div>
	)
}

export default BgRadio;