import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from './ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LinkIcon, LogOut } from 'lucide-react'

const Header = () => {
    const navigate = useNavigate()

    const user = false;
    return <nav className='py-4 flex justify-between items-center'>
        <Link to='/'>
            <img src="/logo.png" className='h-22' />
        </Link>
        <div>
            {!user ?
                <Button onClick={() => navigate('/auth')}>Login</Button>
                : (
                    <DropdownMenu>
                        <DropdownMenuTrigger className='w-10 rounded-full overflow-hidden'><Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>DS</AvatarFallback>
                        </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>Dhruv Sharma</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                            <LinkIcon className='w-4 h-4 mr-2' />
                            <span>My Links</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className='text-red-500'>
                                <LogOut className='w-4 h-4 mr-2' />
                                <span>
                                    Logout
                                </span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                )
            }

        </div>
    </nav>
}

export default Header
