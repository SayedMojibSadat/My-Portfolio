import React, { useContext, useState } from 'react';
import { IoMdSettings, IoMdClose } from 'react-icons/io';
import { ThemeContext } from '../themContext/ThemeContext';

const colors = [
    { id: 1, color: '#ef4444', hue: 0, name: 'Red' },       // Default
    { id: 2, color: '#3b82f6', hue: 217, name: 'Blue' },     // Blue
    { id: 3, color: '#22c55e', hue: 142, name: 'Green' },    // Green
    { id: 4, color: '#a855f7', hue: 271, name: 'Purple' },   // Purple
    { id: 5, color: '#f59e0b', hue: 45, name: 'Orange' },    // Orange
    { id: 6, color: '#06b6d4', hue: 190, name: 'Cyan' },     // Cyan
];

function ThemeSettings() {
    const { changeColor, themeColor } = useContext(ThemeContext);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`fixed right-0 top-[50%] z-50 flex items-center ${isOpen ? 'translate-x-0' : 'translate-x-38'} transition-transform duration-500`}>
            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className='bg-neutral-800 text-white p-3 rounded-l-lg shadow-lg border-y border-2 border-neutral-500'
            >
                <IoMdSettings size={24} className="animate-spin-slow" />
            </button>

            {/* Panel */}
            <div className='bg-neutral-900 border border-neutral-700 p-5 w-auto flex flex-col items-center rounded-l-bl-xl shadow-2xl h-auto'>
                <h3 className='text-white text-lg font-semibold mb-4 border-b border-neutral-700 pb-2'>Theme Colors</h3>
                <div className='grid grid-cols-2 gap-3'>
                    {colors.map((color) => (
                        <button
                            key={color.id}
                            onClick={() => changeColor(color.hue)}
                            className={`w-10 h-10 rounded-full cursor-pointer transition-transform hover:scale-110 flex items-center justify-center ${themeColor === color.hue ? 'ring-2 ring-white scale-110' : ''}`}
                            style={{ backgroundColor: color.color }}
                            title={color.name}
                        >
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ThemeSettings;