import { notice, success, error } from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import './notification.css';

export const showMessageSameContactName = () => {
  notice({
    text: 'This name already exists',
    width: '370px',
  });
};

export const showMessageSameContactPhone = () => {
  notice({
    text: 'This phone already exists',
    width: '370px',
  });
};

export const showMessageAddContact = () => {
  success({
    text: 'Contact added successfully!',
    width: '370px',
  });
};

export const showMessageUpdateContact = () => {
  success({
    text: 'Contact successfully updated!',
    width: '370px',
  });
};

export const showMessageDeleteContact = () => {
  success({
    text: 'Contact successfully removed!',
    width: '370px',
  });
};

export const showMessageWelcomeUser = () => {
  success({
    text: 'Welcome to the phonebook!',
    width: '370px',
  });
};

export const showMessageRegisterUser = () => {
  success({
    text: 'You are successfully registered! To enter the phonebook, please sign in.',
    width: '370px',
  });
};

export const showMessageErrorRegisterUser = () => {
  error({
    text: 'This user already exists!',
    width: '370px',
  });
};

export const showMessageErrorLoginUser = () => {
  error({
    text: 'Incorrect email or password!',
    width: '370px',
  });
};
