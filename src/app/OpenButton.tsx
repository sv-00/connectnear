'use client'

import { Button } from '@/components/ui/button'
import axios from 'axios'
import { toast } from "sonner"

const OpenButton = () => {
    async function openDoor() {
        'use server'
        const { status } = await axios.get('https://nfc.connectnear.me/L')
        if (status === 200) {
            toast.success('Door Closed')
        }
        else if (status === 502) {
            toast.error('Door Closing Failed')
        }
    }

    return <Button onClick={() => openDoor()}>Open</Button>

}

export default OpenButton