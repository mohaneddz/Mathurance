import React, { useState, useCallback, useRef } from 'react';
import { IconUpload } from '@tabler/icons-react';

export default function DropfileSection() {
    const [isDraggingOver, setIsDraggingOver] = useState(false);
    const [files, setFiles] = useState([]);
    const fileInputRef = useRef(null);

    const handleDragOver = useCallback((event) => {
        event.preventDefault();
        setIsDraggingOver(true);
    }, []);

    const handleDragLeave = useCallback(() => {
        setIsDraggingOver(false);
    }, []);

    const handleDrop = useCallback((event) => {
        event.preventDefault();
        setIsDraggingOver(false);

        const droppedFiles = Array.from(event.dataTransfer.files);
        setFiles(droppedFiles);
        // In a real application, you would handle file uploads here
        console.log('Dropped files:', droppedFiles);
    }, []);

    const handleFileInputChange = (event) => {
        const selectedFiles = Array.from(event.target.files);
        setFiles(selectedFiles);
        // In a real application, you would handle file uploads here
        console.log('Selected files:', selectedFiles);
    };

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div
            className={`w-[40vw] relative rounded-md border-2 hover:scale-105 transition duration-200 hover:shadow-lg active:scale-100 border-dashed border-gray-300 bg-slate-100/40 p-6 md:p-8 lg:p-10 text-center cursor-pointer ${isDraggingOver ? 'border-primary bg-gray-50' : ''
                }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={handleButtonClick}
        >
            <input
                type="file"
                multiple
                className="hidden"
                ref={fileInputRef}
                onChange={handleFileInputChange}
                accept="image/png, image/jpeg, image/gif"
            />
            <div className="mx-auto">
                <IconUpload
                    size={48}
                    stroke={1.5}
                    color="#6366F1" // Indigo-500 from Tailwind config might be used
                    className="mx-auto"
                />
            </div>
            <p className="mt-2 text-lg font-semibold text-gray-900">
                Upload Files
            </p>
            <p className="mt-1 text-sm text-gray-500">
                PNG, JPG and GIF files are allowed
            </p>
            {isDraggingOver && (
                <div className="absolute inset-0 bg-blue-50 opacity-75 rounded-md z-10 flex justify-center items-center">
                    <p className="text-blue-700 font-semibold">Drop files here...</p>
                </div>
            )}
        </div>
    );
};