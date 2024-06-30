'use client'

import { Button } from '@/components/ui/button'
import axios from 'axios'
import useSWRMutation from 'swr/mutation'

const OpenButton = () => {
    const { trigger } = useSWRMutation('/api/openDoor', openDoor)
    async function openDoor(url: string) {
        await axios.get(url)
    }

    return <Button onClick={() => trigger()}>Open</Button>

}

export default OpenButton