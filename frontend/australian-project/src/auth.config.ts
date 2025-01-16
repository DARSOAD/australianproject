import NextAuth, {type NextAuthConfig} from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { initialData } from './seed/seed';
import bcryptjs from 'bcryptjs'
 
export const authConfig: NextAuthConfig= {
    pages: {
        signIn: '/auth/login',
        newUser: '/auth/new-account',
    },
    providers: [
        Credentials({
            async authorize(credentials) {
              const parsedCredentials = z
                .object({ email: z.string().email(), password: z.string().min(6) })
                .safeParse(credentials);

                if(!parsedCredentials.success) return null

                const {email, password} = parsedCredentials.data;
                //Busca correo
                const user = initialData.users.find(element => element.email === email);
                if (!user) return null;
                // compara contraseñas encriptadas 
                if(!bcryptjs.compareSync(password, user.password)) return null
                
                //regresa el user sin password 
                const {password: _, ...rest} = user;
                

                return user;
            },
          }),
    ]
};

export const {signIn, signOut, auth} = NextAuth(authConfig)