2 ways to State management :

[] One way is to create State from the data received.
~ So rendering the options will be done using the Data and selection and Estimate listing will be done using the State created from it.
~ Then any change done will be directly done on the state object.

[] Another way is to use the data itself as State.
~ So any change done of options selection which will take place in it.
~ And rendering of data will be done using it.
~ Selection of data 
~ Estimate listing of data.



[TODO] :

~ Putting an extra key(array) for Style Availability and Style Selectibility then condition checking for showing it.

~ At last to Transfer the selected data, that is, their Name and their Price, and if some other data, 
then will create an another Object, which will consist of Only the required Data in DB, 
from the Main State just to transfer the Data.



[information] :
~ If an only if you DON'T want an Option or Option Group to be Rendered for a particular Style, 
then Enter the following properties otherwise Not needed.
[opts_group_avail_style, option_avail_style]



~ Ways for Style wise or Size options selection...
1. You can create Multiple "field_value" properties for each Style or Size.


~ Here I have used the Data itself as State.
~ Will it Harm the Performance?
~ According to me, it should Not.
~ As the Rendering of each Tab is done when only it is in the VIEWPORT or selected.



# improvements
~ Style wise data rendered.
~ When the Style is changed, each time it will fetch Data of the new Style.
~ If for some options, there is dependability on Size or some other options then we can do that with the Prior way or with the new way, i.e. using Array.
~ If that option is selected by the User but when the Size is changed, then 
if that options is Not available, then which option to select and how?


