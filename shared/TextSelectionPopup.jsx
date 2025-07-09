'use client'

import {useState, useEffect, useRef} from 'react';
import ChatModal from './ChatModal';

export default function TextSelectionPopup() {
    const [showPopup, setShowPopup] = useState(false);
    const [position, setPosition] = useState({top: 0, left: 0});
    const [selectedText, setSelectedText] = useState('');
    const [isChatOpen, setIsChatOpen] = useState(false);
    const popupRef = useRef(null);

    useEffect(() => {
        const handleSelection = () => {
            const selection = window.getSelection();
            if (selection && selection.toString().trim().length > 0) {
                setSelectedText(selection.toString());

                const range = selection.getRangeAt(0);
                const rect = range.getBoundingClientRect();

                setPosition({
                    top: rect.top + window.scrollY - 40,
                    left: rect.left + window.scrollX + rect.width / 2
                });

                setShowPopup(true);
            } else {
                setShowPopup(false);
            }
        };

        const handleClickOutside = (e) => {
            const target = e instanceof TouchEvent ? e.touches[0]?.target : e.target;
            if (popupRef.current && target) {
                if (!popupRef.current.contains(target)) {
                    setShowPopup(false);
                } else {
                    handlePopupClick(e);
                }
            }
        };

        document.addEventListener('mouseup', handleSelection);
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchend', handleSelection);
        document.addEventListener('touchstart', handleClickOutside);


        return () => {
            document.removeEventListener('mouseup', handleSelection);
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchend', handleSelection);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, []);

    const handlePopupClick = (e) => {
        e.preventDefault();
        e.stopPropagation();

        setTimeout(() => {
            setIsChatOpen(true);
            setShowPopup(false);
        }, 0);
    };

    return (
        <>
            {showPopup && (
                <div
                    ref={popupRef}
                    className="fixed bg-blue-500 text-white px-3 py-1 rounded-md shadow-lg cursor-pointer transform -translate-x-1/2 z-50"
                    style={{top: `${position.top}px`, left: `${position.left}px`}}
                    onClick={handlePopupClick}
                >
                    Подробнее
                </div>
            )}

            <ChatModal
                isOpen={isChatOpen}
                onClose={() => setIsChatOpen(false)}
                initialMessage={selectedText}
            />
        </>
    );
}