'use client'

import React from 'react'
import { Button } from '../../ui/button'

import { FcGoogle } from 'react-icons/fc'
import { signinWithGoogleAction } from '@/src/actions/user-actions/signinWithGoogleAction'

const GoogleButton = ({ children }: { children: React.ReactNode }) => {

    const handleSigninWithGoogle = async () => await signinWithGoogleAction()
    return (
        <Button onClick={handleSigninWithGoogle}
        className={`border-2 rounded border-hub-blue bg-hub-white text-hub-blue
            hover:bg-hub-blue hover:text-hub-white hover:border-hub-blue gap-1 h-9`}>
                <FcGoogle size={20} />
            {children}
        </Button>
    )
}

export default GoogleButton;
