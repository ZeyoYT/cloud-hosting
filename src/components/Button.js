"use client";

export default function Button({ children, onClick, classNameX }) {
    
    return (
        <button className={ classNameX ? classNameX : "bg-slate-500 px-4 p-2 rounded" } onClick={onClick}>{children}</button>
    );
}