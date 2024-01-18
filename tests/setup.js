import {afterEach} from 'vitest'
import {cleanup} from '@testing-library/react'
import '@testing-library/jestdom/vitest'


afterEach(()=>{
    cleanup()
})