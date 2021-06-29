import React from 'react'

function Header() {
    return (
        <div className="bg-white shadow-lg py-6 px-8 rounded-b-lg">
            <div className="float-left">
                <p className="font-bold">
                    <span className="text-orange-500">MODERN</span>
                    <span className="text-cyan-900">TODO</span>
                </p>
            </div>
            <div className="float-right">
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z" fill="#1040e2"/><path d="M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z"/></svg>
            </div>
            <div className="clearfix"></div>
        </div>
    )
}

export default Header
