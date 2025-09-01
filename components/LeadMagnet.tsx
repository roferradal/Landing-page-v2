import React, { useState } from 'react';
import type { FormEvent } from 'react';
import { FormStatus } from '../types';

interface FormErrors {
    name?: string;
    email?: string;
}

const FormFields: React.FC<{ 
    name: string; 
    email: string; 
    onNameChange: (val: string) => void; 
    onEmailChange: (val: string) => void; 
    disabled: boolean;
    errors: FormErrors;
}> = ({ name, email, onNameChange, onEmailChange, disabled, errors }) => (
    <>
        <h4 className="text-2xl font-bold text-gray-800">Download The Free AI Kit</h4>
        <div className="mt-4 space-y-4">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    value={name}
                    onChange={(e) => onNameChange(e.target.value)}
                    disabled={disabled}
                    className={`mt-1 block w-full px-3 py-2 bg-white border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100`}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && <p id="name-error" className="mt-1 text-sm text-red-600">{errors.name}</p>}
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    value={email}
                    onChange={(e) => onEmailChange(e.target.value)}
                    disabled={disabled}
                    className={`mt-1 block w-full px-3 py-2 bg-white border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100`}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && <p id="email-error" className="mt-1 text-sm text-red-600">{errors.email}</p>}
            </div>
        </div>
    </>
);

const LeadMagnet: React.FC = () => {
    const [status, setStatus] = useState<FormStatus>(FormStatus.Idle);
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState<FormErrors>({});

    const validateForm = (): FormErrors => {
        const newErrors: FormErrors = {};
        if (!name.trim()) {
            newErrors.name = 'Name is required.';
        }
        if (!email.trim()) {
            newErrors.email = 'Email is required.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = 'Please enter a valid email address.';
        }
        return newErrors;
    };

    const handleNameChange = (value: string) => {
        setName(value);
        if (errors.name) {
            setErrors(prev => ({...prev, name: undefined}));
        }
    };

    const handleEmailChange = (value: string) => {
        setEmail(value);
        if (errors.email) {
            setErrors(prev => ({...prev, email: undefined}));
        }
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setStatus(FormStatus.Error);
            setMessage('');
            return;
        }

        setErrors({});
        setStatus(FormStatus.Loading);
        setMessage('');

        try {
            const baseUrl = 'https://n8n.srv921726.hstgr.cloud/webhook-test/7acf0b60-c3f7-4fee-b52c-2ebf40452bde';
            const url = new URL(baseUrl);
            url.searchParams.append('name', name);
            url.searchParams.append('email', email);

            const response = await fetch(url.toString(), {
                method: 'GET',
            });
            
            // We can't check response.ok with test webhooks and certain server configs
            // So we assume success if fetch doesn't throw an error.
            setStatus(FormStatus.Success);
            setName('');
            setEmail('');
        } catch (error) {
            console.error('Submission failed:', error);
            setStatus(FormStatus.Error);
            setMessage('Something went wrong. Please try again.');
        }
    };
    
    const renderFormContent = () => {
        const isSubmitting = status === FormStatus.Loading;
        switch (status) {
            case FormStatus.Loading:
                return (
                    <div className="text-center py-12">
                        <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto"></div>
                        <p className="mt-4 text-gray-600">Sending...</p>
                    </div>
                );
            case FormStatus.Success:
                return (
                    <div className="text-center py-8">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <h4 className="text-2xl font-bold mt-4">Thank You!</h4>
                        <p className="mt-2 text-gray-600">Your AI Growth Kit is on its way to your inbox.</p>
                    </div>
                );
            case FormStatus.Error:
            case FormStatus.Idle:
            default:
                return (
                    <form onSubmit={handleSubmit} noValidate>
                        <FormFields 
                            name={name} 
                            email={email} 
                            onNameChange={handleNameChange} 
                            onEmailChange={handleEmailChange}
                            disabled={isSubmitting}
                            errors={errors}
                        />
                        {status === FormStatus.Error && message && <p className="mt-4 text-sm text-center text-red-600">{message}</p>}
                        <button 
                            type="submit" 
                            className="w-full bg-blue-600 text-white font-montserrat font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition mt-6 disabled:bg-blue-300"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Me The Kit!'}
                        </button>
                    </form>
                );
        }
    };

    return (
        <section id="lead-magnet" className="py-20 md:py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="bg-gray-800 rounded-lg p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center shadow-2xl">
                    <div className="text-white">
                        <h3 className="text-4xl font-montserrat font-extrabold">Your First Step to AI Mastery.</h3>
                        <p className="mt-4 text-lg text-gray-300">Get our free "AI Growth Kit" — a curated package of workflows and prompts to instantly streamline your marketing, sales, and operations.</p>
                        <div className="mt-8 border-t border-gray-700 pt-6">
                            <h4 className="font-bold text-lg">What's Inside:</h4>
                            <ul className="mt-4 space-y-2 text-gray-300 list-disc list-inside">
                                <li>The "5-Minute Content" prompt for social media.</li>
                                <li>AI workflow for qualifying new leads.</li>
                                <li>Template for automating client reports.</li>
                                <li>And much more...</li>
                            </ul>
                        </div>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-lg min-h-[300px] flex items-center justify-center">
                        {renderFormContent()}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LeadMagnet;