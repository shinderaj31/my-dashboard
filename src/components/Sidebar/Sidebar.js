// File: src/components/Sidebar/Sidebar.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  BadgeDollarSign, 
  ChevronDown, 
  ChevronRight, 
  File, 
  LogOutIcon, 
  Package, 
  ReceiptPoundSterlingIcon, 
  Settings, 
  ShoppingCart, 
  Store, 
  Truck, 
  WrenchIcon 
} from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
  const [openDropdown, setOpenDropdown] = useState('');
  const navigate = useNavigate();  // Add this hook for navigation

  const menuItems = [
    {
      title: 'Supplier',
      icon: <Truck size={16} />,
      submenu: [
        { name: 'Registration', path: '/supplier/registration' },
        { name: 'View Suppliers', path: '/supplier/view' },
        { name: 'Edit Supplier', path: '/supplier/edit' },
        { name: 'Delete Supplier', path: '/supplier/delete' }
      ]
    },
    {
      title: 'Store',
      icon: <ShoppingCart size={16} />,
      submenu: [
        { name: 'Acceptance', path: '/store/acceptance' },
        { name: 'View Store', path: '/store/view' },
        { name: 'Update Store', path: '/store/update' },
        { name: 'Delete Store', path: '/store/delete' }
      ]
    },
    {
      title: 'Product',
      icon: <Package size={16} />,
      submenu: [
        { name: 'Add Product', path: '/product/add' },
        { name: 'View Product', path: '/product/view' },
        { name: 'Update Product', path: '/product/update' },
        { name: 'Delete Product', path: '/product/delete' }
      ]
    },
    {
      title: 'Material',
      icon: <WrenchIcon size={16} />,
      submenu: [
        { name: 'Add Material', path: '/material/add' },
        { name: 'View Material', path: '/material/view' },
        { name: 'Update Material', path: '/material/update' },
        { name: 'Delete Material', path: '/material/delete' }
      ]
    },
    {
      title: 'Material Requisition',
      icon: <File size={16} />,
      submenu: [
        { name: 'Add Material', path: '/material-requisition/add' },
        { name: 'View Material', path: '/material-requisition/view' },
        { name: 'Update Material', path: '/material-requisition/update' },
        { name: 'Delete Material', path: '/material-requisition/delete' }
      ]
    },
    {
      title: 'Dispatch Report',
      icon: <ReceiptPoundSterlingIcon size={16} />,
      submenu: [
        { name: 'Create Report', path: '/dispatch/create' },
        { name: 'View Reports', path: '/dispatch/view' },
        { name: 'Update Reports', path: '/dispatch/update' },
        { name: 'Delete Reports', path: '/dispatch/delete' }
      ]
    },
    {
      title: 'Purchase Requisition',
      icon: <BadgeDollarSign size={16} />,
      submenu: [
        { name: 'Create Requisition', path: '/purchase/create' },
        { name: 'View Requisition', path: '/purchase/view' },
        { name: 'Update Requisition', path: '/purchase/update' },
        { name: 'Delete Requisition', path: '/purchase/delete' }
      ]
    },
    {
      title: 'Logout',
      icon: <LogOutIcon size={16} />,
      onClick: () => {
        // Handle logout logic here
        console.log('Logging out...');
      }
    }
  ];

  const toggleDropdown = (title) => {
    setOpenDropdown(openDropdown === title ? '' : title);
  };

  const handleNavigate = (path) => {
    window.location.href = path; // This will cause a full page navigation

  };

  return (
    <aside className="sidebar">
      <nav>
        {menuItems.map((item) => (
          <div key={item.title} className="menu-item">
            <button
              onClick={() => {
                if (item.onClick) {
                  item.onClick();
                } else {
                  toggleDropdown(item.title);
                }
              }}
              className="menu-button"
            >
              <div className="menu-button-content">
                {item.icon}
                <span>{item.title}</span>
              </div>
              {item.submenu && (
                openDropdown === item.title ? (
                  <ChevronDown size={16} />
                ) : (
                  <ChevronRight size={16} />
                )
              )}
            </button>
            {item.submenu && openDropdown === item.title && (
              <div className="submenu">
                {item.submenu.map((subItem) => (
                  <button
                    key={subItem.name}
                    className="submenu-item"
                    onClick={() => handleNavigate(subItem.path)}
                  >
                    {subItem.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;