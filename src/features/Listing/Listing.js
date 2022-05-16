/* eslint-disable */ 
import React from "react"
import { useSelector } from "react-redux"

/**
 * Contains Only Selected Options and their Information.
 */
var selected_options_array = [
	{
		selected_Option_Category: "",
		selected_Option_Group: "",
		selected_Option_Name: "",
		selected_Option_Price: 0,
		selected_Option_Field_Type: "",
		all_Options: "",
	}
];
var soaLength = selected_options_array.length

export function Listing() {
	const all_Data = useSelector((state) => state.counter)

	all_Data.options_data.map((value1, index1) => {
		value1.fields.map((value2, index2) => {
			if(value2.field_type === "checkbox") {
				selected_options_array.splice(soaLength,0,
					{
						selected_Option_Category: value1.page_label,
						selected_Option_Group: value2.field_id,
						selected_Option_Name: value2.field_value,
						selected_Option_Price: 0,
						selected_Option_Field_Type: value2.field_type,
						all_Options: value2.field_options,
					}
				)
			} else {
				selected_options_array.splice(soaLength,0,
					{
						selected_Option_Category: value1.page_label,
						selected_Option_Group: value2.field_id,
						selected_Option_Name: value2.field_value,
						selected_Option_Price: 0,
						selected_Option_Field_Type: value2.field_type,
						all_Options: "Not_Needed",
					}
				)
			}
		})
	})

	// console.log(selected_options_array);

	return (
		<>
			<div 
				style={{
					// width:"300px"
					// marginLeft:"100px"
				}}
			>

				{all_Data === null ? (
						<></>
					) : (
						<>
							{all_Data.options_data.map((value, index) => {
								return(
								
										<table style={{width:"100%", fontFamily:''}} key={index}>
											<tbody>
												
												<tr>
													<td>
														<br/>
														<span style={{color:'black', fontSize:'13px', fontWeight:'1000',}}>
															{value.page_label}
														</span>
													</td>
												</tr>
												{value.fields.map((value2, index2) => {
													return(
														<React.Fragment key={index2}>
															{value.fields[index2].field_type !== "checkbox" && (value.fields[index2].field_value !== "0" && value.fields[index2].field_value !== "None") ? (
																<>
																	<tr>
																		<td style={{float:'left'}}>
																			{value.fields[index2].field_label}
																		</td>
																		<td style={{float:'right',}}>
																			{value.fields[index2].field_value}
																		</td>
																	</tr>
																</>
															) : (
																<>
																	{value.fields[index2].field_options.map((value3, index3) => {
																		return(
																			<React.Fragment key={index3}>
																				{value.fields[index2].field_options[index3].option_selected === true ? (
																					<>
																						<tr>
																							<td style={{float:'left'}}>
																								{value.fields[index2].field_label}
																							</td>
																							<td style={{float:'right', }}>
																								{value.fields[index2].field_options[index3].option_label}
																							</td>
																						</tr>
																					</>
																				) : (
																					<></>
																				)}
																			</React.Fragment>
																		)
																	})}
																</>
															)}
														</React.Fragment>
													)
												})}
											</tbody>
										</table>
									
								)
							})}
						</>
					)}
			</div>
		</>
	)
}
