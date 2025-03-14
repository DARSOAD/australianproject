'use client'
import { auth } from '@/auth.config'
import { redirect } from 'next/navigation';
import ProfileClient from './ProfileClient';
import { useEffect } from 'react';

export default async function ProfilePage() {


    

    // const session = await auth();

    // // if (!session?.user) {
    // //     // return redirect('/auth/login?returnTo=/perfil');
    // // }
    // Datos de usuario forzados en lugar de session.user
const mockUser = {
    username: "Diegoan",
    email: "diegoanrora@gmail.com",
    custom_attributes: {
        role: "admin"
    },
    last_login: "2025-01-29T12:34:56.789Z",
    UserCreateDate: "2025-01-29T12:34:56.789Z",
    UserLastModifiedDate: "2025-01-30T15:20:00.123Z",
    Enabled: true,
    UserStatus: "CONFIRMED"
};

    return <ProfileClient user={mockUser} />;
}
