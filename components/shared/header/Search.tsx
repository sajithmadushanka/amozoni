import { Input } from '@/components/ui/input'
import { SelectContent } from '@/components/ui/select'
import { APP_NAME } from '@/lib/constants'
import { Select, SelectItem, SelectTrigger, SelectValue } from '@radix-ui/react-select'
import { SearchIcon } from 'lucide-react'
import React from 'react'
const categories = ["Men", "Women", "Kids"]
const Search = () => {
  return (
    <form action={'/search'} method='GET' className='flex items-stretch h-10'>
        <Select name='category'>
            <SelectTrigger className='w-auto h-full dark:border-gray-100 text-black border-r rounded-r-none rounded-l-md'>
                <SelectValue placeholder='All' />
            </SelectTrigger>
            <SelectContent position='popper' >
                <SelectItem value='all' >All</SelectItem>
                {
                    
                    categories.map((category) => (
                        <SelectItem key={category} value={category.toLowerCase()}>{category}</SelectItem>
                    ))
               
             
                }
            </SelectContent>
            
        </Select>
        <Input
            className='flex-1 rounded-none dark:border-gray-200 bg-gray-100 text-black text-base h-full'
            placeholder={`Search Site ${APP_NAME}`}
            name='q'
            type='search'
        />
        <button 
            type='submit'
            className='bg-primary text-primary-foreground text-black rounded-s-none rounded-e-md h-full px-3 py-2'
        >
            <SearchIcon className='h-6 w-6' />
        </button>
    </form>
  )
}

export default Search