import React from 'react'

class Events extends React.Component{

    render(){
        return(
                <iframe id='event_frame' name='event_frame' src="http://boxingontario.com/events/events-calendar/" width="100%" scrolling="yes"></iframe>
        )
    }
}

export default Events;