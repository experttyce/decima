import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

const MENUITEMS = [
  {
    state: '/',
    name: 'HOME',
    type: 'link',
    icon: 'basic-accelerator'
  },
  {
    state: 'expense',
    name: 'EXPENSES',
    type: 'sub',
    icon: 'ecommerce-creditcard',
    children: [
      {
        state: 'newexpense',
        name: 'NEWEXPENSE'
      },
      {
        state: 'review',
        name: 'EXPREVIEW'
      }
    ]
  },
  {
    state: 'auth',
    name: 'AUTHENTICATION',
    type: 'sub',
    icon: 'basic-lock-open',
    children: [
      {
        state: 'signin',
        name: 'SIGNIN'
      },
      {
        state: 'signup',
        name: 'SIGNUP'
      },
      {
        state: 'forgot',
        name: 'FORGOT'
      },
      {
        state: 'lockscreen',
        name: 'LOCKSCREEN'
      },
    ]
  },
  {
    state: 'docs',
    name: 'DOCS',
    type: 'link',
    icon: 'basic-sheet-txt'
  }
];

@Injectable()
export class MenuService {
  getAll(): Menu[] {
    return MENUITEMS;
  }
}
