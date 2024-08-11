import React, { useState } from 'react'
import axios from 'axios'
import Sidebar from '../components/Sidebar/Sidebar'
import Header from '../components/Header'

export default function Tenant() {
    return (
        <div>
            <Header />
            <Sidebar />
        </div>
    )
}