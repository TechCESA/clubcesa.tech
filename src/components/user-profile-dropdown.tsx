'use client';

import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

export default function UserProfileDropDown() {
  const { data: session } = useSession({ required: false });

  if (!session) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className='size-8'>
          <AvatarImage
            src={session.user?.image ?? ''}
            alt={session.user.name?.charAt(0) ?? ''}
          />
          <AvatarFallback>{session.user.name?.charAt(0) ?? ''}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{session.user.name}</DropdownMenuLabel>
        <DropdownMenuItem>{session.user.email}</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href='/me' className='cursor-pointer'>
            Profile
          </Link>
        </DropdownMenuItem>
        {session.user.role === 'admin' ? (
          <DropdownMenuItem asChild>
            <Link href='/dashboard' className='cursor-pointer'>
              Dashboard
            </Link>
          </DropdownMenuItem>
        ) : null}
        <DropdownMenuItem
          className='cursor-pointer text-destructive hover:bg-destructive hover:text-white'
          onClick={() => {
            signOut({ redirect: true, callbackUrl: '/' });
          }}
        >
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
