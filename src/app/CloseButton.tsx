'use client'

import { Button } from '@/components/ui/button'
import axios from 'axios'
import useSWRMutation from 'swr/mutation'

const CloseButton = () => {
    const { trigger } = useSWRMutation('/api/closeDoor', closeDoor)
    async function closeDoor(url: string) {
        await axios.get(url)
    }

    return <Button onClick={() => trigger()}>Close</Button>

}

export default CloseButton