import Link from 'next/link';
import { redirect } from 'next/navigation';
import { FiSmartphone } from 'react-icons/fi';

export const PasswordForm = () => {

    return (
        <>
        <div className="w-full relative">
            <div className="w-full flex">
                <input
                    placeholder='Your email or mobile.'
                    className='input-primary'
                    type="text"
                    name='contact'
                    required 
                />
                <FiSmartphone 
                                size={20} 
                                className='input-primary-icon' 
                            />
            </div>
        </div>  
        <button
            className='w-80 !rounded-l-full !rounded-r-none ml-auto btn-primary mt-5' // Sobrescribe rounded-full con !important
            
            >
            <Link
                href="/"
                >
                Send
            </Link>
        </button> 
        </>
    );

    
    
}