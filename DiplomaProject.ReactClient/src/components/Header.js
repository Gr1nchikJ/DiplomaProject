
import { Menubar } from 'primereact/menubar';
import React from 'react';

export default function Header() {
    const items = [
        {
            label: 'Головна',
            icon: 'pi pi-home',
            url: '/home'
        },
        {
            label: 'Список сертифікатів',
            icon: 'pi pi-search',
            url: '/library'
        },
        {
            label: 'Про нас',
            icon: 'pi pi-envelope'
        }
    ];
    
    return (
        <div className="card">
            <Menubar model={items} />
        </div>
    )
}
        