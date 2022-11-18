import React from 'react'

export default function UserDetails(props) {
    return (
        <div>
            <h4 key={props.user.id}>{props.user.name}</h4>
        </div>
    )
}