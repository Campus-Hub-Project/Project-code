'use client'

import React, { memo } from 'react'

interface EventCardButtonProps {
    onClick: () => void,
    text: string,
    className: string,
}

const EventCardButton = memo(({ onClick, text, className }: EventCardButtonProps) => (
    <button className={`p-0 m-0 font-medium hover:border-b-2 ${className}`} onClick={onClick}>
        {text}
    </button>
))

export default EventCardButton
